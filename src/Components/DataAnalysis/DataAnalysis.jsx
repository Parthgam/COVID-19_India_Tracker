import React from 'react';
import Chart from 'chart.js';

function DataAnalysis() {
    var data = [{
        x: 10,
        y: 20
    }, {
        x: 15,
        y: 10
    }];
//     var ctx = document.getElementById('myChart');
// var ctx = document.getElementById('myChart').getContext('2d');
// var ctx = $('#myChart');
    var ctx = 'myChart';
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data
    });
  return (
    <div>
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default DataAnalysis;
