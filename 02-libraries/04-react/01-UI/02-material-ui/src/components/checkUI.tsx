import React from 'react'
import Stack from '@material-ui/core/Stack'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import Label from '@material-ui/core/FormControlLabel'
import {
  Favorite,
  FavoriteBorder,
  AddBox,
  AddBoxOutlined,
} from '@material-ui/icons'

import Panel from '../templates/panel'

const CheckUI = () => (
  <Panel title="Checkbox">
    <FormControl fullWidth>
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        <Label label="primary" control={<Checkbox defaultChecked />} />
        <Label
          label="success"
          control={<Checkbox color="success" defaultChecked />}
        />
        <Label
          label="disabled"
          control={<Checkbox disabled defaultChecked />}
        />
        <Label
          label="favorite"
          control={
            <Checkbox
              color="error"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          }
        />
        <Label
          label="add"
          control={
            <Checkbox
              color="success"
              icon={<AddBoxOutlined />}
              checkedIcon={<AddBox />}
            />
          }
        />
      </Stack>
    </FormControl>
  </Panel>
)

export default CheckUI
