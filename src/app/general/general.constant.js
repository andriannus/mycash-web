import { GeneralFeature } from "./genera.enum";

export const GENERAL_PAGE_PATH = {
  [GeneralFeature.AboutUs]: "/about-us",
};

export const GENERAL_PAGES = [
  {
    documentTitle: "Tentang Kami",
    path: GENERAL_PAGE_PATH[GeneralFeature.AboutUs],
  },
];
