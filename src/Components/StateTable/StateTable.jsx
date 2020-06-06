import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import LineChart from '../Charts/LineChart';
import StateCasesCard from '../StateCasesCard/StateCasesCard';
import axios from 'axios';
import './StateTable.css'
import * as Constants from '../../constants'
import LinkSvg from './link.svg'
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 16
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    fontWeight: 'Bold',
  },
  pos: {
    marginBottom: 12,
  },
  greyColor: {
    color: '#34495E',
    fontSize: 12,
    fontWeight: 'Bold',
    borderRadius: '4px',
    padding: '4px',
    margin: '1px',
    backgroundColor: '#F0F3F4',
    cursor: 'pointer'
  },
  simpleColor: {
    color: '#34495E',
    fontSize: 12,
    fontWeight: 'Bold',
    borderRadius: '4px',
    padding: '4px',
    margin: '1px',
    cursor: 'pointer'
  },
  headerColor: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'Bold',
    border: '2px solid #ffffff',
    borderRadius: '4px',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#E5E7E9'
  },
  hrLine: {
    height: '2px',
    color: '#E5E7E9',
    backgroundColor: '#E5E7E9',
    border: 'none',
  },
  greyBorder: {
    border: 'none'
  },
  onHoverClass: {
    backgroundColor: '#BDC3C7'
  },
  rightSide: {
  },
  marginClass: {
    marginTop: '50px'
  }
});


var STATE_CODES = Constants.STATE_CODES;

