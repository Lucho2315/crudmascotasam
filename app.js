const express = require('express')					
const app = express()					
const port = 3000					
					
/* establecemos el motor de plantillas */					
app.set('view engine', 'ejs');					
app.set('views', __dirname + '/views');					
					
/* middleware para contenido estatico */ 					
app.use(express.static(__dirname + '/public'));					
					
/* rutas web*/

app.use('/', require('./router/rutasweb'));
app.use('/mascotas', require('./router/mascotas'));
		
					
/* direccionar a vista 404 cuando se presente el error 404 */					
app.use((req, res, next)=>{					
  res.status(404).render('404', {					
    titulo: "Error 404",					
    descripcion: "Página No Encontrada"					
  });					
})					
					
app.listen(port, () => {					
  console.log(`Ejemplo aplicación Node con Express escuchando en puerto ${port}`);					
})					
