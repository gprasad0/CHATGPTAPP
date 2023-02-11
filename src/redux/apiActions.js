import axios from 'axios';
import { marketContentAction } from './slices/marketContentSlice';

export const generateMarketingContentAction =
  (prompt, temp, outputs) => async (dispatch) => {
    try {
      let data = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
        },
        url: 'http://localhost:3000/api/storyscape/compose',
        data: {
          prompt,
          outputs,
          temp,
        },
      });

      dispatch(marketContentAction(data.data));
    } catch (e) {
      return console.error(e.message);
    }
  };

export const sample = (prompt, temp, outputs) => async (dispatch) => {
  // let data = await axios.post("http://localhost:3000/api/getAllPost",{data:"data123??"})
  let data = await axios({
    method: 'post',
    url: 'http://localhost:3000/api/getAllPost',
    headers: {
      Accept: 'application/json',
      // 'Authorization': 'Bearer ' + credentials.t
    },
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone',
    },
  });
  console.log('dataa===>', data);
};
