import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

const SidepanelSection = (props: Props) => (
  <Box pt={6}>
    <Typography variant="caption">{props.title}</Typography>
    <hr style={{ borderBottom: '1px solid #2221' }} />
    {props.children}
  </Box>
)

export default SidepanelSection
