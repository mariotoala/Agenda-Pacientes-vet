function HeaderApp({nombre}) {
    console.log(nombre);

    return (
      
            <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">Seguimiento Pacientes {' '}
                <br/><spam className="text-indigo-600">Veterinaria</spam>    
            </h1>
        
    )
}

export default HeaderApp