import { useState } from "react";
import { calculatePorcent } from "./helpers";
import Spinner from "./components/Spinner";


const App = () => {
  const [error, setError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [mount, setMount] = useState(0);
  const [months, setMonths] = useState(0);

  const handleClick = () => {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    const [input, select] = e.target;

    if(input.value == "" || select.value == ""){
      setError(true);
      setMount(parseInt(input.value));
      setMonths(parseInt(select.value));
      return;
    }else{
      setMount(parseInt(input.value));
      setMonths(parseInt(select.value));
    }

    setError(false);
  };

  return (
    <>
      <div className="grid place-items-center h-screen mx-auto w-[90%]">
        <div className="border rounded-md px-6 pt-4 pb-10 mx-auto">
          <h2 className="text-2xl text-black font-semibold mb-2">Cotizador de Prestamos</h2>
          <p className="text-slate-600 mb-5 w-[90%] text-sm">Ingrese los detalles de su préstamo para obtener una cotización.</p>
          <form onSubmit={handleSubmit}>
            <label className="block text-slate-950 text-1xl font-medium">Monto Del Préstamo</label>
            <input placeholder="Ingrese el monto" className="border rounded-md w-full mb-3 mt-3 py-2 px-3 outline-none focus:outline-zinc-400 text-sm" type="number" name="" id="" />

            <label className="block text-slate-950 text-1xl font-medium">Plazo del Préstamo</label>
              <select className="peer w-full mb-10 mt-3 py-2 px-3 outline-none border rounded-md focus:outline-zinc-400 text-sm" name="" id="">
                <option value="">Seleccione un mes</option>
                <option value="3">3 Meses</option>
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
              </select>
              
            <button onClick={handleClick} className="bg-zinc-900 text-white font-medium block w-full py-2 rounded-md hover:bg-zinc-800">Cotizar Prestamo</button>
          </form>

          
          { showSpinner? <Spinner /> : calculatePorcent(mount, months)[1]?
            <>
              <p className="text-2xl mt-10 text-center text-slate-600 ">Porcentaje de Comisión: %{calculatePorcent(mount, months)[0]} </p>
              <p className="text-2xl mt-2 text-center text-slate-600 ">Pagar: ${mount + calculatePorcent(mount, months)[1]}</p>
            </> 
            : error? <p className="text-red-500 border border-red-500 p-2 mt-10 rounded-md text-center text-1xl">Todos los campos son obligatorios</p> : null
          }
        </div>
      </div>
    </>
  );
} 

export default App;