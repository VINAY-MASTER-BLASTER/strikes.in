const STORAGE_KEY = "strikeSaleEnd_120h";

export function getSaleExpiry(durationMs) {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return Number(stored);

  const expiry = Date.now() + durationMs;
  localStorage.setItem(STORAGE_KEY, String(expiry));
  return expiry;
}

export function getRemaining(expiry) {
  return Math.max(0, expiry - Date.now());
}
