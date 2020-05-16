import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core'
import './Symptoms.css'

var useStyles = makeStyles({
});

export default function Symptoms() {
    return (
        <Grid container className="content container">
            <Grid item xs={12} md={12}>
                <Grid container className="left-side">
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={11} md={11} className="main-heading">
                        <div className="heading">COVID-19 Coronavirus - Symptoms</div>
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
                                            <Grid item xs={1} md={1}>
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
                            <div className="largeHeading blue">Symptoms of Coronavirus
                                </div>
                            <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhoea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure.</p>
                            <div className="largeHeading">Major & Common Symptoms
                                </div>
                            <Grid container className="cov-feature">
                                <Grid item xs={12} md={12}>
                                    <Grid container direction="row"
                                        justify="flex-start"
                                        alignItems="center" >
                                        <Grid item xs={2} md={2}>
                                            <svg height="auto" viewBox="0 0 64 64" width="auto" xmlns="http://www.w3.org/2000/svg"><g id="virus-covid19-coronavirus-breath-tempurature"><path d="m52.081 51.806a12 12 0 0 0 -11.941-10.806h-5.14c-.027 0-.053-.007-.08-.008v.008a6.991 6.991 0 0 1 -13.84 0v-.008c-.027 0-.053.008-.08.008h-5.14a12 12 0 0 0 -11.941 10.806l-.919 9.194h50z" fill="#004fac" /><path d="m41 57v4h12l-.4-4z" fill="#d80027" /><path d="m52.081 51.806a12 12 0 0 0 -11.941-10.806h-2a12 12 0 0 1 11.941 10.806l.919 9.194h2z" fill="#00479b" /><path d="m52.6 57h-2l.4 4h2z" fill="#c20023" /><path d="m33 35.778a10.84 10.84 0 0 1 -10 0v3.222a2 2 0 0 1 -1.92 1.992v.008a6.991 6.991 0 0 0 13.84 0v-.008a2 2 0 0 1 -1.92-1.992z" fill="#ffa791" /><path d="m15 57v4h-12l.4-4z" fill="#d80027" /><path d="m35 13h-14a4 4 0 0 0 -4 4v9a11 11 0 0 0 22 0v-9a4 4 0 0 0 -4-4z" fill="#ffa791" /><path d="m61 51a6 6 0 1 1 -9-5.19v-21.81a3 3 0 0 1 6 0v21.81a5.985 5.985 0 0 1 3 5.19z" fill="#ff9811" /><path d="m58 45.81v-21.81a2.973 2.973 0 0 0 -4-2.816 2.963 2.963 0 0 1 2 2.816v21.81a5.991 5.991 0 0 1 -2 11.1 5.993 5.993 0 0 0 4-11.1z" fill="#ee8700" /><circle cx="55" cy="51" fill="#ab2300" r="2" /><path d="m44 33a2 2 0 0 0 4 0c0-1.105-2-4-2-4s-2 2.9-2 4z" fill="#2488ff" /><path d="m7.586 4.757a2 2 0 0 0 -2.829 2.829c.781.781 4.243 1.414 4.243 1.414s-.633-3.462-1.414-4.243z" fill="#57a4ff" /><path d="m34 3h-8a4 4 0 0 0 -4 4 2 2 0 0 0 -2-2h-2a4 4 0 0 0 -4 4v13h3v-5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v5h3v-11a8 8 0 0 0 -8-8z" fill="#58595b" /><path d="m34 3h-8a4 4 0 0 0 -4 4v6h13a4 4 0 0 1 4 4v5h3v-11a8 8 0 0 0 -8-8z" fill="#4f5052" /><path d="m33 37.778v-2a10.84 10.84 0 0 1 -10 0v2a10.84 10.84 0 0 0 10 0z" fill="#ff9478" /><path d="m41 21h-2v5a10.98 10.98 0 0 1 -.188 2h2.188a2 2 0 0 0 2-2v-3a2 2 0 0 0 -2-2z" fill="#ff9478" /><path d="m15 21h2v5a10.98 10.98 0 0 0 .188 2h-2.188a2 2 0 0 1 -2-2v-3a2 2 0 0 1 2-2z" fill="#ff9478" /><path d="m25.447 21.9a1 1 0 0 0 .26-1.6l-2-2a1 1 0 0 0 -1.414 1.414l1.019 1.019-.759.379a1 1 0 0 0 .894 1.79z" fill="#58595b" /><path d="m30.553 21.9 2 1a1 1 0 1 0 .894-1.79l-.759-.379 1.019-1.019a1 1 0 0 0 -1.414-1.414l-2 2a1 1 0 0 0 .26 1.6z" fill="#58595b" /><path d="m29.8 29.6 1.6 1.2a1 1 0 0 0 1.2-1.6l-1.6-1.2a5.03 5.03 0 0 0 -6 0l-1.6 1.2a1 1 0 0 0 1.2 1.6l1.6-1.2a3.018 3.018 0 0 1 3.6 0z" fill="#58595b" /><path d="m16 52a1 1 0 0 1 1 1v8a0 0 0 0 1 0 0h-2a0 0 0 0 1 0 0v-8a1 1 0 0 1 1-1z" fill="#003f8a" /><path d="m39 52h2a0 0 0 0 1 0 0v8a1 1 0 0 1 -1 1 1 1 0 0 1 -1-1v-8a0 0 0 0 1 0 0z" fill="#003f8a" transform="matrix(-1 0 0 -1 80 113)" /><path d="m56 48.184v-23.184a1 1 0 0 0 -2 0v23.184a3 3 0 1 0 2 0zm-1 3.816a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" fill="#ed1c24" /><g fill="#ff5023"><path d="m10 25a1 1 0 0 0 -2 0c0 .561-.217.8-.707 1.291a3.479 3.479 0 0 0 0 5.413c.49.49.707.731.707 1.294s-.217.8-.707 1.294a3.565 3.565 0 0 0 -1.293 2.708 1 1 0 0 0 2 0c0-.562.217-.8.707-1.294a3.482 3.482 0 0 0 0-5.416c-.49-.49-.707-.732-.707-1.29s.217-.8.707-1.29a3.562 3.562 0 0 0 1.293-2.71z" /><path d="m2 26a1 1 0 0 0 2 0c0-.562.217-.8.707-1.294a3.482 3.482 0 0 0 0-5.416c-.49-.49-.707-.732-.707-1.29s.217-.8.707-1.29a3.562 3.562 0 0 0 1.293-2.71 1 1 0 0 0 -2 0c0 .561-.217.8-.707 1.291a3.479 3.479 0 0 0 0 5.413c.49.49.707.731.707 1.294s-.217.8-.707 1.294a3.565 3.565 0 0 0 -1.293 2.708z" /><path d="m45 20a3.565 3.565 0 0 0 1.293 2.708c.49.491.707.732.707 1.294a1 1 0 0 0 2 0 3.565 3.565 0 0 0 -1.293-2.708c-.49-.494-.707-.733-.707-1.294s.217-.8.707-1.294a3.479 3.479 0 0 0 0-5.413c-.49-.493-.707-.732-.707-1.293a1 1 0 0 0 -2 0 3.562 3.562 0 0 0 1.293 2.706c.49.489.707.729.707 1.29s-.217.8-.707 1.294a3.563 3.563 0 0 0 -1.293 2.71z" /><path d="m51 11a3.565 3.565 0 0 0 1.293 2.708c.49.491.707.732.707 1.294a1 1 0 0 0 2 0 3.565 3.565 0 0 0 -1.293-2.708c-.49-.494-.707-.733-.707-1.294s.217-.8.707-1.294a3.567 3.567 0 0 0 1.293-2.706 3.56 3.56 0 0 0 -1.293-2.7c-.49-.5-.707-.739-.707-1.3a1 1 0 0 0 -2 0 3.562 3.562 0 0 0 1.293 2.706c.49.494.707.729.707 1.294s-.217.8-.707 1.294a3.563 3.563 0 0 0 -1.293 2.706z" /></g></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Fever</div>
                                            <p><b>High Fever</b> – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign & also may appear in 2-10 days if affected.</p>
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
                                            <svg id="Capa_1" enable-background="new 0 0 512 512" height="auto" viewBox="0 0 512 512" width="auto" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="74.981" x2="437.019" y1="74.981" y2="437.019"><stop offset="0" stopColor="#95e0db" /><stop offset="1" stopColor="#70c7c7" /></linearGradient><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="165.334" x2="346.666" y1="345.096" y2="345.096"><stop offset="0" stopColor="#eebda9" /><stop offset="1" stopColor="#cd9280" /></linearGradient><linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="156.12" x2="355.88" y1="202.044" y2="202.044"><stop offset=".181" stopColor="#f2ccbd" /><stop offset=".7838" stopColor="#eebda9" /></linearGradient><linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="143.276" x2="368.724" y1="128.946" y2="128.946"><stop offset="0" stopColor="#575a65" /><stop offset="1" stopColor="#383c42" /></linearGradient><linearGradient id="lg1"><stop offset="0" stopColor="#7982ed" /><stop offset="1" stopColor="#4d56b2" /></linearGradient><linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="99.613" x2="412.387" href="#lg1" y1="435.149" y2="435.149" /><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="176.996" x2="335.004" y1="382.079" y2="382.079"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#e9ecf4" /></linearGradient><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="127.326" x2="448.438" href="#lg1" y1="368.171" y2="368.171" /><g><g><g><g><g><g><g><path d="m99.613 458.695c-60.592-46.817-99.613-120.199-99.613-202.695 0-141.385 114.615-256 256-256s256 114.615 256 256c0 74.999-32.251 142.464-83.641 189.286z" fill="url(#SVGID_1_)" /></g></g></g></g></g></g><g><path d="m256 417.767c39.384 0 73.569-22.256 90.666-54.877l-33.309-7.323c-8.762-1.926-15.004-9.69-15.004-18.661v-64.481h-84.706v64.481c0 8.971-6.242 16.735-15.004 18.661l-33.309 7.323c17.097 32.621 51.282 54.877 90.666 54.877z" fill="url(#SVGID_2_)" /></g><g><g><circle cx="165.079" cy="213.171" fill="#eebda9" r="35.022" /></g><g><circle cx="346.921" cy="213.171" fill="#e5a48e" r="35.022" /></g></g><g><path d="m259.997 325.138h-7.994c-52.955 0-95.883-42.928-95.883-95.883v-54.423c0-52.955 42.928-95.883 95.883-95.883h7.994c52.955 0 95.883 42.928 95.883 95.883v54.423c0 52.955-42.928 95.883-95.883 95.883z" fill="url(#SVGID_3_)" /></g><g><path d="m221.466 148.885s65.158 60.981 147.258 64.286v-64.044c0-57.661-50.468-104.405-112.724-104.405-62.256 0-112.724 46.744-112.724 104.405v64.044s37.792-23.248 78.19-64.286z" fill="url(#SVGID_4_)" /></g><g><path d="m256 512c58.889 0 113.134-19.884 156.387-53.305l-4.719-53.368c-1.558-17.616-14.368-32.184-31.641-35.981l-50.25-11.047c-10.931 27.849-38.051 47.566-69.777 47.566s-58.847-19.717-69.777-47.566l-50.25 11.047c-17.273 3.797-30.083 18.365-31.64 35.981l-4.719 53.368c43.252 33.421 97.497 53.305 156.386 53.305z" fill="url(#SVGID_5_)" /></g><g><path d="m256 418.895c-17.159 0-33.656-5.157-47.708-14.915-13.713-9.522-24.175-22.743-30.255-38.233-3.027-7.711.771-16.417 8.482-19.443 7.713-3.027 16.417.771 19.443 8.482 8.132 20.72 27.773 34.108 50.037 34.108s41.904-13.388 50.037-34.108c3.027-7.711 11.731-11.51 19.443-8.482 7.712 3.026 11.509 11.732 8.482 19.443-6.08 15.49-16.542 28.711-30.255 38.233-14.05 9.758-30.547 14.915-47.706 14.915z" fill="url(#SVGID_6_)" /></g><g><path d="m162.91 328.046-62.276-8.785c-19.107-2.695-32.41-20.369-29.715-39.476 2.695-19.107 20.369-32.41 39.476-29.715l62.276 8.785z" fill="#f2ccbd" /></g><g><path d="m362.763 488.743c24.112-11.079 46.206-25.794 65.581-43.444l18.685-87.542c2.988-13.997 1.247-28.694-5.463-41.336-9.834-18.524-28.265-31.926-50.354-34.623l-255.004-34.201-8.882 82.56 241.397 43.388z" fill="url(#SVGID_7_)" /></g><g><path d="m435 265h-45.709c-8.284 0-15-6.716-15-15s6.716-15 15-15h45.709c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#e9ecf4" /></g><g><path d="m404.91 213.937c-7.264 0-13.646-5.286-14.802-12.687-1.278-8.185 4.32-15.857 12.505-17.135l30.071-4.697c8.188-1.278 15.857 4.32 17.136 12.505s-4.32 15.857-12.505 17.135l-30.071 4.697c-.784.123-1.564.182-2.334.182z" fill="#e9ecf4" /></g><g><path d="m108.802 228.486c-.889 0-1.791-.079-2.696-.244l-37.14-6.742c-8.151-1.479-13.559-9.287-12.08-17.438 1.48-8.151 9.287-13.56 17.438-12.08l37.14 6.742c8.151 1.479 13.559 9.287 12.08 17.438-1.316 7.246-7.63 12.324-14.742 12.324z" fill="#fff" /></g><g><path d="m119.348 184.602c-3.424 0-6.865-1.166-9.683-3.55l-24.253-20.525c-6.324-5.352-7.112-14.816-1.76-21.14 5.352-6.325 14.817-7.112 21.14-1.76l24.253 20.525c6.324 5.352 7.112 14.816 1.76 21.14-2.967 3.505-7.199 5.31-11.457 5.31z" fill="#fff" /></g></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Cough</div>
                                            <p><b>Continuous cough</b> – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).</p>
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
                                            <svg height="auto" viewBox="0 0 512 512" width="auto" xmlns="http://www.w3.org/2000/svg"><g id="Corona_Virus_Symptoms_Shortness_of_breath" data-name="Corona Virus Symptoms Shortness of breath"><g id="Flat"><path d="m409.86 324.18s-57.44 56.8-118.38 76.18a8.01 8.01 0 0 1 -10.23-9.39c3.91-17.29 7.52-29.4 9.06-34.29l-8.08-28.45-50.02 14.21a35.727 35.727 0 0 1 -27.37-3.19c-19.55-10.9-17.7-30.06-25.72-51.93-22.93-7.26-27.42-5.8-30.09-11.25-2.75-5.6.93-7.14 14.6-43.22-7.91-28.4-13.74-48.38-17.96-62.55l199.32-64.3c67.2 216.46 64.87 218.18 64.87 218.18z" fill="#ffdfc5" /><path d="m381.267 224.1a216.866 216.866 0 0 1 -98.989 104.3l8.032 28.282c-1.54 4.89-5.15 17-9.06 34.29a8.01 8.01 0 0 0 10.23 9.39c60.94-19.38 118.38-76.18 118.38-76.18s1.377-1.028-28.593-100.082z" fill="#ffd5c7" /><path d="m392.234 286.634c-73.655-6.089-92.751-73.3-104.16-113.452-2.516-8.857-9.669-11.214-18.011-7.877-.642.256-72.162 20.556-72.579 20.665-22.726 6.045-43.441 3.441-61.575-7.742-40.469-24.957-53.151-83.849-53.671-86.344-1.738-8.325 8.506-13.094 13.707-7.065 38.29 37.655 184.619-137.994 251.693-68.289 17.944-2.6 35.383 4.841 49.565 21.3 18.46 21.418 29.656 55.692 31.527 96.508 2.1 45.819-7.733 96.774-28.433 147.357a8 8 0 0 1 -8.063 4.939z" fill="#68676b" /><path d="m428.73 134.334c-1.788-39.008-12.1-72.033-29.123-93.579a211.9 211.9 0 0 1 -100.255 167.665c13.743 35.72 38.367 73.708 92.882 78.214a8 8 0 0 0 8.063-4.943c20.703-50.583 30.532-101.538 28.433-147.357z" fill="#58575b" /><path d="m511.893 512h-243.727c-.918-48.383 6.73-92.89 13.086-121.031 14.748-6.969 94.748-38.969 127.809-78.819 34.624 26.346 59.444 53.235 75.879 82.2 19.36 34.128 28.145 72.522 26.953 117.65z" fill="#96e0d7" /><path d="m351.8 201.41c0 17.83-8.5 32.63-26.99 38.36-8.1 4.59-13.64 8.17-17.69 10.79l-26.32-60.17 10.92-6.11c-4.58-36.25 44.28-47.32 57.36-1.29a67.6 67.6 0 0 1 2.72 18.42z" fill="#ffdfc5" /><circle cx="208" cy="256" fill="#97d0dd" r="8" /><circle cx="240" cy="256" fill="#97d0dd" r="8" /><circle cx="336" cy="328" fill="#97d0dd" r="8" /><circle cx="320" cy="304" fill="#97d0dd" r="8" /><circle cx="296" cy="280" fill="#97d0dd" r="8" /><circle cx="272" cy="264" fill="#97d0dd" r="8" /><g fill="#afefde"><circle cx="8" cy="328" r="8" /><circle cx="40" cy="328" r="8" /><circle cx="72" cy="328" r="8" /><circle cx="168" cy="360" r="8" /><path d="m136 304h-72a32 32 0 0 1 0-64c30.515 0 40.8 40 24 40a8 8 0 0 1 -8-8 16 16 0 1 0 -16 16h72a8 8 0 0 1 0 16z" /><path d="m64 416a32 32 0 0 1 0-64h72a8 8 0 0 1 0 16h-72a16 16 0 1 0 16 16 8 8 0 0 1 8-8c16.807 0 6.5 40-24 40z" /><path d="m168 336h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" /></g><circle cx="312" cy="48" fill="#8a8a8c" r="24" /><circle cx="276" cy="92" fill="#8a8a8c" r="12" /><path d="m484.94 394.352a226.893 226.893 0 0 0 -30.105-40.972 196.153 196.153 0 0 1 -117.178 158.62h174.236c1.192-45.128-7.593-83.522-26.953-117.648z" fill="#97d0dd" /><path d="m343.735 512v-79.97a55.971 55.971 0 0 1 55.765-56.23h.237a56.062 56.062 0 0 1 56 55.767v80.433z" fill="#afefde" /><circle cx="392" cy="424" fill="#d5f7ed" r="16" /><circle cx="416" cy="448" fill="#d5f7ed" r="8" /><path d="m296 512h-56v-7.208l-15.845-79.223 24.354-68.378c5.156-13.749 30.3-.416 23.491 26.809l-8 40 8 24c0-40 40-40 40 0 0 45.568 0 40-16 59.26z" fill="#ffdfc5" /><path d="m239.153 500.556.847 4.236v7.208h56v-4.74c16-19.26 16-13.692 16-59.26a50.668 50.668 0 0 0 -.806-9.232 108.244 108.244 0 0 1 -72.041 61.788z" fill="#ffd5c7" /></g></g></svg>
                                        </Grid>
                                        <Grid item item xs={10} md={10} className="cov-feature-content">
                                            <div className="heading">Shortness of breath</div>
                                            <p><b>Difficulty breathing</b> – Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <div className="heading">Others Symptoms</div>
                            <p>Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhoea. These symptoms are usually mild & begin gradually. Some people become infected but don’t develop any symptoms & don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment.
                            Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness.
                            </p>
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
                        <div className="blue largeHeading">Symptoms and what to do</div>
                        <p className="danger-text"><strong>You must do not leave your home </strong> if you have any of <strong>coronavirus symptoms</strong> (a high temperature or a new, continuous cough) call your medical service.</p>
                        <div className="blue heading">Stay at home to stop coronavirus spreading</div>
                        <p>Everyone must stay at home to help stop the spread of coronavirus. You should only leave the house for very limited purposes:</p>
                        <ul>
                            <li>Shopping for basic necessities, for example food and medicine, which must be as important.</li>
                            <li>One form of exercise a day, for example a run, walk, or cycle – alone or with members of your household</li>
                            <li>Any medical need, including to donate blood, avoid or escape risk of injury or harm, or to provide care or to help a vulnerable person.</li>
                            <li>Travelling for work purposes, but only where you cannot work from home.</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
