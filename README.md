# The Lord of The Rings Movies API

## Project Overview

This api fetches data from [The LOTR API](https://the-one-api.herokuapp.com/) about the movies in the Lord of The Rings and The Hobbit series and displays them in well formatted, properly paginated forms.

## Features

1. Requires no authentication on the part of the user.
2. User can get all the movies
3. User can get all characters in the movie universe.
4. User can sort queries by different fields in ascending and descending order.
5. Movies can be sorted by revenue, runtime, and budget.
6. Characters cn be sorted by race and gender.

## Project Pipeline
- [Hosted API]()

## Technologies Used

- [NodeJS](https://nodejs.org/en/download/)
- [ExpressJS](https://expressjs.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)

### Installing/Run locally

- Make sure you have `nodejs` installed.

- Clone or fork repo🤷‍♂

  ```bash
    - git clone https://github.com/supercede/naija-tour.git
    - cd naija-tour
    - npm install
  ```

- Create/configure `.env` environment with your credentials. Required environmental variables are the `API_KEY` and `URL` (https://the-one-api.herokuapp.com/)

- Run `npm run dev` to start the server and watch for changes

### Testing

Test specs are implemented using [_mocha_](https://mochajs.org) & [_chai_](https://chiajs.com).

- To test or consume the API locally, you can make use of [_Postman_](https://www.getpostman.com) to simulate a front-end client.

- There is also a test script that you can fire up by running `npm run test`. `npm run test` performs a single full test suite run, including code coverage reporting.

## HTTP Requests

All API requests are made by sending a secure HTTPS request using  the `GET` method to Get a list of resources

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `500` `Server Error` An error on the server occurred

### API ENDPOINTS

#### API Routes

| URI                                                     | HTTP Method | Description                               |
| ------------------------------------------------------- | ----------- | ----------------------------------------- |
| <code>/api/v1/movie</code>                              | `GET`       | Fetch all Movies                           |
| <code>/api/v1/character</code>                      | `GET`       | Fetch all characters              |
| 

+ Responses can be sorted and paginated using request queries. Allowed sorting parameters are `revenue`, `runtime`, `budget` for movies and `race` and `gender` for character. Adding a `-` before sorting parameters will sort in descending order.
  - <code>/api/1/movie?sort=revenue</code> will sort movies by revenue in ascending order
  - <code>/api/1/character?sort=-race</code> will sort characters by race in descending order

+ Character responses can be paginated with two query parameters: `limit` and `page`. `limit` restricts the amount of results to show per page while `page` represents where to start showing results from.
  - <code>/api/v1/character?limit=8&page=3</code> will restrict response to 8 results per query and start from the third page, therefore showing results 17 to 24.


## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
