import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { TaskCardProps } from './types'

const styleCardMedia = {
  width: 30,
  height: 30,
  borderRadius: 15,
  marginRight: 1
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <Card sx={{ marginTop: 1 }}>
      <CardContent data-testid="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {props.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small" onClick={props.handleClick}>
          DETAILS
        </Button>
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
