import axios from "axios";

axios.get('https:localhost/number')
  .then((response) => {
    console.log(response);
  });