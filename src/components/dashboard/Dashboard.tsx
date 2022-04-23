import { Box, Grid } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { TaskCard } from '..'

export default function Dashboard() {
  const Title = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom: 4,
    color: theme.palette.text.secondary
  }))

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

  const style = {
    maxHeight: '100vh',
    overflow: 'auto'
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Title>To do</Title>
          <Box style={style} sx={sxScrollbar}>
            <TaskCard
              title="32541"
              body="This the body"
              handleClick={() => null}
              imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Title>In progress</Title>
          <Box style={style} sx={sxScrollbar}>
            <TaskCard
              title="32541"
              body="This the body"
              handleClick={() => null}
              imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Title>Blocked</Title>
          <Box style={style} sx={sxScrollbar}>
            <TaskCard
              title="32541"
              body="This the body"
              handleClick={() => null}
              imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Title>Done</Title>
          <Box style={style} sx={sxScrollbar}>
            <TaskCard
              title="32541"
              body="This the body"
              handleClick={() => null}
              imageAuthor="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
