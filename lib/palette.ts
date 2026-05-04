export interface Palette {
  dark: boolean;
  bg: string;
  paper: string;
  ink: string;
  inkSoft: string;
  gold: string;
  line: string;
  heroBg: string;
  onDark: string;
  heroAccent: string;
  deepBg: string;
  deepInk: string;
  deepAccent: string;
}

export const PALETTES: Record<"light" | "dark", Palette> = {
  light: {
    dark: false,
    bg: "#FAF6EC",
    paper: "#F4ECD8",
    ink: "#0F2A21",
    inkSoft: "#274434",
    gold: "#B58524",
    line: "#E2D7B6",
    heroBg: "#F4ECD8",
    onDark: "#0F2A21",
    heroAccent: "#0F2A21",
    deepBg: "#0F2A21",
    deepInk: "#F4ECD8",
    deepAccent: "#E1B14A",
  },
  dark: {
    dark: true,
    bg: "#0F2A21",
    paper: "#0A1F18",
    ink: "#F4ECD8",
    inkSoft: "rgba(244,236,216,.78)",
    gold: "#E1B14A",
    line: "rgba(244,236,216,.18)",
    heroBg: "#0F2A21",
    onDark: "#F4ECD8",
    heroAccent: "#E1B14A",
    deepBg: "#081912",
    deepInk: "#F4ECD8",
    deepAccent: "#E1B14A",
  },
};

export const palette = PALETTES.light;
