const ulrEstudiantes = "http://localhost/ArTeM01-054/Profesor/backend/controles/campers.php?op=GetAll   "


export const getEstudiantes = async () =>{
    try{
        const result = await fetch (ulrEstudiantes);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
};

