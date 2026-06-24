/**
 * The hand-authored visual layer (the acknowledged boundary). This file is allowed to name
 * components, because it supplies their React visuals. The adapter (`buildComponentApi`,
 * `buildCatalog`) names no components and derives the vocabulary + schema from the catalog.
 *
 * `reuseBasic`: components whose visual is the published Basic Catalog implementation.
 * `custom`: components implemented in React here (Table, Badge, ... land in P4/P5).
 *
 * A catalog component absent from both still enters the Catalog and renders the visible
 * "unimplemented" placeholder.
 */
import type { Registry } from "./buildCatalog";

export const registry: Registry = {
  reuseBasic: new Set(["Button", "Card", "Text", "TextField", "Column", "Row", "Modal"]),
  custom: {},
};
