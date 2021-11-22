import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import Label from '@material-ui/core/FormControlLabel'
import Box from '@material-ui/core/Box'

import Panel from '../templates/panel'

const CheckNestUI = () => {
  const [opts, setOpts] = useState([true, true, true])

  const handleCheckbox = i => {
    const arr = [...opts]
    arr[i] = !arr[i]
    setOpts(arr)
  }

  const checkOptions = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
      <Label
        label="option 1"
        control={
          <Checkbox checked={opts[0]} onChange={() => handleCheckbox(0)} />
        }
      />
      <Label
        label="option 2"
        control={
          <Checkbox checked={opts[1]} onChange={() => handleCheckbox(1)} />
        }
      />
      <Label
        label="option 3"
        control={
          <Checkbox checked={opts[2]} onChange={() => handleCheckbox(2)} />
        }
      />
    </Box>
  )

  const isAllChecked = opts[0] && opts[1] && opts[2]
  const hasOneChecked = opts[0] || opts[1] || opts[2]

  return (
    <Panel title="Checkbox Nested">
      <FormControl fullWidth>
        <Label
          label="all options"
          control={
            <Checkbox
              checked={isAllChecked}
              indeterminate={!isAllChecked && hasOneChecked}
              onChange={() =>
                isAllChecked
                  ? setOpts([false, false, false])
                  : setOpts([true, true, true])

              }
            />
          }
        />
      </FormControl>
      {checkOptions}
    </Panel>
  )
}

export default CheckNestUI
