import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropertyCard from './PropertyCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProperty, fetchLikedProperty, fetchMyProperty } from '../../services/property';

// this method is responsible for paginate and display all properties
export default function Box(props) {

    // to call the actions
    const dispatch = useDispatch();
    const { properties, isLoading, myProperties } = useSelector(state => state.property);
    const { likedProperties } = useSelector(state => state.user);

    useEffect(() => {

        if (props.type === 'my') {
            if (myProperties?.length === 0) {
                dispatch(fetchMyProperty());
            }
        }
        else if (props.type === 'liked') {
            dispatch(fetchLikedProperty());
            console.log("Xxx")
        }
        else {
            if (properties?.length === 0) {
                dispatch(fetchAllProperty());
            }
        }
    }, [dispatch, props.type])

    // display data from requested type
    let allProperties = props.type === 'my' ? myProperties : 
        (props.type === 'liked' ? likedProperties : properties);

    return (
        <Grid container spacing={0} justifyContent="center">
        {allProperties?.length > 0 ? (
            allProperties.map((property, idx) => (
                <Grid key={idx} item lg={4} md={6} sm={12}>
                    <PropertyCard property={property} />
                </Grid>
            ))
        ) : (
            <Grid item>
                <Typography variant="h6">No properties to display.</Typography>
            </Grid>
        )}
        {!isLoading && !allProperties.length && <Typography variant="h6">No properties to display.</Typography>}
        {isLoading && <Typography variant="h6">Loading...</Typography>}
    </Grid>
    );
}
