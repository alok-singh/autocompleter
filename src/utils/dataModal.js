const searchAPIParser = (data) => {
  try {
    return data.map((item) => ({
      title: item.Title,
      year: item.Year,
      imdbID: item.imdbID,
      type: item.Type,
      poster: item.Poster,
    }));
  } catch (error) {
    return [];
  }
}

export default {
  searchAPIParser
}