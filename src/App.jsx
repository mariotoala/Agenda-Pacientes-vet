import HeaderApp from "./components/HeaderApp";
import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <HeaderApp />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
