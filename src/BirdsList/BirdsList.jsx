import { useEffect, useState } from 'react'
import { fetchBird } from '../api';
import styles from './styles.module.css';
import BirdCard from '../BirdCard/BirdCard';
import Header from '../Header/Header';

const BirdsList = () => {
  const [birds, setBirds] = useState();

  useEffect(() => {
    const getBirds = async () => {
      const characters = await fetchBird();

      setBirds(characters);
    };

    if (!birds) {
      getBirds();
    }
  }, [birds]);

  return (
    <>
    <Header/>
      <h1 className={styles.title1}>Birds</h1>
      <div className={styles.container}>
        {
          birds?.map((character) => (
            <BirdCard
              key={character.id}
              birdDetails={character}
            />
          ))
        }
      </div>
    </>
  )
}

export default BirdsList;
