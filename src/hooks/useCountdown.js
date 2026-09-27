import { useEffect, useState } from "react";
import { getSaleExpiry, getRemaining } from "../utils/saleTimer";

export function useCountdown(durationMs) {
  const [expiry] = useState(() => getSaleExpiry(durationMs));
  const [remaining, setRemaining] = useState(() => getRemaining(expiry));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(getRemaining(expiry));
    }, 1000);
    return () => clearInterval(id);
  }, [expiry]);

  const expired = remaining <= 0;
  const hh = String(Math.floor(remaining / 3_600_000)).padStart(2, "0");
  const mm = String(Math.floor((remaining % 3_600_000) / 60_000)).padStart(2, "0");
  const ss = String(Math.floor((remaining % 60_000) / 1000)).padStart(2, "0");

  return { expired, hh, mm, ss, remaining };
}
