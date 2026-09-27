import "./CountdownTimer.css";

export default function CountdownTimer({ hh, mm, ss, expired }) {
  return (
    <div className={`countdown ${expired ? "countdown--expired" : ""}`} aria-label={expired ? "Sale has expired" : `Time remaining: ${hh} hours ${mm} minutes ${ss} seconds`}>
      <div className="countdown__group">
        <span className="countdown__digit">{hh}</span>
        <span className="countdown__label">HRS</span>
      </div>
      <span className="countdown__sep" aria-hidden="true">:</span>
      <div className="countdown__group">
        <span className="countdown__digit">{mm}</span>
        <span className="countdown__label">MIN</span>
      </div>
      <span className="countdown__sep" aria-hidden="true">:</span>
      <div className="countdown__group">
        <span className="countdown__digit">{ss}</span>
        <span className="countdown__label">SEC</span>
      </div>
    </div>
  );
}
