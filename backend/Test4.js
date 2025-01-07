const http=require('http');
const myServer=http.createServer((request,response)=>{
    response.write("This is 1st response"+"\n");
    response.write("This is 2nd response"+"\n")
    response.write("This is 3rd response"+"\n")
    response.end();
})
myServer.listen(5577,()=>{
    console.log("My Server is running on port number 5577");
})