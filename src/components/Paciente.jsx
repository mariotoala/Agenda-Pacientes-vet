import React from 'react'

const Paciente = ({ paciente, setPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas } = paciente;
    return (
        <div className="m-5 my-10  bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
                <spam className='font-normal normal-case'>{nombre}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
                <spam className='font-normal normal-case'>{propietario}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
                <spam className='font-normal normal-case'>{email}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
                <spam className='font-normal normal-case'>{fecha}</spam>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
                <spam className='font-normal normal-case'>{sintomas}</spam>
            </p>

            <div className='flex justify-between mt-10'>
                <button 
                type = "button" 
                onClick={()=>setPaciente(paciente)}
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg' 
               
                >editar</button>
                <button type = "button" className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>eliminar</button>

            </div>

        </div>
    )
}

export default Paciente
