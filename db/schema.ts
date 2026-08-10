import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tools = sqliteTable("tools", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  provider: text("provider"),
  description: text("description").notNull(),
  toolType: text("tool_type").notNull(),
  costModel: text("cost_model"),
  infrastructure: text("infrastructure"),
  trainingNeeds: text("training_needs"),
  privacySummary: text("privacy_summary"),
  biasFairnessSummary: text("bias_fairness_summary"),
  evidenceSummary: text("evidence_summary"),
  sourceUrl: text("source_url"),
  verificationStatus: text("verification_status").notNull().default("draft"),
  verifiedAt: integer("verified_at", { mode: "timestamp" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const writingStages = sqliteTable("writing_stages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
});

export const toolWritingStages = sqliteTable("tool_writing_stages", {
  toolId: integer("tool_id").notNull().references(() => tools.id, { onDelete: "cascade" }),
  writingStageId: integer("writing_stage_id").notNull().references(() => writingStages.id, { onDelete: "cascade" }),
}, (table) => [primaryKey({ columns: [table.toolId, table.writingStageId] })]);

export const resources = sqliteTable("resources", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  resourceType: text("resource_type").notNull(),
  audience: text("audience").notNull(),
  publicationStatus: text("publication_status").notNull().default("draft"),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  fileKey: text("file_key"),
});

export const people = sqliteTable("people", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  institution: text("institution"),
  role: text("role").notNull(),
  group: text("group").notNull(),
  bio: text("bio"),
  photoKey: text("photo_key"),
  sortOrder: integer("sort_order").notNull().default(0),
});
