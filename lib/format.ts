export function toBanglaDigits(input: string) {
  const english = "0123456789";
  const bangla = "০১২৩৪৫৬৭৮৯";

  return input.replace(/[0-9]/g, (digit) => bangla[english.indexOf(digit)]);
}

export function formatBanglaDateManual(dateString: string) {
  const date = new Date(dateString);

  const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  const day = toBanglaDigits(String(date.getUTCDate()));
  const month = months[date.getUTCMonth()];
  const year = toBanglaDigits(String(date.getUTCFullYear()));

  const hours = toBanglaDigits(String(date.getUTCHours()).padStart(2, "0"));
  const minutes = toBanglaDigits(String(date.getUTCMinutes()).padStart(2, "0"));
  const seconds = toBanglaDigits(String(date.getUTCSeconds()).padStart(2, "0"));

  return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} UTC`;
}

export function formatBanglaShortTime(dateString: string) {
  const date = new Date(dateString);
  const hours = toBanglaDigits(String(date.getUTCHours()).padStart(2, "0"));
  const minutes = toBanglaDigits(String(date.getUTCMinutes()).padStart(2, "0"));

  return `${hours}:${minutes}`;
}

export function formatSensorValue(value: number) {
  if (Number.isNaN(value)) return "--";
  return value.toFixed(2);
}

export function getBanglaNodeStatus(status: string) {
  const normalized = status.trim().toLowerCase();

  if (
    normalized === "1" ||
    normalized === "on" ||
    normalized === "online" ||
    normalized === "active"
  ) {
    return "সক্রিয়";
  }

  if (
    normalized === "0" ||
    normalized === "off" ||
    normalized === "offline" ||
    normalized === "inactive"
  ) {
    return "নিষ্ক্রিয়";
  }

  return status || "অজানা";
}