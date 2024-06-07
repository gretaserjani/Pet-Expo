import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import {fetchSingleBird} from '../api';
import BirdCard from '../BirdCard/BirdCard';
import Header from '../Header/Header';

const SingleBirdsView = () => {
  const { birdId } = useParams()

  const [birds, setBirds] = useState();

  useEffect(() => {
    const getBirds = async () => {
      const characters = await fetchSingleBird(birdId);

      setBirds(characters);
    };

    if (!birds) {
      getBirds();
    }
  }, [birdId, birds]);

  return (
    <>
    <Header/>
    <div>
      <BirdCard
        birdDetails={birds}
      />
    </div>
    </>
  )
}

export default SingleBirdsView;