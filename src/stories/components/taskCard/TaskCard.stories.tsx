import { Story } from '@storybook/react'
import { TaskCard } from '../../../components'
import { TaskCardProps } from '../../../components/taskCard/types'

export default {
  title: 'TaskCard',
  component: TaskCard,
  argTypes: {
    handleClick: {
      action: 'Something on Click'
    }
  }
}

export const Template: Story<TaskCardProps> = args => <TaskCard {...args} />

export const WithLargeDescription = Template.bind({})

WithLargeDescription.args = {
  title: '33568',
  body: 'This is a larg description for an item',
  imageAuthor:
    'https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
}
