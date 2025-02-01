import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {


  return (
    <div>
      <Container>
        <Product name="Asd" price={123} />
        <Product name="123" price={123}></Product>
      </Container>
    </div>
  )
}

export default App
