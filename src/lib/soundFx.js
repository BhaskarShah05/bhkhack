/**
 * Web Audio API Procedural Sound Engine for NCS
 *
 * Provides instant, zero-latency, futuristic sound effects with 0KB external audio assets.
 * Handles browser autoplay policies, volume control, pitch jitter, and global muting.
 */

let audioCtx = null;
let masterGain = null;
let isAudioMuted = false;
let lastSfxTimes = {};

// Load mute preference from localStorage if available
if (typeof window !== "undefined") {
  try {
    const saved = localStorage.getItem("ncs_sfx_muted");
    if (saved !== null) {
      isAudioMuted = saved === "true";
    }
  } catch (e) {
    // localStorage might be unavailable in private browsing
  }
}

/**
 * Initializes or returns the existing AudioContext
 */
export function getAudioContext() {
  if (typeof window === "undefined") return null;

  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(isAudioMuted ? 0 : 1, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }
  }

  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }

  return audioCtx;
}

// Automatically resume/unlock on first user interaction to comply with autoplay policy
if (typeof window !== "undefined") {
  const unlockAudio = () => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") {
      ctx.resume().then(() => {
        window.removeEventListener("pointerdown", unlockAudio);
        window.removeEventListener("keydown", unlockAudio);
        window.removeEventListener("touchstart", unlockAudio);
      }).catch(() => {});
    }
  };
  window.addEventListener("pointerdown", unlockAudio, { passive: true });
  window.addEventListener("keydown", unlockAudio, { passive: true });
  window.addEventListener("touchstart", unlockAudio, { passive: true });
}

export function isMuted() {
  return isAudioMuted;
}

export function setMuted(muted) {
  isAudioMuted = !!muted;
  try {
    localStorage.setItem("ncs_sfx_muted", String(isAudioMuted));
  } catch (e) {}

  if (audioCtx && masterGain) {
    const now = audioCtx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.linearRampToValueAtTime(isAudioMuted ? 0 : 1, now + 0.05);
  }

  // Notify listeners
  window.dispatchEvent(
    new CustomEvent("ncs_sfx_mute_change", { detail: { isMuted: isAudioMuted } })
  );

  if (!isAudioMuted) {
    playSfx("toggleOn");
  }
}

export function toggleMute() {
  setMuted(!isAudioMuted);
  return isAudioMuted;
}

/**
 * Procedural SFX Generators
 */

// 1. Soft futuristic hover tick (with micro-pitch jitter)
function synthesizeHover(ctx, dest) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  const jitter = 0.94 + Math.random() * 0.12;
  const startFreq = 1700 * jitter;

  osc.type = "sine";
  osc.frequency.setValueAtTime(startFreq, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(300, startFreq * 0.65), now + 0.035);

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(1800, now);
  filter.Q.setValueAtTime(2.2, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(dest);

  osc.start(now);
  osc.stop(now + 0.04);
}

// 2. Tactile mechanical sci-fi click
function synthesizeClick(ctx, dest) {
  const now = ctx.currentTime;

  // High snap layer
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = "triangle";
  osc1.frequency.setValueAtTime(950, now);
  osc1.frequency.exponentialRampToValueAtTime(320, now + 0.04);

  gain1.gain.setValueAtTime(0.001, now);
  gain1.gain.linearRampToValueAtTime(0.09, now + 0.002);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.042);

  osc1.connect(gain1);
  gain1.connect(dest);
  osc1.start(now);
  osc1.stop(now + 0.045);

  // Low mechanical punch layer
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(180, now);
  osc2.frequency.exponentialRampToValueAtTime(70, now + 0.035);

  gain2.gain.setValueAtTime(0.001, now);
  gain2.gain.linearRampToValueAtTime(0.07, now + 0.002);
  gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.038);

  osc2.connect(gain2);
  gain2.connect(dest);
  osc2.start(now);
  osc2.stop(now + 0.042);
}

// 3. Futuristic navbar tab glide
function synthesizeNav(ctx, dest) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(560, now);
  osc.frequency.exponentialRampToValueAtTime(840, now + 0.07);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.07, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

  osc.connect(gain);
  gain.connect(dest);
  osc.start(now);
  osc.stop(now + 0.085);
}

// 4. Ambient sci-fi chord for page transition
function synthesizePageTransition(ctx, dest) {
  const now = ctx.currentTime;
  const chordNotes = [523.25, 659.25, 783.99]; // C5 - E5 - G5 harmonic triad

  chordNotes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const offset = idx * 0.03;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + offset);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.04, now + offset + 0.12);

    gain.gain.setValueAtTime(0.0001, now + offset);
    gain.gain.linearRampToValueAtTime(0.035, now + offset + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.16);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(now + offset);
    osc.stop(now + offset + 0.18);
  });
}

