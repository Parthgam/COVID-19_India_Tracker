import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 16
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
    greyColor: {
        color: '#34495E',
        fontSize: 12,
        fontWeight: 'Bold',
        borderRadius: '4px',
        padding: '4px',
        margin: '1px',
        backgroundColor: '#F0F3F4',
        cursor: 'pointer'
    },
    simpleColor: {
        color: '#34495E',
        fontSize: 12,
        fontWeight: 'Bold',
        borderRadius: '4px',
        padding: '4px',
        margin: '1px',
        cursor: 'pointer'
    },
    headerColor: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'Bold',
        borderRadius: '4px',
        padding: '4px',
        margin: '1px',
        backgroundColor: '#E5E7E9'
    },
    hrLine: {
        height: '2px',
        color: '#E5E7E9',
        backgroundColor: '#E5E7E9',
        border: 'none',
    },
    greyBorder: {
        border: 'none'
    },
    onHoverClass: {
        backgroundColor: '#BDC3C7'
    },
    leftMargin: {
        marginLeft: '20px'
    }
});

export default function StateData(props) {
    var classes = useStyles();
    const [stateData, setStateData] = useState([]);
    const [allStateData, setAllStateData] = useState([]);


    const [rowData, setRowData] = useState({});
    const [isRowSelected, setIsRowSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [selectedStateName, setSelectedStateName] = useState("");

    const onHover = (value, index) => {
        setIsHovered(value);
        if (value)
            setHoverIndex(index);
    }

    // const getSelectedStateData = async () => {
    //     await axios({
    //         method: 'GET',
    //         url: 'https://api.covid19india.org/v2/state_district_wise.json',
    //     })
    //         .then((response) => {
    //             setSelectedStateName(props.state);
    //             setAllStateData(response.data);
    //             console.log(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // useEffect(() => {
    //     setSelectedStateName(props.state);
    //     getSelectedStateData();
    // }, []);

    // useEffect(() => {
    //     setSelectedStateName(props.state);
    // }, [props.state])

    // useEffect(() => {
    //     if (allStateData.length !== 0) {
    //         // console.log(allStateData[selectedStateName].districtData)
    //         // setStateData(allStateData[selectedStateName].districtData);
    //         allStateData.map((value, index) => {
    //             console.log(value["state"], value["state"] === selectedStateName)
    //             if (value["state"] === selectedStateName) {
    //                 var temp = value.districtData;
    //                 //temp.sort((a, b) => parseInt(a.confirmed) < parseInt(b.confirmed) ? 1 : -1)
    //                 console.log(temp);
    //                 setStateData(value.districtData);
    //                 console.log(value.districtData)
    //             }
    //         })

    //     }
    // }, [allStateData])

    // useEffect(() => {
    //     if (allStateData.length !== 0)
    //         setStateData(allStateData[selectedStateName].districtData);
    // }, [selectedStateName]);

    // const sortAscending = (columnName) => {
    //     console.log(columnName)
    //     var temp = stateData;
    //     setStateData(undefined)
    //     temp.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1)
    //     console.log(temp)
    //     setStateData(temp)
    // }
    return (
        <Grid item xs={12} md={5}>
            {props.SelectedDistrictData !== undefined ?
                <Grid item xs={12} md={12}>
                    <Grid container direction="row"
                        justify="flex-end"
                        alignItems="flex-start" >
                        {/* <table className="state-table">
                            <thead>
                                <tr>
                                    <th className="header-color">DISTRICT</th>
                                    <th className="header-color ">CONFIRMED</th>
                                    <th className="header-color ">RECOVERED</th>
                                    <th className="header-color ">DEATHS</th>
                                    <th className="header-color ">ZONE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(props.SelectedDistrictData)}
                                {
                                    props.SelectedDistrictData !== undefined && props.SelectedDistrictData !== null ?
                                        props.SelectedDistrictData.map((value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.district}</td>
                                                    <td>{value.confirmed}</td>
                                                    <td>{value.recovered}</td>
                                                    <td>{value.deceased}</td>
                                                    <td>{value.zone}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        null
                                }
                            </tbody>
                        </table> */}
                        <Grid item xs={12} md={12}>
                            Districts
                        </Grid>
                        {
                            props.SelectedDistrictData !== undefined && props.SelectedDistrictData !== null ?
                                props.SelectedDistrictData.map((value, index) => {
                                    return (
                                        <Grid item xs={4} md={4}>
                                            <strong>{value.confirmed}</strong>
                                            <small>{value.district}</small>
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
