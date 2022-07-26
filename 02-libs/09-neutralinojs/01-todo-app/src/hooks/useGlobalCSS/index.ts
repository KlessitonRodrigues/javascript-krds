import cssStyles from './styles'

const useGlobalCSS = () => {
  const htmlHead = document.querySelector('head') as HTMLHeadElement
  const styleEl = document.createElement('style')
  styleEl.innerHTML = cssStyles()
  htmlHead.appendChild(styleEl)
}

export default useGlobalCSS
