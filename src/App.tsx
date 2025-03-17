import Hero from './components/hero/hero'
import { Analytics } from "@vercel/analytics/react"


import './App.css'

function App() {

  return (
    <>
        <Analytics/>
        <Hero/>
    </>
  )
}

export default App
