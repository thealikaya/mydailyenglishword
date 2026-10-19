export const categories = [
['daily','Günlük Hayat','☀️','life'],['work','İş Hayatı','💼','work'],['tech','Teknoloji','💻','tech'],['software','Yazılım','⌘','tech'],['engineering','Mühendislik','⚙️','industry'],['travel','Seyahat','✈️','travel'],['shopping','Alışveriş','🛍️','shopping'],['home','Ev','🏡','life'],['family','Aile','🤍','people'],['relations','İnsan İlişkileri','💬','people'],['feelings','Duygular','☁️','people'],['health','Sağlık','🌿','health'],['fitness','Fitness','🏋️','fitness'],['sport','Spor','🏅','sport'],['football','Futbol','⚽','sport'],['basketball','Basketbol','🏀','sport'],['education','Eğitim','📚','education'],['academic','Akademik İngilizce','🎓','education'],['finance','Finans','↗','finance'],['economy','Ekonomi','📊','finance'],['business','İşletme','🏢','work'],['marketing','Pazarlama','📣','marketing'],['hr','İnsan Kaynakları','👥','work'],['production','Üretim','🏭','industry'],['quality','Kalite','✓','industry'],['automotive','Otomotiv','🚗','auto'],['food','Yiyecek & İçecek','🍋','food'],['nature','Doğa','🌳','nature'],['animals','Hayvanlar','🐾','nature'],['city','Şehir','🏙️','travel'],['airport','Havalimanı','🛫','travel'],['hotel','Otel','🛎️','travel'],['restaurant','Restoran','🍽️','food'],['common','En Çok Kullanılanlar','✨','life']
].map(([id,name,icon,pack])=>({id,name,icon,pack}));
export type Word={id:string;word:string;turkishMeaning:string;pronunciationTR:string;ipa:string;partOfSpeech:string;cefrLevel:string;category:string;exampleSentenceEN:string;exampleSentenceTR:string;synonyms:string[];antonyms:string[];audioSource:string};
// Editorial seed. CEFR groupings are learning guidance, not exam certification.
const packs:Record<string,string>= {
life:`home|Ev|Houm|həʊm|Noun · İsim|A1|I am at home.|Evdeyim.
room|Oda|Ruum|ruːm|Noun · İsim|A1|This room is bright.|Bu oda aydınlık.
clean|Temiz|Kliin|kliːn|Adjective · Sıfat|A2|The kitchen is clean.|Mutfak temiz.
improve|Geliştirmek, iyileştirmek|İmpruuv|ɪmˈpruːv|Verb · Fiil|B1|I want to improve my English.|İngilizcemi geliştirmek istiyorum.
routine|Rutin|Ruutiin|ruːˈtiːn|Noun · İsim|B1|Reading is part of my daily routine.|Okumak günlük rutinimin bir parçası.
convenient|Kullanışlı, elverişli|Kınviinyınt|kənˈviːniənt|Adjective · Sıfat|B2|This is a convenient place to meet.|Burası buluşmak için elverişli bir yer.
meticulous|Titiz|Mıtikyulıs|məˈtɪkjələs|Adjective · Sıfat|C1|She is meticulous about cleaning.|Temizlik konusunda titizdir.
clutter|Dağınıklık, eşya yığını|Klatır|ˈklʌtə|Noun · İsim|C1|Clear the clutter from your desk.|Masandaki dağınıklığı toparla.`,
work:`team|Ekip|Tiim|tiːm|Noun · İsim|A1|Our team is ready.|Ekibimiz hazır.
job|İş|Cob|dʒɒb|Noun · İsim|A1|She has a new job.|Onun yeni bir işi var.
meeting|Toplantı|Miiting|ˈmiːtɪŋ|Noun · İsim|A2|The meeting starts at nine.|Toplantı dokuzda başlıyor.
achieve|Başarmak, ulaşmak|Eçiiv|əˈtʃiːv|Verb · Fiil|B1|We want to achieve our goals.|Hedeflerimize ulaşmak istiyoruz.
deadline|Son tarih|Dedlayn|ˈdedlaɪn|Noun · İsim|B2|The deadline is Friday.|Son tarih cuma.
recruit|İşe almak|Rikruut|rɪˈkruːt|Verb · Fiil|B2|We need to recruit an engineer.|Bir mühendis işe almamız gerekiyor.
delegate|Yetki veya görev devretmek|Delıgeyt|ˈdelɪɡeɪt|Verb · Fiil|C1|Managers need to delegate tasks.|Yöneticilerin görev devretmesi gerekir.
accountability|Hesap verebilirlik|Ikauntıbility|əˌkaʊntəˈbɪləti|Noun · İsim|C1|Clear roles improve accountability.|Net roller hesap verebilirliği artırır.`,
tech:`screen|Ekran|Skriin|skriːn|Noun · İsim|A1|The screen is bright.|Ekran parlak.
file|Dosya|Fayl|faɪl|Noun · İsim|A2|Save the file.|Dosyayı kaydet.
password|Parola|Paasvörd|ˈpɑːswɜːd|Noun · İsim|A2|Choose a strong password.|Güçlü bir parola seç.
update|Güncellemek|Apdeyt|ʌpˈdeɪt|Verb · Fiil|B1|Please update the software.|Lütfen yazılımı güncelle.
debug|Hata ayıklamak|Diibag|ˌdiːˈbʌɡ|Verb · Fiil|B2|We need to debug the application.|Uygulamada hata ayıklamamız gerekiyor.
encrypt|Şifrelemek|İnkript|ɪnˈkrɪpt|Verb · Fiil|B2|The system encrypts your data.|Sistem verilerinizi şifreler.
latency|Gecikme süresi|Leytınsi|ˈleɪtənsi|Noun · İsim|C1|High latency can slow down the app.|Yüksek gecikme süresi uygulamayı yavaşlatabilir.
scalability|Ölçeklenebilirlik|Skeylıbilıti|ˌskeɪləˈbɪləti|Noun · İsim|C1|Scalability matters as demand grows.|Talep arttıkça ölçeklenebilirlik önem kazanır.`,
industry:`check|Kontrol etmek|Çek|tʃek|Verb · Fiil|A1|Check the machine before use.|Kullanmadan önce makineyi kontrol et.
tool|Alet|Tuul|tuːl|Noun · İsim|A2|Use the right tool.|Doğru aleti kullan.
measure|Ölçmek|Mejır|ˈmeʒə|Verb · Fiil|A2|Measure the length carefully.|Uzunluğu dikkatlice ölç.
defect|Kusur|Diifekt|ˈdiːfekt|Noun · İsim|B2|We found a defect in the part.|Parçada bir kusur bulduk.
inspect|İncelemek, denetlemek|İnspekt|ɪnˈspekt|Verb · Fiil|B1|Inspect each part before assembly.|Montajdan önce her parçayı incele.
efficient|Verimli|İfişınt|ɪˈfɪʃənt|Adjective · Sıfat|B2|This process is more efficient.|Bu süreç daha verimli.
traceability|İzlenebilirlik|Treysıbilıti|ˌtreɪsəˈbɪləti|Noun · İsim|C1|Batch numbers ensure traceability.|Parti numaraları izlenebilirliği sağlar.
tolerance|Tolerans, izin verilen sapma|Tolırıns|ˈtɒlərəns|Noun · İsim|C1|The part is within tolerance.|Parça tolerans sınırları içindedir.`,
travel:`ticket|Bilet|Tikit|ˈtɪkɪt|Noun · İsim|A1|I have a return ticket.|Gidiş dönüş biletim var.
arrive|Varmak|Irayv|əˈraɪv|Verb · Fiil|A1|We arrive at noon.|Öğlen varıyoruz.
luggage|Bagaj|Lagıc|ˈlʌɡɪdʒ|Noun · İsim|A2|Where is my luggage?|Bagajım nerede?
destination|Varış noktası|Destıneyşın|ˌdestɪˈneɪʃən|Noun · İsim|B1|What is your destination?|Varış noktanız neresi?
reservation|Rezervasyon|Rezırveyşın|ˌrezəˈveɪʃən|Noun · İsim|B1|I have a reservation.|Rezervasyonum var.
accommodation|Konaklama|Ikamıdeyşın|əˌkɒməˈdeɪʃən|Noun · İsim|B2|We need accommodation for two nights.|İki gecelik konaklamaya ihtiyacımız var.
itinerary|Seyahat programı|Aytinıreri|aɪˈtɪnərəri|Noun · İsim|C1|Our itinerary includes three cities.|Seyahat programımız üç şehri kapsıyor.
complimentary|Ücretsiz sunulan|Komplımentıri|ˌkɒmplɪˈmentəri|Adjective · Sıfat|C1|The hotel offers complimentary breakfast.|Otel ücretsiz kahvaltı sunuyor.`,
shopping:`price|Fiyat|Prays|praɪs|Noun · İsim|A1|What is the price?|Fiyatı ne kadar?
buy|Satın almak|Bay|baɪ|Verb · Fiil|A1|I want to buy this bag.|Bu çantayı satın almak istiyorum.
size|Beden, boyut|Sayz|saɪz|Noun · İsim|A2|Do you have a smaller size?|Daha küçük bir bedeniniz var mı?
receipt|Fiş, makbuz|Risiit|rɪˈsiːt|Noun · İsim|B1|Please keep your receipt.|Lütfen fişinizi saklayın.
refund|Para iadesi|Riifand|ˈriːfʌnd|Noun · İsim|B1|I would like a refund.|Para iadesi istiyorum.
affordable|Uygun fiyatlı|Ifordıbıl|əˈfɔːdəbəl|Adjective · Sıfat|B2|We need an affordable option.|Uygun fiyatlı bir seçeneğe ihtiyacımız var.
warranty|Garanti|Vorınti|ˈwɒrənti|Noun · İsim|C1|The product has a two-year warranty.|Ürünün iki yıl garantisi var.
counterfeit|Sahte, taklit|Kauntırfit|ˈkaʊntəfɪt|Adjective · Sıfat|C1|The shop was selling counterfeit goods.|Mağaza sahte ürünler satıyordu.`,
people:`happy|Mutlu|Hepi|ˈhæpi|Adjective · Sıfat|A1|I am happy to see you.|Seni gördüğüme mutluyum.
friend|Arkadaş|Frend|frend|Noun · İsim|A1|She is my best friend.|O benim en iyi arkadaşım.
care|Önemsemek|Keır|keə|Verb · Fiil|A2|I care about you.|Seni önemsiyorum.
trust|Güvenmek|Trast|trʌst|Verb · Fiil|B1|I trust my family.|Aileme güveniyorum.
boundary|Sınır|Baundıri|ˈbaʊndəri|Noun · İsim|B2|It is important to respect personal boundaries.|Kişisel sınırlara saygı göstermek önemlidir.
supportive|Destekleyici|Sıportiv|səˈpɔːtɪv|Adjective · Sıfat|B2|My friends are very supportive.|Arkadaşlarım çok destekleyici.
resentment|Gücenme, içerleme|Rizentmınt|rɪˈzentmənt|Noun · İsim|C1|Unspoken problems can lead to resentment.|Konuşulmayan sorunlar içerlemeye yol açabilir.
reciprocity|Karşılıklılık|Resıprosıti|ˌresɪˈprɒsəti|Noun · İsim|C1|Healthy relationships need reciprocity.|Sağlıklı ilişkiler karşılıklılık gerektirir.`,
health:`sleep|Uyumak|Sliip|sliːp|Verb · Fiil|A1|I sleep for eight hours.|Sekiz saat uyurum.
water|Su|Votır|ˈwɔːtə|Noun · İsim|A1|Drink some water.|Biraz su iç.
rest|Dinlenmek|Rest|rest|Verb · Fiil|A2|You need to rest.|Dinlenmen gerekiyor.
recover|İyileşmek, toparlanmak|Rikavır|rɪˈkʌvə|Verb · Fiil|B1|It takes time to recover.|İyileşmek zaman alır.
symptom|Belirti|Simptım|ˈsɪmptəm|Noun · İsim|B2|Tell the doctor about your symptoms.|Doktora belirtilerini anlat.
prevention|Önleme|Privenşın|prɪˈvenʃən|Noun · İsim|B2|Prevention is an important part of healthcare.|Önleme, sağlık hizmetlerinin önemli bir parçasıdır.
rehabilitation|Rehabilitasyon|Riiıbilıteyşın|ˌriːəˌbɪlɪˈteɪʃən|Noun · İsim|C1|Rehabilitation can support recovery.|Rehabilitasyon iyileşmeyi destekleyebilir.
resilience|Zorluklardan sonra toparlanma gücü|Rizilyıns|rɪˈzɪliəns|Noun · İsim|C1|Support can help build resilience.|Destek, toparlanma gücünü geliştirmeye yardımcı olabilir.`,
fitness:`walk|Yürümek|Vok|wɔːk|Verb · Fiil|A1|I walk every morning.|Her sabah yürürüm.
strong|Güçlü|Strong|strɒŋ|Adjective · Sıfat|A1|Her legs are strong.|Bacakları güçlü.
exercise|Egzersiz|Eksırsayz|ˈeksəsaɪz|Noun · İsim|A2|Regular exercise is part of my routine.|Düzenli egzersiz rutinimin bir parçası.
strength|Kuvvet, güç|Streng(t)h|streŋθ|Noun · İsim|B1|Training can improve your strength.|Antrenman kuvvetini artırabilir.
endurance|Dayanıklılık|İndyurıns|ɪnˈdjʊərəns|Noun · İsim|B2|Running can build endurance.|Koşmak dayanıklılığı geliştirebilir.
repetition|Tekrar|Repıtişın|ˌrepəˈtɪʃən|Noun · İsim|B2|Do ten repetitions of this exercise.|Bu egzersizi on tekrar yap.
hypertrophy|Kas veya dokuda büyüme|Haypörtrofi|haɪˈpɜːtrəfi|Noun · İsim|C1|Muscle hypertrophy develops over time.|Kas büyümesi zaman içinde gelişir.
exertion|Fiziksel efor|İgzörşın|ɪɡˈzɜːʃən|Noun · İsim|C1|The task requires physical exertion.|Bu iş fiziksel efor gerektirir.`,
sport:`ball|Top|Bol|bɔːl|Noun · İsim|A1|Pass the ball.|Topu pas ver.
win|Kazanmak|Vin|wɪn|Verb · Fiil|A1|We want to win the match.|Maçı kazanmak istiyoruz.
player|Oyuncu|Pleyır|ˈpleɪə|Noun · İsim|A2|Each player has a role.|Her oyuncunun bir rolü var.
defend|Savunmak|Difend|dɪˈfend|Verb · Fiil|B1|The team needs to defend better.|Takımın daha iyi savunma yapması gerekiyor.
opponent|Rakip|Ipounınt|əˈpəʊnənt|Noun · İsim|B2|Respect your opponent.|Rakibine saygı göster.
referee|Hakem|Refırii|ˌrefəˈriː|Noun · İsim|B1|The referee stopped the game.|Hakem oyunu durdurdu.
interception|Pasın kesilmesi|İntırsepşın|ˌɪntəˈsepʃən|Noun · İsim|C1|A quick interception stopped the attack.|Hızlı bir pas kesme hücumu durdurdu.
versatile|Çok yönlü|Vörsıtayl|ˈvɜːsətaɪl|Adjective · Sıfat|C1|She is a versatile player.|O çok yönlü bir oyuncu.`,
education:`learn|Öğrenmek|Lörn|lɜːn|Verb · Fiil|A1|I learn a new word every day.|Her gün yeni bir kelime öğreniyorum.
read|Okumak|Riid|riːd|Verb · Fiil|A1|Read the first paragraph.|İlk paragrafı oku.
question|Soru|Kvesçın|ˈkwestʃən|Noun · İsim|A1|That is a good question.|Bu iyi bir soru.
evidence|Kanıt|Evıdıns|ˈevɪdəns|Noun · İsim|B2|We need more evidence.|Daha fazla kanıta ihtiyacımız var.
research|Araştırma|Risörç|rɪˈsɜːtʃ|Noun · İsim|B1|The research took two years.|Araştırma iki yıl sürdü.
analyse|Analiz etmek|Enılayz|ˈænəlaɪz|Verb · Fiil|B2|Analyse the results carefully.|Sonuçları dikkatlice analiz et.
hypothesis|Hipotez|Haypotısis|haɪˈpɒθəsɪs|Noun · İsim|C1|The study tests a new hypothesis.|Çalışma yeni bir hipotezi test ediyor.
methodology|Yöntem bilimi, yöntem yaklaşımı|Metıdolıci|ˌmeθəˈdɒlədʒi|Noun · İsim|C1|The report explains the methodology.|Rapor, kullanılan yöntem yaklaşımını açıklıyor.`,
finance:`money|Para|Mani|ˈmʌni|Noun · İsim|A1|We need to save money.|Para biriktirmemiz gerekiyor.
cost|Maliyet|Kost|kɒst|Noun · İsim|A2|What is the total cost?|Toplam maliyet nedir?
save|Biriktirmek, tasarruf etmek|Seyv|seɪv|Verb · Fiil|A2|I save a little every month.|Her ay biraz para biriktiririm.
budget|Bütçe|Bacıt|ˈbʌdʒɪt|Noun · İsim|B1|We have a limited budget.|Sınırlı bir bütçemiz var.
revenue|Gelir, hasılat|Revınyuu|ˈrevənjuː|Noun · İsim|B2|Revenue increased this year.|Gelir bu yıl arttı.
inflation|Enflasyon|İnfleyşın|ɪnˈfleɪʃən|Noun · İsim|B2|Inflation affects purchasing power.|Enflasyon satın alma gücünü etkiler.
liquidity|Likidite|Likvidıti|lɪˈkwɪdəti|Noun · İsim|C1|The company needs more liquidity.|Şirketin daha fazla likiditeye ihtiyacı var.
volatility|Oynaklık|Volıtilıti|ˌvɒləˈtɪləti|Noun · İsim|C1|Market volatility can increase risk.|Piyasa oynaklığı riski artırabilir.`,
marketing:`sell|Satmak|Sel|sel|Verb · Fiil|A1|We sell books online.|İnternetten kitap satıyoruz.
shop|Mağaza|Şop|ʃɒp|Noun · İsim|A1|The shop opens at nine.|Mağaza dokuzda açılıyor.
customer|Müşteri|Kastımır|ˈkʌstəmə|Noun · İsim|A2|Listen to your customers.|Müşterilerini dinle.
brand|Marka|Brend|brænd|Noun · İsim|B1|The brand has a new logo.|Markanın yeni bir logosu var.
audience|Hedef kitle, izleyici|Odiyıns|ˈɔːdiəns|Noun · İsim|B2|Know your target audience.|Hedef kitleni tanı.
campaign|Kampanya|Kempeyn|kæmˈpeɪn|Noun · İsim|B1|The campaign starts next week.|Kampanya gelecek hafta başlıyor.
retention|Elde tutma|Ritenşın|rɪˈtenʃən|Noun · İsim|C1|Good service improves customer retention.|İyi hizmet müşteriyi elde tutmayı artırır.
segmentation|Bölümlendirme|Segmınteyşın|ˌseɡmənˈteɪʃən|Noun · İsim|C1|Segmentation helps us understand customers.|Bölümlendirme müşterileri anlamamıza yardımcı olur.`,
auto:`car|Araba|Kaar|kɑː|Noun · İsim|A1|The car is outside.|Araba dışarıda.
wheel|Tekerlek|Viil|wiːl|Noun · İsim|A2|The wheel needs repair.|Tekerleğin onarılması gerekiyor.
drive|Araba sürmek|Drayv|draɪv|Verb · Fiil|A1|I drive to work.|İşe arabayla giderim.
brake|Fren|Breyk|breɪk|Noun · İsim|B1|Check the brakes regularly.|Frenleri düzenli olarak kontrol et.
engine|Motor|Encin|ˈendʒɪn|Noun · İsim|B1|Turn off the engine.|Motoru kapat.
maintenance|Bakım|Meyntınıns|ˈmeɪntənəns|Noun · İsim|B2|Regular maintenance is important.|Düzenli bakım önemlidir.
transmission|Şanzıman|Trenzmişın|trænzˈmɪʃən|Noun · İsim|C1|This car has a manual transmission.|Bu arabanın manuel şanzımanı var.
combustion|Yanma|Kımbasçın|kəmˈbʌstʃən|Noun · İsim|C1|Combustion releases energy.|Yanma enerji açığa çıkarır.`,
food:`meal|Öğün, yemek|Miil|miːl|Noun · İsim|A1|Enjoy your meal.|Afiyet olsun.
fresh|Taze|Freş|freʃ|Adjective · Sıfat|A2|The bread is fresh.|Ekmek taze.
order|Sipariş vermek|Ordır|ˈɔːdə|Verb · Fiil|A1|I would like to order soup.|Çorba sipariş etmek istiyorum.
ingredient|Malzeme, bileşen|İngriidiyınt|ɪnˈɡriːdiənt|Noun · İsim|B1|What ingredients do we need?|Hangi malzemelere ihtiyacımız var?
portion|Porsiyon|Porşın|ˈpɔːʃən|Noun · İsim|B2|I would like a small portion.|Küçük bir porsiyon istiyorum.
flavour|Lezzet, tat|Fleyvır|ˈfleɪvə|Noun · İsim|B1|Lemon adds flavour to the dish.|Limon yemeğe lezzet katar.
fermentation|Fermantasyon|Förmınteyşın|ˌfɜːmenˈteɪʃən|Noun · İsim|C1|Fermentation changes the flavour.|Fermantasyon tadı değiştirir.
culinary|Yemek pişirmeyle ilgili|Kalınıri|ˈkʌlɪnəri|Adjective · Sıfat|C1|She wants to improve her culinary skills.|Yemek pişirme becerilerini geliştirmek istiyor.`,
nature:`bird|Kuş|Börd|bɜːd|Noun · İsim|A1|A bird is singing.|Bir kuş ötüyor.
tree|Ağaç|Trii|triː|Noun · İsim|A1|The bird is in the tree.|Kuş ağaçta.
wild|Vahşi, yabani|Vayld|waɪld|Adjective · Sıfat|A2|Do not feed wild animals.|Yabani hayvanları beslemeyin.
habitat|Yaşam alanı|Hebitet|ˈhæbɪtæt|Noun · İsim|B2|The forest is their natural habitat.|Orman onların doğal yaşam alanıdır.
species|Tür|Spiişiiz|ˈspiːʃiːz|Noun · İsim|B2|Many species live here.|Burada birçok tür yaşıyor.
protect|Korumak|Prıtekt|prəˈtekt|Verb · Fiil|B1|We must protect wildlife.|Yaban hayatını korumalıyız.
biodiversity|Biyoçeşitlilik|Bayoudayvörsıti|ˌbaɪəʊdaɪˈvɜːsəti|Noun · İsim|C1|Forests support biodiversity.|Ormanlar biyoçeşitliliği destekler.
conservation|Doğayı koruma|Konsırveyşın|ˌkɒnsəˈveɪʃən|Noun · İsim|C1|Conservation protects endangered species.|Doğayı koruma çalışmaları nesli tehlikedeki türleri korur.`
};
export const words:Word[]=Object.entries(packs).flatMap(([category,text])=>text.split('\n').map(line=>{const [word,turkishMeaning,pronunciationTR,ipa,partOfSpeech,cefrLevel,exampleSentenceEN,exampleSentenceTR]=line.split('|');return {id:category+'-'+word,word,turkishMeaning,pronunciationTR,ipa:'/'+ipa+'/',partOfSpeech,cefrLevel,category,exampleSentenceEN,exampleSentenceTR,synonyms:word==='improve'?['develop','enhance']:[],antonyms:word==='improve'?['worsen']:[],audioSource:'speechSynthesis'};}));
export function istanbulDate(now=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Istanbul',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);}
export function dayNumber(date:string){return Math.floor(Date.parse(date+'T00:00:00Z')/86400000);}
export function pool(category:string,level:string){const pack=categories.find(c=>c.id===category)?.pack||'life';return words.filter(w=>w.category===pack&&(level==='all'||w.cefrLevel.startsWith(level)));}
export function dailyWord(category:string,level:string,date:string){const p=pool(category,level);const offset=[...category].reduce((n,c)=>n+c.charCodeAt(0),0);return p[((dayNumber(date)+offset)%p.length+p.length)%p.length];}
