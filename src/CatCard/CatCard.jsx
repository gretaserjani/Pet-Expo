import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const CatCard = ({catDetails}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const navigate = useNavigate();
  const { catId } = useParams();

  const buttonLabel = showMoreInfo ? 'Hide info' : 'Show more';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={catDetails?.image}
        title={catDetails?.name}
        origin={catDetails?.origin}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">

          {catDetails?.name}
        </Typography>
        {
          !catId ? (
            <Button 
              variant="contained"
              onClick={() => navigate(`/cats/${catDetails.id}`)}
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
                onClick={() => navigate('/cats')}
              >
                Go back
              </Button>
            </div>
            
          )
        }
        {
          showMoreInfo && (
            <div>
              <h3>Name: {catDetails?.name}</h3>
              <h3>Origin: {catDetails?.origin}</h3>
              <h3>Breed group: {catDetails?.breed_group}</h3>
              <h3>Size: {catDetails?.size}</h3>
              <h3>Temperament: {catDetails?.temperament}</h3>
              <h3>Colors: {catDetails?.colors}</h3>
              <h3>Description: {catDetails?.description}</h3>
            </div>
          )
        }
      </CardContent>
    </Card>
  );
}

CatCard.propTypes = {
  catDetails: PropTypes.object
}

export default CatCard;