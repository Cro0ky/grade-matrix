import type { RootState } from "@/shared/store/store.ts";

export const selectSoftSkills = (state: RootState) => state.skills.soft_skills;
export const selectHardSkills = (state: RootState) => state.skills.hard_skills;
