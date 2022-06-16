import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { TaskCardProps } from './types'

import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import LowPriorityIcon from '@mui/icons-material/LowPriority'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

const styleCardMedia = {
  width: 25,
  height: 25,
  borderRadius: 12,
  marginRight: 1
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <Card sx={{ marginTop: 0.5 }} onClick={props.handleClick}>
      <CardContent data-testid="card-content">
        <Typography gutterBottom variant="h6" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {props.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <PriorityHighIcon color="error" fontSize="small" />
        <LowPriorityIcon color="primary" fontSize="small" />
        <DensityMediumIcon color="disabled" fontSize="small" />
        <CardMedia
          component="img"
          sx={styleCardMedia}
          image={props.imageAuthor}
          alt="Live from space album cover"
        />
      </CardActions>
    </Card>
  )
}
