import { StaticCSS, staticCSS, Color } from './theme'

export type ThemeWithPreset = StaticCSS & {
  color: Color
  forMedia: {
    sm: string
    md: string
    lg: string
  }
  panels: {
    default: string
  }
  hover: {
    primary: string
    surface: string
  }
}

export function createPreset(color: Color): ThemeWithPreset {
  return {
    ...staticCSS,
    color: color,
    forMedia: {
      sm: `@media (min-width: ${staticCSS.screens.sm})`,
      md: `@media (min-width: ${staticCSS.screens.md})`,
      lg: `@media (min-width: ${staticCSS.screens.lg})`
    },
    panels: {
      default: `
      background-color: ${color.background};
      color: ${color.fontColor};
      box-shadow: ${staticCSS.shadow.sm};
      border-radius: ${staticCSS.radius.md};
      padding: 0.5rem;
      transition: 0.2s box-shadow;
      &:hover {
        box-shadow: ${staticCSS.shadow.md};
      }`
    },
    hover: {
      surface: `
        &:hover {
          color: ${color.fontColor + 'CC'};
          cursor: pointer;
          transition: 0.3s;
        }`,
      primary: `
      &:hover {
        color: ${color.primary + 'CC'};
        cursor: pointer;
        transition: 0.3s;
      }`
    }
  }
}
