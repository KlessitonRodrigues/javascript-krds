import React from 'react'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Panel from '../templates/panel'

const TextFieldUI = () => (
  <Panel title="TextField">
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <TextField label="name" fullWidth />
      </Grid>
      <Grid item xs={6} md={4}>
        <TextField label="last name" variant="filled" fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField label="age" type="number" variant="standard" fullWidth />
      </Grid>
    </Grid>
  </Panel>
)

export default TextFieldUI
