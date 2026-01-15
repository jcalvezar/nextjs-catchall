import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export type CloneKey = "clon1" | "clon2" | "clon3";

export const CLONE_REGISTRY: Record<CloneKey, ComponentType> = {
  clon1: dynamic(() => import("../../components/JcaContentClone1")),
  clon2: dynamic(() => import("../../components/JcaContentClone2")),
  clon3: dynamic(() => import("../../components/JcaContentClone3")),
};
