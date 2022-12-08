const csv = require("csv-parser")
const fs = require("fs")

const results= []

fs.createReadStream("business-financial-data-june-2022-quarter-csv.csv")
    .pipe(csv({}))
    .on('data',(data)=> results.push(data))
    .on('end',()=>{
        console.log(results);
    })
