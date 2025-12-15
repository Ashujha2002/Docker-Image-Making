const express = require('express');

const app = express();

app.get("/", (req,res)=>{
    res.json(
        [
           { id: 1,
            name: "Ashutosh Jha",
            employeeSalary: 1200
           },
           
           {
            id:2,
            name: "Ravi",
            employeeSalary: 14000
           },
           
           {
            id:3,
            name: "Kishan Mishra",
            employeeSalary: 10000
           },
           {
            id: 4,
            name: "Kusum Jha",
            employeeSalary: 7000
           }
        ]
    )
})

app.listen(4000, () =>{
    console.log("App is running on port 4000")
})