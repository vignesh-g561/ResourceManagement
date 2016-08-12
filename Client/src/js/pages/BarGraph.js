var React = require('react');
var Navbar=require('./Navbar');
var BarGraph = React.createClass({

  render : function(){
    console.log("Profile"+this.props.params.id);
    return (
      <div>
        <Navbar />
        <div className="row">
              var margin={top:20,right:10,bottom:100,left:100};
            d3.json("../../../../Server/D3Graph.json",function(data){
              var width=100-margin.right-margin.left;
              var height=10-margin.top-margin.bottom;
              var widthScale=d3.scale.linear()
                              .domain([0,299954])
                              .range([0,width]);
              var color=d3.scale.linear()
                                  .domain([0,299954])
                                  .range(["lightgreen","blue"]);
              var canvas=d3.select("body").append("svg")
              .attr("width",width+margin.right+margin.left)
              .attr("height",height+margin.top+margin.bottom)
              .append("g")
              .attr("transform","translate("+margin.left+','+margin.right+')');
              var xScale=d3.scale.ordinal()
                          .rangeRoundBands([0,width],0.2 ,0.2);
              var yScale=d3.scale.linear()
                          .range([height,0]);
              var xAxis=d3.svg.axis()
                          .scale(xScale)
                          .orient("bottom");
              var yAxis=d3.svg.axis()
                        .scale(yScale)
                        .orient("left");
              xScale.domain(data.map(function(d){return d.cx;}));
              yScale.domain([0,d3.max(data,function(d){return d.cy;})]);
              canvas.selectAll("rect")
                  .data(data)
                  .enter()
                  .append("rect")
                  .attr({
                    "x":function(d){return xScale(d.cx);},
                    "y":function(d){return yScale(d.cy);},
                    "width":xScale.rangeBand(),
                    "height":function(d){return height-yScale(d.cy);}
                  });
              canvas.append("g")
                    .attr("class","x axis")
                    .attr("transform","translate(0,"+height+")")
                     .call(xAxis);
              canvas.append("g")
                          .attr("class","y axis")
                          .attr("transform","translate(,0"+height+")")
                          .call(yAxis);
            });
        </div>
      </div>
    )
  }
});

module.exports = BarGraph;
