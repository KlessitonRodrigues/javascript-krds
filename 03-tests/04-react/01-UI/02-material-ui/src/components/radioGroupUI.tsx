import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

import Panel from '../templates/panel'

const RadioGroupUI = () => (
  <Panel title="Radio Group">
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        defaultValue="female"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  </Panel>
)

export default RadioGroupUI
