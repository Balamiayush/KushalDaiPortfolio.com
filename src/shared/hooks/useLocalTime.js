// hooks/useLocalTime.js
import { useEffect, useState } from "react";

export function useLocalTime(timeZone = "Asia/Kathmandu") {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone,
      });

      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, [timeZone]);

  return time;
}
