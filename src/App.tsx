import {Container} from './ui'
import Hero from './components/Hero'
import ProductList from './components/products'
import Order from './components/order'

import './App.css'

function App() {
  const message = 'Olá! Gostaria de saber mais sobre...';

  return (
    <Container>
        <Hero/>
        <ProductList/>
        <Order message={message}/>
    </Container>
  )
}

export default App
