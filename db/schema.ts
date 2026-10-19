import {sqliteTable,text} from 'drizzle-orm/sqlite-core';
export const subscriptions=sqliteTable('subscriptions',{id:text('id').primaryKey(),owner:text('owner').notNull(),subscription:text('subscription').notNull(),category:text('category').notNull(),level:text('level').notNull(),lastDate:text('last_date'),claimedAt:text('claimed_at')});
