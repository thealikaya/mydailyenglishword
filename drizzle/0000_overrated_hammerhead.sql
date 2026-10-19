CREATE TABLE `subscriptions` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`subscription` text NOT NULL,
	`category` text NOT NULL,
	`level` text NOT NULL,
	`last_date` text,
	`claimed_at` text
);
