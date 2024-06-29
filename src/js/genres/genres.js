import moviesServices from '../services/moviesServices.js';
import storageKey from '../constants/storageKey.js';

const getGenres = async () => {
  try {
    const { genres } = await moviesServices.getGenres();

    localStorage.setItem(storageKey.GENRES_KEY, JSON.stringify(genres));
  } catch (e) {
    console.log(e.message);
  }
};

void getGenres();