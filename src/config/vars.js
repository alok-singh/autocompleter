// api debounce timein milliseconds
export const API_DEBOUNCE_TIME = 500;

// autocompleter api. can omit api key from here and put in environment variables
export const AUTOCOMPLETER_API_URL = 'http://www.omdbapi.com/?apikey=c4267e95&s=${KEYWORD}&type=movie';

// a random fallback image can be set according to brand
export const FALLBACK_IMAGE = 'http://www.omdbapi.com/src/poster.jpg';