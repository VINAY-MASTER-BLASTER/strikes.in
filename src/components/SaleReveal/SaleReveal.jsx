import { saleConfig } from "../../data/saleConfig";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import CouponCard from "../CouponCard/CouponCard";
import ExpiredSale from "../ExpiredSale/ExpiredSale";
import { IconClose } from "../Icons";
import "./SaleReveal.css";

export default function SaleReveal({ expired, hh, mm, ss, animate, onDismiss }) {
  return (
    <div className={`sale-reveal ${animate ? "sale-reveal--animate" : ""}`} role="region" aria-label="STRIKE Drop limited-time offer">
      <div className="sale-reveal__panel">
        {/* Close button */}
        <button
          className="sale-reveal__close"
          onClick={onDismiss}
          aria-label="Close offer panel"
        >
          <IconClose size={24} />
        </button>

        {/* Header */}
        <div className="sale-reveal__header">
          <span className="sale-reveal__label">LIMITED STRIKE DROP</span>
          {!expired && (
            <div className="sale-reveal__discount">
              <span className="sale-reveal__discount-value">{saleConfig.discount}</span>
              <span className="sale-reveal__discount-text">OFF</span>
            </div>
          )}
          <p className="sale-reveal__product">{saleConfig.product}</p>
        </div>

        {/* Body — either active coupon or expired state */}
        <div className="sale-reveal__body">
          {expired ? (
            <ExpiredSale />
          ) : (
            <>
              <div className="sale-reveal__timer-section">
                <span className="sale-reveal__expires-label">Expires in</span>
                <CountdownTimer hh={hh} mm={mm} ss={ss} expired={expired} />
              </div>

              <CouponCard
                coupon={saleConfig.coupon}
                discount={saleConfig.discount}
                product={saleConfig.product}
                expired={expired}
                shopLink={saleConfig.shopLink}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
