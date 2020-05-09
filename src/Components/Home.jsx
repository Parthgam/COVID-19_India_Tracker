import React, { useState, useEffect } from 'react';
import StateDataList from './StateDataList/StateDataList';
import StateTable from './StateTable/StateTable';
import TotalCases from './TotalCases/TotalCases';
import DataAnalysis from './DataAnalysis/DataAnalysis';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Grid } from '@material-ui/core';
import axios from 'axios';

var StateStyle = {};
var DataArray = [
  {
    Cases: '15',
    StateName: 'Maharashtra',
  },
  {
    Cases: '35',
    StateName: 'Haryana',
  },
];
var res;
export default function Home() {
  const [covidData, setcovidData] = useState([{}]);
  const [totalData, setTotalData] = useState({});
  const [dataForAnalysis, setDataForAnalysis] = useState([{}]);
  const [tableData, setTableData] = useState([{}]);
  const fetchData = async () => {
    await axios({
      method: 'GET',
      url: 'https://api.covid19india.org/data.json',
    })
      .then((response) => {
        //console.log(response.data.statewise);
        setcovidData(response.data.statewise);
        setTableData(response.data.statewise);
        //console.log(response.data.statewise[0]);
        setTotalData(response.data.statewise[0]);
        fetchDataForAnalysis(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchDataForAnalysis = async (response) => {
    var analysisData = [];
    response.data.cases_time_series.map((value, index) => {
      analysisData.push({
        'date': value.date,
        "totalconfirmed": value.totalconfirmed,
        'dailyconfirmed': value.dailyconfirmed,
        "dailydeceased": value.dailydeceased,
        "dailyrecovered": value.dailyrecovered
      });
    });
    //console.log(analysisData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  var bgColor = {
    backgroundColor: '#161625'
  }

  return (
    <div className={bgColor}>
      {/* <Header></Header> */}
      <TotalCases TotalData={totalData}></TotalCases>
      <StateTable TableData={tableData}></StateTable>
      {/* <Footer /> */}
      {/* <Grid container>
        <Grid item xs={12}>
          <StateDataList StateStyle={StateStyle} DataArray={covidData}></StateDataList>
        </Grid>
      </Grid> */}

      {/* <DataAnalysis></DataAnalysis> */}
    </div>
  );
}
