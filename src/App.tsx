import {Container} from './ui'
import Hero from './components/Hero'
import ProductList from './components/products'
import Order from './components/order'
import { Analytics } from "@vercel/analytics/react"


import './App.css'

function App() {

  return (
    <Container>
      <Analytics/>
        <Hero/>
        <ProductList/>
        <Order/>
    </Container>
  )
}

export default App
