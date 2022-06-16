import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import TaskCard from '../../taskCard/TaskCard'

type ColumnProps = {
  title: string
}

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginBottom: 4,
  color: theme.palette.text.secondary
}))

const style = {
  maxHeight: '100vh',
  overflow: 'auto'
}

const sxScrollbar = {
  '&::-webkit-scrollbar': {
    width: 5
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#979796'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#f2f2f2',
    borderRadius: 2
  }
}
function Column({ title }: ColumnProps) {
  return (
    <Grid item xs={3} data-testid="column">
      <Title>{title}</Title>
      <Box style={style} sx={sxScrollbar}>
        <TaskCard
          title="32541"
          body="This the body"
          handleClick={() => null}
          imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </Box>
    </Grid>
  )
}

export default Column
