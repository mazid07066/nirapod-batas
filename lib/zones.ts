export type ZoneType = {
  id: string;
  name: string;
  description: string;
  statusText: string;
  cardClass: string;
  isLive: boolean;
};

export const zones: ZoneType[] = [
  {
    id: "cutting",
    name: "কাটিং জোন",
    description: "বর্তমানে সক্রিয় সেন্সর নোড থেকে প্রাপ্ত লাইভ ডেটা",
    statusText: "লাইভ পর্যবেক্ষণ",
    cardClass: "bg-sky-100 border-sky-200",
    isLive: true,
  },
  {
    id: "sewing",
    name: "সেলাই জোন",
    description: "ভবিষ্যৎ সম্প্রসারণের জন্য পরিকল্পিত পর্যবেক্ষণ এলাকা",
    statusText: "ডেমো / ভবিষ্যৎ নোড",
    cardClass: "bg-emerald-100 border-emerald-200",
    isLive: false,
  },
  {
    id: "finishing",
    name: "ফিনিশিং জোন",
    description: "ভবিষ্যৎ সম্প্রসারণের জন্য পরিকল্পিত পর্যবেক্ষণ এলাকা",
    statusText: "ডেমো / ভবিষ্যৎ নোড",
    cardClass: "bg-violet-100 border-violet-200",
    isLive: false,
  },
];