import React from 'react'
import Fab from '@material-ui/core/Fab'
import { Add } from '@material-ui/icons'

import Panel from '../templates/panel'

const FabUI = () => (
  <Panel title="Float Action button (FAB)">
    <Fab color="primary" aria-label="add" size="medium">
      <Add />
    </Fab>
  </Panel>
)

export default FabUI
