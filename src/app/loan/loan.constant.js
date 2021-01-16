import { LoanFeature } from "./loan.enum";

export const LOAN_PURPOSE_OPTIONS = [
  {
    text: "Liburan",
    value: "Holiday",
  },
  {
    text: "KPR",
    value: "HousingLoan",
  },
  {
    text: "Mobil atau Motor",
    value: "CarOrMotorcycle",
  },
  {
    text: "Kartu Kredit",
    value: "CreditCard",
  },
  {
    text: "Renovasi",
    value: "Renovation",
  },
  {
    text: "KTA Elektronik",
    value: "ElectronicUnsecuredLoan",
  },
  {
    text: "Sekolah",
    value: "School",
  },
  {
    text: "Modal Usaha",
    value: "VentureCapital",
  },
  {
    text: "Investasi",
    value: "Investment",
  },
  {
    text: "Lainnya",
    value: "Other",
  },
];

export const VENTURE_CAPITAL_OPTIONS = [
  {
    text: "Membeli barang dagangan",
    value: "BuyMoreInventories",
  },
  {
    text: "Membayar biaya tempat usaha",
    value: "PayShopOrOutletRent",
  },
  {
    text: "Renovasi tempat usaha",
    value: "RenovateShopOrOutlet",
  },
  {
    text: "Menambah cabang usaha",
    value: "ExpandOrAddMoreShop",
  },
  {
    text: "Membayar hutang usaha",
    value: "PayBackLoans",
  },
  {
    text: "Menambah pegawai",
    value: "RecruitMoreEmployees",
  },
  {
    text: "Biaya operasional",
    value: "OperationalCost",
  },
  {
    text: "Lainnya",
    value: "Others",
  },
];

export const LOAN_PAGE_PATH = {
  [LoanFeature.ConfirmArea]: "/loan/confirm-area",
  [LoanFeature.CreateAccount]: "/loan/create-account",
  [LoanFeature.KtpAddress]: "/loan/ktp-address",
  [LoanFeature.KtpData]: "/loan/ktp-data",
  [LoanFeature.OutsideArea]: "/loan/outside-area",
  [LoanFeature.Purpose]: "/loan/purpose",
  [LoanFeature.RejectedAge]: "/loan/rejected-age",
  [LoanFeature.VentureCapital]: "/loan/venture-capital",
};

export const LOAN_PAGES = [
  {
    documentTitle: "Konfirmasi Area Layanan",
    path: LOAN_PAGE_PATH[LoanFeature.ConfirmArea],
  },
  {
    documentTitle: "Buat Akun",
    path: LOAN_PAGE_PATH[LoanFeature.CreateAccount],
  },
  {
    documentTitle: "Diluar Area Layanan",
    path: LOAN_PAGE_PATH[LoanFeature.OutsideArea],
  },
  {
    documentTitle: "Diluar Batas Usia",
    path: LOAN_PAGE_PATH[LoanFeature.RejectedAge],
  },
  {
    documentTitle: "Tujuan Pinjaman",
    path: LOAN_PAGE_PATH[LoanFeature.Purpose],
  },
  {
    documentTitle: "Penggunaan Modal Usaha",
    path: LOAN_PAGE_PATH[LoanFeature.VentureCapital],
  },
  {
    documentTitle: "Data KTP",
    path: LOAN_PAGE_PATH[LoanFeature.KtpData],
    percentage: 20,
  },
  {
    documentTitle: "Alamat KTP",
    path: LOAN_PAGE_PATH[LoanFeature.KtpAddress],
    percentage: 30,
  },
];
