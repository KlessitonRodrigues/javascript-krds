import React from 'react'
import Stack from '@material-ui/core/Stack'
import Slider from '@material-ui/core/Slider'
import { VolumeDown, VolumeUp } from '@material-ui/icons'

import Panel from '../templates/panel'

const SliderUI = () => (
  <Panel title="Slider">
    <Stack>
      <VolumeDown />
      <Slider aria-label="volume" />
      <VolumeUp />
    </Stack>
  </Panel>
)

export default SliderUI
