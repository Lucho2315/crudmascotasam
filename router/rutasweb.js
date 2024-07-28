router.get('/', (req, res) => {					
    				
    res.render('index', {titulo: "Bienvenido a Node.js con Express y con EJS"});					
})					
                    
router.get("/servicios", (req, res)=>{					
                    
 res.render('servicios', {titulo: "Nuestros Servicios Dinámicos"});					
 });
 
 module.exports= router;