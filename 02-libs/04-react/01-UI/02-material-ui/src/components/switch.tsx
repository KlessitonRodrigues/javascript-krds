import React from 'react'
import FormGroup from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FCLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import Panel from '../templates/panel'

const SwitchUI = () => (
  <Panel title="Switch">
    <FormGroup>
      <FormLabel component="legend">Transport</FormLabel>
      <FCLabel label="car" control={<Switch defaultChecked />} />
      <FCLabel label="truck" control={<Switch color="error" />} />
    </FormGroup>
  </Panel>
)

export default SwitchUI
