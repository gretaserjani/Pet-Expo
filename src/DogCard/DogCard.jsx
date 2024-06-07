import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const DogCard = ({dogDetails}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const navigate = useNavigate();
  const { dogId } = useParams();

  const buttonLabel = showMoreInfo ? 'Hide info' : 'Show more';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={dogDetails?.image}
        title={dogDetails?.name}
        origin={dogDetails?.origin}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

          {dogDetails?.name}
        </Typography>
        {
          !dogId ? (
            <Button 
              variant="contained"
              onClick={() => navigate(`/dogs/${dogDetails.id}`)}
            >
              View more
            </Button>
          ) : (
            <div>
                <Button 
                variant="outlined"
                onClick={() => setShowMoreInfo(!showMoreInfo)}
              >
                {buttonLabel}
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate('/dogs')}
              >
                Go back
              </Button>
            </div>
            
          )
        }
        {
          showMoreInfo && (
            <div>
              <h3>Name: {dogDetails?.name}</h3>
              <h3>Origin: {dogDetails?.origin}</h3>
              <h3>Breed group: {dogDetails?.breed_group}</h3>
              <h3>Size: {dogDetails?.size}</h3>
              <h3>Temperament: {dogDetails?.temperament}</h3>
              <h3>Colors: {dogDetails?.colors}</h3>
              <h3>Description: {dogDetails?.description}</h3>
            </div>
          )
        }
      </CardContent>
    </Card>
  );
}

DogCard.propTypes = {
  dogDetails: PropTypes.object
}

export default DogCard;