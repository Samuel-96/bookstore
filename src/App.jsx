import './App.css'
import Home from "./pages/home"
import { CarritoProvider } from './CarritoContext'
function App() {

  

  return (
    <>
      <CarritoProvider>
        <Home />
      </CarritoProvider>
    </>
  )
}

export default App
