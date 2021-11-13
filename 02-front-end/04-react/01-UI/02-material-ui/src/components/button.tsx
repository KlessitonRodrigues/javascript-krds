import React from 'react'
import Stack from '@material-ui/core/Stack'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

import Panel from '../templates/panel'

const ButtonUI = () => (
  <Paper>
    <Stack direction="row" spacing={1} >
      <Button variant="contained" color="primary">
        click me
      </Button>
      <Button variant="contained" color="primary">
        click me
      </Button>
      <Button variant="contained" color="primary">
        click me
      </Button>
    </Stack>
  </Paper>
)

export default ButtonUI
