import React, { useEffect, useState } from 'react'
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

    const [dailyConfirmed, setDailyConfirmed] = useState()
    const [dailyActive, setDailyActive] = useState()
    const [dailyRecovered, setDailyRecovered] = useState()
    const [dailyDeath, setDailyDeath] = useState()
    const [selOption, setSelOption] = useState()

    useEffect(() => {
        if (props.DailyConfirmed !== undefined && props.DailyConfirmed.length !== 0) {
            setDailyConfirmed(props.DailyConfirmed);
        }
    }, [props.DailyConfirmed])

    useEffect(() => {
        if (props.DailyActive !== undefined && props.DailyActive.length !== 0) {
            setDailyActive(props.DailyActive);
        }
    }, [props.DailyActive])

    useEffect(() => {
        if (props.DailyRecovered !== undefined && props.DailyRecovered.length !== 0) {
            setDailyRecovered(props.DailyRecovered);
        }
    }, [props.DailyRecovered])

    useEffect(() => {
        if (props.DailyDeath !== undefined && props.DailyDeath.length !== 0) {
            setDailyDeath(props.DailyDeath);
        }
    }, [props.DailyDeath])

    useEffect(() => {
        if (props.SelectedOption !== undefined) {
            setSelOption(props.SelectedOption)
        }
    }, [props.SelectedOption, props.PrevSelectedOption])

    useEffect(() => {
        if (selOption !== undefined) {
            if (selOption === "confirmed" && dailyConfirmed !== undefined && dailyConfirmed.length !== 0) {
                alert("rec")
                drawBarChart(dailyConfirmed, 'rgba(220, 53, 69, 0.565)', 1);
            }
            else if (selOption === "recovered" && dailyRecovered !== undefined && dailyRecovered.length !== 0) {
                drawBarChart(dailyRecovered, 'rgba(40, 167, 69, 0.565)', 1);
            }
            else if (selOption === "death" && dailyDeath !== undefined && dailyDeath.length !== 0) {
                drawBarChart(dailyDeath, 'rgba(108, 117, 125, 0.565)', 1);
            }
            else if (selOption === "active" && dailyActive !== undefined && dailyActive.length !== 0) {
                drawBarChart(dailyActive, 'rgba(0, 123, 255, 0.565)', 1);
            }
            alert("Hello")
        }
        alert("hello")
    }, [selOption, dailyConfirmed, dailyRecovered, dailyDeath, dailyActive])

    useEffect(() => {
        if (dailyConfirmed !== undefined)
            drawBarChart(dailyConfirmed, "rgba(220, 53, 69, 0.565)", 0)
    }, [])

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={12}><div id="barChart"></div></Grid>
        </Grid>
    )
}
