/**
 * This function is responsible for
 * checking reponse status
 * @param {Object} response 
 */
const parseJSON = (response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}


/**
 * This function is responsible 
 * for handling errors from API response
 * @param {Object} response 
 * @param {String} url 
 */
const checkError = (response, url) => {
  if (!response) {
    const error = new Error('response error');
    error.data = JSON.stringify(response.errors);
    // can send error for remote tracking
    throw new Error(`Something went wrong for the url resonse ${url}`);
  }
  return response;
};

/**
 * Extract Data from standard response
 */
const extractData = (res) => {
  if (res && res.Search) {
    return res.Search;
  }
  return res;
}

/**
 * All API calls will go through this 
 * function
 * @param {String} url 
 * @param {Object} options 
 */
export const request = (url, options) => {
  return fetch(url, options)
    .then(parseJSON)
    .then(extractData)
    .then((data) => checkError(data, url));
};
