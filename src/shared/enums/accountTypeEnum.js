const AccountClassLabel = {
  Other: 0,
  Expert: 2,
  Creator: 3, // nhà sản xuất nội dung // group 6
  KOL: 5, // KOL // group 6
  Star: 6, //Sao // group 6
  Community: 4, //cộng đồng
  Youtuber: 7,
  Internal: 8, //nội bộ
  Incorporation: 9, // tổ chức, doanh nghiệp
  Credibility: 10, // tin tưởng
}
export default AccountClassLabel
export const accountCredibility = [
  { name: "Tin tưởng", value: AccountClassLabel.Credibility },
  { name: "Khác", value: AccountClassLabel.Other },
]
export const accountClassLabel = [
  { name: "Content creat or", value: AccountClassLabel.Creator },
  { name: "KOL", value: AccountClassLabel.KOL },
  { name: "KOL", value: AccountClassLabel.KOL },
  { name: "Sao", value: AccountClassLabel.Star },
  { name: "Cộng đồng", value: AccountClassLabel.Community },
  { name: "Youtuber", value: AccountClassLabel.Youtuber },
  { name: "Kênh nội bộ", value: AccountClassLabel.Internal },
  { name: "Tổ chức / Doanh nghiệp", value: AccountClassLabel.Incorporation },
  { name: "Chuyên gia", value: AccountClassLabel.Expert },
  { name: "Khác", value: AccountClassLabel.Other },
]
