import type { AstroComponentFactory } from "astro/runtime/server/index.js";
export interface SkillCardProp {
  logo: AstroComponentFactory;
  title: string;
  rating: number;
}
