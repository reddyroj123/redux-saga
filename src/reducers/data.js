import { RECEIVE_API_DATA } from "../actions";

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      console.log('switch case-'+data[0].employee_name);
      console.log(data[0]);
      return data[0];
    default:
      return state;
  }
};
