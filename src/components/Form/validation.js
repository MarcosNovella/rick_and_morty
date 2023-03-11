const validation = (userData)=>{
    const errors = {}

    if(!/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{3})+$/.test(userData.username))errors.username = 'debe ser un mail' ;
    
    if(!userData.username) errors.username='completar este campo';
    
    if(userData.username.length > 35) errors.username = 'tu user es demasiado largo'
    
    if(!userData.password.match(/\d/))errors.password='tu constraseña es invalida bobo'
    
    if(userData.password.length < 6 && userData.password.length >10)errors.password= 'tu contraseña es invalida'

    return errors;
}
    

export default validation