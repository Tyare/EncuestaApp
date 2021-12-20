import axios from 'axios';

// Setear aquì la direcciòn del backend
export const serverURL = 'http://192.168.100.14:8080';

export const client = axios.create({
  baseURL: serverURL,
  // headers: {
  //   // empID: localStorage.getItem('empID'),
  //   Authorization: `Bearer ${getToken()}`,
  // },
});
