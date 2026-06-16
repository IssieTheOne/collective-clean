import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Diensten from './pages/Diensten'
import OverOns from './pages/OverOns'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/diensten" element={<Diensten />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
