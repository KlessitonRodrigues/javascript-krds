import { CSSProperties } from 'react'
import usePaletteContext from '../../../hooks/usePalette'

export const sidepanelOpen = (isOpen: boolean): CSSProperties => {
  const palette = usePaletteContext()

  const base: CSSProperties = {
    position: 'fixed',
    right: '0px',
    bottom: '0px',
    height: '88vh',
    boxShadow: '0 2px 8px 0 #4444',
    borderRadius: '0.5rem',
    transitionDuration: '0.6s',
    backgroundColor: 'inherit',
    zIndex: 10,
    border: '1px solid ' + palette.border,
  }

  if (isOpen) return base

  return {
    ...base,
    visibility: 'hidden',
    right: '-100%',
  }
}
