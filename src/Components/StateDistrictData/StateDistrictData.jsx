import React from 'react'
import { Grid } from '@material-ui/core'
import './StateDistrictData.css'
import StateData from '../StateData/StateData'

export default function StateDistrictData(props) {
    return (
        // <div>
        //     {/* District Data of {props.match.params.statecode} */}
        // </div>

        <Grid container>
            <Grid item xs={1} md={1}>

            </Grid>
            <Grid item xs={10} md={10}>
                <Grid container>
                    <Grid item xs={12} md={12} className="title-container">
                        Hello
                    </Grid>
                    <Grid item xs={12} md={12} className="body-container">
                        {alert(props.match.params.state)}
                        <StateData state={props.match.params.state} />
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
