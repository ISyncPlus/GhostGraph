"use client";

import { useEffect, useState } from "react";

export default function MyClock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId: number = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <p>{time.toLocaleDateString()}</p>;
}
