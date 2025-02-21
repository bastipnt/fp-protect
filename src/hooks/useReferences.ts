import { useRef } from "react";
import refs from "../references.json";

export type ReferenceName = keyof typeof refs;

export type References = {
  name: ReferenceName;
  block?: string;
}[];

export const useReferences = () => {
  const references = useRef<References>([]);

  const getReferencesForBlock = (block: string) => {
    return references.current.filter((reference) => reference.block === block);
  };

  return { references, getReferencesForBlock };
};
