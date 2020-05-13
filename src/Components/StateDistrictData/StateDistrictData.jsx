import React, { useRef, useState, useEffect } from 'react'
import * as d3 from "d3";
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core'
import './StateDistrictData.css'
import StateData from '../StateData/StateData'
import BarChart from '../BarChart/BarChart'
import LineChart from '../Charts/LineChart'
import { precisionPrefix } from 'd3';




export default function StateDistrictData(props) {

    var STATE_CODES = {
        AP: 'Andhra Pradesh',
        AR: 'Arunachal Pradesh',
        AS: 'Assam',
        BR: 'Bihar',
        CT: 'Chhattisgarh',
        GA: 'Goa',
        GJ: 'Gujarat',
        HR: 'Haryana',
        HP: 'Himachal Pradesh',
        JH: 'Jharkhand',
        KA: 'Karnataka',
        KL: 'Kerala',
        MP: 'Madhya Pradesh',
        MH: 'Maharashtra',
        MN: 'Manipur',
        ML: 'Meghalaya',
        MZ: 'Mizoram',
        NL: 'Nagaland',
        OR: 'Odisha',
        PB: 'Punjab',
        RJ: 'Rajasthan',
        SK: 'Sikkim',
        TN: 'Tamil Nadu',
        TG: 'Telangana',
        TR: 'Tripura',
        UT: 'Uttarakhand',
        UP: 'Uttar Pradesh',
        WB: 'West Bengal',
        AN: 'Andaman and Nicobar Islands',
        CH: 'Chandigarh',
        DN: 'Dadra and Nagar Haveli and Daman and Diu',
        DD: 'Daman and Diu',
        DL: 'Delhi',
        JK: 'Jammu and Kashmir',
        LA: 'Ladakh',
        LD: 'Lakshadweep',
        PY: 'Puducherry',
        TT: 'Total'
    };

    const [zones, setZones] = useState([])
    const [stateDistrictData, setStateDistrictData] = useState([])
    const [selectedStateDistrictData, setSelectedStateDistrictData] = useState([])
    const [selectedStateDistrictData1, setSelectedStateDistrictData1] = useState([])

    const [selectedDistrictZones, setSelectedDistrictZones] = useState([])
    const [selectedStateName, setSelectedStateName] = useState("")
    const [statesDaily, setStatesDaily] = useState([])
    const [dailyConfirmed, setDailyConfirmed] = useState([])
    const [dailyRecovered, setDailyRecovered] = useState([])
    const [dailyDeath, setDailyDeath] = useState([])
    const [totalData, setTotalData] = useState([])
    const [statesTestData, setStateTestData] = useState([])
    const [selectedStateTotal, setSelectedStateTotal] = useState({})
    const [selectedStateDaily, setSelectedStateDaily] = useState({})
    const [weekBeforeTotal, setWeekBeforeTotal] = useState()


    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const getDistrictAndZoneData = async () => {
        await axios({
            method: 'GET',
            url: 'https://api.covid19india.org/zones.json',
        })
            .then((response) => {
                setZones(response.data.zones);
            })
            .catch((error) => {
                console.log(error);
            });
        await axios({
            method: 'GET',
            url: 'https://api.covid19india.org/v2/state_district_wise.json',
        })
            .then((response) => {
                setStateDistrictData(response.data);
                console.log(props.match.params.state)
                setSelectedStateName(props.match.params.state);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getStatesDailyData = async () => {
        await axios({
            method: 'GET',
            url: 'https://api.covid19india.org/states_daily.json',
        })
            .then((response) => {
                setStatesDaily(response.data.states_daily);
                console.log(response.data.states_daily)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getTotalStateData = async () => {
        await axios({
            method: 'GET',
            url: 'https://api.covid19india.org/data.json',
        })
            .then((response) => {
                setTotalData(response.data.statewise);
                console.log(response.data.statewise)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getStateTestData = async () => {
        await axios({
            method: 'GET',
            url: '	https://api.covid19india.org/state_test_data.json',
        })
            .then((response) => {
                setStateTestData(response.data.states_tested_data);
                console.log(response.data.states_tested_data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (selectedStateName !== undefined && stateDistrictData !== undefined && zones !== undefined && stateDistrictData.length !== 0 && zones.length !== 0) {
            var temp = [];
            zones.map((value, index) => {
                if (value["state"] === selectedStateName) {
                    temp.push(value);
                }
            })
            setSelectedDistrictZones(temp);
            var flag = false, count = 0;
            stateDistrictData.map((value, index) => {
                if (value["state"] === selectedStateName) {
                    setSelectedStateDistrictData(value.districtData);
                    flag = true;
                }
                else if (flag == true) {
                    return;
                }
            })
            console.log(zones)
            console.log(selectedStateDistrictData)
        }

        if (statesDaily !== undefined && statesDaily.length !== 0 && selectedStateName !== undefined && selectedStateName !== "") {
            var selectedStateCode = getKeyByValue(STATE_CODES, selectedStateName);
            var length = statesDaily.length;
            var len_con = length - 3, len_rec = length - 2, len_dec = length - 1;
            var daily_con = [], daily_rec = [], daily_dec = [], temp = {};
            var i = 0;
            for (i = 0; i < 5; i++) {
                temp["value"] = statesDaily[len_con][selectedStateCode.toLowerCase()];
                temp["date"] = statesDaily[len_con]["date"];
                len_con -= 3;
                daily_con.push(temp);
                temp = {};
                temp["value"] = statesDaily[len_rec][selectedStateCode.toLowerCase()];
                temp["date"] = statesDaily[len_rec]["date"];
                len_rec -= 3;
                daily_rec.push(temp);
                temp = {};

                temp["value"] = statesDaily[len_dec][selectedStateCode.toLowerCase()];
                temp["date"] = statesDaily[len_dec]["date"];
                len_dec -= 3;
                daily_dec.push(temp);
                temp = {};

            }
            setDailyConfirmed(daily_con)
            setDailyRecovered(daily_rec)
            setDailyDeath(daily_dec)
        }

    }, [selectedStateName])

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
    }, [selectedDistrictZones])

    useEffect(() => {
        if (totalData !== undefined && totalData.length !== 0) {
            totalData.map((value, index) => {
                //console.log(value["state"], props.match.params.state, value["state"] === props.match.params.state)
                if (value["state"] === props.match.params.state) {
                    setSelectedStateTotal(value);
                    console.log(value)
                }
            })
        }
    }, [totalData])

    useEffect(() => {
        if (statesDaily !== undefined && statesDaily.length !== 0) {
            var length = statesDaily.length - 1;
            setSelectedStateDaily({
                confirmedToday: statesDaily[length - 2][props.match.params.statecode],
                recoveredToday: statesDaily[length - 1][props.match.params.statecode],
                deathsToday: statesDaily[length][props.match.params.statecode]
            })
            //console.log(statesDaily[length - 20])
            //setWeekBeforeDaily(statesDaily[length - 20][props.match.params.statecode])
            var sum = 0, temp = 0;
            for (var i = 0; i < 6; i++) {
                sum += parseInt(statesDaily[length - 2 - temp][props.match.params.statecode])
                console.log(statesDaily[length - 2 - temp])
                temp += 3;
            }
            //console.log(sum)
            setWeekBeforeTotal(sum);
        }
    }, [statesDaily])

    useEffect(() => {
        getDistrictAndZoneData();
        getStatesDailyData();
        getTotalStateData();
        getStateTestData();
    }, [])

    return (
        <Grid container>
            <Grid item xs={1} md={1}>
            </Grid>
            <Grid item xs={10} md={10}>
                <Grid container>
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" >
                        <Grid item xs={5} md={5} className="border">
                            <Grid container direction="row"
                                justify="center"
                                alignItems="center" >
                                <Grid item xs={6} md={6} className="border">
                                    <Grid direction="column" justify="center" alignItems="center">
                                        <Grid xs={12} md={12} >{props.match.params.state}</Grid>
                                        <Grid xs={12} md={12} >updated 16 hours ago</Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} md={6} className="active border">
                                    <Grid direction="row" justify="flex-end" alignItems="center">
                                        <Grid item style={{ textAlign: 'right' }}>Tested 212515212</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7} md={7}>
                            <Grid container direction="row"
                                justify="space-around"
                                alignItems="center" >
                                <Grid item xs={2} md={2} className="border">
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <Grid item xs={12} md={12} className="line-text confirmed">Confirmed</Grid>
                                        <Grid item xs={12} md={12} className="line-number-inc confirmed">
                                            [+{selectedStateDaily !== undefined && selectedStateDaily.length !== 0 ? selectedStateDaily.confirmedToday : null}]
                                            </Grid>
                                        <Grid item xs={12} md={12} className="line-number confirmed">
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? selectedStateTotal.confirmed : null}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} md={2} className="border">
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
                                <Grid item xs={2} md={2} className="border">
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
                                <Grid item xs={2} md={2} className="border">
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

                    </Grid>
                    <Grid item xs={12} md={12} className="body-container">
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            <Grid item xs={5} md={5}>
                                <BarChart DailyConfirmed={dailyConfirmed} DailyRecovered={dailyRecovered} DailyDeath={dailyDeath}></BarChart>
                                <StateData SelectedDistrictData={selectedStateDistrictData1} SelectedDistrictZones={selectedDistrictZones} state={props.match.params.state} />
                            </Grid>
                            <Grid item xs={7} md={7}>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid item xs={4} md={4} className="border">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            Confirmed Per Million
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} md={4} className="border">
                                        <Grid container direction="row" justify="flex-start" alignItems="center">
                                            Active <br />
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.active / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                            <br />
                                            For Every 100 confirmed cases,
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.active / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                             are currently infected.
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} md={4} className="border">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            Recovery Rate <br />
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.recovered / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                            <br />
                                            For Every 100 confirmed cases,
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.recovered / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                             have recovered from the coronavirus.
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} md={4} className="border">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            Mortality Rate<br />
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.deaths / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                            <br />
                                            For Every 100 confirmed cases,
                                            {selectedStateTotal !== undefined && selectedStateTotal.length !== 0 ? (((selectedStateTotal.deaths / selectedStateTotal.confirmed) * 100).toFixed(2) + "%") : null}
                                             have unfortunately passed away from the coronavirus.
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} md={4} className="border">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            Avg. Growth Rate <br />
                                            {selectedStateTotal !== undefined && weekBeforeTotal !== undefined &&
                                                selectedStateTotal.length !== 0
                                                ?
                                                Math.ceil((((weekBeforeTotal) / (selectedStateTotal.confirmed - weekBeforeTotal)) * 100) / 7) + "%"
                                                :
                                                null
                                            }
                                            In Last one week, the number of new infections has grown by an average of
                                            {selectedStateTotal !== undefined && weekBeforeTotal !== undefined &&
                                                selectedStateTotal.length !== 0
                                                ?
                                                Math.ceil((((weekBeforeTotal) / (selectedStateTotal.confirmed - weekBeforeTotal)) * 100) / 7) + "%"
                                                :
                                                null
                                            }
                                            every day
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4} md={4} className="border">
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            six
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* <Grid container>
                                    <Grid item xs={6} md={6}>
                                        <LineChart SelectedState={props.match.params.state} ></LineChart>
                                    </Grid>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={1} md={1}>

            </Grid>
        </Grid>
    )
}
