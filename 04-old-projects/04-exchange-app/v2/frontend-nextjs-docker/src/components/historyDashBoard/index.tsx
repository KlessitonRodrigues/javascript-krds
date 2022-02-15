import React, { useContext } from 'react'

import Panel from '../../templates/panel'
import PanelTitle from '../../templates/panelTitle/index'
import HistoryItem from '../../templates/historyItem'
import { ExchangeContext } from '../../providers/exchange'
import useTranslation from '../../hooks/userTranslation'

import * as s from './styled'
import translation from './translation'

const HistoryDashboard = () => {
  const [{ history }] = useContext(ExchangeContext)
  const book = useTranslation<typeof translation>(translation)

  return (
    <s.Container>
      <Panel>
        <PanelTitle title={book?.title || ''} />

        <s.HistoryItems className="scroll">
          {history.map((history) => <HistoryItem key={history.createdAt} exchange={history} />).reverse()}
        </s.HistoryItems>
      </Panel>
    </s.Container>
  )
}

export default HistoryDashboard
