import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fixedFooter: {
        position: 'fixed',
        left: 0,
        bottom: 0,
    },
    marginClass: {
        marginLeft: '16px'
        , height: '100px'

    },
    headerClass: {
        backgroundColor: '#f6f6f7',
        marginTop: '50px'
    },
    footerText: {
        fontSize: '12px',
        fontWeight: 'Bold',
        color: 'grey',
        textAlign: 'center'
    },
    menuMargin: {
        marginRight: '40px'
    }
})

export default function Footer() {
    var classes = useStyles();
    return (
        <Grid container className={classes.headerClass} direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} md={12} >
                <Grid container >
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center" className={classes.marginClass}>
                        <Grid item className={classes.footerText}>
                            Made with &nbsp;<svg height="12" viewBox="0 -20 464 464" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0" fill="#ff6243" /><path d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0" fill="#ff5023" /></svg> &nbsp; by Parth Gambhir<br />
                            <br />
                            &copy; Parth Gambhir
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        </Grid >

    )
}
