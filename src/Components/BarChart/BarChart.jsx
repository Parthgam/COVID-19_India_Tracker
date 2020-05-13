import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import * as d3 from "d3";


export default function BarChart(props) {
    var data1 = [
        { date: "A", value: 4 },
        { date: "B", value: 16 },
        { date: "C", value: 8 }
    ];

    var data2 = [
        { date: "A", value: 7 },
        { date: "B", value: 1 },
        { date: "C", value: 20 },
        { date: "D", value: 10 }
    ];
    const drawBarChart = (data) => {

        // set the dimensions and margins of the graph
        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#barChart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // Initialize the X axis
        var x = d3.scaleBand()
            .range([0, width])
            .padding(0.2);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")


        // Initialize the Y axis
        var y = d3.scaleLinear()
            .range([height, 0]);
        // var yAxis = svg.append("g")
        //     .attr("class", "myYaxis")

        x.domain(data.map(function (d) { return d.date; }))
        xAxis.call(d3.axisBottom(x)).call(g => g.select(".domain").remove())
        y.domain([0, d3.max(data, function (d) { return d.value })])
        // yAxis.transition().duration(1000).call(d3.axisLeft(y));

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")

        const rx = 12;
        const ry = 12;
        svg
            .selectAll("bar")
            .data(data)
            .enter().append("path")
            .style("fill", "#69b3a2")
            .attr("d", item => `
        M${x(item.date)},${y(item.value) + ry}
        a${rx},${ry} 0 0 1 ${rx},${-ry}
        h${x.bandwidth() - 2 * rx}
        a${rx},${ry} 0 0 1 ${rx},${ry}
        v${height - y(item.value) - ry}
        h${-(x.bandwidth())}Z
      `);

        xAxis.selectAll(".tick line")
            .attr("stroke-width", "0");
        // xAxis.selectAll(".tick text")
        //     .attr("font-size", "20")
        //     .attr("rotate", "15")
        //     .attr("font-family", "cursive");

        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.value);
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.date) + x.bandwidth() / 2 - 5;
            })
            .text(function (d) {
                return d.value;
            });


    }

    useEffect(() => {
        console.log(props.DailyConfirmed)
        if (props.DailyConfirmed !== undefined && props.DailyConfirmed.length !== 0)
            drawBarChart(props.DailyConfirmed);
    }, [props.DailyConfirmed])

    useEffect(() => {
        //drawBarChart(data1);
    }, [])

    return (

        <Grid container direction="row" justify="center" alignItems="center">
            <button onclick="update(data1)">Variable 1</button>
            <button onclick="update(data2)">Variable 2</button>
            <Grid item xs={12} md={12}><div id="barChart"></div></Grid>
        </Grid>
    )
}
