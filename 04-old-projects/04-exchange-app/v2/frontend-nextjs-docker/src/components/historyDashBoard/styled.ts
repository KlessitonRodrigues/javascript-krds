import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    margin-top: 0;
  }
`

export const HistoryItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow-y: auto;
  padding: 0 0.5rem;
  max-height: 735px;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    height: 735px;
  }
`
