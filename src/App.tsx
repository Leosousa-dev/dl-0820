import { Analytics } from "@vercel/analytics/react"
import Hero from './components/hero/hero'
import {Button} from './components/ui/button/button'
import { Product } from './components/product/product'

import './App.css'

function App() {

  return (
    <>
        <Analytics/>
        <Hero/>
        <Product/>
        {/* <Button>😋   Pedir agora !</Button> */}
    </>
  )
}

export default App
