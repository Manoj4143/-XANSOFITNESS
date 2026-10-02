// Gentle Sanctuary Chime Synthesizer using Web Audio API (432 Hz Tibetan Singing Bowl)

export function playSanctuaryChime() {
  if (typeof window === "undefined") return;

  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    // Fundamental Solfeggio Frequency: 432 Hz (Verdi pitch / Natural healing resonance)
    const frequencies = [432, 864, 1296];
    const gains = [0.15, 0.05, 0.02];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Soft attack & long singing bowl decay
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(gains[idx], now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 3.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 4.0);
    });
  } catch {
    // AudioContext blocked or unsupported in current environment
  }
}
