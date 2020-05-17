import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import * as d3 from "d3";


export default function BarChart(props) {

    const drawBarChart = (data, fillColor, isRemove) => {
        if (isRemove === 1) {
            d3.select("#svgBarChart").remove();
        }
        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 450 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;
        var svg = d3.select("#barChart")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 500 300")
            .attr("id", "svgBarChart")
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        // Initialize the X axis
        var x = d3.scaleBand()
            .range([0, width])
            .padding(0.35);
        var xAxis = svg.append("g")
            .attr("transform", "translate(0," + height + ")")
        // Initialize the Y axis
        var y = d3.scaleLinear()
            .range([height, 0]);


        x.domain(data.map(function (d) { return d.date; }))
        xAxis.call(d3.axisBottom(x)).call(g => g.select(".domain").remove())


        var maximumY = d3.max(data, function (d) {
            return +d.value;
        });
        if (maximumY === 0)
            y.domain([0, 1])
        else
            y.domain([0, maximumY])
        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")
        var rx, ry;
        if (maximumY === 0) {
            rx = 0;
            ry = 0;
        }
        else {
            rx = 8;
            ry = 8;
        }
        svg
            .selectAll("bar")
            .data(data)
            .enter().append("path")
            .style("fill", fillColor)
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
            .attr("font-size", "14px")
            .attr("font-weight", '600')
            .attr("color", "#6c757d")

        bars.append("text")
            .attr("class", "label")
            .attr('font-size', '14px')
            .attr('font-weight', 'bold')
            .attr("color", "#6c757d")
            .attr("y", function (d) {
                return y(d.value) - 5;
            })
            .attr("x", function (d) {
                return x(d.date) + x.bandwidth() / 4 - 2;
            })
            .text(function (d) {
                return d.value;
            });
        // d3.selectAll(".label")
        //     .attr('font-size', '14px')
        //     .attr('font-weight', 'bold')
        //     .attr("color", "#6c757d !important")
    }

    useEffect(() => {
        if (props.SelectedOption !== undefined) {
            if (props.SelectedOption === "confirmed" && props.DailyConfirmed !== undefined && props.DailyConfirmed.length !== 0) {
                drawBarChart(props.DailyConfirmed, 'rgba(220, 53, 69, 0.565)', 1);
            }
            else if (props.SelectedOption === "recovered" && props.DailyRecovered !== undefined && props.DailyRecovered.length !== 0) {
                drawBarChart(props.DailyRecovered, 'rgba(40, 167, 69, 0.565)', 1);
            }
            else if (props.SelectedOption === "death" && props.DailyDeath !== undefined && props.DailyDeath.length !== 0) {
                drawBarChart(props.DailyDeath, 'rgba(108, 117, 125, 0.565)', 1);
            }
            else if (props.SelectedOption === "active" && props.DailyActive !== undefined && props.DailyActive.length !== 0) {
                drawBarChart(props.DailyActive, 'rgba(0, 123, 255, 0.565)', 1);
            }
        }

        // if (props.PrevSelectedOption === "") {
        //     drawBarChart(props.DailyConfirmed, 'red', 0);
        // }
    }, [props.SelectedOption, props.PrevSelectedOption])

    useEffect(() => {
        if (props.DailyDeath !== undefined)
            drawBarChart(props.DailyConfirmed, "rgba(220, 53, 69, 0.565)", 0)
    }, [])

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={12}><div id="barChart"></div></Grid>
        </Grid>
    )
}
