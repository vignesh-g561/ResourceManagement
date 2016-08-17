

var React = require('react');
var Navbar=require('./Navbar');
var Profile1 = React.createClass({

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
    console.log("Profile"+this.props.params.id);
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading"><h2>User profile</h2></div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img className="img-circle avatar avatar-original" src="../../images/user1.png" alt="user image" />
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="only-bottom-margin">{this.state.eData["Emp Name"]}</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <span className="text-muted">Employee Id:</span> {this.state.eData["Emp No"]}<br />
                        <span className="text-muted">Technology/Skills:</span> {this.state.eData["Technology/Skills"]}<br />
                        <span className="text-muted">Digithon Cleared? (Y/N/NA):</span> {this.state.eData["Digithon Cleared? (Y/N/NA)"]}<br />
                        <span className="text-muted">Digital Academy Complete? (Y/N/NA):</span> {this.state.eData["Digital Academy Complete? (Y/N/NA)"]}<br />
                        <span className="text-muted">Agile Trainings Complete? (Y/N):</span> {this.state.eData["Agile Trainings Complete? (Y/N)"]}<br />
                        <span className="text-muted">BFSI Training Courses Complete? (Y/N):</span> {this.state.eData["BFSI Training Courses Complete? (Y/N)"]}<br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Profile1;
