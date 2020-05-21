import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid } from '@material-ui/core'
import './StateDistrictData.css'
import StateData from '../StateData/StateData'
import BarChart from '../BarChart/BarChart'
import Skeleton from '@material-ui/lab/Skeleton';
import * as Constants from '../../constants'
import { useHistory } from 'react-router-dom';

export default function StateDistrictData(props) {

    var STATE_CODES = Constants.STATE_CODES;
    var STATE_POPULATIONS = Constants.STATE_POPULATIONS;

    const [zones, setZones] = useState([])
    const [stateDistrictData, setStateDistrictData] = useState([])
    const [selectedStateDistrictData, setSelectedStateDistrictData] = useState([])
    const [selectedStateDistrictData1, setSelectedStateDistrictData1] = useState([])
    const [selectedDistrictZones, setSelectedDistrictZones] = useState([])
    const [selectedStateName, setSelectedStateName] = useState("")
    const [statesDaily, setStatesDaily] = useState([])
    const [dailyConfirmed, setDailyConfirmed] = useState([])
    const [dailyActive, setDailyActive] = useState([])
    const [dailyRecovered, setDailyRecovered] = useState([])
    const [dailyDeath, setDailyDeath] = useState([])
    const [totalData, setTotalData] = useState([])
    const [statesTestData, setStatesTestData] = useState([])
    const [selectedStateTotal, setSelectedStateTotal] = useState({})
    const [selectedStateDaily, setSelectedStateDaily] = useState({})
    const [weekBeforeTotal, setWeekBeforeTotal] = useState()
    const [selOption, setSelOption] = useState("");
    const [prevSelOption, setPrevSelOption] = useState("");
    const [activeClass, setActiveClass] = useState(0);
    const [selectedTotalTested, setSelectedTotalTested] = useState(-1);
    const [selDropdownValue, setSelDropdownValue] = useState(props.match.params.state);

    const splitDateFormatter = (date) => {
        var arr = date.split('-', 2);
        return arr.join(' ');
    }

    const getDistrictAndZoneData = async () => {
        await axios({
            method: 'GET',
            url: Constants.DISTRICT_LEVEL_ZONES,
        })
            .then((response) => {
                setZones(response.data.zones);
            })
            .catch((error) => {
                console.log(error);
            });
        await axios({
            method: 'GET',
            url: Constants.STATE_DISTRICT_WISE_V2,
        })
            .then((response) => {
                setStateDistrictData(response.data);
                setSelectedStateName(props.match.params.state);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getStatesDailyData = async () => {
        await axios({
            method: 'GET',
            url: Constants.STATE_DAILY_CHANGES,
        })
            .then((response) => {
                setStatesDaily(response.data.states_daily);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getTotalStateData = async () => {
        await axios({
            method: 'GET',
            url: Constants.NATIONAL_LEVEL_DATA,
        })
            .then((response) => {
                setTotalData(response.data.statewise);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getStateTestData = async () => {
        await axios({
            method: 'GET',
            url: Constants.STATE_TEST_DATA,
        })
            .then((response) => {
                setStatesTestData(response.data.states_tested_data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (selectedStateName !== undefined && stateDistrictData !== undefined && zones !== undefined && stateDistrictData.length !== 0 && zones.length !== 0) {
            var tempVar = [];
            zones.map((value, index) => {
                if (value["state"] === selectedStateName) {
                    tempVar.push(value);
                }
                return null;
            })
            setSelectedDistrictZones(tempVar);
            var flag = false;
            stateDistrictData.map((value, index) => {
                if (value["state"] === selectedStateName) {
                    setSelectedStateDistrictData(value.districtData);
                    flag = true;
                }
                else if (flag === true) {
                    return null;
                }
                return null;
            })
        }

        if (statesDaily !== undefined && statesDaily.length !== 0 && selectedStateName !== undefined && selectedStateName !== "") {
            var selectedStateCode = Constants.getStateCode(STATE_CODES, selectedStateName);
            var length = statesDaily.length;
            var len_con = length - 3, len_rec = length - 2, len_dec = length - 1;
            var daily_con = [], daily_act = [], daily_rec = [], daily_dec = [], temp = {};
            var i = 0;
            for (i = 0; i < 5; i++) {
                temp["value"] = statesDaily[len_con][selectedStateCode.toLowerCase()];
                temp["date"] = splitDateFormatter(statesDaily[len_con]["date"]);
                len_con -= 3;
                daily_con.push(temp);
                temp = {};
                temp["value"] = statesDaily[len_rec][selectedStateCode.toLowerCase()];
                temp["date"] = splitDateFormatter(statesDaily[len_rec]["date"]);
                len_rec -= 3;
                daily_rec.push(temp);
                temp = {};
                temp["value"] = statesDaily[len_dec][selectedStateCode.toLowerCase()];
                temp["date"] = splitDateFormatter(statesDaily[len_dec]["date"]);
                len_dec -= 3;
                daily_dec.push(temp);
                temp = {};

                temp["value"] = parseInt(statesDaily[len_con][selectedStateCode.toLowerCase()]) - parseInt(statesDaily[len_rec][selectedStateCode.toLowerCase()]);
                temp["date"] = splitDateFormatter(statesDaily[len_con]["date"]);
                daily_act.push(temp);
                temp = {};
            }
            setDailyConfirmed(daily_con.reverse())
            setDailyRecovered(daily_rec.reverse())
            setDailyDeath(daily_dec.reverse())
            setDailyActive(daily_act.reverse())
        }

    }, [selectedStateName, props.match.params.state])

    useEffect(() => {
        if (selectedDistrictZones !== undefined && selectedDistrictZones.length !== 0) {
            selectedStateDistrictData.map((value, index) => {
                selectedDistrictZones.map((val, i) => {
                    if (value["district"] === val["district"]) {
                        value["zone"] = val["zone"];
                    }
                })
            })
            setSelectedStateDistrictData1(selectedStateDistrictData)
        }
    }, [selectedDistrictZones, props.match.params.state])

    useEffect(() => {
        if (totalData !== undefined && totalData.length !== 0) {
            totalData.map((value, index) => {
                if (value["state"] === props.match.params.state) {
                    setSelectedStateTotal(value);
                }
            })
        }
    }, [totalData, props.match.params.state])

    useEffect(() => {
        if (statesDaily !== undefined && statesDaily.length !== 0) {
            var length = statesDaily.length - 1;
            setSelectedStateDaily({
                confirmedToday: statesDaily[length - 2][props.match.params.statecode],
                recoveredToday: statesDaily[length - 1][props.match.params.statecode],
                deathsToday: statesDaily[length][props.match.params.statecode]
            })
            var sum = 0, temp = 0;
            for (var i = 0; i < 6; i++) {
                sum += parseInt(statesDaily[length - 2 - temp][props.match.params.statecode])
                temp += 3;
            }
            setWeekBeforeTotal(sum);
        }
    }, [statesDaily, props.match.params.state])

    useEffect(() => {
        if (statesTestData !== undefined && statesTestData.length !== 0) {
            var prevTemp = {}, totalTested = -1;
            if (statesTestData[0].totaltested === "") {
                prevTemp = {};
            }
            else {
                prevTemp = statesTestData[0];
            }
            for (var i = 1; i < statesTestData.length - 1; i++) {
                if (prevTemp["state"] !== undefined) {
                    if (prevTemp["state"] !== statesTestData[i]["state"] && props.match.params.state !== undefined && prevTemp["state"] === props.match.params.state) {
                        totalTested = prevTemp["totaltested"];
                        break;
                    }
                    prevTemp = statesTestData[i];
                }
            }
            if (statesTestData[statesTestData.length - 1]["state"] === props.match.params.state) {
                totalTested = statesTestData[statesTestData.length - 1]["totaltested"];
            }
            setSelectedTotalTested(totalTested);
        }
    }, [statesTestData, props.match.params.state])

    useEffect(() => {
        getDistrictAndZoneData();
        getStatesDailyData();
        getTotalStateData();
        getStateTestData();
    }, [])

    const handleTotalCardClick = (option) => {
        setPrevSelOption(selOption);
        setSelOption(option);
        if (option === "confirmed") setActiveClass(0);
        else if (option === "active") setActiveClass(1);
        else if (option === "recovered") setActiveClass(2);
        else setActiveClass(3);
    }

    const handleClick = () => {
    }
    const history = useHistory();
    const handleDropdownChange = (event) => {
        setSelDropdownValue(event.target.value);
        // browserHistory.push('/state/' + event.target.value + '/' + Constants.getStateCode(Constants.STATE_CODES, event.target.value).toLowerCase());
        history.push('/state/' + event.target.value + '/' + Constants.getStateCode(Constants.STATE_CODES, event.target.value).toLowerCase());
    }

    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <Grid container>

                    <Grid item xs={12} md={12}>
                        <Grid container direction="row"
                            justify="center"
                            alignItems="flex-start" className="total-case-grid">
                            <Grid item xs={1} md={1}>
                            </Grid>
                            <Grid item xs={4} md={4} className="border">
                                <Grid container direction="row"
                                    justify="flex-start"
                                    alignItems="flext-start">
                                    <Grid item xs={12} md={12} className="breadcrumb">
                                        Home&nbsp;&nbsp;/&nbsp;&nbsp;
                                        <select value={selDropdownValue} onChange={handleDropdownChange}>
                                            {
                                                Object.keys(Constants.STATE_CODES).map((key, index) => <option key={Constants.STATE_CODES[key]} value={Constants.STATE_CODES[key]}>{Constants.STATE_CODES[key]}</option>)
                                            }
                                        </select>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="border">
                                        <Grid direction="column" justify="center" alignItems="center" className="box-left">
                                            <Grid xs={12} md={12} className="box-left-statename">
                                                {props.match.params.state !== undefined ? props.match.params.state : null}
                                            </Grid>
                                            <Grid xs={12} md={12} className="box-left-time">Last Updated On 15 May, 22:15 IST</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="active border">
                                        <Grid direction="row" justify="flex-start" alignItems="center" className="box-right">
                                            <Grid item className="box-right-test">
                                                Tested
                                            </Grid>
                                            <Grid item className="box-right-testno">
                                                {selectedTotalTested !== undefined && selectedTotalTested !== -1 ? selectedTotalTested : null}
                                            </Grid>
                                            <Grid item className="box-right-time">
                                                Updated on of 16 May
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container direction="row"
                                    justify="center"
                                    alignItems="center" >
                                    <Grid item xs={2} md={2} className={activeClass === 0 ? "selected-total-card red-total-card" : "total-card"}
                                        onClick={() => { handleTotalCardClick("confirmed") }} >

                                        <Grid item xs={12} md={12} className="line-text confirmed">Confirmed</Grid>
                                        <Grid item xs={12} md={12} className="line-number-inc confirmed">
                                            [+{selectedStateDaily !== undefined && selectedStateDaily.length !== 0 ? selectedStateDaily.confirmedToday : null}]
                                            </Grid>
                                        <Grid item xs={12} md={12} className="line-number confirmed">
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? selectedStateTotal.confirmed : null}
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2} md={2} className={activeClass === 1 ? "selected-total-card blue-total-card" : "total-card"} onClick={() => { handleTotalCardClick("active") }}>

                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid item xs={12} md={12} className="line-text active">Active</Grid>
                                            <Grid item xs={12} md={12} className="line-number-inc active">
                                                <br />
                                            </Grid>
                                            <Grid item xs={12} md={12} className="line-number active">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? selectedStateTotal.active : null}
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2} md={2} className={activeClass === 2 ? "selected-total-card green-total-card" : "total-card"} onClick={() => { handleTotalCardClick("recovered") }}>

                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid item xs={12} md={12} className="line-text recovered">Recovered</Grid>
                                            <Grid item xs={12} md={12} className="line-number-inc recovered">
                                                [+{selectedStateDaily !== undefined && selectedStateDaily.length !== 0 ? selectedStateDaily.recoveredToday : null}]
                                        </Grid>
                                            <Grid item xs={12} md={12} className="line-number recovered">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? selectedStateTotal.recovered : null}
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid item xs={2} md={2} className={activeClass === 3 ? "selected-total-card grey-total-card" : "total-card"} onClick={() => { handleTotalCardClick("death") }}>

                                        <Grid container direction="column" justify="center" alignItems="center">
                                            <Grid item xs={12} md={12} className="line-text death">Death</Grid>
                                            <Grid item xs={12} md={12} className="line-number-inc death">
                                                [+{selectedStateDaily !== undefined && selectedStateDaily.length !== 0 ? selectedStateDaily.deathsToday : null}]
                                        </Grid>
                                            <Grid item xs={12} md={12} className="line-number death">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? selectedStateTotal.deaths : null}
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} md={1}>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={12} className="body-container">
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            <Grid item xs={1} md={1}>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                {dailyConfirmed !== undefined && dailyConfirmed.length !== 0
                                    ?
                                    <Grid container direction="row" justify="center" alignItems="center">
                                        <Grid item xs={2} md={2} className="bar-chart-heading">
                                            Last Five Days Confirmed Case
                                    </Grid>
                                        <Grid item xs={10} md={10}>
                                            <BarChart SelectedOption={selOption} PrevSelectedOption={prevSelOption} DailyConfirmed={dailyConfirmed} DailyRecovered={dailyRecovered} DailyDeath={dailyDeath} DailyActive={dailyActive}></BarChart>
                                        </Grid>
                                    </Grid>
                                    :
                                    <Grid item xs={12} sm={12} md={12}>
                                        <Skeleton animation="wave" variant="rect" height="133px" />
                                    </Grid>
                                }

                                <StateData SelectedOption={selOption} SelectedDistrictData={selectedStateDistrictData1} SelectedDistrictZones={selectedDistrictZones} state={props.match.params.state} />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item xs={5} md={5} className="border stats-card-cpm">
                                        <Grid container direction="column" justify="space-around" alignItems="flex-start">
                                            <Grid item xs={12} md={12} className="title-stats-card">
                                                Confirmed Per Million
                                                </Grid>
                                            <Grid item xs={12} md={12} className="content-stats-card">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.confirmed / STATE_POPULATIONS[props.match.params.state]) * 1000000).toFixed(2)) : null}
                                            </Grid>
                                            <Grid item xs={12} md={12} className="caption-stats-card">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? Math.round(((selectedStateTotal.confirmed / STATE_POPULATIONS[props.match.params.state]) * 1000000).toFixed(2)) : null} &nbsp;
                                            out of every 1 million people in {props.match.params.state} have tested positive for the virus.
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="border stats-card-active">
                                        <Grid container direction="row" justify="space-between" alignItems="center">
                                            <Grid item xs={12} md={12} className="title-stats-card">
                                                Active
                                        </Grid>
                                            <Grid item xs={12} md={12} className="content-stats-card">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.active / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                            </Grid>
                                            <Grid item xs={12} md={12} className="caption-stats-card">
                                                For Every 100 confirmed cases,&nbsp;
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? Math.round(((selectedStateTotal.active / selectedStateTotal.confirmed) * 100).toFixed(2)) : null}&nbsp;
                                             are currently infected.
                                             </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="border stats-card-recovery">
                                        <Grid container direction="row" justify="flex-start" alignItems="center">
                                            <Grid item xs={12} md={12} className="title-stats-card">
                                                Recovery Rate
                                            </Grid>
                                            <Grid item xs={12} md={12} className="content-stats-card">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.recovered / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                            </Grid>
                                            <Grid item xs={12} md={12} className="caption-stats-card">
                                                For Every 100 confirmed cases,&nbsp;
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? Math.round(((selectedStateTotal.recovered / selectedStateTotal.confirmed) * 100).toFixed(2)) : null}&nbsp;
                                             have recovered from the coronavirus.
                                             </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="border stats-card-mortality">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            <Grid item xs={12} md={12} className="title-stats-card">
                                                Mortality Rate
                                            </Grid>
                                            <Grid item xs={12} md={12} className="content-stats-card">
                                                {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.deaths / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                            </Grid>
                                            <Grid item xs={12} md={12} className="caption-stats-card">
                                                For Every 100 confirmed cases,&nbsp;
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? Math.round(((selectedStateTotal.deaths / selectedStateTotal.confirmed) * 100).toFixed(2)) : null}&nbsp;
                                             have unfortunately passed away from the coronavirus.
                                             </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="border stats-card-agr">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            <Grid item xs={12} md={12} className="title-stats-card">
                                                Avg. Growth Rate
                                            </Grid>
                                            <Grid item xs={12} md={12} className="content-stats-card">
                                                {selectedStateTotal !== undefined && weekBeforeTotal !== undefined &&
                                                    selectedStateTotal.length !== 0
                                                    ?
                                                    Math.round((((weekBeforeTotal) / (selectedStateTotal.confirmed - weekBeforeTotal)) * 100) / 7) + "%"
                                                    :
                                                    null
                                                }
                                            </Grid>
                                            <Grid item xs={12} md={12} className="caption-stats-card">

                                                In Last one week, the number of new infections has grown by an average of&nbsp;
                                            {selectedStateTotal !== undefined && weekBeforeTotal !== undefined &&
                                                    selectedStateTotal.length !== 0
                                                    ?
                                                    Math.round((((weekBeforeTotal) / (selectedStateTotal.confirmed - weekBeforeTotal)) * 100) / 7) + "%"
                                                    :
                                                    null
                                                }&nbsp;
                                            every day
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={5} md={5} className="border stats-card-tpm">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            <Grid item xs={12} md={12} className="title-stats-card">
                                                Tests Per Million
                                            </Grid>
                                            <Grid item xs={12} md={12} className="content-stats-card">
                                                {selectedTotalTested !== undefined && selectedTotalTested !== -1 ? Math.round(((selectedTotalTested / Constants.STATE_POPULATIONS[props.match.params.state]) * 1000000).toFixed(2)) : null}
                                            </Grid>
                                            <Grid item xs={12} md={12} className="caption-stats-card">
                                                For every 1 million people in {props.match.params.state},&nbsp;
                                            {selectedTotalTested !== undefined && selectedTotalTested !== -1 ? Math.round(((selectedTotalTested / Constants.STATE_POPULATIONS[props.match.params.state]) * 1000000).toFixed(2)) : null}&nbsp;
                                            people were tested.
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} md={1}>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
