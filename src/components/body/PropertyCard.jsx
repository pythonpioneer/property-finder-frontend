import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';


const PropertyCard = ({ property }) => {
    return (
        <Card style={{ margin: '20px', height: '380px', backgroundColor: 'transparent' }}>
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
                    <strong>Location:</strong> {property.location.district}, Sector {"property.location.sector"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;
