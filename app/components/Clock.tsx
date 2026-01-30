"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  
  const [time, setTime] = useState<Date | string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setTime(Date.now().toLocaleString()), 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{new Date().toLocaleTimeString()}</p>;
}
