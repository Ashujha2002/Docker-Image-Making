const express = require('express');

const app = express();

app.get("/", (req,res)=>{
    res.json(
        [
           { id: 1,
            name: "Ashutosh Jha",
            employeeSalary: 12000
           },
           
           {
            id:2,
            name: "Ravi",
            employeeSalary: 140000
           }
        ]
    )
})

app.listen(4000, () =>{
    console.log("App is running on port 4000")
})