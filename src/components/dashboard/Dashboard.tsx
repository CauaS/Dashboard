import { Box, Grid } from '@mui/material'
import TaskCard from '../taskCard/TaskCard'
import Column from './components/Column/Column'

function Dashboard() {
  return (
    <Box
      sx={{ flexGrow: 1, marginTop: 2, height: '100vh', overflow: 'hidden' }}
      data-testid="dashboard"
    >
      <Grid container spacing={1}>
        <Column title="To Do">
          <TaskCard
            body="body"
            handleClick={() => null}
            imageAuthor=""
            title="Title"
          />
          <TaskCard
            body="body"
            handleClick={() => null}
            imageAuthor=""
            title="Title"
          />
          <TaskCard
            body="body"
            handleClick={() => null}
            imageAuthor=""
            title="Title"
          />
        </Column>
        <Column title="In Progress" />
        <Column title="Blocked" />
        <Column title="Done" />
      </Grid>
    </Box>
  )
}

export default Dashboard
