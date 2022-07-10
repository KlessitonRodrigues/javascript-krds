import Box from '@mui/material/Box'

import { tagItem } from '../styles'

type Props = {
  label: string
}

const TagItem = (props: Props) => {
  return <Box style={tagItem}>{props.label}</Box>
}

export default TagItem
