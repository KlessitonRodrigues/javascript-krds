import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Text from '@material-ui/core/Typography'

type Props = {
  children: React.ReactNode
  title: string
}

const Panel = ({ children, title }: Props) => (
  <Paper>
    <Box p={2} mb={3}>
      <Text fontSize={18} fontWeight="bold" mb={1}>
        {title}
      </Text>
      <Box>{children}</Box>
    </Box>
  </Paper>
)

export default Panel
