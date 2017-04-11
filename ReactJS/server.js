let app = require('express')()
let fs = require("fs");
let bp = require('body-parser')
let arr = []

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send(arr)
})

app.post('/', (req,res) => {
    arr.push(req.body.data)
    res.send('berhasil')
})

app.listen(7654, () => {
    console.log('server listening...')
})