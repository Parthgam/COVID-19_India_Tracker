import React, { useState, useEffect } from 'react';
import StateDataList from './StateDataList/StateDataList';
import StateTable from './StateTable/StateTable';
import TotalCases from './TotalCases/TotalCases';
import DataAnalysis from './DataAnalysis/DataAnalysis';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import * as Constants from '../constants';

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
export default function Home(props) {
  const [covidData, setcovidData] = useState([{}]);
  const [totalData, setTotalData] = useState({});
  const [dataForAnalysis, setDataForAnalysis] = useState([{}]);
  const [tableData, setTableData] = useState([{}]);
  const [statesDaily, setStatesDaily] = useState()

  const getStatesDaily = (data) => {
    if (data !== undefined && data.length !== 0) setStatesDaily(data);
  }

  const fetchData = async () => {
    await axios({
      method: 'GET',
      url: Constants.NATIONAL_LEVEL_DATA,
    })
      .then((response) => {
        setcovidData(response.data.statewise);
        setTableData(response.data.statewise);
        props.totalDataHandler(response.data.statewise);
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
  };

  useEffect(() => {
    if (statesDaily !== undefined && Object.keys(statesDaily).length !== 0) {
      props.statesDailyHandler(statesDaily)
    }
  }, [statesDaily]);

  useEffect(() => {
    fetchData();
  }, []);

  var bgColor = {
    backgroundColor: '#161625'
  }

  return (
    <div className={bgColor}>
      <TotalCases TotalData={totalData}></TotalCases>
      <StateTable TableData={tableData} StatesDailyHandler={getStatesDaily} ></StateTable>
    </div>
  );
}
