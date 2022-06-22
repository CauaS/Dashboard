import { Box, Grid } from '@mui/material'
import TaskCard from '../taskCard/TaskCard'
import Column from './components/Column'

export default function Dashboard() {
  return (
    <Box data-testid="dashboard" sx={{ marginBottom: 10 }}>
      <Grid
        container
        spacing={1}
        sx={{ flexGrow: 1, paddingTop: 2, height: '100vh' }}
      >
        <Column title="To Do">
          <TaskCard
            title="This is the title for 32541, now it's a bit longer."
            body="This is the title for 32541, now a bit longer than I thought from the previous moment."
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TaskCard
            title="This is the title for 32541, now it's a bit longer."
            body="This is the title for 32541, now a bit longer than I thought from the previous moment."
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TaskCard
            title="This is the title for 32541, now it's a bit longer."
            body="This is the title for 32541, now a bit longer than I thought from the previous moment."
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TaskCard
            title="This is the title for 32541, now it's a bit longer."
            body="This is the title for 32541, now a bit longer than I thought from the previous moment."
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TaskCard
            title="32541"
            body="This the body"
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TaskCard
            title="32541"
            body="This the body"
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <TaskCard
            title="32541"
            body="This the body"
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Column>
        <Column title="In Progress">
          <TaskCard
            title="This is the title for 32541, now it's a bit longer."
            body="This is the title for 32541, now a bit longer than I thought from the previous moment."
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Column>
        <Column title="Blocked">
          <TaskCard
            title="32541"
            body="This the body"
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Column>
        <Column title="Done">
          <TaskCard
            title="This is the title for 32541, now it's a bit longer."
            body="This is the title for 32541, now a bit longer than I thought from the previous moment."
            handleClick={() => null}
            imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </Column>
      </Grid>
    </Box>
  )
}
