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
import { Link, useHistory } from 'react-router-dom'


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
  const history = useHistory();
  var classes = useStyles();
  const [rowData, setRowData] = useState({});
  const [totalData, setTotalData] = useState({});
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

  const onSelectRow = (data, index) => {
    setRowData(data);
    setIsRowSelected(true);
    setSelectedStateName(data.state);
    setSelectedIndex(index);
  }

  const onHover = (data, value, index) => {
    setIsHovered(true);
    if (value) {
      setRowData(data);
      setHoverIndex(index);
      setSelectedIndex(index);
    }
  }

  const selectedStateHandler = (selectedOption) => {
    props.TableData.map((value, index) => {
      if (value.statecode === selectedOption.toUpperCase()) {
        setRowData(value);
      }
    })
  }
  const handleDoubleClick = (state, statecode) => {
    history.push(`/state/${state}/${statecode}`);
  }
  return (
    <Grid container className={classes.marginClass} >
      <Grid item md={1} >
      </Grid>
      <Grid item xs={12} md={5}>
      <Grid container direction="row"
          justify="flex-start"
          alignItems="flex-start" style={{ padding: "10px" }}>
          <svg height="20px" viewBox="0 0 512 512.00008" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m429.078125 0h-346.15625c-45.796875 0-82.921875 37.125-82.921875 82.921875v243.222656c0 45.796875 37.125 82.921875 82.921875 82.921875h14.144531v87.417969c0 13.796875 16.675782 20.703125 26.429688 10.949219l98.371094-98.367188h207.210937c45.796875 0 82.921875-37.125 82.921875-82.921875v-243.222656c0-45.796875-37.125-82.921875-82.921875-82.921875zm0 0" fill="#69ebfc"/><path d="m429.078125 0h-346.15625c-45.796875 0-82.921875 37.125-82.921875 82.921875v20c0-45.796875 37.125-82.917969 82.921875-82.917969h346.15625c45.796875 0 82.921875 37.121094 82.921875 82.917969v-20c0-45.796875-37.125-82.921875-82.921875-82.921875zm0 0" fill="#a1f1fc"/><path d="m97.066406 389.066406h-14.144531c-45.796875 0-82.921875-37.125-82.921875-82.921875v20c0 45.796875 37.125 82.921875 82.921875 82.921875h14.144531zm0 0" fill="#5fd4e3"/><path d="m429.078125 389.066406h-207.210937l-98.371094 98.367188c-9.753906 9.753906-26.429688 2.847656-26.429688-10.949219v20c0 13.796875 16.675782 20.703125 26.429688 10.949219l98.371094-98.367188h207.210937c45.796875 0 82.921875-37.125 82.921875-82.921875v-20c0 45.796875-37.125 82.921875-82.921875 82.921875zm0 0" fill="#5fd4e3"/><path d="m399.785156 205.648438c0 79.410156-64.375 143.785156-143.785156 143.785156s-143.785156-64.375-143.785156-143.785156c0-79.40625 64.375-143.78125 143.785156-143.78125s143.785156 64.375 143.785156 143.78125zm0 0" fill="#ffefe4"/><path d="m255.851562 147.414062c-3.40625 0-6.65625-.644531-9.757812-1.953124-3.105469-1.296876-5.804688-3.097657-8.105469-5.402344-2.300781-2.296875-4.105469-4.953125-5.402343-7.953125-1.300782-3.003907-1.953126-6.304688-1.953126-9.90625 0-3.601563.648438-6.90625 1.953126-9.90625 1.296874-3.003907 3.101562-5.652344 5.402343-7.957031 2.296875-2.296876 5-4.101563 8.105469-5.402344 3.101562-1.296875 6.351562-1.953125 9.757812-1.953125 7.003907 0 13.007813 2.457031 18.011719 7.355469 5 4.90625 7.503907 10.859374 7.503907 17.863281 0 7.007812-2.503907 12.957031-7.503907 17.859375-5.003906 4.910156-11.007812 7.355468-18.011719 7.355468zm-19.511718 147.238282v-107.765625c0-10.859375 8.800781-19.660157 19.660156-19.660157s19.660156 8.804688 19.660156 19.660157v107.765625c0 10.859375-8.800781 19.660156-19.660156 19.660156s-19.660156-8.800781-19.660156-19.660156zm0 0" fill="#6770e6"/></svg>
          <span className="info-text">Select row to view State wise Data.<br/>
          </span>
        </Grid>
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
                    <tr key={index} className={ index == selectedIndex ? "selected-state" : null } onClick={() => onSelectRow(value, index)} onDoubleClick={() => handleDoubleClick(value.state, value.statecode) }/* onMouseEnter={() => onHover(value, true, index)} onMouseLeave={() => onHover(value, false, index)} */
                    >
                      <td style={{ width: '30%' }}>
                        {value.state}
                        <Link to={`/state/${value.state}/${value.statecode}`} style={{ color: 'blue', textDecoration: 'none' }}>
                          <img src={LinkSvg} alt="" style={{ float: 'right' }} />
                        </Link>
                      </td>
                      <td className="cases-cell">
                        {value.confirmed}
                        {/* <br/>
                        {value.statecode !== undefined && todayData.confirmed[value.statecode.toLowerCase()] !== "0" ? (<span className="today-confirmed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                          {value.statecode !== undefined && todayData.confirmed[value.statecode.toLowerCase()] !== "0" ? todayData.confirmed[value.statecode.toLowerCase()] : null}
                        &nbsp;&nbsp;</span>) : null} */}
                      </td>
                      <td className="cases-cell"> {value.active} </td>
                      <td className="cases-cell">
                        {value.recovered}
                        {/* <br/>
                        {value.statecode !== undefined && todayData.recovered[value.statecode.toLowerCase()] !== "0" ? (<span className="today-recovered">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                          {value.statecode !== undefined && todayData.recovered[value.statecode.toLowerCase()] !== "0" ? todayData.recovered[value.statecode.toLowerCase()] : null}
                      &nbsp;&nbsp;</span>) : null} */}
                      </td>
                      <td className="cases-cell">
                        {value.deaths}
                        {/* <br/>
                        {value.statecode !== undefined && todayData.deceased[value.statecode.toLowerCase()] !== "0" ? (<span className="today-deaths">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                          {value.statecode !== undefined && todayData.deceased[value.statecode.toLowerCase()] !== "0" ? todayData.deceased[value.statecode.toLowerCase()] : null}
                      &nbsp;&nbsp;</span>) : null} */}
                      </td>
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
        <Grid item md={1} >
      </Grid>
    </Grid>
  )
}

export default StateTable;
