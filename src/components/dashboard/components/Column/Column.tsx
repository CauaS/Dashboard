import { Box, Grid, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

type ColumnProps = {
  title: string
  children?: React.ReactNode
}

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginBottom: 4,
  color: theme.palette.text.secondary,
  position: 'relative'
}))

const Count = ({ numberOfElments }: { numberOfElments: number }) => {
  return (
    <span style={{ position: 'absolute', right: 10 }}>{numberOfElments}</span>
  )
}

const style = {
  maxHeight: '100vh',
  overflow: 'auto'
}

const sxScrollbar = {
  '&::-webkit-scrollbar': {
    width: 5,
    scrollPadding: 5
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#979796'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#f2f2f2',
    borderRadius: 2
  }
}

function Column({ title, children }: ColumnProps) {
  const numberOfElements = React.Children.count(children)
  return (
    <Grid item xs={3} data-testid="column">
      <Title>
        {title}
        {numberOfElements > 0 && <Count numberOfElments={numberOfElements} />}
      </Title>
      <Box style={style} sx={sxScrollbar}>
        {children}
      </Box>
    </Grid>
  )
}

export default Column
