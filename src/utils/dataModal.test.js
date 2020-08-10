import dataModal from "./dataModal";

describe("Unit tests for modal utils", () => {
  
  test("unit test error case", () => {
    const data = {};
    expect([...dataModal.searchAPIParser(data)]).toMatchObject([]);
  });
  
  test("unit test generic case", () => {
    const data = [
      {
        Title: "Thor",
        Year: "2011",
        imdbID: "tt0800369",
        Type: "movie",
        Poster: "poster",
      },
    ];
    expect([...dataModal.searchAPIParser(data)]).toMatchObject([
      ...data.map((item) => ({
        title: item.Title,
        year: item.Year,
        imdbID: item.imdbID,
        type: item.Type,
        poster: item.Poster,
      })),
    ]);
  });
});
