import { Route, Routes } from "react-router-dom"
import Clients from "./pages/Clients/Clients"
import Home from "./pages/Home"

const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clients" element={<Clients />} />
    </Routes>
  </div>
)

export default App
