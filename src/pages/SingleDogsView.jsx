import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import {fetchSingleDog} from '../api';
import DogCard from '../DogCard/DogCard';
import Header from '../Header/Header';

const SingleDogView = () => {
  const { dogId } = useParams()

  const [dogs, setDogs] = useState();

  useEffect(() => {
    const getDogs = async () => {
      const characters = await fetchSingleDog(dogId);

      setDogs(characters);
    };

    if (!dogs) {
      getDogs();
    }
  }, [dogId, dogs]);

  return (
    <>
    <Header/>
    <div>
      <DogCard
        dogDetails={dogs}
      />
    </div>
    </>
  )
}

export default SingleDogView;