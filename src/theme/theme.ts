import { PaletteMode } from "@mui/material";

export const getColorPalette = (mode: PaletteMode) => ({
  palette: {
    mode,
    // TODO
    ...(mode === "light" ? {} : {}),
  },
});
