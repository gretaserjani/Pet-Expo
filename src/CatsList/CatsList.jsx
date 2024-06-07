import { useEffect, useState } from 'react'
import { fetchCat } from '../api';
import styles from './styles.module.css';
import CatCard from '../CatCard/CatCard';
import Header from '../Header/Header';


const CatsList = () => {
  const [cats, setCats] = useState();

  useEffect(() => {
    const getCats = async () => {
      const characters = await fetchCat();

      setCats(characters);
    };

    if (!cats) {
      getCats();
    }
  }, [cats]);

  return (
    <>
    <Header/>
      <h1 className={styles.title1}>Cats</h1>
      <div className={styles.container}>
        {
          cats?.map((character) => (
            <CatCard
              key={character.id}
              catDetails={character}
            />
          ))
        }
      </div>
    </>
  )
}

export default CatsList;
