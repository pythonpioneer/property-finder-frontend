import React from 'react';
import { Grid } from '@material-ui/core';
import PropertyCard from './PropertyCard';

// this method is responsible for paginate and display all properties
export default function Box() {
    return (
        <Grid container spacing={0} justify="center">
            <Grid item lg={4} md={6} sm={12}>
                <PropertyCard />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
                <PropertyCard />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
                <PropertyCard />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
                <PropertyCard />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
                <PropertyCard />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
                <PropertyCard />
            </Grid>
        </Grid>
    );
}
