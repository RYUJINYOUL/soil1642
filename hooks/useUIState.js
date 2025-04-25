import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "/Image/high.jpg",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
