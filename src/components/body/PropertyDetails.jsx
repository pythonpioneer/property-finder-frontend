import { Grid, Paper } from "@mui/material";
import React from "react";


const PropertyDetails = () => {
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
                                <Grid item pb={3}>
                                    {"prperty.type"} " " for rent in " "{"address.sector, city"}
                                </Grid>

                                {/* strip containing 3 items */}
                                <Grid item
                                    sx={{
                                        padding: "10px",
                                        backgroundColor: "#D4DFFF",
                                    }}
                                >
                                    <Grid
                                        sx={{
                                            backgroundColor: "transparent",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            rowGap: '6px',
                                            flexWrap: 'wrap'
                                        }}
                                    >
                                        <Grid sx={{ backgroundColor: "transparent" }}>
                                            {"property.furnishing"}
                                        </Grid>
                                        <Grid sx={{ backgroundColor: "transparent" }}>
                                            {"property.num of baths"}
                                        </Grid>
                                        <Grid sx={{ backgroundColor: "transparent" }}>
                                            {"property.preffered tenant"}
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
                                        <Grid>Availability</Grid>
                                        <Grid>{'availability.status'}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        flexDirection={"column"}
                                        justifyContent={"space-evenly"}
                                        flexWrap={"wrap"}
                                    >
                                        <Grid>Floor</Grid>
                                        <Grid>{'Floor num'}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        flexDirection={"column"}
                                        justifyContent={"space-evenly"}
                                        flexWrap={"wrap"}
                                    >
                                        <Grid>Bedroom</Grid>
                                        <Grid>{'num of beds'}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        flexDirection={"column"}
                                        justifyContent={"space-evenly"}
                                        flexWrap={"wrap"}
                                    >
                                        <Grid>Age of property</Grid>
                                        <Grid>{'property.age'}</Grid>
                                    </Grid>

                                </Grid>

                                <Grid item paddingX={5} md={7} sx={{ fontSize: '14px' }}>
                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid>Monthly Rent</Grid>
                                        <Grid>{'price.monthly rent'}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid>Security </Grid>
                                        <Grid>{'price.security'}</Grid>
                                    </Grid>

                                    <Grid
                                        item
                                        display={"flex"}
                                        // flexDirection={"column"}
                                        justifyContent={"space-between"}
                                    >
                                        <Grid>Brokerage </Grid>
                                        <Grid>{'price..brokerage'}</Grid>
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