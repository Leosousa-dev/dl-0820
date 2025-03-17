import { Analytics } from "@vercel/analytics/react"
import Hero from './components/hero/hero'
import { Product } from './components/product/product'

import './App.css'

function App() {

  return (
    <>
        <Analytics/>
        <Hero/>
        <Product/>
    </>
  )
}

export default App
