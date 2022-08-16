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
import React from 'react'
import { AuthContext } from '../../context/firstContext/authContext'

const styleCardMedia = {
  width: 30,
  height: 30,
  borderRadius: 20
}

export default function TaskCard(props: TaskCardProps) {
  const { auth } = React.useContext(AuthContext)

  return (
    <Card sx={{ marginTop: 0.5 }} onClick={() => props.handleClick('new Auth')}>
      <CardHeader
        title={
          <Typography variant="body1" color="text.secondary">
            {props.title} - {auth.name}
          </Typography>
        }
        avatar={
          <Avatar sx={styleCardMedia} sizes="25" src={props.imageAuthor} />
        }
      />
      <CardContent data-testid="card-content">
        <Typography variant="body2" color="text.secondary" noWrap>
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
