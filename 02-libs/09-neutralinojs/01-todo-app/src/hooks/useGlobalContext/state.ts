export type GlobalState = {
  sidePanel: {
    settings: boolean
    tags: boolean
  }
  theme: 'cian' | 'cianDark'
}

export const globalState: GlobalState = {
  sidePanel: {
    settings: false,
    tags: false,
  },
  theme: 'cian',
}
