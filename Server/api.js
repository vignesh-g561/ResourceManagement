xlsxjson = require("xls-to-json");
var files = process.argv;
var inp = files[2] || "Skill_Gap.xls" ;
var out = files[3]  || "out.json";
console.log(files);
  xlsxjson({
    input: inp,
    output: out

  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
