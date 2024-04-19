import { Grid, Paper } from "@mui/material";
import React from "react";
import { useLocation } from 'react-router-dom';


const PropertyDetails = () => {

    const location = useLocation();
    const property = location.state.property;

    console.log(property);

    return (
        <>
            <Grid container mt={5} justifyContent={"center"}>
                <Grid item md={10} p={2}>
                    <Paper>
                        <Grid container p={4}>
                            {/* Image of property will be added here */}
                            <Grid item xs={12} md={5} sx={{ backgroundColor: "black", height: '400px' }}></Grid>

                            {/* details of property are added here */}
                            <Grid item xs={12} md={7} p={2} sx={{ backgroundColor: "transparent" }}>
                                {/* first line */}

                                <Grid
                                    item
                                    display={"flex"}
                                    flexDirection={"column"}
                                    justifyContent={"space-evenly"}
                                    flexWrap={"wrap"}
                                >
                                    <Grid><strong>{property.desc}</strong></Grid>
                                </Grid>
                                <Grid item pb={3}>
                                    {`${property.propertyType}, ${property.location?.sector ? 'Sector ' + property.location?.sector : ''}, ${property.location?.district}, ${property.location.state} ${property.location.zip}`}
                                </Grid>

                                {/* strip containing 3 items */}
                                <Grid item
                                    sx={{
                                        padding: "10px",
                                    }}
                                >
                                    <Grid
                                        sx={{
                                            backgroundColor: "transparent",
                                            rowGap: '6px',
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        <Grid sx={{ backgroundColor: "transparent" }}>
                                            <strong>Property Furnishing Status:</strong> {property.furnishing}-furnished
                                        </Grid>
                                        <Grid sx={{ backgroundColor: "transparent" }}>
                                            <strong>Preferred Tenants:</strong> {property.preferredTenant.join(',' + " ")}
                                        </Grid>
                                    </Grid>
                                </Grid>

                                {/* flex container showing remaining info of property */}
                                <Grid
                                    item
                                    padding={4}
                                    display={"flex"}
                                    alignItems={"center"}
                                    flexWrap={"wrap"}
                                    columnGap={7}
                                    rowGap={3}
                                    sx={{}}
                                >
                                    {/* below blocks represent an item containing two grids vertically */}
                                    <Grid
                                        item
                                        display={"flex"}
                                        flexDirection={"column"}
                                        justifyContent={"space-evenly"}
                                        flexWrap={"wrap"}
                                    >
                                        <Grid><strong>Flooring:</strong> {property.flooring ? property.flooring : 'NA'}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        flexDirection={"column"}
                                        justifyContent={"space-evenly"}
                                        flexWrap={"wrap"}
                                    >
                                        <Grid><strong>Age of property: </strong> {property.propertyAge ? property.propertyAge : 'NA'}</Grid>
                                    </Grid>

                                </Grid>

                                <Grid item paddingX={5} md={7} sx={{ fontSize: '14px' }}>
                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid><strong>Monthly Rent:</strong> {property.price.monthlyRent}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid><strong>Security Fee:</strong> {property.price.security}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid><strong>Brokerage:</strong> {property.price.brokerage} </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid><strong>Maintainance:</strong> {property.price.maintenanceCost} </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default PropertyDetails;