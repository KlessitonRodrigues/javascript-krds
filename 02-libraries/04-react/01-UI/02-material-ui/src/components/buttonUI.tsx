import React from 'react'
import Stack from '@material-ui/core/Stack'
import Button from '@material-ui/core/Button'

import Panel from '../templates/panel'

const ButtonUI = () => (
  <Panel title="Buttons">
    <Stack direction="row" spacing={2} justifyContent="center" p={1}>
      <Button variant="contained" color="primary">
        contained
      </Button>
      <Button variant="outlined" color="primary">
        outlined
      </Button>
      <Button variant="text" color="primary">
        text
      </Button>
    </Stack>
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      justifyContent="center"
      p={1}
      pt={1}
    >
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="success">
        success
      </Button>
      <Button variant="contained" color="info">
        info
      </Button>
      <Button variant="contained" color="warning">
        warning
      </Button>
      <Button variant="contained" color="error">
        error
      </Button>
    </Stack>
  </Panel>
)

export default ButtonUI
