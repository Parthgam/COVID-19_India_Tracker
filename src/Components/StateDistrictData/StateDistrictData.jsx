import React, { useRef, useState, useEffect } from 'react'
import * as d3 from "d3";
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core'
import './StateDistrictData.css'
import StateData from '../StateData/StateData'
import BarChart from '../BarChart/BarChart'




export default function StateDistrictData(props) {

    const [zones, setZones] = useState([])
    const [stateDistrictData, setStateDistrictData] = useState([])
    const [selectedStateDistrictData, setSelectedStateDistrictData] = useState([])
    const [selectedStateDistrictData1, setSelectedStateDistrictData1] = useState([])

    const [selectedDistrictZones, setSelectedDistrictZones] = useState([])
    const [selectedStateName, setSelectedStateName] = useState([])

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

    useEffect(() => {
        console.log(selectedStateName !== undefined, stateDistrictData !== undefined, zones !== undefined, stateDistrictData.length, zones.length !== 0)
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

    }, [selectedStateName])

    useEffect(() => {
        selectedStateDistrictData.map((value, index) => {
            selectedDistrictZones.map((val, i) => {
                if (value["district"] === val["district"]) {
                    value["zone"] = val["zone"];
                }
            })
        })
        setSelectedStateDistrictData1(selectedStateDistrictData)
        console.log(selectedStateDistrictData)
        console.log(selectedDistrictZones)

    }, [selectedDistrictZones])

    useEffect(() => {
        getDistrictAndZoneData();
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
                                        <Grid xs={12} md={12} >StateName</Grid>
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
                                        <Grid item xs={12} md={12} className="line-number-inc confirmed">[+1230]</Grid>
                                        <Grid item xs={12} md={12} className="line-number confirmed">23401</Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} md={2} className="border">
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <Grid item xs={12} md={12} className="line-text active">Active</Grid>
                                        <Grid item xs={12} md={12} className="line-number-inc active">[+1230]</Grid>
                                        <Grid item xs={12} md={12} className="line-number active">23401</Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} md={2} className="border">
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <Grid item xs={12} md={12} className="line-text recovered">Recovered</Grid>
                                        <Grid item xs={12} md={12} className="line-number-inc recovered">[+1230]</Grid>
                                        <Grid item xs={12} md={12} className="line-number recovered">23401</Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2} md={2} className="border">
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <Grid item xs={12} md={12} className="line-text death">Death</Grid>
                                        <Grid item xs={12} md={12} className="line-number-inc death">[+1230]</Grid>
                                        <Grid item xs={12} md={12} className="line-number death">23401</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={12} className="body-container">
                        <BarChart></BarChart>
                        <StateData SelectedDistrictData={selectedStateDistrictData1} SelectedDistrictZones={selectedDistrictZones} state={props.match.params.state} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        LOL
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={1} md={1}>

            </Grid>
        </Grid>
    )
}
