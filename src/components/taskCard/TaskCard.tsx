import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
