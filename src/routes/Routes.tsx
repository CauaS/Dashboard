import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages'
import { ROUTES } from './Router'

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
