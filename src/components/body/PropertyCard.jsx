import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { likeProperty } from '../../services/user';


const useStyles = makeStyles({
    card: {
        '@media (max-width: 600px)': {
            width: '330px', // Adjust the width for smaller screens
        },
    }
});

const PropertyCard = ({ property }) => {

    const classes = useStyles();
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();
    const { likedProperties } = useSelector(state => state.user);

    // to handle the like 
    const handleLike = () => {

        // call the action to like
        if(likedProperties?.indexOf(property._id) >= 0) {
            setLike(false);
        }
        else setLike(true);
        if (!likedProperties) setLike(false)

        dispatch(likeProperty(property?._id));
    }

    return (
        <Card className={classes.card} style={{ margin: '20px', height: '380px', backgroundColor: 'transparent' }}>
            <CardMedia
                component="img"
                alt="Property Image"
                height="200"
                image={property?.images[0]}
            />
            <CardContent>
                <Typography className='text-bold' gutterBottom variant="subtitle1" component="">
                    {property.desc}
                    <i className={`fa-${likedProperties?.indexOf(property?._id)+1 ? 'solid' : 'regular'} fa-heart`} onClick={handleLike} style={{ float: 'right', fontSize: '30px', color: 'red' }}></i>
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '16px', marginLeft: '5px', marginBottom: '-2px', float: 'right' }}>Like </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Price:</strong> Rs. {property?.price?.monthlyRent}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Property Type:</strong> {property?.propertyType}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Furnishing:</strong> {property?.furnishing}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Preferred Tenant:</strong> {property?.preferredTenant[0]?.join(', ')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>Location:</strong> {property?.location?.district}, Sector {property?.location?.sector}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PropertyCard;
