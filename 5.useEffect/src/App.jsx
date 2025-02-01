import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  })

  useEffect(() => {
    console.log("component ilk render edildiğinde çalışır");
  }, [])

  useEffect(() => {
    console.log("component ilk render edildiğinde ve first name değeri değiştiğinde çalışır.");
  }, [firstName])

  return (
    <div>
      <button onClick={() => setFirstName("Murat")}>Adı değiştir</button>
    </div>
  )
}

export default App
