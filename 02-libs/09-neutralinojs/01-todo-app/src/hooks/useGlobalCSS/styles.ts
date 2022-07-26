import usePaletteContext from '../usePaletteContext'

export default () => {
  const palette = usePaletteContext()
  return [
    `.color1-bg-hover {background-color: ${palette.color1} !important;}`,
    `.color1-bg-hover:hover {background-color: ${palette.color1Dark} !important;}`,
    `.color1-border-hover:hover {border-color: ${palette.color1}88 !important;}`,
    `.dark-text-hover:hover {color: ${palette.dark} !important;}`,
  ].join('')
}
