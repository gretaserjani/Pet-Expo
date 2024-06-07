import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import {fetchSingleCat} from '../api';
import CatCard from '../CatCard/CatCard';
import Header from '../Header/Header';

const SingleCatsView = () => {
  const { catId } = useParams()

  const [cats, setCats] = useState();

  useEffect(() => {
    const getCats = async () => {
      const characters = await fetchSingleCat(catId);

      setCats(characters);
    };

    if (!cats) {
      getCats();
    }
  }, [catId, cats]);

  return (
    <>
    <Header/>
    <div>
      <CatCard
        catDetails={cats}
      />
    </div>
    </>
  )
}

export default SingleCatsView;