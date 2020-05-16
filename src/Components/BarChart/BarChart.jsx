import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import * as d3 from "d3";


export default function BarChart(props) {
    const drawBarChart = (data) => {
        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 450 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;
        var svg = d3.select("#barChart")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 450 250")
            .attr("id", "svgConfirmedCumulative")
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        // Initialize the X axis
        var x = d3.scaleBand()
            .range([0, width])
            .padding(0.4);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")
        // Initialize the Y axis
        var y = d3.scaleLinear()
            .range([height, 0]);

        x.domain(data.map(function (d) { return d.date; }))
        xAxis.call(d3.axisBottom(x)).call(g => g.select(".domain").remove())
        y.domain([0, d3.max(data, function (d) { return d.value })])

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")

        const rx = 6;
        const ry = 6;
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
        xAxis.selectAll(".tick text")
            .attr("font-size", "10px")

        bars.append("text")
            .attr("class", "label")
            .attr("y", function (d) {
                return y(d.value) - 5;
            })
            .attr("x", function (d) {
                return x(d.date) + x.bandwidth() / 2 - 7;
            })
            .text(function (d) {
                return d.value;
            });
        bars.selectAll(".label")
            .attr('font-size', '10px')
    }

    useEffect(() => {
        if (props.DailyConfirmed !== undefined && props.DailyConfirmed.length !== 0)
            drawBarChart(props.DailyConfirmed);
    }, [props.DailyConfirmed])

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={12}><div id="barChart"></div></Grid>
        </Grid>
    )
}
