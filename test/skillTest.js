var should = require("chai").should(),
supertest = require("supertest");
var app = require("../Server/server");
var url = supertest("http://localhost:9090/employees");

//............................Testing userAll................................
describe("Testing the userAll : ", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/all")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);
        if(myObj.length === 6)
        {
          console.log(myObj.length);
          console.log(myObj);
          var msg = "DATABASE CONTAINS USERS";
          console.log(msg);
        }
        else {
          console.log("Error");
        }
        done();
      });
  });
});

//............................Testing singleUser................................
describe("Testing the singleUser : ", function(err) {
  it("Should handle and send the json data", function(done) {
    url
      .get("/123456")
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        should.not.exist(err);
        var myObj = JSON.parse(res.text);

        if(myObj === "Search not found")
        {
          var msg = "user not exist";
          console.log(msg);
        }
        else {
          var msg1 = "user exist";
          console.log(msg1);
        }
        done();
      });
});
});
