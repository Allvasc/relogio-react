import { useEffect, useState } from "react";
import './App.css'

function App() {

  const [horas, setHoras] = useState()
  const [minutos, setMinutos] = useState()
  const [segundos, setSegundos] = useState()

  useEffect(() => {
    setInterval(() => {
      let day = new Date()
      setHoras(day.getHours() * 30)
      setMinutos(day.getMinutes() * 6)
      setSegundos(day.getSeconds() * 6)
    })
  }, [])

  const moveHor = {
    transform: `rotateZ(${horas + (minutos / 12)}deg)`,
  }

  const moveMin = {
    transform: `rotateZ(${minutos}deg)`,
  }

  const moveSec = {
    transform: `rotateZ(${segundos}deg)`,
  }

  return (
    <div className="App">

      <div style={moveSec} className="circle1 circle"><i></i></div>
      <div style={moveMin} className="circle2 circle"><i></i></div>
      <div style={moveHor} className="circle3 circle"><i></i></div>

      <div>
        <div className="clock">
          <span><b className="primeiro">1</b></span>
          <span><b className="segundo">2</b></span>
          <span><b className="terceiro">3</b></span>
          <span><b className="quarto">4</b></span>
          <span><b className="quinto">5</b></span>
          <span><b className="sexto">6</b></span>
          <span><b className="setimo">7</b></span>
          <span><b className="oitavo">8</b></span>
          <span><b className="nono">9</b></span>
          <span><b className="decimo">10</b></span>
          <span><b className="decimo-primeiro">11</b></span>
          <span><b className="decimo-segundo">12</b></span>
        </div>
      </div>
    </div>
  );
}

export default App;
