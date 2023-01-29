import axios from "axios";
import { marketContentAction } from "./slices/marketContentSlice";


export const generateMarketingContentAction = (data) => async (dispatch) => {
    try {
        var temp = 0.2
    const prompt = "fruit";
  
      let data = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
      },
        url: 'https://api.openai.com/v1/completions',
        data: JSON.stringify({
          "model": "text-davinci-003",
          "prompt": prompt,
          "max_tokens": 90,
          "temperature": temp
      })
      });
      dispatch(marketContentAction(data.data))
      
    } catch (e) {
      return console.error(e.message);
    }
  };
  