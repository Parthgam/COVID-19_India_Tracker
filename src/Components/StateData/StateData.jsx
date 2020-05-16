import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import './StateData.css';
import Skeleton from '@material-ui/lab/Skeleton';

export default function StateData(props) {
    const [districtData, setDistrictData] = useState([]);
    const [sortedDistrictData, setSortedDistrictData] = useState([]);


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


    return (
        <Grid item xs={12} md={12}>
            <Grid item xs={12} md={12} className={props.SelectedOption !== undefined ? (props.SelectedOption === "death" ? "deceased-district-heading" : (props.SelectedOption === "active" ? "active-district-heading" : (props.SelectedOption === "recovered" ? "recovered-district-heading" : "confirmed-district-heading"))) : ""} >
                DISTRICTS
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
                                                    value.zone === 'Green' ? "distric-green-card" : (value.zone === 'Red' ? "district-red-card" : (value.zone === 'Orange' ? "district-orange-card" : "district-null-card"))
                                                }>
                                                <span style={{ color: '#6c757d', fontWeight: '600', fontSize: '18px', marginRight: '8px' }}>
                                                    {props.SelectedOption === "death" ? value.deceased : (props.SelectedOption === "recovered" ? value.recovered : (props.SelectedOption === "active" ? value.active : value.confirmed))}
                                                </span>
                                                <span style={{ color: '#6c757d', fontWeight: '600', fontSize: '12px' }}>
                                                    {value.district}
                                                </span>
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
        </Grid>
    )
}
