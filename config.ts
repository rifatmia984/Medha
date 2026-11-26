export const FPS = 30;
export const W = 1920;
export const H = 1080;
export const TOTAL_FRAMES = 1254; // ৪১.৭৯৫ সেকেন্ড × ৩০fps

export const C = {
  ink: '#222222',
  blue: '#1e88e5',
  orange: '#ff8a00',
  green: '#2e9d57',
  red: '#e53935',
  yellow: '#ffc72c',
  navy: '#12285a',
};

export const toBn = (n: number | string) =>
  String(n).replace(/\d/g, (d) => '০১২৩৪৫৬৭৮৯'[Number(d)]);

export const fmtPhone = (p: string) => p.slice(0, 5) + '-' + p.slice(5);

// ⚠️ তথ্য স্ক্রিপ্ট (scri.txt) অনুযায়ী। এখানে বদলালেই পুরো ভিডিওতে বদলে যাবে।
// (অডিও/SRT-এ আছে: মেধাশ্রী, বার্মাইশা, পাঁচজন = ২+৩ — অমিলটি যাচাই করে নিন)
export const INFO = {
  schoolName: 'মেধাসিঁড়ি পাবলিক স্কুল',
  area: 'বারমাইসা বাজার',
  year: '২০২৫',
  total: 20,
  talent: 6,
  general: 14,
  phone1: '০১৬০৯৭৫৫০৮১',
  phone2: '০১৭৩৫৩৮১১৯০',
};

// অডিও/SRT টাইমিং অনুযায়ী সিন ভাগ (৩০fps)
export const SCENES = [
  {id: 1, from: 0, dur: 81},
  {id: 2, from: 81, dur: 138},
  {id: 3, from: 219, dur: 207},
  {id: 4, from: 426, dur: 234},
  {id: 5, from: 660, dur: 108},
  {id: 6, from: 768, dur: 390},
  {id: 7, from: 1158, dur: 96},
];
