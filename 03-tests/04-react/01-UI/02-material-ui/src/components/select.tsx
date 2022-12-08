import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const SelectUI = () => (
  <FormControl>
    <InputLabel id="selectui">Age</InputLabel>
    <Select labelId="selectui" id="select" label="age">
      <MenuItem value="10+">10+</MenuItem>
      <MenuItem value="20+">20+</MenuItem>
      <MenuItem value="30+">30+</MenuItem>
      <MenuItem value="40+">40+</MenuItem>
      <MenuItem value="50+">50+</MenuItem>
    </Select>
  </FormControl>
)

export default SelectUI
