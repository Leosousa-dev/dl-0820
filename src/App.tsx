import {Container} from './ui'
import Hero from './components/Hero'
import ProductList from './components/products'

import './App.css'

function App() {
  return (
    <Container>
        <Hero/>
        <ProductList/>
    </Container>
  )
}

export default App
