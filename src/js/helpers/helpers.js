const MoviesList = async (ids, fetchFn) => {
  const movies = [];
  try {
    for (let i = 0; i < ids.length; i += 1) {
      const res = await fetchFn(ids[i])
      const genre_ids = res.genres.map(el => el.id)
      movies.push({...res, genre_ids});
    }
  } catch (e) {
    console.log(e.message);
    return;
  }

  return movies
}

export default {MoviesList}