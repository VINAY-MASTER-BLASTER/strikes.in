import { IconClock } from "../Icons";
import "./ExpiredSale.css";

export default function ExpiredSale() {
  return (
    <div className="expired" role="status">
      <div className="expired__icon" aria-hidden="true"><IconClock size={32} /></div>
      <h3 className="expired__title">SALE ENDED</h3>
      <p className="expired__text">
        This STRIKE Drop has expired.<br />
        The coupon is no longer redeemable.
      </p>
    </div>
  );
}
