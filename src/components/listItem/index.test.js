import React from "react";
import { render } from "@testing-library/react";
import ListItem from "./index";

const dummuyData = [
  {
    title: "Thor",
    year: "2011",
    imdbID: "tt0800369",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    title: "Thor: The Dark World",
    year: "2013",
    imdbID: "tt1981115",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",
  },
  {
    title: "Thor: Ragnarok",
    year: "2017",
    imdbID: "tt3501632",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",
  },
  {
    title: "Team Thor",
    year: "2016",
    imdbID: "tt6016776",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmY4NzA2OGUtYTc0MS00OTc0LThhYjAtZTJkMTI2MTgyNDY0XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg",
  },
  {
    title: "Thor: Tales of Asgard",
    year: "2011",
    imdbID: "tt1667903",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg",
  },
  {
    title: "Team Thor: Part 2",
    year: "2017",
    imdbID: "tt6599818",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTJkYmFkM2ItOGIwMS00YWRhLTg5ZGQtNDA0ZjcwNzA3ZjQxXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_SX300.jpg",
  },
  {
    title: "Almighty Thor",
    year: "2011",
    imdbID: "tt1792794",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg",
  },
  {
    title: "Thor: Hammer of the Gods",
    year: "2009",
    imdbID: "tt1260572",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTFkMDA5ODEtMTQ1NC00NGRhLWE3ZGQtOGE5ZGJkMGI1ZDI5XkEyXkFqcGdeQXVyMjI1NjEzNjg@._V1_SX300.jpg",
  },
  {
    title: "Thor: Legend of the Magical Hammer",
    year: "2011",
    imdbID: "tt1241721",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYxOTI1OTI0NF5BMl5BanBnXkFtZTgwMDQzMjcwMzE@._V1_SX300.jpg",
  },
  {
    title: "I Am Thor",
    year: "2015",
    imdbID: "tt2450258",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDQxNTI4Mjg1MV5BMl5BanBnXkFtZTgwMDM2MTMyNzE@._V1_SX300.jpg",
  },
];

test("unit testing for list item in autocompleter list", () => {
  expect(
    render(
    <div>{dummuyData.map(item => <ListItem key={item.imdbID} {...item} />)}</div>
    ).baseElement
  ).toMatchSnapshot();
});