// 5. 3D Card tilt / glass shimmer
function synthesizeCardTilt(ctx, dest) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(1800, now);
  osc.frequency.exponentialRampToValueAtTime(2400, now + 0.045);

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(2100, now);
  filter.Q.setValueAtTime(3.5, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(0.025, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(dest);
  osc.start(now);
  osc.stop(now + 0.055);
}

// 6. Modal / Drawer open & close
function synthesizeModal(ctx, dest, isOpen) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  const startF = isOpen ? 340 : 680;
  const endF = isOpen ? 680 : 300;

  osc.type = "sine";
  osc.frequency.setValueAtTime(startF, now);
  osc.frequency.exponentialRampToValueAtTime(endF, now + 0.075);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.055, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

  osc.connect(gain);
  gain.connect(dest);
  osc.start(now);
  osc.stop(now + 0.085);
}

// 7. Toggle on / off chime
function synthesizeToggle(ctx, dest, enabled) {
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  const startF = enabled ? 440 : 880;
  const endF = enabled ? 880 : 440;

  osc.type = "sine";
  osc.frequency.setValueAtTime(startF, now);
  osc.frequency.exponentialRampToValueAtTime(endF, now + 0.06);

  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.065, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);

  osc.connect(gain);
  gain.connect(dest);
  osc.start(now);
  osc.stop(now + 0.07);
}

// 8. Success arpeggio (form submitted, copied, action confirmed)
function synthesizeSuccess(ctx, dest) {
  const now = ctx.currentTime;
  const notes = [587.33, 739.99, 880.0, 1174.66]; // D5, F#5, A5, D6

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const offset = idx * 0.05;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + offset);

    gain.gain.setValueAtTime(0.0001, now + offset);
    gain.gain.linearRampToValueAtTime(0.05, now + offset + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.15);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(now + offset);
    osc.stop(now + offset + 0.17);
  });
}

/**
 * Main playSfx dispatch function
 */
export function playSfx(type = "hover") {
  if (isAudioMuted) return;

  const ctx = getAudioContext();
  if (!ctx || !masterGain) return;

  // Rate-limiting / throttling
  const now = performance.now();
  const minIntervals = {
    hover: 45,
    cardTilt: 150,
    click: 40,
    nav: 60,
    pageTransition: 200,
    modalOpen: 100,
    modalClose: 100,
    success: 250,
    toggleOn: 100,
    toggleOff: 100,
  };

  const minInterval = minIntervals[type] || 35;
  if (lastSfxTimes[type] && now - lastSfxTimes[type] < minInterval) {
    return;
  }
  lastSfxTimes[type] = now;

  try {
    switch (type) {
      case "hover":
        synthesizeHover(ctx, masterGain);
        break;
      case "click":
        synthesizeClick(ctx, masterGain);
        break;
      case "nav":
        synthesizeNav(ctx, masterGain);
        break;
      case "pageTransition":
      case "page":
        synthesizePageTransition(ctx, masterGain);
        break;
      case "cardTilt":
      case "card":
        synthesizeCardTilt(ctx, masterGain);
        break;
      case "modalOpen":
        synthesizeModal(ctx, masterGain, true);
        break;
      case "modalClose":
        synthesizeModal(ctx, masterGain, false);
        break;
      case "toggleOn":
        synthesizeToggle(ctx, masterGain, true);
        break;
      case "toggleOff":
        synthesizeToggle(ctx, masterGain, false);
        break;
      case "success":
        synthesizeSuccess(ctx, masterGain);
        break;
      default:
        synthesizeClick(ctx, masterGain);
    }
  } catch (err) {
    // Fail silently without disrupting UI
  }
}

/**
 * Global Document Event Listeners
 * Attaches passive listeners to document so every button, link, and interactive card
 * automatically plays tactile SFX without boilerplate on every component.
 */
export function initGlobalSoundListeners() {
  if (typeof window === "undefined") return;
  if (window.__ncs_sound_listeners_initialized) return;
  window.__ncs_sound_listeners_initialized = true;

  let lastHoverTarget = null;

  document.addEventListener(
    "pointerover",
    (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const el = target.closest(
        'button, a, [role="button"], input[type="button"], input[type="submit"], [data-sfx], [data-glow-card], .discipline-card'
      );

      if (!el) return;
      if (el.getAttribute("data-sfx") === "none") return;
      if (el === lastHoverTarget) return;

      lastHoverTarget = el;

      const customHover = el.getAttribute("data-sfx-hover");
      if (customHover) {
        playSfx(customHover);
      } else if (el.hasAttribute("data-glow-card") || el.classList.contains("discipline-card")) {
        playSfx("cardTilt");
      } else {
        playSfx("hover");
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "pointerout",
    (e) => {
      if (e.target === lastHoverTarget) {
        lastHoverTarget = null;
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const el = target.closest(
        'button, a, [role="button"], input[type="button"], input[type="submit"], [data-sfx]'
      );

      if (!el) return;
      if (el.getAttribute("data-sfx") === "none") return;

      const customClick = el.getAttribute("data-sfx-click");
      if (customClick) {
        playSfx(customClick);
      } else if (el.getAttribute("data-sfx") === "nav") {
        playSfx("nav");
      } else {
        playSfx("click");
      }
    },
    { passive: true }
  );
}
