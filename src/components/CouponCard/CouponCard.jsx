import { useState } from "react";
import { copyToClipboard } from "../../utils/clipboard";
import { IconCheck, IconArrowRight } from "../Icons";
import "./CouponCard.css";

export default function CouponCard({ coupon, discount, product, expired, shopLink }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (expired) return;
    const ok = await copyToClipboard(coupon);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="coupon" role="region" aria-label="Coupon code">
      <div className="coupon__code-row">
        <code className="coupon__code">{coupon}</code>
        <button
          className={`coupon__copy ${copied ? "coupon__copy--copied" : ""}`}
          onClick={handleCopy}
          disabled={expired}
          aria-label={copied ? "Code copied to clipboard" : "Copy coupon code"}
        >
          {copied ? <><IconCheck size={14} style={{marginRight:4}} /> COPIED</> : "COPY CODE"}
        </button>
      </div>

      <div className="coupon__actions">
        <a
          href={expired ? undefined : shopLink}
          className={`coupon__shop ${expired ? "coupon__shop--disabled" : ""}`}
          aria-disabled={expired}
          tabIndex={expired ? -1 : 0}
          onClick={(e) => expired && e.preventDefault()}
        >
          Shop Now <IconArrowRight size={14} />
        </a>
      </div>

      {/* Screen reader announcement for copy action */}
      <div className="sr-only" aria-live="polite" role="status">
        {copied ? `Coupon code ${coupon} copied to clipboard` : ""}
      </div>
    </div>
  );
}
