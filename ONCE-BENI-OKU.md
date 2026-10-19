# Bir Kelime — Kaynak dosyaları

19 Ekim 2026 tarihinde yayımlanan 2. sürümün kaynak paketidir.

- Site: https://her-gun-bir-kelime.qlikaya.chatgpt.site
- Kaynak commit: `9c530ed050f9394b72da6de28d3d2e2dc43aedab`
- Teknoloji: TypeScript, React 19, Vinext/Vite, Cloudflare Workers ve D1.
- Paket: yayımlanan sürümün Git'te izlenen bütün kaynakları, bu Türkçe açıklama, ilk gereksinim metni, ayrı JSON biçiminde kelime ve konu verileri.
- `node_modules`, derleme çıktıları, Git geçmişi, kişisel kayıtlar ve gizli anahtarlar dahil değildir.

## Nereden başlamalı?

| Dosya / klasör | İçerik |
| --- | --- |
| `app/word-app.tsx` | Ana ekran, konu seçimi, geçmiş, favoriler, öğrenilenler, istatistikler, ayarlar ve bildirim arayüzleri |
| `app/globals.css` | Mobil/masaüstü tasarım, renkler, açık/koyu tema |
| `app/page.tsx`, `app/layout.tsx` | Sayfa girişi, sunucu zamanı ve sayfa üst bilgileri |
| `lib/words.ts` | 34 konu, 128 kelime, seviye filtreleri, Türkiye tarihi ve günlük kelime algoritması |
| `app/api/time/route.ts` | Sunucu zamanı ve Europe/Istanbul takvim tarihi |
| `app/api/push/route.ts` | Bildirim aboneliği, abonelik silme ve test bildirimi |
| `app/api/dispatch/route.ts` | Günlük bildirimlerin sunucu tarafından gönderilmesi ve durum kontrolü |
| `lib/push.ts` | Web Push şifreleme ve VAPID imzası |
| `db/schema.ts`, `drizzle/` | Abonelik tablosu ve veritabanı migration dosyaları |
| `public/manifest.webmanifest` | PWA adı, simgeleri ve açılış seçenekleri |
| `public/sw.js`, `public/offline.html` | Service Worker, push olayları ve çevrimdışı ekran |
| `public/icon*` | Uygulama simgeleri |
| `tests/core.mjs` | Günlük kelime motoru ve Web Push kriptografi testleri |
| `package.json`, `pnpm-lock.yaml` | Bağımlılıklar, sürümler ve komutlar |
| `vite.config.ts`, `build/`, `scripts/`, `vendor/` | Derleme ve Sites çalışma ortamı entegrasyonu |
| `.openai/hosting.json` | Mevcut Site kimliği ve D1 bağlantı adı; gizli anahtar içermez |
| `docs/Kelimeler.json`, `docs/Konular.json` | Kaynak verilerin ayrıca dışa aktarılmış JSON kopyaları |
| `docs/Proje-Gereksinimleri.txt` | İlk iletilen proje talebi; mevcut sürümün her talebi eksiksiz karşıladığı anlamına gelmez |
| `README.md` | İngilizce mimari, güvenlik, zamanlama ve test notları |

## Yerel geliştirme

`package.json` içindeki Node.js alt sınırı `22.13.0`, paket yöneticisi sürümü `pnpm@11.25.0` olarak tanımlıdır. Kuracağın pnpm sürümünün desteklediği Node.js sürümünü kullan. Proje bu oturumda Node.js 24 ile derlendi.

Proje kökünde, uyumlu Node.js ve pnpm kurulu iken:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Temiz kopyada çalışma profili `portable` olur. Geliştirme komutu varsayılan olarak 5173 portunu kullanır. Bu dışa aktarılmış kopyada, kullanıcının bilgisayarındaki kurulum ayrıca çalıştırılıp doğrulanmadı.

Kontrol ve derleme:

```bash
node tests/core.mjs
pnpm exec tsc --noEmit
pnpm build
```

Ana arayüzdeki kişisel tercihler tarayıcıda saklanır. Bildirim özellikleri ise sunucu, D1, VAPID anahtarları ve kimlik doğrulama gerektirir; yalnız `pnpm dev` çalıştırmak gerçek telefon bildirimlerini kurmaz. Migration dosyaları yerel ve üretim veritabanlarına ayrı uygulanır. `pnpm db:generate` yeni şema değişiklikleri için migration üretir; veritabanına uygulama işlemi değildir.

## Bildirim altyapısını başka ortama taşımak

Bu proje Sites/Cloudflare Workers altyapısı için hazırlanmıştır. Dosyaları sıradan bir statik hosting klasörüne yüklemek, sunucu ve bildirim özelliklerini çalıştırmaz. Yeni ortamda şu parçalar kurulmalı veya uyarlanmalıdır:

