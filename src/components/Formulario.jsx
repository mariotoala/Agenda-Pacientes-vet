import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';


const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando formulario ...");

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay al menos un campo vacio');
            setError(true);
            return;
        }
        setError(false);

        const objPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        };

        //console.log(objPaciente);
        setPacientes([...pacientes, objPaciente]);

        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text text-3xl text-center' >Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {' '}<spam className="text-indigo-600 font-bold ">Administralos</spam></p>
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' >
                {error && < Error mensaje ='Todos los campos son obligatorios'/>}
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-grey-700 uppercase font-bold'>
                        Nombre mascota                        </label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-grey-700 uppercase font-bold'>
                        Nombre del propietario                        </label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre del propietario  '
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-grey-700 uppercase font-bold'>
                        Email Contacto Propietario                        </label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email Contacto Propietario'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-grey-700 uppercase font-bold'>
                        Alta                        </label>
                    <input
                        id='alta'
                        type="Date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-grey-700 uppercase font-bold'>
                        Sintomas                        </label>
                    <textarea
                        id="sintomas"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type='submit'
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                    value='Agregar Paciente'
                />


            </form>
        </div>


    )
}

export default Formulario
