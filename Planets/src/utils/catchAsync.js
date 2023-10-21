module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch((err) => next(err))
  };
}; 

/* es una funcion que recibe una funcion retorna una funcion y a la vez ejecuta la funcion recibida y ahi 
atrapo el error si es que hubiera */
//(fn)=>(req,res,next)=>fn(req,res).catch((err)=>next(err)); //parece chino pero es solo arrow functions