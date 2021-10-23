

const controllers=require('../controllers/test');

const ORCcontrollers=require('../controllers/ORC');


const routes=[

    {
        method: 'GET',
        url: '/api/hi',
        handler: controllers.hello
    },
    {
        method: 'POST',
        url: '/api/ReadPage',
        handler: ORCcontrollers.ReadPage
    }
    
]

module.exports = routes