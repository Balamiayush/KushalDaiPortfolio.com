import { useEffect, useMemo, useState } from "react";

export function useLocalTime(timeZone = "Asia/Kathmandu") {
  const [time, setTime] = useState("");

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone,
      }),
    [timeZone]
  );

  useEffect(() => {
    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, [formatter]);

  return time;
}
