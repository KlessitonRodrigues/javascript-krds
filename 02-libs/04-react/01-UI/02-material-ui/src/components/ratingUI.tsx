import React from 'react'
import Rating from '@material-ui/core/Rating'
import Typography from '@material-ui/core/Typography'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

import Panel from '../templates/panel'

const RatingUI = () => (
  <Panel title="Rating">
    <Typography component="legend">Cars</Typography>
    <Rating
      name="Cars"
      icon={<Favorite color="error" />}
      emptyIcon={<FavoriteBorder />}
    />
    <Typography component="legend">Bikes</Typography>
    <Rating name="Bikes" />
    <Typography component="legend">Trucks</Typography>
    <Rating name="Trucks" />
  </Panel>
)

export default RatingUI
