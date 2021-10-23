const port=3000;

const fastify = require('fastify')({
    logger: {
      level: 'debug',//application logs
      file: './Logs/serverLog.log', //logs location 
      //prettyPrint: true
    }
  })

  
  const routes  = require('../src/routes/routes')


routes.forEach((route, index) => {
    fastify.route(route)
})




  const startServer= async ()=>{

    try{
        await fastify.listen(port);
        console.log('server is listen')
    }catch(err){
        fastify.log.console.error(err);
        process.exit(1);
    }

  }

  startServer();