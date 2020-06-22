export default function Format(
  timestamp,
  lang = "en-GB",
  tz = "Europe/London"
) {
  let dateObj = new Date(timestamp);

  return dateObj
    .toLocaleString(lang, {
      timeZone: tz,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "/");
}
