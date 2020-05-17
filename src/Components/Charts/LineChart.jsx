import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './LineChart.css';
import * as Constants from '../../constants'

const useStyles = makeStyles({
  marginClass: {
    marginTop: '20px'
  },
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontSize: '12px',
  },
  icon: {
    borderRadius: '50%',
    fontSize: '12px',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    fontSize: '12px',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

export default function LineChart(props) {
  const classes = useStyles();
  var STATE_CODES = Constants.STATE_CODES;
  const initializeDropDown = () => {
    var states_code_new = [], temp = {};
    Object.keys(STATE_CODES).forEach((key) => {
      temp["key"] = key.toLowerCase();
      temp["value"] = STATE_CODES[key];
      states_code_new.push(temp);
      temp = {};
    })
    d3.select("#selectBox")
      .selectAll('myOptions')
      .data(states_code_new)
      .enter()
      .append('option')
      .text(function (d) { return d.value; })
      .attr("value", function (d) { return d.key; })
  }

  function update1(dataConfirmedRaw, selectedGroup, updateAgain = 0) {
    var margin = { top: 10, right: 30, bottom: 30, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
    if (chartDataType !== undefined && chartDataType === "cumulative") {
      var dataConfirmed = dataConfirmedRaw.map(function (d) {
        return { date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) }
      })
      if (updateAgain === 1) {
        d3.select("#svgConfirmedCumulative").remove();
        d3.select("#titleConfirmed").remove();
        d3.select("#hrLine").remove();
      }

      if (prevChartDataType !== "cumulative") {
        d3.select("#svgConfirmedDaily").remove();
        d3.select("#titleConfirmed").remove();
        d3.select("#hrLine").remove();
      }

      d3.select("#my_datavizConfirmed").style("background-color", "#FDEDEC")
      var Title = d3.select("#my_datavizConfirmed")
        .append("div")
        .style("opacity", 1)
        .attr("id", "titleConfirmed")
        .style("padding", "5px")
        .style("color", "red")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("text", "CONFIRMED");
      Title.html("CONFIRMED");
      d3.select("#my_datavizConfirmed")
        .append("hr")
        .style("opacity", 0.1)
        .attr("id", "hrLine")
        .style("border", "1px solid red")

      d3.select("#my_datavizConfirmed").style("border-radius", "10px")
      var svgConfirmed = d3.select("#my_datavizConfirmed")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .attr("id", "svgConfirmedCumulative")
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      // Initialise a X axis:
      var xConfirmed = d3.scaleTime().range([0, width]);
      var xAxisConfirmed = d3.axisBottom().scale(xConfirmed);
      svgConfirmed.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "myXaxisConfirmed")
      xAxisConfirmed.ticks(5);

      // Initialize an Y axis
      var yConfirmed = d3.scaleLinear().range([height, 0]);
      var yAxisConfirmed = d3.axisLeft().scale(yConfirmed);
      svgConfirmed.append("g")
        .attr("class", "myYaxisConfirmed")
      yAxisConfirmed.ticks(5)

      // Create the X axis:
      xConfirmed.domain(d3.extent(dataConfirmed, function (d) { return (d["date"]) }));
      svgConfirmed.selectAll(".myXaxisConfirmed").transition()
        .duration(500)
        .call(xAxisConfirmed);

      // create the Y axis
      yConfirmed.domain([0, d3.max(dataConfirmed, (d) => (d.value))]);
      svgConfirmed.selectAll(".myYaxisConfirmed")
        .transition()
        .duration(500)
        .call(yAxisConfirmed);

      function make_x_gridlines() {
        return d3.axisBottom(xConfirmed)
          .ticks(8)
      }
      function make_y_gridlines() {
        return d3.axisLeft(yConfirmed)
          .ticks(5)
      }

      svgConfirmed.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .style("stroke-dasharray", ("3,3"))
        .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
        )
      svgConfirmed.append("g")
        .attr("class", "grid")
        .style("stroke-dasharray", ("3,3"))
        .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
        )
      var u = svgConfirmed.selectAll(".lineTest")
        .data([dataConfirmed], function (d) { return d["date"] });

      // Updata the line
      u
        .enter()
        .append("path")
        .attr("class", "lineTest")
        .merge(u)
        .transition()
        .duration(500)
        .attr("d", d3.line()
          .x(function (d) { return xConfirmed((d["date"])); })
          .y(function (d) { return yConfirmed(d.selectedGroup) }))
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 4)
        .attr("opacity", "0.5")
      svgConfirmed.selectAll(".domain")
        .attr("stroke", "red")
        .attr("stroke-width", "1.5")
        .attr("opacity", "0.8");
      svgConfirmed.selectAll(".tick line")
        .attr("stroke", "red");
      svgConfirmed.selectAll(".tick text")
        .attr("color", "red")
      // Add the points
      svgConfirmed
        .append("g")
        .selectAll("dot")
        .data(dataConfirmed)
        .enter()
        .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function (d) { return xConfirmed(d["date"]) })
        .attr("cy", function (d) { return yConfirmed(d.selectedGroup) })
        .attr("r", 2)
        .attr("stroke", "red")
        .attr("stroke-width", 2)
        .attr("fill", "red")
    }
    else {
      var dataDaily = [];
      stateWiseDaily.map(function (d) {
        if (d["status"] === "Confirmed")
          dataDaily.push({ date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) })
        return null;
      })

      if (updateAgain === 1) {
        d3.select("#svgConfirmedDaily").remove();
        d3.select("#titleConfirmed").remove();
        d3.select("#hrLine").remove();
      }

      if (prevChartDataType !== "daily") {
        d3.select("#svgConfirmedCumulative").remove(); //
        d3.select("#titleConfirmed").remove();
        d3.select("#hrLine").remove();
      }
      d3.select("#my_datavizConfirmed").style("background-color", "#FDEDEC")
      Title = d3.select("#my_datavizConfirmed")
        .append("div")
        .style("opacity", 1)
        .attr("id", "titleConfirmed")
        .style("padding", "5px")
        .style("color", "red")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("text", "CONFIRMED");
      Title.html("CONFIRMED");
      d3.select("#my_datavizConfirmed")
        .append("hr")
        .style("opacity", 0.1)
        .attr("id", "hrLine")
        .style("border", "1px solid red")

      d3.select("#my_datavizConfirmed").style("border-radius", "10px")

      var svgDailyConfirmed = d3.select("#my_datavizConfirmed")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .attr("id", "svgConfirmedDaily")
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      var xDailyConfirmed = d3.scaleTime()
        .range([0, width])
        .domain(d3.extent(dataDaily, function (d) { return (d["date"]) }))

      svgDailyConfirmed.append("g")
        .attr("class", "myDailyConfirmedXAxis")
        .attr("transform", "translate(0," + height + ")")

      svgDailyConfirmed.selectAll(".myDailyConfirmedXAxis")
        .transition()
        .duration(500)
        .call(d3.axisBottom(xDailyConfirmed))
      var yDailyConfirmed = d3.scaleLinear()
        .range([height, 0]);
      var yAxisDailyConfirmed = d3.axisLeft().scale(yDailyConfirmed);
      svgDailyConfirmed.append("g")
        .attr("class", "myDailyConfirmedYAxis")
      yAxisDailyConfirmed.ticks(5)
      yDailyConfirmed.domain([0, d3.max(dataDaily, (d) => (d.value))])
      svgDailyConfirmed.selectAll(".myDailyConfirmedYAxis")
        .transition()
        .duration(500)
        .call(yAxisDailyConfirmed);

      function make_x_gridlines1() {
        return d3.axisBottom(xDailyConfirmed)
          .ticks(8)
      }
      function make_y_gridlines1() {
        return d3.axisLeft(yDailyConfirmed)
          .ticks(5)
      }

      svgDailyConfirmed.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .style("stroke-dasharray", ("3,3"))
        .call(make_x_gridlines1()
          .tickSize(-height)
          .tickFormat("")
        )
      svgDailyConfirmed.append("g")
        .attr("class", "grid")
        .style("stroke-dasharray", ("3,3"))
        .call(make_y_gridlines1()
          .tickSize(-width)
          .tickFormat("")
        )

      // Lines
      svgDailyConfirmed.selectAll("myline")
        .data(dataDaily)
        .enter()
        .append("line")
        .attr("x1", function (d) { return xDailyConfirmed(d["date"]); })
        .attr("x2", function (d) { return xDailyConfirmed(d["date"]); })
        .attr("y1", function (d) { return yDailyConfirmed(d.selectedGroup); })
        .attr("y2", yDailyConfirmed(0))
        .attr("stroke", "grey")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 4)
        .attr("opacity", "0.5")
      svgDailyConfirmed.selectAll(".domain")
        .attr("stroke", "red")
        .attr("stroke-width", "1.5")
        .attr("opacity", "0.8");
      svgDailyConfirmed.selectAll(".tick line")
        .attr("stroke", "red");
      svgDailyConfirmed.selectAll(".tick text")
        .attr("color", "red")
      // Circles
      svgDailyConfirmed.selectAll("mycircle")
        .data(dataDaily)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xDailyConfirmed(d["date"]); })
        .attr("cy", function (d) { return yDailyConfirmed(d.selectedGroup); })
        .attr("r", "2.5")
        .style("fill", "red")
        .attr("stroke", "red")
    }

  }

  function update2(dataRecoveredRaw, dataConfirmedRaw, selectedGroup, updateAgain = 0) {
    var margin = { top: 10, right: 30, bottom: 30, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
    if (chartDataType !== undefined && chartDataType === "cumulative") {
      var dataRecovered = dataRecoveredRaw.map(function (d) {
        return { date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) }
      })
      var dataConfirmed = dataConfirmedRaw.map(function (d) {
        return { date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) }
      })
      if (updateAgain === 1) {
        d3.select("#svgRecoveredCumulative").remove();
        d3.select("#titleRecovered").remove();
        d3.select("#hrLineRecovered").remove();
      }

      if (prevChartDataType !== "cumulative") {
        d3.select("#svgRecoveredDaily").remove(); //
        d3.select("#titleRecovered").remove();
        d3.select("#hrLineRecovered").remove();
      }

      d3.select("#my_datavizRecovered").style("background-color", "#EAFAF1")//"#A3E4D7")
      d3.select("#my_datavizRecovered").style("border-radius", "10px")

      var Title = d3.select("#my_datavizRecovered")
        .append("div")
        .style("opacity", 1)
        .attr("id", "titleRecovered")
        .style("padding", "5px")
        .style("color", "green")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("text", "RECOVERED");
      Title.html("RECOVERED");
      d3.select("#my_datavizRecovered")
        .append("hr")
        .style("opacity", 0.1)
        .attr("id", "hrLineRecovered")
        .style("border", "1px solid green")

      var svgRecovered = d3.select("#my_datavizRecovered")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .attr("id", "svgRecoveredCumulative")
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      // Initialise a X axis:
      var xRecovered = d3.scaleTime().range([0, width]);
      var xAxisRecovered = d3.axisBottom().scale(xRecovered);
      svgRecovered.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "myXaxisRecovered")
      xAxisRecovered.ticks(5)
      // Initialize an Y axis
      var yRecovered = d3.scaleLinear().range([height, 0]);
      var yAxisRecovered = d3.axisLeft().scale(yRecovered);
      svgRecovered.append("g")
        .attr("class", "myYaxisRecovered")
      yAxisRecovered.ticks(5)
      // Create the X axis:
      xRecovered.domain(d3.extent(dataRecovered, function (d) { return (d["date"]) }));
      svgRecovered.selectAll(".myXaxisRecovered").transition()
        .duration(500)
        .call(xAxisRecovered);
      // create the Y axis
      yRecovered.domain([0, d3.max(dataConfirmed, (d => d.value))]);
      svgRecovered.selectAll(".myYaxisRecovered")
        .transition()
        .duration(500)
        .call(yAxisRecovered);

      function make_x_gridlines() {
        return d3.axisBottom(xRecovered)
          .ticks(8)
      }
      function make_y_gridlines() {
        return d3.axisLeft(yRecovered)
          .ticks(5)
      }

      svgRecovered.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .style("stroke-dasharray", ("3,3"))
        .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
        )
      svgRecovered.append("g")
        .attr("class", "grid")
        .style("stroke-dasharray", ("3,3"))
        .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
        )

      // Create a update selection: bind to the new data
      var u = svgRecovered.selectAll(".lineTest")
        .data([dataRecovered], function (d) { return d["date"] });

      // Updata the line
      u
        .enter()
        .append("path")
        .attr("class", "lineTest")
        .merge(u)
        .transition()
        .duration(500)
        .attr("stroke-width", 4)
        .attr("d", d3.line()
          .x(function (d) { return xRecovered((d["date"])); })
          .y(function (d) { return yRecovered(d.selectedGroup) }))
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("opacity", "0.5")
      svgRecovered.selectAll(".domain")
        .attr("stroke", "green")
        .attr("stroke-width", "1.5")
        .attr("opacity", "0.8");
      svgRecovered.selectAll(".tick line")
        .attr("stroke", "green");
      svgRecovered.selectAll(".tick text")
        .attr("color", "green")
      svgRecovered
        .append("g")
        .selectAll("dot")
        .data(dataRecovered)
        .enter()
        .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function (d) { return xRecovered(d["date"]) })
        .attr("cy", function (d) { return yRecovered(d.selectedGroup) })
        .attr("r", 2)
        .attr("stroke", "green")
        .attr("stroke-width", 2)
        .attr("fill", "green")
    }
    else {
      var dataDaily = [], dataDailyConfirmed = [];
      stateWiseDaily.map(function (d) {
        if (d["status"] === "Recovered")
          dataDaily.push({ date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) })
        return null;
      })

      stateWiseDaily.map(function (d) {
        if (d["status"] === "Confirmed")
          dataDailyConfirmed.push({ date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) })
        return null;
      })

      if (updateAgain === 1) {
        d3.select("#svgRecoveredDaily").remove();
        d3.select("#titleRecovered").remove();
        d3.select("#hrLineRecovered").remove();
      }

      if (prevChartDataType !== "daily") {
        d3.select("#svgRecoveredCumulative").remove();
        d3.select("#titleRecovered").remove();
        d3.select("#hrLineRecovered").remove();
      }
      d3.select("#my_datavizRecovered").style("background-color", "#EAFAF1")
      Title = d3.select("#my_datavizRecovered")
        .append("div")
        .style("opacity", 1)
        .attr("id", "titleRecovered")
        .style("padding", "5px")
        .style("color", "green")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("text", "CONFIRMED");
      Title.html("RECOVERED");
      d3.select("#my_datavizRecovered")
        .append("hr")
        .style("opacity", 0.1)
        .attr("id", "hrLineRecovered")
        .style("border", "1px solid green")
      d3.select("#my_datavizRecovered").style("border-radius", "10px")

      var svgDailyRecovered = d3.select("#my_datavizRecovered")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .attr("id", "svgRecoveredDaily")
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      var xDailyRecovered = d3.scaleTime()
        .range([0, width])
        .domain(d3.extent(dataDaily, function (d) { return (d["date"]) }))

      svgDailyRecovered.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xDailyRecovered))
        .selectAll("text")

      // Add Y axis
      var yDailyRecovered = d3.scaleLinear()
        .range([height, 0]);
      var yAxisDailyRecovered = d3.axisLeft().scale(yDailyRecovered);
      svgDailyRecovered.append("g")
        .attr("class", "myYaxis")
      yAxisDailyRecovered.ticks(5)
      yDailyRecovered.domain([0, d3.max(dataDailyConfirmed, (d) => (d.value))])
      svgDailyRecovered.selectAll(".myYaxis")
        .transition()
        .duration(500)
        .call(yAxisDailyRecovered);

      function make_x_gridlines1() {
        return d3.axisBottom(xDailyRecovered)
          .ticks(8)
      }
      function make_y_gridlines1() {
        return d3.axisLeft(yDailyRecovered)
          .ticks(5)
      }

      svgDailyRecovered.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .style("stroke-dasharray", ("3,3"))
        .call(make_x_gridlines1()
          .tickSize(-height)
          .tickFormat("")
        )
      svgDailyRecovered.append("g")
        .attr("class", "grid")
        .style("stroke-dasharray", ("3,3"))
        .call(make_y_gridlines1()
          .tickSize(-width)
          .tickFormat("")
        )

      // Lines
      svgDailyRecovered.selectAll("myline")
        .data(dataDaily)
        .enter()
        .append("line")
        .attr("x1", function (d) { return xDailyRecovered(d["date"]); })
        .attr("x2", function (d) { return xDailyRecovered(d["date"]); })
        .attr("y1", function (d) { return yDailyRecovered(d.selectedGroup); })
        .attr("y2", yDailyRecovered(0))
        .attr("stroke", "grey")
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 4)
        .attr("opacity", "0.5")

      svgDailyRecovered.selectAll(".domain")
        .attr("stroke", "green")
        .attr("stroke-width", "1.5")
        .attr("opacity", "0.8");
      svgDailyRecovered.selectAll(".tick line")
        .attr("stroke", "green");
      svgDailyRecovered.selectAll(".tick text")
        .attr("color", "green")

      // Circles
      svgDailyRecovered.selectAll("mycircle")
        .data(dataDaily)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xDailyRecovered(d["date"]); })
        .attr("cy", function (d) { return yDailyRecovered(d.selectedGroup); })
        .attr("r", "2.5")
        .style("fill", "green")
        .attr("stroke", "green")
    }
  }

  function update3(dataDeathRaw, dataConfirmedRaw, selectedGroup, updateAgain = 0) {
    var margin = { top: 10, right: 30, bottom: 30, left: 50 },
      width = 500 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;
    if (chartDataType !== undefined && chartDataType === "cumulative") {

      var dataDeath = dataDeathRaw.map(function (d) {
        return { date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) }
      })
      var dataConfirmed = dataConfirmedRaw.map(function (d) {
        return { date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) }
      })

      if (updateAgain === 1) {
        d3.select("#svgDeathCumulative").remove();
        d3.select("#titleDeath").remove();
        d3.select("#hrLineDeath").remove();
      }
      if (prevChartDataType !== "cumulative") {
        d3.select("#svgDeathDaily").remove(); //
        d3.select("#titleDeath").remove();
        d3.select("#hrLineDeath").remove();
      }
      d3.select("#my_datavizDeath").style("background-color", "#EBEDEF")//"#E5E7E9")
      d3.select("#my_datavizDeath").style("border-radius", "10px")

      var Title = d3.select("#my_datavizDeath")
        .append("div")
        .style("opacity", 1)
        .attr("id", "titleDeath")
        .style("padding", "5px")
        .style("color", "grey")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("text", "DEATH");
      Title.html("DEATH");
      d3.select("#my_datavizDeath")
        .append("hr")
        .style("opacity", 0.1)
        .attr("id", "hrLineDeath")
        .style("border", "1px solid grey")

      var svgDeath = d3.select("#my_datavizDeath")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .attr("id", "svgDeathCumulative")
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      // Initialise a X axis:
      var xDeath = d3.scaleTime().range([0, width]);
      var xAxisDeath = d3.axisBottom().scale(xDeath);
      svgDeath.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "myXaxisDeath")
      xAxisDeath.ticks(5)

      // Initialize an Y axis
      var yDeath = d3.scaleLinear().range([height, 0]);
      var yAxisDeath = d3.axisLeft().scale(yDeath);
      svgDeath.append("g")
        .attr("class", "myYaxisDeath")
      yAxisDeath.ticks(5)

      // Create the X axis:
      xDeath.domain(d3.extent(dataDeath, function (d) { return (d["date"]) }));
      svgDeath.selectAll(".myXaxisDeath").transition()
        .duration(500)
        .call(xAxisDeath);

      // create the Y axis
      yDeath.domain([0, d3.max(dataConfirmed, (d => d.value))]);
      svgDeath.selectAll(".myYaxisDeath")
        .transition()
        .duration(500)
        .call(yAxisDeath);

      function make_x_gridlines() {
        return d3.axisBottom(xDeath)
          .ticks(8)
      }
      function make_y_gridlines() {
        return d3.axisLeft(yDeath)
          .ticks(5)
      }

      svgDeath.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .style("stroke-dasharray", ("3,3"))
        .call(make_x_gridlines()
          .tickSize(-height)
          .tickFormat("")
        )
      svgDeath.append("g")
        .attr("class", "grid")
        .style("stroke-dasharray", ("3,3"))
        .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
        )

      // Create a update selection: bind to the new data
      var u = svgDeath.selectAll(".lineTest")
        .data([dataDeath], function (d) { return d["date"] });

      // Updata the line
      u
        .enter()
        .append("path")
        .attr("class", "lineTest")
        .merge(u)
        .transition()
        .duration(500)
        .attr("d", d3.line()
          .x(function (d) { return xDeath((d["date"])); })
          .y(function (d) { return yDeath(d.selectedGroup) }))
        .attr("fill", "none")
        .attr("stroke", "grey")
        .attr("stroke-width", 4)
        .attr("opacity", "0.5")

      svgDeath.selectAll(".domain")
        .attr("stroke", "grey")
        .attr("stroke-width", "1.5")
        .attr("opacity", "0.8");
      svgDeath.selectAll(".tick line")
        .attr("stroke", "grey");
      svgDeath.selectAll(".tick text")
        .attr("color", "grey")
      svgDeath
        .append("g")
        .selectAll("dot")
        .data(dataDeath)
        .enter()
        .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function (d) { return xDeath(d["date"]) })
        .attr("cy", function (d) { return yDeath(d.selectedGroup) })
        .attr("r", 2)
        .attr("stroke", "grey")
        .attr("stroke-width", 2)
        .attr("fill", "grey")
    }
    else {
      var dataDaily = [], dataDailyConfirmed = [];
      stateWiseDaily.map(function (d) {
        if (d["status"] === "Deceased")
          dataDaily.push({ date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) })
        return null;
      })

      stateWiseDaily.map(function (d) {
        if (d["status"] === "Confirmed")
          dataDailyConfirmed.push({ date: d3.timeParse("%d-%b-%Y")(d["date"]), selectedGroup: d[selectedGroup], value: parseInt(d[selectedGroup]) })
        return null;
      })

      if (updateAgain === 1) {
        d3.select("#svgDeathDaily").remove();
        d3.select("#titleDeath").remove();
        d3.select("#hrLineDeath").remove();
      }

      if (prevChartDataType !== "daily") {
        d3.select("#svgDeathCumulative").remove(); //
        d3.select("#titleDeath").remove();
        d3.select("#hrLineDeath").remove();
      }
      d3.select("#my_datavizDeath").style("background-color", "#EBEDEF")
      var Title = d3.select("#my_datavizDeath")
        .append("div")
        .style("opacity", 1)
        .attr("id", "titleDeath")
        .style("padding", "5px")
        .style("color", "grey")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("text", "CONFIRMED");
      Title.html("DEATH");
      d3.select("#my_datavizDeath")
        .append("hr")
        .style("opacity", 0.1)
        .attr("id", "hrLineDeath")
        .style("border", "1px solid grey")

      d3.select("#my_datavizDeath").style("border-radius", "10px")

      var svgDailyDeath = d3.select("#my_datavizDeath")
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 500 200")
        .attr("id", "svgDeathDaily")
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

      var xDailyDeath = d3.scaleTime()
        .range([0, width])
        .domain(d3.extent(dataDaily, function (d) { return (d["date"]) }))

      svgDailyDeath.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xDailyDeath))
        .selectAll("text")

      // Add Y axis
      var yDailyDeath = d3.scaleLinear()
        .range([height, 0]);
      var yAxisDailyDeath = d3.axisLeft().scale(yDailyDeath);
      svgDailyDeath.append("g")
        .attr("class", "myYaxis")
      yAxisDailyDeath.ticks(5)
      yDailyDeath.domain([0, d3.max(dataDailyConfirmed, (d) => (d.value))])
      svgDailyDeath.selectAll(".myYaxis")
        .transition()
        .duration(500)
        .call(yAxisDailyDeath);

      function make_x_gridlines1() {
        return d3.axisBottom(xDailyDeath)
          .ticks(8)
      }
      function make_y_gridlines1() {
        return d3.axisLeft(yDailyDeath)
          .ticks(5)
      }

      svgDailyDeath.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .style("stroke-dasharray", ("3,3"))
        .call(make_x_gridlines1()
          .tickSize(-height)
          .tickFormat("")
        )
      svgDailyDeath.append("g")
        .attr("class", "grid")
        .style("stroke-dasharray", ("3,3"))
        .call(make_y_gridlines1()
          .tickSize(-width)
          .tickFormat("")
        )

      // Lines
      svgDailyDeath.selectAll("myline")
        .data(dataDaily)
        .enter()
        .append("line")
        .attr("x1", function (d) { return xDailyDeath(d["date"]); })
        .attr("x2", function (d) { return xDailyDeath(d["date"]); })
        .attr("y1", function (d) { return yDailyDeath(d.selectedGroup); })
        .attr("y2", yDailyDeath(0))
        .attr("stroke", "grey")
        .attr("fill", "none")
        .attr("stroke", "grey")
        .attr("stroke-width", 4)
        .attr("opacity", "0.5")

      svgDailyDeath.selectAll(".domain")
        .attr("stroke", "grey")
        .attr("stroke-width", "1.5")
        .attr("opacity", "0.8");
      svgDailyDeath.selectAll(".tick line")
        .attr("stroke", "grey");
      svgDailyDeath.selectAll(".tick text")
        .attr("color", "grey")

      // Circles
      svgDailyDeath.selectAll("mycircle")
        .data(dataDaily)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xDailyDeath(d["date"]); })
        .attr("cy", function (d) { return yDailyDeath(d.selectedGroup); })
        .attr("r", "2.5")
        .style("fill", "grey")
        .attr("stroke", "grey")
    }
  }
  const [stateWiseDaily, setStateWiseDaily] = useState([]);
  const [stateWiseDailyConfirmed, setStateWiseDailyConfirmed] = useState([]);
  const [stateWiseDailyRecovered, setStateWiseDailyRecovered] = useState([]);
  const [stateWiseDailyDeath, setStateWiseDailyDeath] = useState([]);
  const [selectedStateName, setSelectedStateName] = useState("");
  const [prevSelectedStateName, setPrevSelectedStateName] = useState("");
  const [chartDataType, setChartDataType] = useState("cumulative");
  const [prevChartDataType, setPrevChartDataType] = useState();
  const [activeChartClass, setActiveChartClass] = useState(0); // 0 for Cumulative and 1 for daily

  const getDailyStatewiseCases = async () => {
    await axios({
      method: 'GET',
      url: Constants.STATE_DAILY_CHANGES,
    })
      .then((response) => {
        setStateWiseDaily(response.data.states_daily);
        var confirmedDaily = [], deathDaily = [], recoveredDaily = [];
        var tempObject = {}, tempObject1 = {}, tempObject2 = {}, res = {}, res1 = [], res2 = {}, res3 = [], res4 = {}, res5 = [], ans;
        var val;
        response.data.states_daily.map((value, index) => {
          Object.keys(value).forEach((key) => {
            if (value["status"] === "Confirmed") {
              val = value["status"];
              if (key !== "date" && key !== "status" && tempObject[key] !== undefined && tempObject[key] !== null) {
                if (value[key] === "") { value[key] = "0"; }
                ans = parseInt(tempObject[key]) + parseInt(value[key]);
                res[key] = ("" + ans);
              }
              else {
                res[key] = value[key];
              }
            }
            else if (value["status"] === "Recovered") {
              val = value["status"];
              if (key !== "date" && key !== "status" && tempObject1[key] !== undefined && tempObject1[key] !== null) {
                ans = parseInt(tempObject1[key]) + parseInt(value[key]);
                res2[key] = ("" + ans);
              }
              else {
                res2[key] = value[key];
              }
            }
            else {
              val = value["status"];
              if (key !== "date" && key !== "status" && tempObject2[key] !== undefined && tempObject2[key] !== null) {
                ans = parseInt(tempObject2[key]) + parseInt(value[key]);
                res4[key] = ("" + ans);
              }
              else {
                res4[key] = value[key];
              }
            }
            return null;
          });
          if (val === "Confirmed") {
            tempObject = Object.assign({}, res);
            res1.push(res);
            res = {};
          }
          else if (val === "Recovered") {
            tempObject1 = Object.assign({}, res2);
            res3.push(res2);
            res2 = {};
          }
          else {
            tempObject2 = Object.assign({}, res4);
            res5.push(res4);
            res4 = {};
          }
        })
        res1.map((value, index) => {
          confirmedDaily.push(value);
        })
        res3.map((value, index) => {
          recoveredDaily.push(value);
        })
        res5.map((value, index) => {
          deathDaily.push(value);
        })
        setStateWiseDailyConfirmed(confirmedDaily);
        setStateWiseDailyRecovered(recoveredDaily);
        setStateWiseDailyDeath(deathDaily);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDailyStatewiseCases();
    initializeDropDown();
  }, [])

  useEffect(() => {
    if (selectedStateName !== undefined && selectedStateName !== "") {
      if (selectedStateName === prevSelectedStateName) {
        if (stateWiseDailyConfirmed.length !== 0) {
          var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
          selectedStateCode = selectedStateCode.toLowerCase();
          update1(stateWiseDailyConfirmed, selectedStateCode);
          setPrevSelectedStateName(selectedStateName);
        }
      }
      else {
        var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
        selectedStateCode = selectedStateCode.toLowerCase();
        update1(stateWiseDailyConfirmed, selectedStateCode, 1);
      }
    }
  }, [stateWiseDailyConfirmed, selectedStateName, chartDataType])

  useEffect(() => {
    if (selectedStateName === prevSelectedStateName) {
      if (stateWiseDailyRecovered.length !== 0) {
        var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
        selectedStateCode = selectedStateCode.toLowerCase(); update2(stateWiseDailyRecovered, stateWiseDailyConfirmed, selectedStateCode);
        setPrevSelectedStateName(selectedStateName);
      }
    }
    else {
      var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
      selectedStateCode = selectedStateCode.toLowerCase();
      update2(stateWiseDailyRecovered, stateWiseDailyConfirmed, selectedStateCode, 1);
    }
  }, [stateWiseDailyRecovered, selectedStateName, chartDataType])

  useEffect(() => {
    if (selectedStateName === prevSelectedStateName) {
      if (stateWiseDailyDeath.length !== 0) {
        var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
        selectedStateCode = selectedStateCode.toLowerCase(); update3(stateWiseDailyDeath, stateWiseDailyConfirmed, selectedStateCode);
        setPrevSelectedStateName(selectedStateName);
      }
    }
    else {
      var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
      selectedStateCode = selectedStateCode.toLowerCase();
      update3(stateWiseDailyDeath, stateWiseDailyConfirmed, selectedStateCode, 1);
    }
  }, [stateWiseDailyDeath, selectedStateName, chartDataType])

  useEffect(() => {
    setSelectedStateName(props.SelectedState);
  }, [props.SelectedState])

  useEffect(() => {
    setSelectedStateName(props.SelectedState);
    var selectedStateCode = Constants.getStateCode(STATE_CODES, props.SelectedState);
    selectedStateCode = selectedStateCode.toLowerCase();
  }, [selectedStateName])

  const handleRadioChange = (event) => {
    if (event.target.value === "cumulative")
      setPrevChartDataType("daily")
    else
      setPrevChartDataType("cumulative")
    setChartDataType(event.target.value)
  }

  const handleDropdownChange = (event) => {
    var selectedOption = event.target.value;
    update1(stateWiseDailyConfirmed, selectedOption, 1);
    update2(stateWiseDailyRecovered, stateWiseDailyConfirmed, selectedOption, 1);
    update3(stateWiseDailyDeath, stateWiseDailyConfirmed, selectedOption, 1);
    props.SelectedStateHandler(selectedOption);
  }

  const handleCumulativeClick = () => {
    setPrevChartDataType("daily")
    setChartDataType("cumulative")
    setActiveChartClass(0)
  }

  const handleDailyClick = () => {
    setPrevChartDataType("cumulative")
    setChartDataType("daily")
    setActiveChartClass(1)
  }

  return (
    <Grid container direction="row"
      justify="center"
      alignItems="center">
      <Grid item xs={10} md={10}>
        <Grid container direction="row"
          justify="center"
          alignItems="center" className={classes.marginClass}>
          <Grid item xs={4} md={4}>
            <select id="selectBox" className="select-css" onChange={handleDropdownChange}>
            </select>
          </Grid>
          <Grid item xs={8} md={8}>
            <Grid container direction="row"
              justify="flex-end"
              alignItems="center">
              <Button variant="outlined" size="medium" style={{ fontSize: '12px', margin: '10px' }} onClick={handleCumulativeClick} className={activeChartClass === 0 ? "active-button radio-btn" : "radio-btn"}>
                CUMULATIVE
            </Button>
              <Button variant="outlined" size="medium" style={{ fontSize: '12px' }} onClick={handleDailyClick} className={activeChartClass === 1 ? "active-button radio-btn" : "radio-btn"}>
                DAILY
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10} md={10}><div id="my_datavizConfirmed" className={classes.marginClass}></div></Grid>
      <Grid item xs={10} md={10}><div id="my_datavizRecovered" className={classes.marginClass}></div></Grid>
      <Grid item xs={10} md={10}><div id="my_datavizDeath" className={classes.marginClass}></div></Grid>
    </Grid >
  )

}

