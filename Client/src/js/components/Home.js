var React = require('react');
var EmployeeData=require('./EmployeeData');
var Home = React.createClass({

    getInitialState:function(){
      return({
      jsonData :[],

    });
    },
      componentDidMount :function(){
               $.ajax({
                     url : "http://localhost:9090/employees/all",
                     dataType : 'json',
                     type : "GET",
                     cache : false,
                     success : function(data){
                       this.setState({jsonData:data})
                       //console.log(JSON.stringify(data));
                     }.bind(this),
                     error : function(xhr, status, err) {
                     console.error("http://localhost:9090/employees/all", status, err.toString());
                     }.bind(this)
                   });
      },
    render:function(){
      var data = this.state.jsonData;
        return (
          	<div>
              <div className="pHeader">
                <h1>Resource Management System</h1>
              </div>
              <div className="container-fluid">
                <EmployeeData jData={data} />
              </div>
          	</div>
        );
    }
});

module.exports = Home;
