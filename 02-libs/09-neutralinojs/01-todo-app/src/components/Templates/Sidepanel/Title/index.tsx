import { Typography } from '@mui/material'
import { ReactElement } from 'react'

import Flex from '../../Flex'

type Props = {
  icon: ReactElement
  title: string
}

const SidepanelTitle = (props: Props) => (
  <Flex y="center" xContent="start">
    {props.icon}
    <Typography variant="h2">&nbsp;{props.title}</Typography>
  </Flex>
)

export default SidepanelTitle
