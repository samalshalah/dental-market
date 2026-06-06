import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#050505",
        ink: "#111111",
        steel: "#4f5f6d",
        line: "#d9e4ee",
        ocean: "#0875ff",
        teal: "#12c7ea",
        gold: "#b9872b",
        dental: {
          navy: "#050505",
          black: "#050505",
          blue: "#0875ff",
          cyan: "#12c7ea",
          teal: "#12c7ea",
          mint: "#e9fbff",
          sky: "#edf7ff",
          green: "#12c7ea"
        },
        surface: {
          page: "#f8fbff",
          soft: "#edf7ff",
          mint: "#e9fbff",
          card: "#ffffff",
          elevated: "#fbfdff"
        },
        clinical: {
          ink: "#111111",
          muted: "#4f5f6d",
          line: "#d9e4ee",
          calm: "#f4f9fc"
        }
      },
      boxShadow: {
        soft: "0 22px 60px rgba(5, 5, 5, 0.10)",
        card: "0 1px 0 rgba(5, 5, 5, 0.05)",
        lift: "0 18px 45px rgba(5, 5, 5, 0.12)"
      },
      borderRadius: {
        card: "0.125rem",
        panel: "0.375rem"
      },
      fontSize: {
        "hero-mobile": ["2.25rem", { lineHeight: "1.08", letterSpacing: "0" }],
        hero: ["3.75rem", { lineHeight: "1.02", letterSpacing: "0" }],
        section: ["2.5rem", { lineHeight: "1.1", letterSpacing: "0" }]
      }
    }
  },
  plugins: []
};

export default config;
