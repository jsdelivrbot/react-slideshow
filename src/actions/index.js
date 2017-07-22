import axios from 'axios';

const API_KEY = 'e4dc8095-7caf-4d4e-bfbd-9585ea48d0f9';
const URL = 'http://api.new-feature.sparkhire.com/v1.0/companies/e9aafdd9-d9f3-455e-b495-58d087415857/photos';
export function fetchPhotos() {
  const request = axios.get(URL, {
    Username: API_KEY,
    Password: ''
  });
  return {
    type: 'FETCH_PHOTOS',
    payload: request
  };
}
