export function getAirStatus(mq2: number, dust: number) {
  if (mq2 > 300 || dust > 200) {
    return {
      label: "বিপজ্জনক",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
    };
  }

  if (mq2 > 250 || dust > 150) {
    return {
      label: "সতর্কতা",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    };
  }

  return {
    label: "নিরাপদ",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  };
}

export function getDataAgeInfo(createdAt: string) {
  const feedTime = new Date(createdAt).getTime();
  const now = Date.now();

  const diffMs = now - feedTime;
  const diffMinutes = diffMs / (1000 * 60);

  return {
    isStale: diffMinutes > 10,
    minutesOld: diffMinutes,
  };
}