function StateTable(props) {
  var classes = useStyles();
  const [rowData, setRowData] = useState({});
  const [totalData, setTotalData] = useState({});
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedStateName, setSelectedStateName] = useState("");
  const [stateWiseDaily, setStateWiseDaily] = useState([]);
  const [todaySelectedStateData, setTodaySelectedStateData] = useState({});
  const [todayData, setTodayData] = useState({});

  const getDailyStatewiseCases = async () => {
    await axios({
      method: 'GET',
      url: Constants.STATE_DAILY_CHANGES,
    })
      .then((response) => {
        setStateWiseDaily(response.data.states_daily);
        var todayConfirmed = response.data.states_daily[response.data.states_daily.length - 3],
          todayRecovered = response.data.states_daily[response.data.states_daily.length - 2],
          todayDeath = response.data.states_daily[response.data.states_daily.length - 1];
        setTodayData({ confirmed: todayConfirmed, recovered: todayRecovered, deceased: todayDeath });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (stateWiseDaily !== undefined) {
      if (stateWiseDaily.length !== 0) {
        var todayConfirmed = stateWiseDaily[stateWiseDaily.length - 3];
        var todayDeath = stateWiseDaily[stateWiseDaily.length - 1], temp = {};
        var selectedStateCode = Constants.getStateCode(STATE_CODES, rowData.state);
        if (selectedStateCode === undefined)
          selectedStateCode = "tt";
        Object.keys(todayConfirmed).forEach((key) => {
          if (key === selectedStateCode.toLowerCase())
            temp["TodayConfirmed"] = todayConfirmed[key];
        })
        Object.keys(todayDeath).forEach((key) => {
          if (key === selectedStateCode.toLowerCase())
            temp["TodayDeath"] = todayDeath[key];
        })
        setTodaySelectedStateData(temp);
      }
    }
  }
    , [rowData, totalData]);

  useEffect(() => {
    props.TableData.map((value, index) => {
      if (value.state === "Total") {
        setTotalData(value)
      }
    })
  }, [props.TableData]);

  useEffect(() => {
    getDailyStatewiseCases();
  }, [])

  const onSelectRow = (data) => {
    setRowData(data);
    setIsRowSelected(true);
    setSelectedStateName(data.state);
  }

  const onHover = (data, value, index) => {
    setIsHovered(true);
    if (value) {
      setRowData(data);
      setHoverIndex(index);
    }
  }

  const selectedStateHandler = (selectedOption) => {
    props.TableData.map((value, index) => {
      if (value.statecode === selectedOption.toUpperCase()) {
        setRowData(value);
      }
    })
  }
  return (
    <Grid container className={classes.marginClass}>
      <Grid item sm={1} xs={1} >
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container direction="row"
          justify="flex-end"
          alignItems="flex-start" >
          <table className="state-table">
            <thead>
              <tr>
                <th className="header-color">STATE/UT</th>
                <th className="header-color ">CONFIRMED</th>
                <th className="header-color ">ACTIVE</th>
                <th className="header-color ">RECOVERED</th>
                <th className="header-color ">DEATHS</th>
              </tr>
            </thead>
            <tbody>
              {props.TableData.map((value, index) => {
                if (Object.keys(todayData).length !== 0 && value.confirmed !== "0" && value.state !== "Total" && value !== undefined) {
                  return (
                    <tr key={index} onClick={() => onSelectRow(value)} onMouseEnter={() => onHover(value, true, index)}
                      onMouseLeave={() => onHover(value, false, index)} >
                      <td style={{ width: '30%' }}>
                        {value.state}
                        <Link to={`/state/${value.state}/${value.statecode}`} style={{ color: 'blue', textDecoration: 'none' }}>
                          <img src={LinkSvg} alt="" style={{ float: 'right' }} />
                        </Link>
                      </td>
                      <td className="cases-cell">
                        {value.statecode !== undefined && todayData.confirmed[value.statecode.toLowerCase()] !== "0" ? (<span className="today-confirmed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                          {value.statecode !== undefined && todayData.confirmed[value.statecode.toLowerCase()] !== "0" ? todayData.confirmed[value.statecode.toLowerCase()] : null}
                      &nbsp;&nbsp;</span>) : null}
                        {value.confirmed}
                      </td>
                      <td className="cases-cell"> {value.active} </td>
                      <td className="cases-cell">
                        {value.statecode !== undefined && todayData.recovered[value.statecode.toLowerCase()] !== "0" ? (<span className="today-recovered">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                          {value.statecode !== undefined && todayData.recovered[value.statecode.toLowerCase()] !== "0" ? todayData.recovered[value.statecode.toLowerCase()] : null}
                      &nbsp;&nbsp;</span>) : null}
                        {value.recovered} </td>
                      <td className="cases-cell">
                        {value.statecode !== undefined && todayData.deceased[value.statecode.toLowerCase()] !== "0" ? (<span className="today-deaths">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                          {value.statecode !== undefined && todayData.deceased[value.statecode.toLowerCase()] !== "0" ? todayData.deceased[value.statecode.toLowerCase()] : null}
                      &nbsp;&nbsp;</span>) : null}
                        {value.deaths} </td>
                    </tr>
                  )
                }
              })
              }
            </tbody>
          </table>
        </Grid>
      </Grid>

      {isRowSelected || isHovered ? <Grid item xs={12} md={5}>
        <Grid container className={classes.rightSide}>
          <Grid item xs={12} md={12}>
            <StateCasesCard state={rowData.state}
              deaths={rowData.deaths}
              recovered={rowData.recovered}
              confirmed={rowData.confirmed}
              active={rowData.active}
              todayData={todaySelectedStateData}
              statecode={rowData.statecode}>
            </StateCasesCard>
          </Grid>
          <Grid item xs={12} md={12}>
          </Grid>
          <Grid item xs={12} md={12}>
            <LineChart SelectedState={rowData.state} SelectedStateHandler={(s) => selectedStateHandler(s)}></LineChart>
          </Grid>
        </Grid></Grid> : (
          (Object.keys(totalData).length !== 0) ?
            <Grid item xs={12} md={5}>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <StateCasesCard state={totalData.state}
                    deaths={totalData.deaths}
                    recovered={totalData.recovered}
                    confirmed={totalData.confirmed}
                    active={totalData.active}
                    todayData={todaySelectedStateData}
                    statecode={totalData.statecode}>
                  </StateCasesCard>
                </Grid>
                <Grid item xs={12} md={12}>
                </Grid>
                <Grid item xs={12} md={12}>
                  <LineChart SelectedState={totalData.state} SelectedStateHandler={(s) => selectedStateHandler(s)}></LineChart>
                </Grid>
              </Grid>
            </Grid>
            : null
        )}
    </Grid>
  )
}

export default StateTable;
