var React = require('react');
var barGraphData = require("../../../../Server/D3Graph.json");
var BarGraph = React.createClass({
  render : function(){
    var outerWidth = 900;
    var outerHeight = 500;
    var margin = { left:500, top: 20, right: 20, bottom: 100 };
    var barPadding = 0.05;
    var xColumn = "Skil Set";
    var yColumn = "Employees";
    var xAxisLabelOffset = 48;
    var yAxisLabelOffset = 60;
    var innerWidth  = outerWidth  - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top  - margin.bottom;
    d3.selectAll("svg").remove();//for clearing existing svg element
    var svg = d3.select("body").append("svg")
      .attr("width",  outerWidth)
      .attr("height", outerHeight);
    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var xAxisG = g.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + innerHeight + ")");
    var xAxisLabel = xAxisG.append("text")
      .style("text-anchor", "middle")
      .attr("transform", "translate(" + (innerWidth / 2) + "," + xAxisLabelOffset + ")")
      .attr("class", "label")
      .text(xColumn);
    var yAxisG = g.append("g")
        .attr("class", "y axis");
    var yAxisLabel = yAxisG.append("text")
        .style("text-anchor", "middle")
        .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
        .attr("class", "label")
        .text(yColumn);
    var xScale = d3.scale.ordinal().rangeBands([0, innerWidth],barPadding);
    var yScale = d3.scale.linear().range([innerHeight, 0]);
    var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
    var yAxis = d3.svg.axis().scale(yScale).orient("left");
      console.log("Data"+JSON.stringify(barGraphData));
      xScale.domain(       barGraphData.map( function (d){ return d[xColumn]; }));
          yScale.domain([0, d3.max(barGraphData, function (d){ return d[yColumn]; })]);

          xAxisG.call(xAxis);
          yAxisG.call(yAxis);

          var bars = g.selectAll("rect").data(barGraphData);
          bars.enter().append("rect")
            .attr("width", xScale.rangeBand())
            .attr("fill","#009688");;
          bars
            .attr("x",      function (d){ return               xScale(d[xColumn]); })
            .attr("y",      function (d){ return               yScale(d[yColumn]); })
            .attr("height", function (d){ return innerHeight - yScale(d[yColumn]); });
          bars.exit().remove();
    return (
      <div>
      </div>
    )
  }
});

module.exports = BarGraph;
