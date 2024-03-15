import { Route, Routes } from "react-router-dom"
import { About, Home, Store } from "./pages"
import { Navbar } from "./components"
import { Container } from "react-bootstrap"


function App() {

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
