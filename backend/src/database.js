const mongoose= require('mongoose')

//no hace falta crear manualmente una bd "pedidosya" dentro de mongodb
//el mismo mongodb se encarga de crearla si es que noe xiste
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://GabrielCarames:Ab8azzEsDDsh4iCO@clusterparches.npjim.mongodb.net/pedidosya?retryWrites=true&w=majority'
//process es un objeto de JS de node que tiene la info del sistema operativo, ENV son las variables de entorno
//OPERADOR ALTERNARIO, basicamnete es un if else, pero de una sola linea
//Si encuentra la variable de entorno, la usa, caso contrario usa la direccion

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const connection = mongoose.connection

connection.once('open', () => {
    console.log("Database Connected")
})