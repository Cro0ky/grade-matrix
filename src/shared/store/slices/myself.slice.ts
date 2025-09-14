import { ERoles, type IUser, UserPositions } from "@/shared/types/types.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  role: ERoles.User,
  id: "1",
  name: "",
  surname: "Репнин",
  patronymic: "Дмитриевич",
  direction: "Евгений",
  current_position: UserPositions.LeadingSpecialist,
  expected_position: null,
  hard_skills: 15,
  soft_skills: 16,
};

const myselfSlice = createSlice({
  name: "myself",
  initialState,
  reducers: {},
});

export const {} = myselfSlice.actions;

export const myselfReducer = myselfSlice.reducer;
