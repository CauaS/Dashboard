import { CardHeader, Icon, Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { TaskCardProps } from './types'

import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import LowPriorityIcon from '@mui/icons-material/LowPriority'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

const styleCardMedia = {
  width: 30,
  height: 30,
  borderRadius: 20
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <Card sx={{ marginTop: 0.5 }} onClick={props.handleClick}>
      <CardHeader
        title={
          <Typography variant="body1" color="text.secondary">
            {props.title}
          </Typography>
        }
        avatar={
          <Avatar sx={styleCardMedia} sizes="25" src={props.imageAuthor} />
        }
      />
      <CardContent data-testid="card-content">
        <Typography variant="body2" color="text.secondary">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="flex-end" spacing={2}>
          <Icon color="primary" aria-label="upload picture" component="span">
            <PriorityHighIcon color="error" />
          </Icon>
          <Icon color="primary" aria-label="upload picture" component="span">
            <LowPriorityIcon color="warning" />
          </Icon>
          <Icon color="primary" aria-label="upload picture" component="span">
            <DensityMediumIcon color="primary" />
          </Icon>
        </Stack>
      </CardActions>
    </Card>
  )
}
