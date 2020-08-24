const accountClassesEnum = {
  Other: 0,
  BaoChi: 1,
  ChuyenGia: 2,
  Official: 3,
  SocialPage: 4,
  KOL: 5,
  PartnerPromotion: 7,
  BoIch: 8,
  TienKiem: 253,
  HauKiem: 254,
  Tam: 255,
}

export default accountClassesEnum

export const accountClasses = [
  { name: "Chuyên gia", value: accountClassesEnum.ChuyenGia },
  { name: "Bổ ích", value: accountClassesEnum.BoIch },
  { name: "Official", value: accountClassesEnum.Official },
  { name: "Báo chí", value: accountClassesEnum.BaoChi },
  { name: "Trang cộng đồng", value: accountClassesEnum.SocialPage },
  { name: "Sao/KOL", value: accountClassesEnum.KOL },
  { name: "Partner promotion", value: accountClassesEnum.PartnerPromotion },
  { name: "Tạm", value: accountClassesEnum.Tam },
  { name: "Tiền kiểm", value: accountClassesEnum.TienKiem },
  { name: "Hậu kiểm", value: accountClassesEnum.HauKiem },
  { name: "Khác", value: accountClassesEnum.Other },
]
