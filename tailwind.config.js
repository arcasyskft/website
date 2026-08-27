/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#ffffff",
        "ink-soft": "#f4f5f7",
        steel: "#e6e8ec",
        "steel-mid": "#c8ccd4",
        mist: "#3f4654",
        cloud: "#111827",
        paper: "#0a0a0a",
        accent: {
          DEFAULT: "#0a0a0a",
          mid: "#262626",
          deep: "#000000",
          soft: "rgba(10, 10, 10, 0.08)",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-source-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        soft: "1.25rem",
        panel: "1.75rem",
        bar: "1.5rem",
      },
      boxShadow: {
        glow: "0 0 80px rgba(10, 10, 10, 0.08)",
        panel: "0 24px 60px rgba(10, 10, 10, 0.1)",
        lift: "0 12px 32px rgba(10, 10, 10, 0.18)",
        bar: "0 10px 40px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};
