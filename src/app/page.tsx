export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-background">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="font-accent text-3xl text-primary font-normal">
          Breathe &bull; Align &bull; Restore
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-normal text-text-main leading-tight">
          Serene Sanctuary for Mindful Movement
        </h1>
        <p className="text-text-muted text-lg font-sans max-w-lg mx-auto">
          An elevated digital sanctuary embodying quiet luxury, classical cadence, and grounded holistic wellness.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <button className="px-8 py-3.5 rounded-button bg-primary text-white font-medium shadow-card hover:bg-primary-hover transition-all duration-300">
            Begin Practice
          </button>
          <button className="px-8 py-3.5 rounded-button border border-border text-text-main font-medium hover:bg-surfaceVariant transition-all duration-300">
            Explore Sanctuary
          </button>
        </div>
      </div>
    </main>
  );
}
