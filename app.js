var express = require('express')
var path = require('path')

var app = express()
var apiRouter = require('./routes/api_router')
//db.connect()

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', apiRouter)

//app.get('/hello', (request, response)=>{
  //  var name = "배남석"
    ////console.log(request)
   // response.render("hello.ejs",{data:name})
    //response.send("hello world")
// })

//app.get('/data', (req, res)=>{
 //   var sql = 'SELECT * FROM topic'
 //   db.query(sql , (err , result)=>{
 //       if(err){
  //      console.log(err)
  //  } else {
 //       console.log(result[0].description)
        //res.send(result[0].author+'수업은'+result[0].title)
        //res.send(`${result[0].author} 수업은 ${result[0].title}`)
 //       res.render('data', {result:result})
 //   }
//)
//})

    //console.log(path.join(__dirname + '/views'))

var port = 8000;

app.listen(port, ()=>{
    console.log('server is Runing at http://localhost:8000')

})