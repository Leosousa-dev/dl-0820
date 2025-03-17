import Hero from './components/hero/hero'
import { Analytics } from "@vercel/analytics/react"
import List from './components/uiComponents/list/list'

import './App.css'

function App() {

  return (
    <>
        <Analytics/>
        <Hero/>
        {/* <Button>😋    Pedir agora !</Button> */}
        <List />
    </>
  )
}

export default App
