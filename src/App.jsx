import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import FlashSales from './Components/FlashSales'
import LiquidEther from './Components/LiquidEther'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Nav />
    <div style={{ width: '100%', height: 600, position: 'relative' }}>
  <LiquidEther
    colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div>
    <Banner />
    <FlashSales/>
    </>
  )
}

export default App
