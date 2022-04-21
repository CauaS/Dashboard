import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Wrapper } from '../components'
import { ROUTES } from './Router'

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<Wrapper />} />
      </Routes>
    </BrowserRouter>
  )
}
