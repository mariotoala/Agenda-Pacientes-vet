import HeaderApp from "./components/HeaderApp";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
const [pacientes,setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <HeaderApp  nombre='mario' />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
