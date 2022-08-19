import { render, screen } from '@testing-library/react'
import { SideBar } from '../Testing/Sidebar'

test('Render multiple items', () => {
  const items = [
    {
      name: 'name',
      href: 'href'
    }
  ]
  render(<SideBar items={items} />)
  const anchorElements = screen.getAllByRole('navigation')
  expect(anchorElements[0]).toHaveTextContent(items[0].name)
  expect(anchorElements[0]).toHaveAttribute('href', items[0].href)
})
