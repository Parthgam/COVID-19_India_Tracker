import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core'
import './Prevention.css'

export default function Prevention() {
    return (
        <Grid container className="content container">
            <Grid item xs={12} md={12}>
                <Grid container className="left-side">
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={11} md={11} className="main-heading">
                        <div className="heading">COVID-19 Coronavirus - Prevention</div>
                        <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</p>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={10} md={7} className="left-side">
                        <Paper variant="outlined" className="paperClass content">
                            <Grid item xs={12} md={12}>
                                <Grid container className="important-text important-text-box">
                                    <Grid item xs={12} md={12}>
                                        <Grid container>
                                            <Grid item xs={2} md={1}>
                                                <svg id="Capa_1" enable-background="new 0 0 512 512" height="35" viewBox="0 0 512 512" width="35" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 105c-49.626 0-90 40.374-90 90v45c0 8.284 6.716 15 15 15h150c8.284 0 15-6.716 15-15v-45c0-49.626-40.374-90-90-90z" fill="#fc6581" /><path d="m346 195v45c0 8.28-6.72 15-15 15h-75v-150c49.73 0 90 40.469 90 90z" fill="#f4425c" /><circle cx="256" cy="60" fill="#fbcdbe" r="60" /><path d="m316 60c0 33.073-26.919 60-60 60v-120c33.08 0 60 26.92 60 60z" fill="#fdbbab" /><path d="" style={{ fill: "none", stroke: "#000", strokeWidth: "30", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterLimit: "10" }} /><path d="m226.206 360.33-47.604-47.1c-21.559-21.378-54.788-23.828-79.022-7.393-5.18 3.513-5.84 10.902-1.415 15.327l59.695 59.695c5.219 5.219 4.938 13.762-.612 18.627-5.074 4.447-12.732 4.179-17.482-.613l-63.766-64.335v-147.038c0-16.845-13.655-30.5-30.5-30.5-16.845 0-30.5 13.655-30.5 30.5v144.233c0 18.726 7.503 36.671 20.831 49.824l75.442 74.449v40.994c0 8.284 6.716 15 15 15h99.727c8.284 0 15-6.716 15-15v-101.166c0-13.334-5.326-26.115-14.794-35.504z" fill="#ffa58d" /><path d="m285.794 360.33 47.604-47.1c21.559-21.378 54.788-23.828 79.022-7.393 5.18 3.513 5.84 10.902 1.415 15.327l-59.695 59.695c-5.219 5.219-4.938 13.762.612 18.627 5.074 4.447 12.732 4.179 17.482-.613l63.766-64.335v-147.038c0-16.845 13.655-30.5 30.5-30.5 16.845 0 30.5 13.655 30.5 30.5v144.233c0 18.726-7.503 36.671-20.831 49.824l-75.442 74.449v40.994c0 8.284-6.716 15-15 15h-99.727c-8.284 0-15-6.716-15-15v-101.166c0-13.334 5.326-26.115 14.794-35.504z" fill="#f59280" /></g></svg>
                                            </Grid>
                                            <Grid item xs={10} md={10}>
                                                If you develop a fever, cough, and have difficulty breathing, promptly seek medical care.
                                                Call in advance and tell your health provider as soon as possible for medical advice.
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <div className="largeHeading blue">How to Protect Yourself?
                                </div>
                            <p>The best way to prevent illness is to avoid being exposed to this virus. As there is not vaccine to prevent so you can protect yourself and help prevent spreading the virus to others if you do as below instruction.</p>
                            <Grid container className="cov-feature">
                                <Grid item xs={12} md={12}>
                                    <Grid container direction="row"
                                        justify="flex-start"
                                        alignItems="center" >
                                        <Grid item xs={2} md={2}>
                                            <svg height="auto" viewBox="0 0 64 64" width="auto" xmlns="http://www.w3.org/2000/svg"><g id="protect-covid19-coronavirus-clean-handwash"><path d="m35 41.4a1.951 1.951 0 0 0 1.29-1.08 2.064 2.064 0 0 0 -.91-2.63l-9.43-5.45a3 3 0 0 0 4.1-1.1l.5-.86-8.95-5.17a3.993 3.993 0 0 0 -3.04-.4l-.9.24a4.013 4.013 0 0 1 -3.03-.4l-4.63-2.67-7 12.12 4.63 2.67a3.987 3.987 0 0 1 1.86 2.43l.24.9a4.054 4.054 0 0 0 1.85 2.42l.248-.248a4 4 0 0 1 2.829-1.172h10.343v1a3 3 0 0 1 -3 3h10.888a2.17 2.17 0 0 1 1.743.88.356.356 0 0 0 .1-.02 1.99 1.99 0 0 0 1.3-1.08 2.078 2.078 0 0 0 -.91-2.63l-1.64-.94a1.987 1.987 0 0 0 1.519.19z" fill="#ff9e84" /><path d="m12.58 41.42a4.054 4.054 0 0 1 -1.85-2.42l-.24-.9a3.987 3.987 0 0 0 -1.86-2.43l-5-2.766-.63 1.096 4.63 2.67a3.987 3.987 0 0 1 1.86 2.43l.24.9a4.054 4.054 0 0 0 1.85 2.42l.248-.248a3.979 3.979 0 0 1 .939-.676z" fill="#ff9478" /><path d="m36.2 43.933a1.986 1.986 0 0 1 -1.99.005l-9.526-5.5a1 1 0 0 0 -1.366.366 1 1 0 0 0 .366 1.366l9.526 5.5a2.015 2.015 0 0 0 2.732-.732 1.977 1.977 0 0 0 .258-1.005z" fill="#ff9478" /><path d="m36.471 39.469a1.993 1.993 0 0 1 -.474.2 1.957 1.957 0 0 1 -1.516-.194l-7.794-4.5a1 1 0 0 0 -1.366.366 1 1 0 0 0 .366 1.366l7.794 4.5a2.015 2.015 0 0 0 2.732-.732 1.98 1.98 0 0 0 .258-1.006z" fill="#ff9478" /><path d="m25.132 29.457a1.014 1.014 0 0 0 -1.265.228 4 4 0 0 1 -4.975.789 1 1 0 0 0 -1.366.366 1 1 0 0 0 .366 1.366 4 4 0 0 0 5.464-1.464l2.6 1.5a2.992 2.992 0 0 0 3.439-.324l-2.441-1.408z" fill="#ff9478" /><path d="m34.888 49h-1.888a2.012 2.012 0 0 0 1.992-2.177 1.865 1.865 0 0 0 -.361-.943 2.17 2.17 0 0 0 -1.743-.88h-10.888a3 3 0 0 0 3-3v-1h-10.343a4 4 0 0 0 -2.829 1.172l-.248.248-.408.408a4 4 0 0 1 -2.829 1.172h-5.343v14h5.343a4 4 0 0 1 2.829 1.172l.656.656a4 4 0 0 0 2.829 1.172h14.343a2.015 2.015 0 0 0 2-2 2.006 2.006 0 0 0 -2-2h4a2.015 2.015 0 0 0 2-2 2.006 2.006 0 0 0 -2-2h2a2.012 2.012 0 0 0 1.992-2.177 2.075 2.075 0 0 0 -2.104-1.823z" fill="#ffa791" /><g fill="#ff9478"><path d="m30.41 58.41a1.955 1.955 0 0 1 -1.41.59h-14.343a4 4 0 0 1 -2.829-1.172l-.656-.656a4 4 0 0 0 -2.829-1.172h-5.343v2h5.343a4 4 0 0 1 2.829 1.172l.656.656a4 4 0 0 0 2.829 1.172h14.343a1.984 1.984 0 0 0 1.721-3 1.938 1.938 0 0 1 -.311.41z" /><path d="m36.721 50a1.987 1.987 0 0 1 -1.721 1h-11a1 1 0 0 0 -1 1 1 1 0 0 0 1 1h11a1.984 1.984 0 0 0 1.721-3z" /><path d="m34.721 46a1.987 1.987 0 0 1 -1.721 1h-9a1 1 0 0 0 -1 1 1 1 0 0 0 1 1h9a1.984 1.984 0 0 0 1.721-3z" /><path d="m34.721 54a1.987 1.987 0 0 1 -1.721 1h-9a1 1 0 0 0 -1 1 1 1 0 0 0 1 1h9a1.984 1.984 0 0 0 1.721-3z" /><path d="m19 44a1 1 0 0 0 1 1h2a2.99 2.99 0 0 0 2.816-2h-4.816a1 1 0 0 0 -1 1z" /></g><path d="m37 24s-3 4.343-3 6a3 3 0 0 0 6 0c0-1.657-3-6-3-6z" fill="#2488ff" /><path d="m40 38a2 2 0 0 0 4 0c0-1.1-2-4-2-4s-2 2.9-2 4z" fill="#2488ff" /><path d="m56 14a11 11 0 0 0 -22 0v3h6v-3a5 5 0 0 1 10 0v33h6z" fill="#d1e7f8" /><path d="m43 9a5 5 0 0 0 -5 5v3h2v-3a5 5 0 0 1 4-4.9 4.988 4.988 0 0 0 -1-.1z" fill="#9bc9ff" /><path d="m45 3c-.338 0-.67.021-1 .05a11 11 0 0 1 10 10.95v33h2v-33a11 11 0 0 0 -11-11z" fill="#9bc9ff" /><path d="m32 19a2 2 0 0 0 2 2h6a2 2 0 0 0 0-4h-6a2 2 0 0 0 -2 2z" fill="#57a4ff" /><path d="m58 49a2 2 0 0 0 -2-2h-6a2 2 0 0 0 -2 2v6h10z" fill="#006df0" /><path d="m56 47h-2a2 2 0 0 1 2 2v6h2v-6a2 2 0 0 0 -2-2z" fill="#005ece" /><path d="m58 55h-11a2 2 0 0 0 -2 2v4h16v-4a2 2 0 0 0 -2-2z" fill="#004fac" /><path d="m59 55h-2a2 2 0 0 1 2 2v4h2v-4a2 2 0 0 0 -2-2z" fill="#00479b" /><path d="m49 57a1 1 0 0 1 1 1v3a0 0 0 0 1 0 0h-2a0 0 0 0 1 0 0v-3a1 1 0 0 1 1-1z" fill="#003f8a" /><path d="m53 57a1 1 0 0 1 1 1v3a0 0 0 0 1 0 0h-2a0 0 0 0 1 0 0v-3a1 1 0 0 1 1-1z" fill="#003f8a" /><path d="m57 57a1 1 0 0 1 1 1v3a0 0 0 0 1 0 0h-2a0 0 0 0 1 0 0v-3a1 1 0 0 1 1-1z" fill="#003f8a" /></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Wash your hands frequently</div>
                                            <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.
                                            <br />
                                            Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container className="cov-feature">
                                <Grid xs={12} md={12}>
                                    <Grid container direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <Grid item xs={2} md={2}>
                                            <svg id="Layer_3" enable-background="new 0 0 64 64" height="auto" viewBox="0 0 64 64" width="auto" xmlns="http://www.w3.org/2000/svg"><g><path d="m16 18h-8c-3.314 0-6 2.686-6 6v13c0 1.105.895 2 2 2h2v-4h12v4h2c1.105 0 2-.895 2-2v-13c0-3.314-2.686-6-6-6z" fill="#3b5892" /><path d="m52 58h-6c-1.105 0-2 .895-2 2v2h8z" fill="#939393" /><path d="m56 18h-8c-3.314 0-6 2.686-6 6v13c0 1.105.895 2 2 2h2v-4h12v4h2c1.105 0 2-.895 2-2v-13c0-3.314-2.686-6-6-6z" fill="#f9d266" /><path d="m58 39h2c1.105 0 2-.895 2-2v-2h-4z" fill="#fadcb6" /><path d="m46 39h-2c-1.105 0-2-.895-2-2v-2h4z" fill="#fadcb6" /><path d="m46 35h12v23h-12z" fill="#b5b5b5" /><g><path d="m51 40h2v18h-2z" fill="#ccc" /></g><path d="m52 58h6c1.105 0 2 .895 2 2v2h-8z" fill="#939393" /><path d="m57 9v4c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5v-4l5 2 1-2 2 2z" fill="#fadcb6" /><g><path d="m58 10h-1v3c0 .343-.035.677-.101 1h1.101c1.105 0 2-.895 2-2s-.895-2-2-2z" fill="#fadcb6" /></g><path d="m47 13v-3h-1c-1.105 0-2 .895-2 2s.895 2 2 2h1.101c-.066-.323-.101-.657-.101-1z" fill="#fadcb6" /><g><path d="m52 2c-3.866 0-7 3.134-7 7v1.277c.295-.171.634-.277 1-.277h1v-1l5 2 1-2 2 2 2-2v1h1c.366 0 .705.106 1 .277v-1.277c0-3.866-3.134-7-7-7z" fill="#686868" /></g><path d="m49 18v1c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3v-1z" fill="#fadcb6" /><path d="m42.707 51.293-3-3-1.414 1.414 1.293 1.293h-15.172l1.293-1.293-1.414-1.414-3 3c-.391.391-.391 1.023 0 1.414l3 3 1.414-1.414-1.293-1.293h15.172l-1.293 1.293 1.414 1.414 3-3c.391-.391.391-1.023 0-1.414z" fill="#c1c1c1" /><g><path d="m31 46h-5c-.431 0-.813-.275-.949-.684-.136-.408.004-.858.349-1.116l3.2-2.4c.25-.188.4-.486.4-.8 0-.552-.449-1-1-1s-1 .448-1 1h-2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .94-.449 1.837-1.2 2.4l-.8.6h2z" fill="#d23f34" /></g><g><path d="m39 46h-2v-2.764l-.105.211c-.339.678-1.45.678-1.789 0l-.106-.211v2.764h-2v-7c0-.464.319-.866.77-.974.454-.102.917.111 1.125.526l1.105 2.212 1.105-2.211c.208-.415.67-.629 1.125-.526.451.107.77.509.77.973z" fill="#d23f34" /></g><path d="m12 58h-6c-1.105 0-2 .895-2 2v2h8z" fill="#939393" /><path d="m18 39h2c1.105 0 2-.895 2-2v-2h-4z" fill="#fadcb6" /><path d="m6 39h-2c-1.105 0-2-.895-2-2v-2h4z" fill="#fadcb6" /><path d="m6 35h12v23h-12z" fill="#b5b5b5" /><g><path d="m11 40h2v18h-2z" fill="#ccc" /></g><path d="m12 58h6c1.105 0 2 .895 2 2v2h-8z" fill="#939393" /><path d="m17 9v4c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5v-4l5 2 1-2 2 2z" fill="#fadcb6" /><g><path d="m18 10h-1v3c0 .343-.035.677-.101 1h1.101c1.105 0 2-.895 2-2s-.895-2-2-2z" fill="#fadcb6" /></g><path d="m7 13v-3h-1c-1.105 0-2 .895-2 2s.895 2 2 2h1.101c-.066-.323-.101-.657-.101-1z" fill="#fadcb6" /><g><path d="m12 2c-3.866 0-7 3.134-7 7v1.277c.295-.171.634-.277 1-.277h1v-1l5 2 1-2 2 2 2-2v1h1c.366 0 .705.106 1 .277v-1.277c0-3.866-3.134-7-7-7z" fill="#686868" /></g><path d="m9 18v1c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3v-1z" fill="#fadcb6" /><g><path d="m6 24h2v11h-2z" fill="#4c6cb5" /></g><g><path d="m16 24h2v11h-2z" fill="#4c6cb5" /></g><g><path d="m46 24h2v11h-2z" fill="#fce797" /></g><g><path d="m56 24h2v11h-2z" fill="#fce797" /></g></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Maintain social distancing</div>
                                            <p>Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, you get chance to get infected.
                                            <br />
                                            Why? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container className="cov-feature">
                                <Grid xs={12} md={12}>
                                    <Grid container direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <Grid item xs={2} md={2}>
                                            <svg id="Capa_1" enable-background="new 0 0 512 512" height="auto" viewBox="0 0 512 512" width="auto" xmlns="http://www.w3.org/2000/svg"><g><path d="m474 256c-7.427 0-14.561 2.739-20.083 7.705l-70.917 62.214v-273.419c0-12.426-10.074-22.5-22.5-22.5s-22.5 10.074-22.5 22.5v143.5c0 8.284-6.716 15-15 15s-15-6.716-15-15v-173.5c0-12.426-10.074-22.5-22.5-22.5s-22.5 10.074-22.5 22.5v173.5c0 8.284-6.716 15-15 15s-15-6.716-15-15v-143.5c0-12.426-10.074-22.5-22.5-22.5s-22.5 10.074-22.5 22.5v143.5c0 8.284-6.716 15-15 15s-15-6.716-15-15v-113.5c0-12.426-10.074-22.5-22.5-22.5s-22.5 10.074-22.5 22.5v278.5c0 77.704 59.306 141.859 135 149.488 5.006.505 9.862 1.512 15 1.512 101.429 0 121.714-75.218 232.724-205.316 5.229-5.523 8.276-12.774 8.276-20.684 0-16.538-13.462-30-30-30z" fill="#fdccbd" /><path d="m495.724 306.684c5.229-5.523 8.276-12.774 8.276-20.684 0-16.538-13.462-30-30-30-7.427 0-14.561 2.739-20.083 7.705l-70.917 62.214v-273.419c0-12.426-10.074-22.5-22.5-22.5s-22.5 10.074-22.5 22.5v143.5c0 8.284-6.716 15-15 15s-15-6.716-15-15v-173.5c0-12.426-10.074-22.5-22.5-22.5s-22.5 10.074-22.5 22.5v173.5c0 8.284-6.716 15-15 15v299.488c5.006.505 9.862 1.512 15 1.512 101.429 0 121.714-75.218 232.724-205.316z" fill="#fbb5ae" /><g><path d="m233 256h-16.518c-2.309-13.621-7.575-26.168-15.286-36.985l11.662-11.662c5.859-5.859 5.859-15.352 0-21.211s-15.352-5.859-21.211 0l-11.664 11.664c-10.818-7.707-23.366-12.969-36.984-15.275v-16.531c0-8.291-6.709-15-15-15s-15 6.709-15 15v16.531c-13.618 2.305-26.166 7.568-36.984 15.275l-11.664-11.664c-5.859-5.859-15.352-5.859-21.211 0s-5.859 15.352 0 21.211l11.662 11.662c-7.709 10.817-12.975 23.364-15.284 36.985h-16.518c-8.291 0-15 6.709-15 15s6.709 15 15 15h16.514c2.303 13.623 7.568 26.177 15.276 36.998l-11.649 11.649c-5.859 5.859-5.859 15.352 0 21.211s15.352 5.859 21.211 0l11.648-11.647c10.822 7.712 23.375 12.98 37 15.287v16.502c0 8.291 6.709 15 15 15s15-6.709 15-15v-16.501c13.625-2.307 26.179-7.575 37-15.287l11.647 11.647c5.859 5.859 15.352 5.859 21.211 0s5.859-15.352 0-21.211l-11.649-11.649c7.709-10.822 12.973-23.375 15.276-36.998h16.515c8.291 0 15-6.709 15-15s-6.709-15.001-15-15.001z" fill="#c3ea21" /><path d="m143 376v-16.501c13.625-2.307 26.179-7.575 37-15.287l11.647 11.647c5.859 5.859 15.352 5.859 21.211 0s5.859-15.352 0-21.211l-11.649-11.649c7.709-10.822 12.973-23.375 15.276-36.998h16.515c8.291 0 15-6.709 15-15s-6.709-15-15-15h-16.518c-2.309-13.621-7.575-26.168-15.286-36.985l11.662-11.662c5.859-5.859 5.859-15.352 0-21.211s-15.352-5.859-21.211 0l-11.664 11.664c-10.818-7.707-23.366-12.969-36.984-15.275v-16.532c0-8.291-6.709-15-15-15v240c8.292 0 15.001-6.709 15.001-15z" fill="#9cdd05" /><circle cx="128" cy="271" fill="#59c36a" r="60" /><circle cx="112.999" cy="286.011" fill="#c3ea21" r="15" /><path d="m188 271c0 32.999-27.001 60-60 60v-120c32.999 0 60 26.999 60 60z" fill="#00a66c" /></g><g><path d="m367.458 378.021-15.284-8.828c.493-2.661.826-5.378.826-8.179s-.333-5.519-.826-8.179l15.284-8.828c7.178-4.146 9.639-13.315 5.493-20.493-4.16-7.192-13.345-9.668-20.493-5.493l-15.419 8.904c-4.125-3.519-8.833-6.292-14.039-8.148v-17.763c0-8.291-6.709-15-15-15s-15 6.709-15 15v17.763c-5.206 1.857-9.913 4.629-14.039 8.148l-15.419-8.904c-7.192-4.175-16.333-1.699-20.493 5.493-4.146 7.178-1.685 16.348 5.493 20.493l15.284 8.828c-.493 2.661-.826 5.378-.826 8.179s.333 5.519.826 8.179l-15.284 8.828c-7.178 4.146-9.639 13.315-5.493 20.493 4.156 7.196 13.354 9.617 20.493 5.493l15.419-8.904c4.125 3.519 8.833 6.292 14.039 8.148v17.763c0 8.291 6.709 15 15 15s15-6.709 15-15v-17.763c5.206-1.857 9.913-4.629 14.039-8.148l15.419 8.904c7.152 4.133 16.344 1.69 20.493-5.493 4.146-7.177 1.685-16.347-5.493-20.493z" fill="#c3ea21" /><path d="m323 421.015v-17.763c5.206-1.857 9.913-4.629 14.039-8.148l15.419 8.904c7.152 4.133 16.344 1.69 20.493-5.493 4.146-7.178 1.685-16.348-5.493-20.493l-15.284-8.828c.493-2.661.826-5.378.826-8.179s-.333-5.519-.826-8.179l15.284-8.828c7.178-4.146 9.639-13.315 5.493-20.493-4.16-7.192-13.345-9.668-20.493-5.493l-15.419 8.904c-4.125-3.519-8.833-6.292-14.039-8.148v-17.763c0-8.291-6.709-15-15-15v150c8.291 0 15-6.709 15-15z" fill="#9cdd05" /><circle cx="308" cy="361" fill="#59c36a" r="15" /><path d="m323 361c0-8.284-6.716-15-15-15v30c8.284 0 15-6.716 15-15z" fill="#00a66c" /></g></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Avoid touching face</div>
                                            <p>Do not touch your eyes, nose or mouth if your hands are not clean.
                                            <br />
                                            Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.

                                            </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container className="cov-feature">
                                <Grid xs={12} md={12}>
                                    <Grid container direction="row"
                                        justify="flex-start"
                                        alignItems="center">
                                        <Grid item xs={2} md={2}>
                                            <svg id="Layer_3" enable-background="new 0 0 64 64" height="auto" viewBox="0 0 64 64" width="auto" xmlns="http://www.w3.org/2000/svg"><g><path d="m42.613 14c.893 0 1.754.33 2.417.928l2.414 2.172c4.303 3.872 7.575 8.754 9.522 14.206 1.346 3.768 2.034 7.739 2.034 11.74v2.316c0 2.562-2.076 4.638-4.638 4.638-.889 0-1.76-.256-2.508-.737l-8.262-5.311c-2.862-1.84-4.592-5.009-4.592-8.412v-17.927c0-1.995 1.618-3.613 3.613-3.613z" fill="#d23f34" /><g fill="#b52f28"><path d="m49.586 39.828-.879.879-1.414-1.414.879-.879c1.179-1.179 1.828-2.746 1.828-4.414 0-2.202.857-4.272 2.414-5.828l2.141-2.141c.341.61.664 1.23.968 1.86l-1.695 1.695c-1.064 1.064-1.692 2.446-1.805 3.932l1.389 1.042c1.62 1.214 2.588 3.149 2.588 5.174 0 1.194.465 2.316 1.309 3.16l.398.398-1.414 1.415-.398-.398c-1.222-1.222-1.895-2.847-1.895-4.575 0-1.399-.668-2.735-1.787-3.575l-.426-.319c-.34 1.498-1.088 2.876-2.201 3.988z" /><path d="m47 17.835.195-.96.25.225c.497.447.977.911 1.446 1.385-.709 2.103-2.671 3.515-4.891 3.515v-2c1.363 0 2.568-.869 3-2.165z" /><path d="m21.387 14c-.893 0-1.754.33-2.417.928l-2.414 2.172c-4.303 3.872-7.575 8.754-9.522 14.206-1.346 3.768-2.034 7.739-2.034 11.74v2.316c0 2.562 2.076 4.638 4.638 4.638.889 0 1.76-.256 2.508-.737l8.262-5.311c2.862-1.84 4.592-5.009 4.592-8.412v-17.927c0-1.995-1.618-3.613-3.613-3.613z" /></g><path d="m18.969 14.928-2.413 2.172c-4.303 3.872-7.575 8.754-9.522 14.206-1.346 3.768-2.034 7.739-2.034 11.74v2.096l9.132-5.87c3.657-2.351 5.868-6.4 5.868-10.748v-14.239c-.374.156-.725.367-1.031.643z" fill="#d23f34" /><path d="m14.414 39.828.879.879 1.414-1.414-.879-.879c-1.179-1.179-1.828-2.746-1.828-4.414 0-2.202-.857-4.272-2.414-5.828l-2.141-2.141c-.341.61-.664 1.23-.968 1.86l1.695 1.695c1.064 1.064 1.692 2.446 1.805 3.932l-1.389 1.042c-1.62 1.214-2.588 3.149-2.588 5.174 0 1.194-.465 2.316-1.309 3.16l-.398.398 1.414 1.415.398-.398c1.222-1.222 1.895-2.847 1.895-4.575 0-1.399.668-2.735 1.787-3.575l.426-.319c.34 1.498 1.088 2.876 2.201 3.988z" fill="#a72b25" /><path d="m17 17.835-.195-.96-.25.225c-.497.447-.977.911-1.446 1.385.709 2.103 2.671 3.515 4.891 3.515v-2c-1.363 0-2.568-.869-3-2.165z" fill="#a72b25" /><circle cx="32" cy="47" fill="#fad85d" r="15" /><g><path d="m25.5 39.379h2v4.243h-2z" fill="#2862be" transform="matrix(.707 -.707 .707 .707 -21.583 30.893)" /></g><g><path d="m35.379 40.5h4.243v2h-4.243z" fill="#2862be" transform="matrix(.707 -.707 .707 .707 -18.361 38.672)" /></g><g><path d="m24.379 51.5h4.243v2h-4.243z" fill="#2862be" transform="matrix(.707 -.707 .707 .707 -29.361 34.115)" /></g><g><path d="m36.5 50.379h2v4.243h-2z" fill="#2862be" transform="matrix(.707 -.707 .707 .707 -26.14 41.893)" /></g><circle cx="32" cy="47" fill="#2862be" r="6" /><g><path d="m32 63c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zm0-30c-7.72 0-14 6.28-14 14s6.28 14 14 14 14-6.28 14-14-6.28-14-14-14z" fill="#f3a748" /></g><g><path d="m31 35h2v9h-2z" fill="#7aadf9" /></g><g><path d="m31 50h2v9h-2z" fill="#7aadf9" /></g><g><path d="m20 46h9v2h-9z" fill="#7aadf9" /></g><g><path d="m35 46h9v2h-9z" fill="#7aadf9" /></g><g><path d="m32 54c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" fill="#3279ea" /></g><g><path d="m29 44h2v2h-2z" fill="#3279ea" /></g><g><path d="m33 48h2v2h-2z" fill="#3279ea" /></g><g><path d="m35 36h2v2h-2z" fill="#2862be" /></g><g><path d="m41 52h2v2h-2z" fill="#2862be" /></g><g><path d="m27 55h2v2h-2z" fill="#7aadf9" /></g><g><path d="m21 41h2v2h-2z" fill="#2862be" /></g><path d="m32 1v15.47c0 2.81-1.474 5.414-3.884 6.86l-2.232 1.339c-2.41 1.446-3.884 4.05-3.884 6.861v1.47h-4v-2.904c0-3.161 1.659-6.091 4.37-7.717l1.261-.757c2.711-1.627 4.37-4.556 4.37-7.717v-12.905" fill="#4c506e" /><path d="m30 1h-2v12.904c0 3.161-1.659 6.091-4.37 7.717l-1.261.757c-2.71 1.627-4.369 4.556-4.369 7.718v.904h2v-1.471c0-2.81 1.474-5.414 3.884-6.86l2.232-1.339c2.41-1.446 3.884-4.05 3.884-6.86z" fill="#787faa" /><path d="m32 1v15.47c0 2.81 1.474 5.414 3.884 6.86l2.232 1.339c2.41 1.446 3.884 4.05 3.884 6.86v1.471h4v-2.904c0-3.161-1.659-6.091-4.37-7.717l-1.261-.757c-2.71-1.627-4.369-4.556-4.369-7.718v-12.904" fill="#787faa" /><path d="m34 1h2v12.904c0 3.161 1.659 6.091 4.37 7.717l1.261.757c2.711 1.627 4.37 4.556 4.37 7.717v.905h-2v-1.471c0-2.81-1.474-5.414-3.884-6.86l-2.232-1.339c-2.411-1.445-3.885-4.049-3.885-6.86z" fill="#4c506e" /></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Practice respiratory hygiene</div>
                                            <p>Make sure you, & the people around you, follow good respiratory hygiene. This means covering your mouth & nose with your bent elbow or tissue when you cough or sneeze.
                                            <br />
                                            Why? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.
                                            </p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <p>These are for informational purposes only. Consult your local medical authority for advice. (Source: World Health Organization)</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className="right-side">
                        <div className="iframe-div">
                            <iframe src='https://www.youtube.com/embed/bPITHEiFWLc?list=PL9S6xGsoqIBU2V6AZYGlJwZRAFJ3YDreb'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='video'
                            />
                        </div>
                        <div className="blue largeHeading">Take steps to protect others</div>

                        <p>There are things you can do to help reduce the risk of you and anyone you live with getting ill with virus.</p>


                        <ul>
                            <li className="steps"><strong>Stay home if you’re sick</strong> – Stay home if you are sick, except to get medical care.</li>
                            <li className="steps"><strong>Cover your mouth & nose</strong> – with a tissue when you cough or sneeze.</li>
                            <li className="steps"><strong>Wear a facemask if you are sick </strong>– You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office.</li>
                            <li className="steps"><strong>Clean AND disinfect frequently touched surfaces daily</strong> – This includes phones, tables, doorknobs, light switches, handles, desktops, countertops, toilets etc.</li>
                            <li className="steps"><strong>Stay informed about the local COVID-19 situation </strong>– Get up-to-date information about local COVID-19 activity from public health officials.</li>
                        </ul>




                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
