import React from 'react';
import { Paper, Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './StateCasesCard.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
});

export default function StateCasesCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Grid container direction="row"
            justify="center"
            alignItems="center" >
            <Grid item xs={10} md={10}>
                <Paper variant="outlined" className="grid-box content" >
                    <Grid container>
                        <Grid item xs={12} md={12} className="margin-sm">
                            <Grid container>
                                <Grid item xs={6} md={6}>
                                    <span className="heading">{(props.state !== undefined || props.state !== null) ? props.state.toUpperCase() : null}</span>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Grid container direction="row" justify="flex-end" alignItems="center" style={{ fontSize: '11px' }}>
                                        {props.state.toLowerCase() !== "total" && props.state !== undefined ?
                                            <Link to={`/state/${props.state}/${props.statecode.toLowerCase()}`} style={{ color: 'black', textDecoration: 'none' }}>
                                                View More...
                                            </Link>
                                            : null
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container className="margin-lg">
                            <Grid item xs={4} md={4}>
                                <Grid container>
                                    <Grid item xs={12} md={12} className="line-heading">ACTIVE</Grid>
                                    <Grid item xs={12} md={12} className="large-heading active-color">{props.active} </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Grid container>
                                    <Grid item xs={12} md={12} className="line-heading">RECOVERED</Grid>
                                    <Grid item xs={12} md={12} className="large-heading recovered-color">{props.recovered}</Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <Grid container>
                                    <Grid item xs={12} md={12} className="line-heading">DEATHS</Grid>
                                    <Grid item xs={12} md={12} className="large-heading death-color">{props.deaths}</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} className="margin-lg">
                            <Grid container >
                                <Grid item xs={12} md={12}>
                                    Ratio of <span className="active-color"> Recovery ({((props.recovered / props.confirmed) * 100).toFixed(2)}%) </span>

                                    Deaths <span className="active-color">({((props.deaths / props.confirmed) * 100).toFixed(2)}%)</span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} className="progressbar margin-lg">
                            <Grid container >
                                <Tooltip placement="top" title={"Active Cases: " + ((props.active / props.confirmed) * 100).toFixed(2) + '%'} arrow>
                                    <div className="progressbar-active" style={{ width: ((props.active / props.confirmed) * 100) + '%' }} ></div>
                                </Tooltip>
                                <Tooltip placement="top" title={"Recovered: " + ((props.recovered / props.confirmed) * 100).toFixed(2) + '%'} arrow>
                                    <div className="progressbar-recovered" style={{ width: ((props.recovered / props.confirmed) * 100) + '%' }} ></div>
                                </Tooltip>
                                <Tooltip placement="top" title={"Deaths: " + (100 - ((props.active / props.confirmed) * 100) - ((props.recovered / props.confirmed) * 100)).toFixed(2) + '%'} arrow>
                                    <div className="progressbar-death" style={{ width: (100 - ((props.active / props.confirmed) * 100) - ((props.recovered / props.confirmed) * 100)) + '%' }} ></div>
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} style={{ marginTop: '20px' }}>
                            <Grid container direction="row"
                                justify="space-between"
                                alignItems="center" >
                                <Grid item xs={3} md={6}>
                                    <Grid container>
                                        <Grid item xs={12} md={12} className="line-heading margin-sm">CONFIRMED PATIENTS</Grid>
                                        <Grid item xs={12} md={12} className="large-heading confirmed-color">{props.confirmed}</Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={8} md={5}>
                                    <Grid container direction="row"
                                        justify="center"
                                        alignItems="center" >
                                        <Grid item xs={12} md={12} style={{ marginBottom: '10px' }}>
                                            <Grid container direction="row"
                                                justify="center"
                                                alignItems="center" >
                                                <Grid item xs={2} md={2}>
                                                    <div className="active-dot"></div>
                                                </Grid>
                                                <Grid item xs={7} md={7}>
                                                    Cases Today
                                                </Grid>
                                                <Grid item xs={3} md={3}>
                                                    {props.todayData !== undefined ? props.todayData.TodayConfirmed : null}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <Grid container direction="row"
                                                justify="center"
                                                alignItems="center" >
                                                <Grid item xs={2} md={2}>
                                                    <div className="death-dot"></div>
                                                </Grid>
                                                <Grid item xs={7} md={7}>
                                                    Deaths Today
                                                </Grid>
                                                <Grid item xs={3} md={3}>
                                                    {props.todayData !== undefined ? props.todayData.TodayDeath : null}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        </Grid>
    );
}