1. Worker sunucu çalışma ortamı ve `DB` adlı D1 bağlantısı.
2. `drizzle/` içindeki veritabanı migration'larının uygulanması.
3. Sunucu ortam değişkenleri:
   - `VAPID_PRIVATE_JWK`: gizli özel anahtar.
   - `VAPID_PUBLIC_KEY`: tarayıcı aboneliğinde kullanılan açık anahtar.
   - `PUSH_SCHEDULE_ACTIVE`: kurulmuş zamanlamanın arayüzde gösterilen durumu. Tek başına görev oluşturmaz.
4. Kullanıcı kimlik doğrulaması. `/api/push` mevcut Sites kimlik başlığına dayanır. Başka platformda güvenilir bir oturum sistemi ve sunucu tarafı yetkilendirme uygulanmalıdır; istemciden gelen kullanıcı başlığına doğrudan güvenilmemelidir.
5. Türkiye saatiyle 00:05'te `/api/dispatch` uç noktasını çağıran korumalı bir zamanlayıcı.
6. Yeni alan adı için VAPID iletişim adresi, PWA kapsamı ve gerekli sunucu yapılandırmaları.

**Mevcut günlük görev kaynak ZIP'ine taşınmaz.** Sites'e bağlı ayrı bir bulut görevidir. Başka bir yerde yayımlarken yeniden kurulmalıdır. Mevcut sitede günlük görev etkin olarak kaydedilmiştir; ilk hedef çalışma zamanı 20 Ekim 2026 00:05, Europe/Istanbul'dur. Görevin kaydedilmiş olması, gerçek cihaz tesliminin doğrulandığı anlamına gelmez.

**Erişim sınırı:** Mevcut `/api/dispatch`, özel Sites erişim sınırına güvenir. Genel erişime açılmadan veya başka sunucuya taşınmadan önce bağımsız sunucu yetkilendirmesi eklenmelidir. Gizli anahtarlar bu pakette bulunmaz. Yeni anahtar üretmek mevcut cihaz aboneliklerinin yeniden alınmasını gerektirebilir.

## Günlük kelime mantığı ve kalıcılık

- Gün kimliği `Europe/Istanbul` saat diliminden hesaplanır.
- Açık uygulama sunucu zamanını alır, geçen zamanı monoton saatle izler; periyodik olarak ve yeniden görünür olduğunda eşitler.
- Aynı konu + seviye + Türkiye tarihi aynı kelimeyi verir.
- Sabit havuz içinde tüm kelimeler sırayla kullanılır, sonra döngü yeniden başlar. Öğrenme geçmişi seçim sırasını kişiye özel değiştirmez; geçmişin işlevi görüntülenen kelimeleri kaydetmektir.
- İlişkili konular ortak havuzlar kullanır. Başlangıç verisi 16 havuz × 8 kelimedir. Seviye filtresi havuzu küçültür: başlangıç ve orta düzeyde üçer, ileri düzeyde iki kelime vardır; içerik genişletilene kadar döngüler kısadır.
- Seviye değişikliği ayrı bir döngü açar. CEFR etiketleri öğrenme rehberidir; sertifikalı sınav sınıflandırması değildir.
- Kişisel geçmiş, favoriler, tercihler ve öğrenilen kelimeler `localStorage` içindedir. Cihazlar arasında eşitlenmez; tarayıcı verileri silinirse kaybolur.
- Bildirim abonelikleri ve son gönderim tarihi D1'de tutulur.
- Çevrimdışı açılış, son kaydedilen kelimeyi kendi tarihiyle gösterir.
- Türkçe okunuş yaklaşık bir yardımcıdır; IPA İngiliz İngilizcesini esas alır. Sesli okuma cihazın tarayıcı ses sentezini kullanır.

## Mevcut sınırlar ve doğrulama

- Özel bildirim saati seçimi henüz yoktur; ortak hedef saat 00:05'tir.
- Bildirimin kilit ekranında görünmesi kullanıcının cihaz izinlerine bağlıdır; teslimat ve zamanlama gecikebilir. Uygulama duvar kâğıdını değiştirmez.
- iPhone/iPad'de bildirim için desteklenen sistem ve ana ekrana eklenmiş uygulama gerekir.
- Kimlik başlıkları ve özel Site koruması, taşınacak yeni ortamda aynen varsayılamaz.
- Kaynak testleri: İstanbul gece yarısı geçişi, 136 konu/seviye döngüsü, 128 veri kaydının alanları, VAPID imzası, Web Push şifreleme/çözme ve push adresi denetimi başarılıdır.
- TypeScript kontrolü ve üretim derlemesi başarılıdır.
- Canlı sunucu zamanı, PWA dosyaları, abonelik sayacı ve günlük gönderim uç noktası kontrol edilmiştir. Gönderim kontrolü sıfır abonelikle yapılmıştır.
- Mobil görsel etkileşimler, fiziksel PWA kurulumu ve gerçek telefonda bildirim teslimi ayrıca doğrulanmamıştır.
