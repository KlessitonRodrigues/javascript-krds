import React from 'react'

import Panel from '../templates/panel'
import PanelCard from '../templates/panelCard'
import Button from '@material-ui/core/Button'

const ButtonUI = () => (
  <Panel>
    <PanelCard>
      <Button variant="contained" color="primary">
        click me
      </Button>
    </PanelCard>
  </Panel>
)

export default ButtonUI
