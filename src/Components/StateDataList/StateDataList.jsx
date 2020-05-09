import React from 'react';
import DetailBox from '../DetailBox/DetailBox';
import { Grid } from '@material-ui/core';

export default function StateDataList(props) {
  return (
    <Grid container>
      {props.DataArray.length !== 1 ? (
        props.DataArray.map((value, index) => {
          return (
            index !== 0 ? (<Grid item sm={4} md={3} xs={12}>
              <DetailBox
                state={value.state}
                deaths={value.deaths}
                recovered={value.recovered}
                confirmed={value.confirmed}
              />
            </Grid>) : (
                <div></div>)


          );
        })
      ) : (
          <div></div>
        )}

      {/* <Grid item sm={4}>
        <DetailBox></DetailBox>
      </Grid>
      <Grid item sm={4}>
        <DetailBox></DetailBox>
      </Grid>
      <Grid item sm={4}>
        <DetailBox></DetailBox>
      </Grid>
      <Grid item sm={4}>
        <DetailBox></DetailBox>
      </Grid>
      <Grid item sm={4}>
        <DetailBox></DetailBox>
      </Grid> */}
    </Grid>
  );
}
