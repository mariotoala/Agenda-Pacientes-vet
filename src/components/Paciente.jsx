import React from 'react'

const Paciente = () => {
  return (
    <div className="m-3  bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
        <spam className='font-normal normal-case'>Hook</spam>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
        <spam className='font-normal normal-case'>Mario</spam>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
        <spam className='font-normal normal-case'>mariotoala96gmail.com</spam>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
        <spam className='font-normal normal-case'>18 de enero del 2024</spam>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
        <spam className='font-normal normal-case'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</spam>
    </p>

</div>
  )
}

export default Paciente
