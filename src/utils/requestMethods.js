import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzg3NzRkZDIyNGIzYmRlNzU0ZDY3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDY2NjU3MCwiZXhwIjoxNjQxMjcxMzcwfQ.9KOt7mQDrp33-jOo7TVeGqX9J2u714b3OkREqgdy32c';

export const publicRequest = axios.create({
   baseURL: BASE_URL,
});

export const userRequest = axios.create({
   baseURL: BASE_URL,
   header: { token: `Bearer ${TOKEN}` },
});
