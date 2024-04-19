import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PropertyCard from './PropertyCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProperty } from '../../services/property';

// this method is responsible for paginate and display all properties
export default function Box() {

    // to call the actions
    const dispatch = useDispatch();
    const { properties, isLoading } = useSelector(state => state.property);

    useEffect(() => {
        dispatch(fetchAllProperty())
    }, [dispatch])
    return (
        <Grid container spacing={0} justifyContent="center">

            {properties.map((property, idx) => {
                return (
                    <Grid key={idx} item lg={4} md={6} sm={12}>
                        <PropertyCard property={property} />
                    </Grid>
                )
            })}
        </Grid>
    );
}
