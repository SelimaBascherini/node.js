import axios from "axios";

const endpoints = [
  "https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students",
  "https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students",
  "https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students",
  "https://5e81-2001-b07-a9a-89a8-fc69-90ae-c7c4-8dbc.ngrok-free.app/digitazon/2023/02/group/1/students",
];

export const fetchAll = async () => {
  let students = await axios
  .all(endpoints.map((endpoint) => axios.get(endpoint)))
  .then(axios.spread((...responses) => {
    return responses.map((response) => response.data);
  }
  ))

  return students;
};
