const json_server=require('json-server');
const middleware=json_server.defaults();
const expense_server=json_server.create() ;
const router=json_server.router('db.json');
const cors=require('cors')
// The above code will create a server
expense_server.use(cors())
// create middleware for converting json-js
expense_server.use(middleware)
expense_server.use(router)

const port=9000;
expense_server.listen(port,()=>{
    console.log(`The video server started at port  ${port}`);
})