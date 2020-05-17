import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import './StateData.css';
import Skeleton from '@material-ui/lab/Skeleton';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'
import * as Constants from '../../constants'

export default function StateData(props) {
    const [districtData, setDistrictData] = useState([]);
    const [sortedDistrictData, setSortedDistrictData] = useState([]);
    const [isShowZones, setIsShowZones] = useState(false);
    const [districtDailyData, setDistrictDailyData] = useState({})
    const [mappedSelectedOption, setMappedSelectedOption] = useState();


    useEffect(() => {
        if (props.SelectedDistrictData !== undefined && props.SelectedDistrictData.length !== 0) {
            setDistrictData(props.SelectedDistrictData);
        }

    }, [props.SelectedDistrictData])

    useEffect(() => {
        if (districtData !== undefined && districtData.length !== 0) {
            districtData.sort((a, b) => (parseInt(a.confirmed) < parseInt(b.confirmed)) ? 1 : ((parseInt(a.confirmed) > parseInt(b.confirmed)) ? -1 : 0));
            setSortedDistrictData(districtData);
        }
    }, [districtData])

    const getDistrictDailyData = async () => {
        await axios({
            method: 'GET',
            url: Constants.DISTRICT_DAILY_DATA,
        })
            .then((response) => {
                setDistrictDailyData(response.data.districtsDaily);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (districtDailyData !== undefined && Object.keys(districtDailyData).length !== 0) {
            // console.log(districtDailyData[props.match.params.state])
        }
        var len;
        if (districtData !== undefined && districtData.length !== 0 && districtDailyData !== undefined && Object.keys(districtDailyData).length !== 0) {
            districtData.map((value, index) => {
                console.log(value["district"], districtDailyData[props.match.params.state][value["district"]])
                len = districtDailyData[props.match.params.state][value["district"]].length - 1;
                console.log(len)
                if (districtDailyData[props.match.params.state][value["district"]][len]["date"] !== "2020-05-18") {
                    console.log(value["district"], 0)
                }
                else {
                    console.log(districtDailyData[props.match.params.state][value["district"]][len - 1]["confirmed"])
                    console.log(districtDailyData[props.match.params.state][value["district"]][len - 2]["confirmed"])
                    console.log(value["district"], districtDailyData[props.match.params.state][value["district"]][len - 1]["confirmed"] - districtDailyData[props.match.params.state][value["district"]][len - 2]["confirmed"])
                }
            })
        }
    }, [districtDailyData])

    useEffect(() => {
        if (props.SelectedOption !== undefined) {
            if (props.SelectedOption === "recovered")
                setMappedSelectedOption("recovered");
            else if (props.SelectedOption === "death")
                setMappedSelectedOption("deceased");
            else
                setMappedSelectedOption("confirmed");
        }
    }, [props.SelectedOption])

    useEffect(() => {
        getDistrictDailyData();
    }, [])

    const toggleChecked = () => {
        setIsShowZones(!isShowZones);
    }

    return (
        <Grid item xs={12} md={12}>
            <Grid item xs={12} md={12} className={props.SelectedOption !== undefined ? (props.SelectedOption === "death" ? "deceased-district-heading" : (props.SelectedOption === "active" ? "active-district-heading" : (props.SelectedOption === "recovered" ? "recovered-district-heading" : "confirmed-district-heading"))) : ""} >
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        DISTRICTS
                    </Grid>
                    <Grid item className="district-banner-right">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Show Zones"
                                control={<Switch color="primary" size="small" onChange={toggleChecked} />}
                                label="Show Zones"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
            {sortedDistrictData !== undefined && sortedDistrictData.length !== 0 ?
                <Grid item xs={12} md={12}>
                    <Grid container direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        {
                            sortedDistrictData !== undefined && sortedDistrictData !== null && props.SelectedOption !== undefined ?
                                sortedDistrictData.map((value, index) => {
                                    return (
                                        <Grid item xs={4} md={4} className="district-box">
                                            <Grid item xs={12} md={12} style={{ margin: '8px 0px' }}
                                                className={
                                                    isShowZones ? (value.zone === 'Green' ? "distric-green-card" : (value.zone === 'Red' ? "district-red-card" : (value.zone === 'Orange' ? "district-orange-card" : "district-null-card"))) : null
                                                }>
                                                <span style={{ color: '#6c757d', fontWeight: '600', fontSize: '16px', marginRight: '8px' }}>
                                                    {props.SelectedOption === "death" ? value.deceased : (props.SelectedOption === "recovered" ? value.recovered : (props.SelectedOption === "active" ? value.active : value.confirmed))}
                                                </span>
                                                <span style={{ color: '#6c757d', fontWeight: '600', fontSize: '12px' }}>
                                                    {value.district}
                                                </span>
                                                {props.SelectedOption !== "active" && districtDailyData !== undefined && Object.keys(districtDailyData).length !== 0 && mappedSelectedOption !== undefined ?

                                                    <span className={props.SelectedOption === "death" ? "dec-rise" : (props.SelectedOption === "recovered" ? "rec-rise" : "con-rise")}>
                                                        &nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                                                        {
                                                            districtDailyData[props.match.params.state][value["district"]][districtDailyData[props.match.params.state][value["district"]].length - 2][mappedSelectedOption] - districtDailyData[props.match.params.state][value["district"]][districtDailyData[props.match.params.state][value["district"]].length - 3][mappedSelectedOption]
                                                        }
                                                    </span>
                                                    : null}
                                            </Grid>
                                        </Grid>
                                    )
                                })
                                : null
                        }
                    </Grid>
                </Grid>
                :
                <Grid item xs={12} sm={12} md={12}>
                    {/* <Skeleton animation="wave" variant="rect" height="300px" /> */}
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Grid>
            }
        </Grid >
    )
}
