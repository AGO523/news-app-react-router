CREATE TABLE `news` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` integer DEFAULT 0,
	`email` text NOT NULL,
	`topic` text NOT NULL,
	`optionalText` text,
	`progressStatus` text DEFAULT 'pending' NOT NULL,
	`subscriptionStatus` text DEFAULT 'subscribed' NOT NULL,
	`createdAt` integer NOT NULL
);
