import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
  const [catImage, setCatImage] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchCatImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching the cat image', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <h1>Random Cat Image</h1>
          <img src={catImage} alt="Random Cat" className={styles.image} />
          <button className={styles.button} onClick={fetchCatImage}>Load New Image</button>
        </>
      )}
    </div>
  );
};

export default CatImage;
