export function toBanglaDigits(input: string) {
  const english = "0123456789";
  const bangla = "০১২৩৪৫৬৭৮৯";

  return input.replace(/[0-9]/g, (digit) => bangla[english.indexOf(digit)]);
}

export function formatBanglaDateManual(dateString: string) {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const day = parts.find((part) => part.type === "day")?.value || "";
  const month = parts.find((part) => part.type === "month")?.value || "";
  const year = parts.find((part) => part.type === "year")?.value || "";
  const hour = parts.find((part) => part.type === "hour")?.value || "";
  const minute = parts.find((part) => part.type === "minute")?.value || "";
  const second = parts.find((part) => part.type === "second")?.value || "";

  return `${day} ${month} ${year}, ${hour}:${minute}:${second} BST`;
}

export function formatBanglaShortTime(dateString: string) {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return formatter.format(date);
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