import { TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { InputSelectDiv } from './commonStyledComponents';
import {showInputs} from "../helperFunctions/commonHelperFunctions";
export const InputsOnCard = ({type}) => {

    const [searchParams] = useSearchParams();
    console.log("searchParams",[...searchParams][0][0],showInputs()[[...searchParams][0][0]]); // ▶ URLSearchParams {}


  return (
    <>
      {/* <InputSelectDiv >
        <h4 style={{width:"40%"}}>Target Audience</h4>
        <TextField
          id='outlined-basic'
          placeholder= 'eg:age range,interests'
          sx={{
            '& .MuiOutlinedInput-root': {
              // borderRadius: '10px',
              height: '30px',
            },
          }}
        />
      </InputSelectDiv> */}

      {
          showInputs()[[...searchParams][0][0]].map(input=>{
              return(
                <InputSelectDiv >
                <h4 style={{width:"40%"}}>{input}</h4>
                <TextField
                  id='outlined-basic'
                  placeholder= 'eg:age range,interests'
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      // borderRadius: '10px',
                      height: '30px',
                    },
                  }}
                />
              </InputSelectDiv>
              )
          })
      }
      {/* <InputSelectDiv >
        <h4 style={{width:"40%"}}>Tone</h4>
        <TextField
          id='outlined-basic'
          placeholder= 'eg:professional,casual'

          sx={{
            '& .MuiOutlinedInput-root': {
              // borderRadius: '10px',
              height: '30px',
            },
          }}
        />
      </InputSelectDiv>
      <InputSelectDiv >
        <h4 style={{width:"40%"}}>Target word count</h4>
        <TextField
          id='outlined-basic'
          placeholder= 'eg:100'

          sx={{
            '& .MuiOutlinedInput-root': {
              // borderRadius: '10px',
              height: '30px',
            },
          }}
        />
      </InputSelectDiv>
      <InputSelectDiv >
        <h4 style={{width:"40%"}}>Keywords</h4>
        <TextField
          id='outlined-basic'
          placeholder= 'eg:search engine optimization'

          sx={{
            '& .MuiOutlinedInput-root': {
              // borderRadius: '10px',
              height: '30px',
            },
          }}
        />
      </InputSelectDiv> */}
    </>
  );
};
