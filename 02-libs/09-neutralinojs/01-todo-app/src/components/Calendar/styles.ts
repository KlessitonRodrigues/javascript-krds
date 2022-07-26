import { CSSProperties } from 'react'
import usePaletteContext from '../../hooks/usePaletteContext'

export type DayBoxStyles = 'base' | 'day' | 'header' | 'weekId'
export const dayBoxStyles = (boxStyle: DayBoxStyles) => {
  const palette = usePaletteContext()
  const base: CSSProperties = {
    padding: '0.5rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '1px 2px 4px #2221',
    overflow: 'hidden',
    borderRadius: '0.4rem',
    userSelect: 'none',
  }

  const styles: Record<typeof boxStyle, CSSProperties> = {
    base,
    header: {
      ...base,
      height: '1.5rem',
      color: palette.color4,
      fontWeight: 'bold',
      boxShadow: '1px 2px 4px #2226',
    },
    day: {
      ...base,
      border: '1px solid' + palette.border,
    },
    weekId: {
      ...base,
      height: '4rem',
      fontSize: '0.85rem',
      boxShadow: 'none',
    },
  }

  return styles[boxStyle]
}

export const calendarGrid: CSSProperties = {
  display: 'grid',
  alignContent: 'stretch',
  gridTemplateColumns: 'repeat(7, 1fr)',
  rowGap: '0.5rem',
  columnGap: '0.5rem',
  justifyItems: 'stretch',
  alignItems: 'center',
  textAlign: 'center',
}

type CalendarItemFloat = 'topLeft' | 'bottomLeft' | 'topRight'
export const calendarItemFloat = (position: CalendarItemFloat): CSSProperties => {
  const palette = usePaletteContext()
  const base: CSSProperties = {
    position: 'absolute',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8rem',
    overflow: 'hidden',
  }

  const styles: Record<CalendarItemFloat, CSSProperties> = {
    bottomLeft: {
      ...base,
      bottom: '0',
      left: '0',
      borderRadius: '0',
      maxWidth: '80%',
    },
    topLeft: {
      ...base,
      top: '0',
      left: '0',
      fontWeight: 'bold',
      backgroundColor: palette.color1 + 'bb',
      color: palette.color4,
      borderRadius: '0 0 0.5rem 0',
    },
    topRight: {
      ...base,
      top: '0',
      right: '0',
      borderRadius: '0',
      color: palette.dark,
    },
  }

  return styles[position]
}

export const calendarTask: CSSProperties = {
  fontSize: '0.75rem',
  borderRadius: '0.25rem',
  padding: '0.1rem 0.2rem',
  marginBottom: '0.1rem',
  cursor: 'pointer',
}

export const calendarItemContent: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '1.5rem 0rem 1rem',
  textAlign: 'left',
}

export const calendarHeader = (): CSSProperties => {
  const palette = usePaletteContext()
  return {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: palette.color1,
  }
}

export const calendarEvent = (): CSSProperties => {
  return {}
}
