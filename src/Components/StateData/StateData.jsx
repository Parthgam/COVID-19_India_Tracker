import React from 'react';
import { Grid } from '@material-ui/core';
import './StateData.css'

export default function StateData(props) {
    return (
        <Grid item xs={12} md={12}>
            {props.SelectedDistrictData !== undefined ?
                <Grid item xs={12} md={12}>
                    <Grid container direction="row"
                        justify="flex-end"
                        alignItems="flex-start" >
                        <Grid item xs={12} md={12}>
                            Districts
                        </Grid>
                        {
                            props.SelectedDistrictData !== undefined && props.SelectedDistrictData !== null ?
                                props.SelectedDistrictData.map((value, index) => {
                                    return (
                                        <Grid item xs={4} md={4} style={{ margin: '8px 0px' }}
                                            className={
                                                value.zone === 'Green' ? "distric-green-card" : (value.zone === 'Red' ? "district-red-card" : (value.zone === 'Orange' ? "district-orange-card" : null))
                                            }>
                                            <span style={{ color: '#6c757d', fontWeight: '600', fontSize: '18px', marginRight: '8px' }}>
                                                {value.confirmed}
                                            </span>
                                            <span style={{ color: '#6c757d', fontWeight: '600', fontSize: '12px' }}>
                                                {value.district}
                                            </span>
                                        </Grid>
                                    )
                                })
                                : null
                        }
                    </Grid>
                </Grid>
                :
                null}
        </Grid>
    )
}
