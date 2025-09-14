import { EModalName, type IBaseModal } from "@/shared/types/modal.types.ts";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IBaseModal = {
  modals: [],
  activeModal: null,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<EModalName>) => {
      state.modals = [...state.modals, payload];
      state.activeModal = state.modals[0];
    },
    closeModal: (state, { payload }: PayloadAction<EModalName>) => {
      state.modals = state.modals.filter((name) => name !== payload);
      state.activeModal = state.modals[0] ?? null;
    },
    selectModal: (state, { payload }: PayloadAction<EModalName>) => {
      state.activeModal = state.modals.find((name) => name === payload) ?? null;
    },
  },
});

export const { openModal, closeModal, selectModal } = modalSlice.actions;

export const modalsReducer = modalSlice.reducer;
