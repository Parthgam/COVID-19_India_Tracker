import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import './TotalCases.css';
import Moment from 'moment';

const useStyles = makeStyles({
  root: {
    fontSize: 12
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    fontWeight: 'Bold',
  },
  pos: {
    marginBottom: 12,
  },
  cardStyle: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  redColor: {
    color: 'red',
  },
  greenColor: {
    color: 'green',
  },
  blueColor: {
    color: 'blue',
  },
  greyColor: {
    color: 'grey',
  },
  hrLine: {
    height: '1px',
    color: '#E8E8E8',
    backgroundColor: '#E8E8E8',
    border: 'none',
  },
  marginClass: {
    marginTop: '20px',
    marginRight: '20px'
  },
  notificationCard: {
    backgroundColor: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '2px',
    marginTop: '10px'
  },
  notificationDate: {
    fontSize: '12px',
    color: 'grey',
    fontWeight: 'bold',
  },
  notificationText: {
    fontSize: '12px',
    color: 'grey',
    fontWeight: 'bold',
  },
  helpClass: {
    fontSize: '12px',
    color: 'grey',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  bgColor: {
    backgroundColor: '#f4f4f5',
    paddingBottom: '50px',
    paddingTop: '30px'
  },

  confirmedColor: {
    color: '#641E16',
  },
  activeColor: {
    color: '#154360',
  },
  RecoveredColor: {
    color: '#0B5345',
  },
  deathColor: {
    color: '#212F3D'
  }

});

const formatDate = (date) => {
  return Moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

function TotalCases(props) {
  var classes = useStyles();
  return (
    <Grid container className={classes.bgColor}>
      <Grid item xs={12}>
        <Grid container direction="row"
          justify="center"
          alignItems="center" >
          <Grid item sm={2} md={2} xs={12} className={classes.marginClass}>
            <Grid container direction="row"
              justify="center"
              alignItems="center" className={classes.cardStyle}>
              <Grid item >
                <h2>COVID-19 Cases</h2>
                <Grid item>
                  <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <div className="live-icon"></div>&nbsp;&nbsp;
                &nbsp;
                as on: {Moment().format('lll')}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {props.TotalData.confirmed !== undefined ?
            <Grid item sm={2} md={1} xs={4} className={classes.marginClass}>
              <Card className={classes.root}>
                <CardContent className="card-style card-confirmed-color">
                  <Typography>
                    <svg id="Capa_1" enableBackground="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m274.356 286.422-6.697-2.06c-6.93-2.132-11.659-8.535-11.659-15.786v-17.683h-99.097v17.683c0 7.251-4.729 13.654-11.659 15.786l-6.697 2.06-7.933 45.578h151.675z" fill="#f6d190" /><path d="m340.037 306.632-33.06-10.172-100.525 46.54-100.525-46.541-33.06 10.172c-13.86 4.265-23.318 17.07-23.318 31.572v58.184c0 9.121 7.395 16.516 16.516 16.516h280.774c9.121 0 16.516-7.395 16.516-16.516v-58.184c0-14.501-9.458-27.307-23.318-31.571z" fill="#dad8db" /><path d="m206.452 355.097c43.116 0 80.649-23.649 100.525-58.638l-32.62-10.037c-14.906 21.522-39.743 35.643-67.904 35.643s-52.998-14.121-67.904-35.643l-32.62 10.037c19.874 34.989 57.407 58.638 100.523 58.638z" fill="#eceaec" /><path d="m247.742 0h-65.154c-9.143 0-17.062 4.983-21.335 12.361-1.479 2.553-4.164 4.155-7.115 4.155h-5.493l5.021 123.871h151.882v-82.581c0-31.925-25.881-57.806-57.806-57.806z" fill="#966a5b" /><path d="m107.355 57.806v82.581h57.806v-107.355c0-9.122-7.395-16.516-16.516-16.516-22.804 0-41.29 18.487-41.29 41.29z" fill="#785353" /><path d="m313.58 145.871c-1.321-8.121-8.947-13.742-17.174-13.742h-7.374c-9.122 0-16.516-7.395-16.516-16.516v-24.774c0-13.682-11.092-24.774-24.774-24.774h-82.581l-19.495 103.269 60.785 26 82.581-30.172h8.258c10.031-.001 17.974-8.943 16.29-19.291z" fill="#ffe09f" /><path d="m165.161 165.161v-99.097c-13.683 0-24.774 11.092-24.774 24.774v24.774c0 9.122-7.395 16.516-16.516 16.516h-7.374c-8.228 0-15.853 5.622-17.174 13.742-1.684 10.348 6.259 19.29 16.29 19.29h8.258l21.462 9.505z" fill="#f6d190" /><g><path d="m173.419 148.645c-4.565 0-8.258-3.698-8.258-8.258v-8.258c0-4.56 3.694-8.258 8.258-8.258s8.258 3.698 8.258 8.258v8.258c0 4.561-3.693 8.258-8.258 8.258z" fill="#6e4848" /></g><g><path d="m239.484 148.645c-4.565 0-8.258-3.698-8.258-8.258v-8.258c0-4.56 3.694-8.258 8.258-8.258s8.258 3.698 8.258 8.258v8.258c0 4.561-3.694 8.258-8.258 8.258z" fill="#6e4848" /></g><path d="m156.903 250.892c14.588 8.451 31.477 13.366 49.548 13.366s34.961-4.915 49.548-13.366v-27.924h-99.097v27.924z" fill="#ecbd83" /><path d="m280.225 123.889c-4.389.284-7.709 4.124-7.709 8.523v24.75c0 4.418-3.582 8-8 8h-99.355c-27.661 19.339-3.979 81.304 41.917 80.964 6.945-.052 13.678.641 20.102-1.045 35.694-9.372 61.852-42.366 61.852-80.955v-31.996c0-4.744-3.997-8.552-8.807-8.241z" fill="#faf5dc" /><path d="m165.161 165.161h-16.774c-4.418 0-8-3.582-8-8v-24.75c0-4.399-3.319-8.239-7.709-8.523-4.81-.311-8.807 3.497-8.807 8.24v33.032c0 45.608 36.973 82.581 82.581 82.581 7.143 0 14.118-.958 20.728-2.662-35.598-9.18-62.019-41.452-62.019-79.918z" fill="#f5ebcd" /><g><path d="m462.452 404.645c0-59.29-48.064-107.355-107.355-107.355-26.149 0-50.114 9.349-68.736 24.886-23.602 19.693-35.434 49.327-35.434 82.468 0 59.29 44.879 103.192 104.17 103.192 33.151 0 62.793-10.863 82.485-34.476 15.528-18.618 24.87-42.575 24.87-68.715z" fill="#faf5dc" /><path d="m289.032 396.387h132.129v16.516h-132.129z" fill="#ffd064" transform="matrix(-.707 .707 -.707 -.707 892.315 439.681)" /><circle cx="401.811" cy="357.93" fill="#ffe07d" r="8.258" /><circle cx="308.382" cy="451.36" fill="#ffe07d" r="8.258" /><path d="m289.032 396.387h132.129v16.516h-132.129z" fill="#ffd064" transform="matrix(.707 .707 -.707 .707 390.133 -132.574)" /><circle cx="308.382" cy="357.93" fill="#ffe07d" r="8.258" /><circle cx="401.811" cy="451.36" fill="#ffe07d" r="8.258" /><path d="m289.032 396.387h132.129v16.516h-132.129z" fill="#ffd064" transform="matrix(0 1 -1 0 759.742 49.548)" /><circle cx="355.097" cy="338.581" fill="#ffe07d" r="8.258" /><circle cx="355.097" cy="470.71" fill="#ffe07d" r="8.258" /><path d="m289.032 396.387h132.129v16.516h-132.129z" fill="#ffd064" /><path d="m396.387 404.645c0-22.804-18.486-41.29-41.29-41.29-8.225 0-15.888 2.405-22.325 6.55-11.41 7.347-15.754 20.161-15.754 34.741 0 22.804 15.275 38.667 38.079 38.667 14.598 0 27.427-4.953 34.769-16.387 4.127-6.428 6.521-14.075 6.521-22.281z" fill="#ff8086" /><path d="m367.484 433.548c-22.804 0-41.29-18.486-41.29-41.29 0-8.226 2.433-15.916 6.579-22.354-11.408 7.348-18.966 20.163-18.966 34.741 0 22.804 18.486 41.29 41.29 41.29 14.578 0 27.421-7.602 34.769-19.01-6.438 4.147-14.156 6.623-22.382 6.623z" fill="#e5646e" /><g fill="#ffe07d"><path d="m369.202 405.677c-4.565 0-8.29-3.698-8.29-8.258s3.653-8.258 8.218-8.258h.073c4.565 0 8.258 3.698 8.258 8.258s-3.695 8.258-8.259 8.258z" /><path d="m355.089 426.839c-4.565 0-8.29-3.698-8.29-8.258s3.661-8.258 8.226-8.258h.065c4.565 0 8.258 3.698 8.258 8.258s-3.695 8.258-8.259 8.258z" /><path d="m340.984 405.677c-4.565 0-8.298-3.698-8.298-8.258s3.661-8.258 8.226-8.258h.073c4.565 0 8.258 3.698 8.258 8.258s-3.695 8.258-8.259 8.258z" /><circle cx="289.032" cy="404.645" r="8.258" /><circle cx="421.161" cy="404.645" r="8.258" /></g><path d="m368.86 498.236c-59.291 0-107.355-48.065-107.355-107.355 0-26.141 9.327-50.086 24.856-68.705-23.612 19.693-38.619 49.319-38.619 82.468 0 59.29 48.065 107.355 107.355 107.355 33.15 0 62.792-15.027 82.485-38.639-18.619 15.529-42.581 24.876-68.722 24.876z" fill="#f5ebcd" /></g></g></svg>
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={12} className="card-heading">
                      CONFIRMED
                  </Grid>
                    <Grid item xs={12} md={12} className="line-text">
                      {props.TotalData.confirmed}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            :
            <Grid item xs={4} sm={2} md={1} className={classes.marginClass}>
              <Skeleton animation="wave" variant="rect" height="133px" />
            </Grid>
          }
          {props.TotalData.active !== undefined ?
            <Grid item sm={2} md={1} xs={4} className={classes.marginClass}>
              <Card className={classes.root}>
                <CardContent className="card-style card-active-color">
                  <Typography>
                    <svg id="Capa_1" enableBackground="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m173.419 435.5c-27.365 0-37.919-20.006-37.919-47.371v-330.323l87.468 24.774v305.548c0 21.8-14.078 40.311-33.639 46.939 0 .001-10.344.433-15.91.433z" fill="#edf4ff" /><path d="m156.903 389.772v-282.417c0-13.682 11.092-24.774 24.774-24.774h41.29v-24.775h-99.097v115.614l11.629 5.747v138.209l-11.629 4.688v64.305c0 23.393 15.499 44.685 38.281 49.998 9.642 2.249 18.909 1.492 27.177-1.299-18.812-6.463-32.425-24.29-32.425-45.296z" fill="#dbeaff" /><path d="m201.178 125.64c-2.867-1.033-6.327-1.769-11.26-1.769-16.514 0-16.525 8.246-33.015 8.258l-9.903 7.548v259.157l21.353 21.94c2.693.417 5.493.506 8.358.228 17.163-1.669 29.741-17.095 29.741-34.339v-253.31c0-3.416-2.061-6.557-5.274-7.713z" fill="#ff8086" /><path d="m156.903 389.772v-257.645c-.013 0-.022.003-.035.003-2.543 0-4.694-.197-6.574-.528-5.153-.91-9.907 2.843-9.907 8.076v248.452c0 16.506 12.126 30.217 27.966 32.645-7.12-8.349-11.45-19.166-11.45-31.003z" fill="#e5646e" /><path d="m156.903 173.419-16.516 16.516v115.613l16.516 16.516c9.121 0 16.516-7.395 16.516-16.516v-115.613c0-9.121-7.394-16.516-16.516-16.516z" fill="#fff" /><path d="m156.903 322.065h-33.032v-33.033l5.129-8.532-5.129-7.984v-16.516l5.129-9.167-5.129-7.349v-16.516l5.129-8.801-5.129-7.715v-33.033h33.032z" fill="#faf5dc" /><path d="m214.71 0h-8.258l-8.952 7.833-7.565-7.833h-16.516l-8.586 7.833-7.93-7.833h-16.516c-4.561 0-8.258 3.697-8.258 8.258v49.548h87.704s3.134-24.774 3.134-33.032c0-4.129 0-16.516 0-16.516.001-4.561-3.697-8.258-8.257-8.258z" fill="#ff8086" /><path d="m206.452 24.774v-24.774h-16.516v24.774c0 4.561-3.697 8.258-8.258 8.258-4.561 0-8.258-3.697-8.258-8.258v-24.774h-16.516v24.774c0 4.561-3.697 8.258-8.258 8.258-4.561 0-8.258-3.697-8.258-8.258v-24.774h-8.258c-4.561 0-8.258 3.697-8.258 8.258v49.548h99.097v-33.032c0 4.561-3.697 8.258-8.258 8.258-4.562 0-8.259-3.697-8.259-8.258z" fill="#e5646e" /><path d="m148.645 214.71c0-4.56-3.694-8.258-8.258-8.258h-16.516v16.516h16.516c4.565 0 8.258-3.698 8.258-8.258z" fill="#ff8086" /><path d="m140.387 239.484h-16.516v16.516h16.516c4.565 0 8.258-3.698 8.258-8.258 0-4.561-3.693-8.258-8.258-8.258z" fill="#ff8086" /><path d="m140.387 272.516h-16.516v16.516h16.516c4.565 0 8.258-3.698 8.258-8.258s-3.693-8.258-8.258-8.258z" fill="#dbeaff" /><path d="m231.226 66.065h-115.613c-4.561 0-8.258-3.697-8.258-8.258 0-4.561 3.697-8.258 8.258-8.258h115.613c4.561 0 8.258 3.697 8.258 8.258 0 4.56-3.697 8.258-8.258 8.258z" fill="#edf4ff" /><g><path d="m404.645 404.46c0-59.392-48.147-107.54-107.54-107.54-26.194 0-50.2 9.365-68.854 24.929-23.642 19.727-35.495 49.412-35.495 82.61 0 59.393 44.956 103.369 104.349 103.369 33.208 0 62.901-10.882 82.627-34.536 15.555-18.649 24.913-42.647 24.913-68.832z" fill="#faf5dc" /><path d="m230.927 396.188h132.356v16.545h-132.356z" fill="#ffd064" transform="matrix(-.707 .707 -.707 -.707 793.188 480.372)" /><circle cx="343.901" cy="357.665" fill="#ffe07d" r="8.272" /><circle cx="250.31" cy="451.255" fill="#ffe07d" r="8.272" /><path d="m230.927 396.188h132.356v16.545h-132.356z" fill="#ffd064" transform="matrix(.707 .707 -.707 .707 373.017 -91.622)" /><circle cx="250.31" cy="357.665" fill="#ffe07d" r="8.272" /><circle cx="343.901" cy="451.255" fill="#ffe07d" r="8.272" /><path d="m230.927 396.188h132.356v16.545h-132.356z" fill="#ffd064" transform="matrix(0 1 -1 0 701.566 107.355)" /><circle cx="297.106" cy="338.282" fill="#ffe07d" r="8.272" /><circle cx="297.106" cy="470.639" fill="#ffe07d" r="8.272" /><path d="m230.927 396.188h132.356v16.545h-132.356z" fill="#ffd064" /><path d="m338.467 404.46c0-22.843-18.518-41.361-41.361-41.361-8.239 0-15.915 2.409-22.363 6.561-11.429 7.36-15.781 20.196-15.781 34.801 0 22.843 15.301 38.734 38.144 38.734 14.623 0 27.474-4.961 34.829-16.415 4.134-6.439 6.532-14.1 6.532-22.32z" fill="#ff8086" /><path d="m309.514 433.413c-22.843 0-41.361-18.518-41.361-41.361 0-8.24 2.437-15.944 6.59-22.392-11.427 7.36-18.998 20.198-18.998 34.801 0 22.843 18.518 41.361 41.361 41.361 14.603 0 27.469-7.615 34.829-19.043-6.449 4.153-14.181 6.634-22.421 6.634z" fill="#e5646e" /><g fill="#ffe07d"><path d="m311.235 405.494c-4.572 0-8.305-3.704-8.305-8.272s3.66-8.272 8.232-8.272h.073c4.572 0 8.272 3.704 8.272 8.272s-3.7 8.272-8.272 8.272z" /><path d="m297.097 426.692c-4.572 0-8.305-3.704-8.305-8.272s3.668-8.272 8.24-8.272h.065c4.572 0 8.272 3.704 8.272 8.272s-3.699 8.272-8.272 8.272z" /><path d="m282.968 405.494c-4.572 0-8.313-3.704-8.313-8.272s3.668-8.272 8.24-8.272h.073c4.572 0 8.272 3.704 8.272 8.272.001 4.568-3.699 8.272-8.272 8.272z" /><circle cx="230.927" cy="404.46" r="8.272" /><circle cx="363.284" cy="404.46" r="8.272" /></g><path d="m310.893 498.213c-59.393 0-107.54-48.147-107.54-107.54 0-26.186 9.343-50.172 24.898-68.823-23.653 19.727-38.686 49.404-38.686 82.61 0 59.392 48.147 107.54 107.54 107.54 33.207 0 62.9-15.053 82.627-38.706-18.65 15.556-42.654 24.919-68.839 24.919z" fill="#f5ebcd" /></g></g></svg>
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={12} className="card-heading">
                      ACTIVE
                  </Grid>
                    <Grid item xs={12} md={12} className="line-text">
                      {props.TotalData.active}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            :
            <Grid item xs={4} sm={2} md={1} className={classes.marginClass}>
              <Skeleton animation="wave" variant="rect" height="133px" />
            </Grid>
          }
          {props.TotalData.recovered !== undefined ?
            <Grid item sm={2} md={1} xs={4} className={classes.marginClass}>
              <Card className={classes.root}>
                <CardContent className="card-style card-recovered-color">
                  <Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 512 512" width="50" height="50"><title>recovered heart patient </title><path d="M401.57,299.93c19.63,0,29.33,18.69,29.33,34.89,0,41.49-58.67,79.72-58.67,79.72s-58.68-37.97-58.68-79.72c0-16.19,7.91-34.91,29.34-34.91a29.347,29.347,0,0,1,29.34,29.35A29.324,29.324,0,0,1,401.57,299.93Z" style={{ fill: '#f8ec7d' }} /><path d="M367.38,468A110.941,110.941,0,0,1,264.49,330.96a109.473,109.473,0,0,1,5.59-16.94A110.894,110.894,0,1,1,372.23,468.11C370.6,468.11,368.99,468.08,367.38,468ZM430.9,334.82c0-16.2-9.7-34.89-29.33-34.89a29.324,29.324,0,0,0-29.34,29.33,29.347,29.347,0,0,0-29.34-29.35c-21.43,0-29.34,18.72-29.34,34.91,0,41.75,58.68,79.72,58.68,79.72S430.9,376.31,430.9,334.82Z" style={{ fill: '#6fe3ff' }} /><path d="M367.38,468H48.09c-10.13,0-25.2-13.19-25.2-23.32v-43.2c0-61.06,75.35-74.65,123.75-88.89l.01.03c0,17.07,20.26,52.5,60.76,52.5,28.42,0,48.59-18.1,57.07-34.16h.01A110.941,110.941,0,0,0,367.38,468Z" style={{ fill: '#f8ec7d' }} /><path d="M293.02,119.79c0,2.13-.41,9.42-1.1,17.96,0-29.48-33.88-48.09-33.88-48.09s-8.09,30.83-66.97,57.46c-61.01,27.59-74.01-15.62-74.63-17.82a.659.659,0,0,0-.02-.09c-.53-2.62-.91-4.64-1.07-5.74-2.59-17.68,10.41-79.02,90.49-79.02C280.79,44.45,293.02,100.17,293.02,119.79Z" style={{ fill: '#af593c' }} /><path d="M270.08,314.02a109.473,109.473,0,0,0-5.59,16.94h-.01c-8.48,16.06-28.65,34.16-57.07,34.16-40.5,0-60.76-35.43-60.76-52.5l-.01-.03q4.575-1.35,8.79-2.71l12.18-26.25,1.58-1.65c9.48,5.99,21.91,9.96,38.22,9.96,16.28,0,28.69-3.86,38.17-9.69l.07.12,12.39,27.87C261.88,311.54,265.91,312.78,270.08,314.02Z" style={{ fill: '#d68565' }} /><path d="M286.78,172.64c10.84-12.34,25.35-1.38,21.33,15.67-5.04,21.35-18.77,38.27-32.05,38.02-.05,0-.87,37.6-30.41,55.88-.02.01-.05.03-.07.04-9.48,5.83-21.89,9.69-38.17,9.69-16.31,0-28.74-3.97-38.22-9.96-29.06-18.35-30.38-55.65-30.44-55.65-13.27.25-27.01-16.67-32.05-38.02-4.03-17.05,10.49-27.09,21.33-15.68-2.73-3.59-8.98-30.51-11.59-43.33.62,2.2,13.62,45.41,74.63,17.82,58.88-26.63,66.97-57.46,66.97-57.46s33.88,18.61,33.88,48.09C290.78,152.08,288.85,169.92,286.78,172.64Z" style={{ fill: '#e48e66' }} /></svg>
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={12} className="card-heading">
                      RECOVERED
                  </Grid>
                    <Grid item xs={12} md={12} className="line-text">
                      {props.TotalData.recovered}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            :
            <Grid item xs={4} sm={2} md={1} className={classes.marginClass}>
              <Skeleton animation="wave" variant="rect" height="133px" />
            </Grid>
          }
          {props.TotalData.deaths !== undefined ?

            <Grid item sm={2} md={1} xs={4} className={classes.marginClass}>
              <Card className={classes.root}>
                <CardContent className="card-style card-death-color">
                  <Typography>
                    <svg id="Layer_1" enableBackground="new 0 0 506.231 506.231" height="50" viewBox="0 0 506.231 506.231" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m95.235 329.228h-60.736v36.448h76.496v-20.688c0-8.704-7.056-15.76-15.76-15.76z" fill="#55c7a6" /><g><path d="m486.231 289.976c-11.046 0-20 8.954-20 20v58.7h-426.231v-166.7c0-11.046-8.954-20-20-20s-20 8.954-20 20v264.886c0 11.046 8.954 20 20 20s20-8.954 20-20v-36.207h426.231v36.207c0 11.046 8.954 20 20 20s20-8.954 20-20v-156.886c0-11.046-8.954-20-20-20z" fill="#965028" /></g><path d="m39.947 359.676h426.534v42.381h-426.534z" fill="#c8e6eb" /><ellipse cx="88.94" cy="291.286" fill="#ffb69e" rx="37.942" ry="37.942" transform="matrix(.16 -.987 .987 .16 -212.831 332.419)" /><path d="m439.999 291.286h-268.524c-14.625 0-26.482 11.856-26.482 26.482v70.169h321.488v-70.169c0-14.626-11.856-26.482-26.482-26.482z" fill="#ff6473" /><g><path d="m292.986 358.444h-147.993c-10.401 0-18.833-8.432-18.833-18.833s8.432-18.833 18.833-18.833h147.993c10.401 0 18.833 8.432 18.833 18.833s-8.431 18.833-18.833 18.833z" fill="#ffb69e" /></g><path d="m335.342 137.587c-2.871-1.657-6.54-.672-8.196 2.196l-1.205 2.087-4.888-2.822c.67-2.282 1.036-4.694 1.036-7.193s-.366-4.911-1.036-7.193l4.887-2.822 1.205 2.087c1.111 1.925 3.128 3.001 5.202 3.001 1.018 0 2.049-.259 2.994-.805 2.87-1.657 3.853-5.326 2.196-8.196l-8.41-14.567c-1.656-2.869-5.322-3.853-8.196-2.196-2.87 1.657-3.853 5.326-2.196 8.196l1.205 2.087-4.894 2.826c-3.321-3.485-7.616-6.029-12.452-7.196v-5.644h2.41c3.313 0 6-2.687 6-6s-2.687-6-6-6h-16.821c-3.313 0-6 2.687-6 6s2.687 6 6 6h2.411v5.644c-4.836 1.167-9.131 3.711-12.453 7.196l-4.893-2.825 1.206-2.088c1.656-2.87.674-6.539-2.196-8.196-2.869-1.656-6.539-.672-8.196 2.196l-4.202 7.277c-.001.002-.003.005-.005.007s-.002.005-.004.007l-4.201 7.276c-1.656 2.87-.674 6.539 2.196 8.196.944.545 1.977.805 2.994.805 2.074 0 4.091-1.076 5.202-3.001l1.205-2.087 4.888 2.822c-.67 2.282-1.036 4.694-1.036 7.193s.366 4.911 1.036 7.193l-4.887 2.822-1.205-2.088c-1.656-2.868-5.326-3.854-8.196-2.195-2.87 1.657-3.853 5.326-2.196 8.196l4.201 7.276c.001.002.002.005.004.007.001.002.002.003.003.005l4.203 7.278c1.111 1.925 3.128 3.001 5.202 3.001 1.018 0 2.05-.259 2.994-.805 2.87-1.657 3.853-5.326 2.196-8.196l-1.205-2.087 4.893-2.825c3.321 3.485 7.617 6.029 12.453 7.196v5.644h-2.411c-3.313 0-6 2.687-6 6s2.687 6 6 6h16.821c3.313 0 6-2.687 6-6s-2.687-6-6-6h-2.41v-5.644c4.835-1.167 9.13-3.711 12.452-7.196l4.894 2.826-1.205 2.087c-1.656 2.87-.674 6.54 2.196 8.196.945.545 1.977.805 2.994.805 2.074 0 4.091-1.076 5.202-3.001l4.204-7.282s.001-.001.001-.001c0-.001.001-.001.001-.002l4.204-7.281c1.656-2.87.674-6.54-2.196-8.197zm-38.748 7.763c-7.441 0-13.494-6.054-13.494-13.495s6.054-13.494 13.494-13.494 13.494 6.053 13.494 13.494-6.053 13.495-13.494 13.495z" fill="#a5c8cd" /><path d="m138.117 80.483c-3.644-2.104-8.3-.855-10.402 2.787l-1.53 2.65-6.203-3.581c.851-2.896 1.315-5.958 1.315-9.129s-.464-6.233-1.315-9.129l6.203-3.581 1.53 2.65c1.411 2.443 3.97 3.809 6.602 3.809 1.292 0 2.601-.329 3.8-1.021 3.642-2.103 4.89-6.76 2.787-10.402l-10.674-18.491c-2.103-3.642-6.76-4.892-10.402-2.787-3.642 2.103-4.89 6.76-2.787 10.402l1.529 2.649-6.211 3.586c-4.215-4.422-9.666-7.651-15.803-9.133v-7.162h3.059c4.206 0 7.615-3.41 7.615-7.615s-3.41-7.615-7.615-7.615h-21.349c-4.206 0-7.615 3.41-7.615 7.615s3.409 7.615 7.615 7.615h3.059v7.163c-6.137 1.481-11.589 4.71-15.804 9.133l-6.211-3.586 1.529-2.649c2.103-3.642.855-8.299-2.787-10.402-3.642-2.104-8.3-.855-10.402 2.787l-10.674 18.488c-2.103 3.642-.855 8.299 2.787 10.402 1.199.692 2.508 1.021 3.8 1.021 2.632 0 5.192-1.366 6.602-3.809l1.53-2.65 6.203 3.581c-.85 2.896-1.315 5.958-1.315 9.129 0 3.172.464 6.233 1.315 9.129l-6.203 3.581-1.53-2.65c-2.103-3.642-6.759-4.891-10.402-2.787-3.642 2.103-4.89 6.76-2.787 10.402l10.674 18.488c1.411 2.443 3.97 3.809 6.602 3.809 1.292 0 2.601-.329 3.8-1.021 3.642-2.103 4.89-6.76 2.787-10.402l-1.529-2.647 6.211-3.586c4.215 4.423 9.667 7.652 15.804 9.133v7.163h-3.059c-4.206 0-7.615 3.41-7.615 7.615s3.409 7.615 7.615 7.615h21.348c4.206 0 7.615-3.41 7.615-7.615s-3.41-7.615-7.615-7.615h-3.059v-7.163c6.137-1.481 11.588-4.71 15.803-9.133l6.211 3.586-1.529 2.649c-2.103 3.642-.855 8.299 2.787 10.402 1.199.692 2.508 1.021 3.8 1.021 2.632 0 5.192-1.366 6.602-3.809l10.674-18.488c2.104-3.641.856-8.299-2.786-10.402zm-49.177 9.853c-9.444 0-17.127-7.683-17.127-17.127s7.683-17.127 17.127-17.127 17.127 7.683 17.127 17.127-7.683 17.127-17.127 17.127z" fill="#a5c8cd" /><path d="m209.544 158.889h-13.179v-18.293c0-3.108-2.519-5.627-5.627-5.627h-18.746c-3.108 0-5.627 2.519-5.627 5.627v18.293h-13.179c-3.108 0-5.627 2.519-5.627 5.627v18.746c0 3.108 2.519 5.627 5.627 5.627h13.179v62.663c0 3.108 2.519 5.627 5.627 5.627h18.746c3.108 0 5.627-2.519 5.627-5.627v-62.663h13.179c3.108 0 5.627-2.519 5.627-5.627v-18.746c0-3.107-2.519-5.627-5.627-5.627z" fill="#783c28" /></g></svg>
                  </Typography>
                  <Grid container>
                    <Grid item xs={12} md={12} className="card-heading">
                      DEATH
                  </Grid>
                    <Grid item xs={12} md={12} className="line-text">
                      {props.TotalData.deaths}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            :
            <Grid item xs={4} sm={2} md={1} className={classes.marginClass}>
              <Skeleton animation="wave" variant="rect" height="133px" />
            </Grid>
          }
          <Grid item sm={4} md={3} xs={10} >
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={12} md={9}>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Grid item xs={12} md={12} className={classes.notificationCard}>
                    <Grid container>
                      <Grid item xs={12} md={12} className={classes.notificationDate}>
                        <Grid container direction="row" justify="center" alignItems="center">
                          <svg height="25" viewBox="0 0 64 64" width="25" xmlns="http://www.w3.org/2000/svg"><g id="hospital-information-callcenter-covid19-coronavirus"><path d="m24 42 2.282-.761-.226-2.594-2.056-1.645-2.056 1.645-.226 2.594z" fill="#ab2300" /><path d="m19 41-4-6-4.43 1.11a9.992 9.992 0 0 0 -7.57 9.7v15.19h17l1.718-19.761.226-2.594z" fill="#bddbff" /><path d="m24 42-2.282-.761-1.718 19.761h4 4l-1.718-19.761z" fill="#d80027" /><path d="m37.43 36.11-4.43-1.11-4 6-2.944-2.355.226 2.594 1.718 19.761h17v-15.19a9.992 9.992 0 0 0 -7.57-9.7z" fill="#bddbff" /><path d="m13 16h-1a2.006 2.006 0 0 0 -2 2v3a2.006 2.006 0 0 0 2 2h4v-7z" fill="#006df0" /><path d="m14 16h2v7h-2z" fill="#005ece" /><path d="m16 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2h3v-7a6 6 0 0 0 -6-6h-4a4 4 0 0 0 -4 4 2 2 0 0 0 -2-2h-2a4 4 0 0 0 -4 4v7h3z" fill="#58595b" /><path d="m24 37 5-3v-3.76a7.982 7.982 0 0 1 -10 0v3.76z" fill="#ffa791" /><path d="m24 37-5-3-4 1 4 6z" fill="#57a4ff" /><path d="m29 41 4-6-4-1-5 3z" fill="#57a4ff" /><path d="m32 14v10a8 8 0 0 1 -16 0v-10a2.006 2.006 0 0 1 2-2h12a2.006 2.006 0 0 1 2 2z" fill="#ffa791" /><path d="m61 13a10 10 0 0 1 -8.27 9.85l-7.73 5.15 1.52-6.07a10 10 0 1 1 14.48-8.93z" fill="#ffcd00" /><path d="m51 3a10.007 10.007 0 0 0 -1 .051 10 10 0 0 1 .73 19.8l-5.33 3.549-.4 1.6 7.73-5.15a10 10 0 0 0 -1.73-19.85z" fill="#ebbf00" /><path d="m53 7h-4v4h-4v4h4v4h4v-4h4v-4h-4z" fill="#ed1c24" /><path d="m24 32a7.963 7.963 0 0 1 -5-1.76v2a7.982 7.982 0 0 0 10 0v-2a7.963 7.963 0 0 1 -5 1.76z" fill="#ff9478" /><path d="m29 3h-4a4 4 0 0 0 -4 4v5h9a2 2 0 0 1 2 2v2h3v-7a6 6 0 0 0 -6-6z" fill="#4f5052" /><path d="m21 20a1 1 0 0 0 1-1v-1a1 1 0 0 0 -2 0v1a1 1 0 0 0 1 1z" fill="#58595b" /><path d="m27 20a1 1 0 0 0 1-1v-1a1 1 0 0 0 -2 0v1a1 1 0 0 0 1 1z" fill="#58595b" /><path d="m33 28h-7a1 1 0 0 1 0-2h7a1 1 0 0 0 1-1v-3a1 1 0 0 1 2 0v3a3 3 0 0 1 -3 3z" fill="#57a4ff" /><path d="m36 48a1 1 0 0 1 1 1v12a0 0 0 0 1 0 0h-2a0 0 0 0 1 0 0v-12a1 1 0 0 1 1-1z" fill="#9bc9ff" /><path d="m12 48a1 1 0 0 1 1 1v12a0 0 0 0 1 0 0h-2a0 0 0 0 1 0 0v-12a1 1 0 0 1 1-1z" fill="#9bc9ff" /><path d="m25 25h-2a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4z" fill="#006df0" /><path d="m32 23h4a2.006 2.006 0 0 0 2-2v-3a2.006 2.006 0 0 0 -2-2h-4z" fill="#006df0" /><path d="m32 16h2v7h-2z" fill="#005ece" /></g></svg>
                          Helpline No. : +91-11-23978046
                            </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.notificationCard}>
                    <Grid container>
                      <Grid item xs={12} md={12} className={classes.notificationDate}>
                        <Grid container direction="row" justify="center" alignItems="center">
                          <svg id="Capa_1" enableBackground="new 0 0 512 512" height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg"><g><path d="m421 451h-106v-30h106c33.091 0 61-26.909 61-60s-27.909-60-61-60h-106v-30h106c49.629 0 91 40.371 91 90s-41.371 90-91 90z" fill="#cfe6e6" /><path d="m315 31c-74.399 0-135 60.599-135 135 0 74.399 60.601 135 135 135s135-60.601 135-135c0-74.401-60.601-135-135-135z" fill="#ff7366" /><path d="m450 166c0 74.399-60.601 135-135 135v-270c74.399 0 135 60.599 135 135z" fill="#e6455a" /><path d="m360 151v30h-30v30h-30v-30h-30v-30h30v-30h30v30z" fill="#e6f2f2" /><path d="m360 151v30h-30v30h-15v-90h15v30z" fill="#cfe6e6" /><path d="m236.104 368.793-13.74 27.173c-7.322-5.092-29.661-13.138-76.926-60.403-47.6-47.549-54.723-68.84-60.403-76.926l27.173-13.74c-14.532-29.048-22.208-61.509-22.208-93.897h-90c0 82.712 41.144 165.212 102.966 227.034s144.322 102.966 227.034 102.966v-90c-32.388 0-64.849-7.676-93.896-22.207z" fill="#407580" /><path d="m222.363 395.966c-7.323-5.091-29.661-13.138-76.926-60.403l-42.471 42.471c61.822 61.822 144.322 102.966 227.034 102.966v-90c-32.388 0-64.849-7.676-93.896-22.207z" fill="#335e73" /></g></svg>
                          Toll Free : 1075
                          </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12} className={classes.notificationCard}>
                  <Grid container direction="row" justify="center" alignItems="center">
                    <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"><span className={classes.helpClass}>States & Union Territories (View pdf)</span></a>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default TotalCases;
