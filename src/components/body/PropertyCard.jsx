import React from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    card: {
        '@media (max-width: 600px)': {
            width: '330px', // Adjust the width for smaller screens
        },
    }
});

const PropertyCard = ({ property }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card} style={{ margin: '20px', height: '380px', backgroundColor: 'transparent' }}>
            <CardMedia
                component="img"
                alt="Property Image"
                height="200"
                image={property.images[0]}
            />
            <CardContent>
                <Typography className='text-bold' gutterBottom variant="" component="">
                    {property.desc}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Price:</strong> Rs. {property.price.monthlyRent}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Property Type:</strong> {property.propertyType}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Furnishing:</strong> {property.furnishing}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Preferred Tenant:</strong> {property.preferredTenant[0].join(', ')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Location:</strong> {property.location.district}, Sector {property.location.sector}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;
