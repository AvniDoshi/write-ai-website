CREATE TABLE `people` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`institution` text,
	`role` text NOT NULL,
	`group` text NOT NULL,
	`bio` text,
	`photo_key` text,
	`sort_order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `resources` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	`resource_type` text NOT NULL,
	`audience` text NOT NULL,
	`publication_status` text DEFAULT 'draft' NOT NULL,
	`published_at` integer,
	`file_key` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `resources_slug_unique` ON `resources` (`slug`);--> statement-breakpoint
CREATE TABLE `tool_writing_stages` (
	`tool_id` integer NOT NULL,
	`writing_stage_id` integer NOT NULL,
	PRIMARY KEY(`tool_id`, `writing_stage_id`),
	FOREIGN KEY (`tool_id`) REFERENCES `tools`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`writing_stage_id`) REFERENCES `writing_stages`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tools` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`provider` text,
	`description` text NOT NULL,
	`tool_type` text NOT NULL,
	`cost_model` text,
	`infrastructure` text,
	`training_needs` text,
	`privacy_summary` text,
	`bias_fairness_summary` text,
	`evidence_summary` text,
	`source_url` text,
	`verification_status` text DEFAULT 'draft' NOT NULL,
	`verified_at` integer,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tools_slug_unique` ON `tools` (`slug`);--> statement-breakpoint
CREATE TABLE `writing_stages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `writing_stages_name_unique` ON `writing_stages` (`name`);