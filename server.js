const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
const path = require('path');
app.use(bodyParser.json())
const roll = "12008463"
const userid = "bharatkumar_27022003"
const email = "bharatkumarmareedu@gmail.com"
// Render Html File
app.post('/bfhl', function(req, res) {
  var body = [];
  // body = req.body.data.split(",");
  body = req.body.data;
  var odd = [];
  var even = [];
  var alpha = [];
  body.forEach((val)=>{
    if(!isNaN(val)){
      if(val%2==0)
      even.push(val);
      else
        odd.push(val);
    }else{
      alpha.push(val);
    }
  })
  res.json({"is_success":true, "userid":userid, "email": email,"roll_number":roll, "odd_numbers":odd, "even_numbers":even, "alphabets":alpha});
});


app.listen(port, () => {
})