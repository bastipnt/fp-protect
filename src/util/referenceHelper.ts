import references from "../references.json";

export type ReferenceId = keyof typeof references;

export const getIndex = (refId: ReferenceId) =>
  Object.keys(references).findIndex((id) => id === refId) + 1;
