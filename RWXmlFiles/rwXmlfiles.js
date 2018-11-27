const fs = require("fs");
const xml2js = require("xml2js");
var parser = new xml2js.Parser();
console.log("Read and write xml");

var contents =fs.readFileSync("./files/test.xml");
parser.parseString(contents,function(err,result){
    if(err) console.log(err);
    console.log(result);
    result.company.name="Wipro Ltd";
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(result);
fs.writeFile("./files/newTest.xml",xml,function(err,data){
    if(err) console.log(err); 
})
fs.readFile("./files/newTest.xml",function(err,data){
    if(err) console.log(err);
    parser.parseString(data,function(err,result){
        console.log(result);
    })
})
});