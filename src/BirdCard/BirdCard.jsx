import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const BirdCard = ({birdDetails}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const navigate = useNavigate();
  const { birdId } = useParams();

  const buttonLabel = showMoreInfo ? 'Hide info' : 'Show more';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={birdDetails?.image}
        title={birdDetails?.name}
        origin={birdDetails?.place_of_found}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

          {birdDetails?.name}
        </Typography>
        {
          !birdId ? (
            <Button 
              variant="contained"
              onClick={() => navigate(`/birds/${birdDetails.id}`)}
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
                onClick={() => navigate('/birds')}
              >
                Go back
              </Button>
            </div>
            
          )
        }
        {
          showMoreInfo && (
            <div>
              <h3>Name: {birdDetails?.name}</h3>
              <h3>Species: {birdDetails?.species}</h3>
              <h3>Family: {birdDetails?.family}</h3>
              <h3>Habitat: {birdDetails?.habitat}</h3>
              <h3>Place of found: {birdDetails?.place_of_found}</h3>
              <h3>Diet: {birdDetails?.diet}</h3>
              <h3>Description: {birdDetails?.description}</h3>
              <h3>Wingspan (cm): {birdDetails?.wingspan_cm}</h3>
              <h3>Weight (kg): {birdDetails?.weight_kg}</h3>
            </div>
          )
        }
      </CardContent>
    </Card>
  );
}

BirdCard.propTypes = {
  birdDetails: PropTypes.object
}

export default BirdCard;