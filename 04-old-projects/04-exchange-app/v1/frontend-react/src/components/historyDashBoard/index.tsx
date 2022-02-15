import React, { useContext } from 'react'

import Panel from '../../templates/panel'
import PanelTitle from '../../templates/panelTitle/index'
import HistoryItem from '../../templates/historyItem'
import { ExchangeContext } from '../../providers/exchange'

import * as s from './styled'

const HistoryDashboard = () => {
  const [{ history }] = useContext(ExchangeContext)

  return (
    <s.Container>
      <Panel>
        <PanelTitle title="Latest Exchanges" />
        <s.HistoryItems className="scroll">
          {history.map((history) => <HistoryItem key={history.createdAt} exchange={history} />).reverse()}
        </s.HistoryItems>
      </Panel>
    </s.Container>
  )
}

export default HistoryDashboard
