// Компанийн бүх холбоо барих мэдээлэл энд төвлөрнө.
// Утас, имэйл, хаяг өөрчлөгдвөл зөвхөн энэ файлыг засна.

export const company = {
  name: "Special Force LLC",
  phones: ["+976 9595-9876", "+976 9906-3729"],
  email: "specialforcellc@gmail.com",
  address: "Улаанбаатар хот, Баянзүрх дүүрэг, 4-р хороо, 11-41",
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
