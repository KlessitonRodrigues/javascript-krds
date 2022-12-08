import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

const Body = (props: PropsWithChildren) => <Box p={2}>{props.children}</Box>;

export default Body;
