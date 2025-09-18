import { hardSkills, softSkills } from "@/pages/skills/skills.const.ts";
import type { ICategory } from "@/shared/types/types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  hard_skills: ICategory[];
  soft_skills: ICategory[];
} = {
  hard_skills: hardSkills,
  soft_skills: softSkills,
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export const {} = skillsSlice.actions;

export const skillsReducer = skillsSlice.reducer;
