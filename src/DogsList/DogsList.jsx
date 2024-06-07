import { useEffect, useState } from 'react'
import { fetchDog } from '../api';
import styles from './styles.module.css';
import DogCard from '../DogCard/DogCard';
import Header from '../Header/Header';


const DogsList = () => {
  const [dogs, setDogs] = useState();

  useEffect(() => {
    const getDogs = async () => {
      const characters = await fetchDog();

      setDogs(characters);
    };

    if (!dogs) {
      getDogs();
    }
  }, [dogs]);

  return (
    <>
    <Header/>
      <h1 className={styles.title1}>Dogs</h1>
      <div className={styles.container}>
        {
          dogs?.map((character) => (
            <DogCard
              key={character.id}
              dogDetails={character}
            />
          ))
        }
      </div>
    </>
  )
}

export default DogsList;
