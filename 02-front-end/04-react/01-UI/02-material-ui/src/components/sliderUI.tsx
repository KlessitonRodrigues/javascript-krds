import React from 'react'
import Stack from '@material-ui/core/Stack'
import Slider from '@material-ui/core/Slider'
import { VolumeDown, VolumeUp } from '@material-ui/icons'

import Panel from '../templates/panel'

const SliderUI = () => (
  <Panel title="Slider">
    <Stack direction="row">
      <VolumeDown />
      <VolumeUp />
    </Stack>
  </Panel>
)

export default SliderUI
