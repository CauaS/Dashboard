import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const styleCardMedia = {
  width: 30,
  height: 30,
  borderRadius: 15,
  marginRight: 1
}
export default function TaskCard() {
  return (
    <Card sx={{ marginTop: 1 }}>
      <CardContent data-testid="card-content">
        <Typography gutterBottom variant="h5" component="div">
          33587
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          This a brief descripton for the item in this collumn
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small">DETAILS</Button>
        <CardMedia
          component="img"
          sx={styleCardMedia}
          image="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Live from space album cover"
        />
      </CardActions>
    </Card>
  )
}
