var React = require('react');
var Navbar=require('./Navbar');

var Profile = React.createClass({
  getInitialState:function(){
    return({eData:{}});
  },
  componentWillMount :function(){
   $.ajax({
         url : "http://localhost:9090/employees/"+this.props.params.id,
         dataType : 'json',
         type : "GET",
         cache : false,
         success : function(data){
           this.setState({eData:data})
           //console.log(JSON.stringify(data));
         }.bind(this),
         error : function(xhr, status, err) {
         console.error("http://localhost:9090/employees/"+this.props.params.id, status, err.toString());
         }.bind(this)
       });
  },
  render : function(){
    //console.log("Profile"+this.props.params.id);
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <center><img className="img-circle avatar avatar-original" src="../../images/user1.png" alt="user image" />
            <h1 className="only-bottom-margin">{this.state.eData["Emp Name"]}</h1></center>
          </div>
          <br /><br />
          <div className="row col-md-8 col-md-offset-2">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <tr>
                <th>Employee Id</th>
                <td>{this.state.eData["Emp No"]}</td>
              </tr>
              <tr>
                <th>Technology/Skills</th>
                <td>{this.state.eData["Technology/Skills"]}</td>
              </tr>
              <tr>
                <th>Digithon Cleared? (Y/N/NA)</th>
                <td>{this.state.eData["Digithon Cleared? (Y/N/NA)"]}</td>
              </tr>
              <tr>
                <th>Digital Academy Complete? (Y/N/NA)</th>
                <td>{this.state.eData["Digital Academy Complete? (Y/N/NA)"]}</td>
              </tr>
              <tr>
                <th>Agile Trainings Complete? (Y/N)</th>
                <td>{this.state.eData["Agile Trainings Complete? (Y/N)"]}</td>
              </tr>
              <tr>
                <th>BFSI Training Courses Complete? (Y/N)</th>
                <td>{this.state.eData["BFSI Training Courses Complete? (Y/N)"]}</td>
              </tr>
            </table>
          </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Profile;
