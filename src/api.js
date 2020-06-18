export const fetchData = async () => {
  try {
    const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    const data = await response.json();
    //console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
