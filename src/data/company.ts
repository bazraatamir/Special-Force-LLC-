// Компанийн бүх холбоо барих мэдээлэл энд төвлөрнө.
// Утас, имэйл, хаяг өөрчлөгдвөл зөвхөн энэ файлыг засна.

export const company = {
  name: "Special Force LLC",
  phones: ["+976 0000-0000", "+976 0000-0000"], // TODO: жинхэнэ дугаар
  email: "info@specialforce.mn", // TODO: жинхэнэ имэйл
  address: "Улаанбаатар хот, ___ дүүрэг, ___ хороо, ___ байр", // TODO: жинхэнэ хаяг
  hours: [
    {days: "Даваа – Баасан", time: "09:00 – 18:00"},
    {days: "Бямба", time: "10:00 – 16:00"},
    {days: "Ням", time: "Амарна"},
  ],
  emergency: "Шуурхай алба: 24/7 ажиллана",
  social: {
    facebook: "", // TODO: Facebook хуудасны холбоос
    instagram: "", // TODO: Instagram холбоос
  },
};

// tel: холбоосонд зориулж зай, зураасыг арилгана
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
