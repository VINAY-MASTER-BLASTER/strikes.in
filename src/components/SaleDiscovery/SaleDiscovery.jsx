import { useState, useEffect, useCallback } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { saleConfig } from "../../data/saleConfig";
import SaleReveal from "../SaleReveal/SaleReveal";
import { IconLightning } from "../Icons";
import "./SaleDiscovery.css";

const STORAGE_KEY_UI = "strikeSaleUI_120h";

function loadUIState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_UI);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { dismissed: false, hasRevealed: false };
}

function saveUIState(state) {
  localStorage.setItem(STORAGE_KEY_UI, JSON.stringify(state));
}

export default function SaleDiscovery() {
  const { expired, hh, mm, ss } = useCountdown(saleConfig.duration);
  const [uiState, setUIState] = useState(loadUIState);
  const [showReveal, setShowReveal] = useState(false);
  const [animateReveal, setAnimateReveal] = useState(false);

  // On mount, if previously open (not dismissed), re-show the reveal instantly
  useEffect(() => {
    if (!uiState.dismissed && uiState.hasRevealed) {
      setShowReveal(true);
      // Skip animation for reopens
    }
  }, []);

  const persistState = useCallback((updates) => {
    setUIState((prev) => {
      const next = { ...prev, ...updates };
      saveUIState(next);
      return next;
    });
  }, []);

  const handleDiscoveryClick = () => {
    if (showReveal) return;

    if (uiState.hasRevealed) {
      // Reopening — show instantly, no animation
      setShowReveal(true);
      setAnimateReveal(false);
      persistState({ dismissed: false });
    } else {
      // First reveal — animate
      setShowReveal(true);
      setAnimateReveal(true);
      persistState({ hasRevealed: true, dismissed: false });
    }
  };

  const handleDismiss = () => {
    setShowReveal(false);
    setAnimateReveal(false);
    persistState({ dismissed: true });
  };

  return (
    <>
      {/* Stage 1 — Discovery element: a pulsing badge near the stats */}
      <div className="sale-discovery" onClick={handleDiscoveryClick}>
        <button
          className={`sale-discovery__badge ${showReveal ? "sale-discovery__badge--active" : ""}`}
          aria-label="Something just dropped — click to reveal"
          aria-expanded={showReveal}
        >
          <span className="sale-discovery__pulse" aria-hidden="true"></span>
          <IconLightning size={16} className="sale-discovery__dot" aria-hidden="true" />
          <span className="sale-discovery__text">
            {expired ? "Drop Ended" : "Something just dropped."}
          </span>
        </button>
      </div>

      {/* Stage 2/3 — Reveal panel */}
      {showReveal && (
        <SaleReveal
          expired={expired}
          hh={hh}
          mm={mm}
          ss={ss}
          animate={animateReveal}
          onDismiss={handleDismiss}
        />
      )}

      {/* Aria-live region for state changes */}
      <div className="sr-only" aria-live="polite" role="status">
        {expired ? "The STRIKE Drop sale has ended. The coupon is no longer redeemable." : ""}
      </div>
    </>
  );
}
