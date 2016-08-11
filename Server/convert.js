xlsxjson = require("xls-to-json");
var files = process.argv;
var inpFile = files[2] || "Skill_Gap.xls" ;
var outFile = files[3]  || "out.json";
console.log(files);
  xlsxjson({
    input: inpFile,
    output: outFile

  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
