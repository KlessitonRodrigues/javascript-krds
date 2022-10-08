import React from 'react'
import ButtonGp from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Stack from '@material-ui/core/Stack'

import Panel from '../templates/panel'

const ButtonGpUI = () => (
  <Panel title="Button Group">
    <Stack spacing={1} justifyContent="center" direction="row">
      <ButtonGp variant="contained">
        <Button>btn</Button>
        <Button>btn</Button>
        <Button>btn</Button>
      </ButtonGp>
      <ButtonGp variant="text" color="secondary">
        <Button>btn</Button>
        <Button>btn</Button>
        <Button>btn</Button>
      </ButtonGp>
    </Stack>
  </Panel>
)

export default ButtonGpUI
