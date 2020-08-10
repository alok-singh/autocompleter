import { filterUniqueItems } from './filterUniqueItems';

describe("Unit tests for filterUniqueItems utils", () => {
  
  test("unit test error case", () => {
    const data = {};
    expect([...filterUniqueItems(data, 'imdbID')]).toMatchObject([]);
  });
  
  test("unit test generic case", () => {
    const data = [
      {
        title: "Thor",
        year: "2011",
        imdbID: "tt0800369",
        type: "movie",
        poster: "poster",
      },
      {
        title: "Thor",
        year: "2011",
        imdbID: "tt0800369",
        type: "movie",
        poster: "poster",
      },
    ];
    expect(filterUniqueItems(data, 'imdbID')).toMatchObject([{
      title: "Thor",
      year: "2011",
      imdbID: "tt0800369",
      type: "movie",
      poster: "poster",
    }]);
  });
});
