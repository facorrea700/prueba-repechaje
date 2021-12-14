import "./App.css";
import "./components/Pais";
import axios from "axios";
import { useState } from "react";

function App() {
  const [paises, setPaises] = useState([]);
  axios.get("https://restcountries.com/v3.1/all").then((res) => {
    console.log(res);
    setPaises(res.data);
  });

  console.log(paises);
  return (
    <div className="App">
      <button>Prueba Repechaje</button>
      {paises.map((pais) => (
        <pais key={pais.name} name={pais.name} />
      ))}
    </div>
  );
}

export default App;
