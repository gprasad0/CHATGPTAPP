import { TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { InputSelectDiv } from './commonStyledComponents';
import { showInputs } from '../helperFunctions/commonHelperFunctions';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
export const InputsOnCard = ({ type , handleMultiInputs}) => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState({});
  console.log(
    'searchParams',
    [...searchParams][0][0],
    showInputs()[[...searchParams][0][0]]
  ); // ▶ URLSearchParams {}

  useEffect(() => {
    let aiDescription = showInputs()[[...searchParams][0][0]];
    let data = {};
    aiDescription.forEach((d) => {
      data[d] = '';
    });
    setInputValue(data);
  }, []);

  const handleMultiInput = (input, value) => {
    setInputValue((prevState) => {
      return { ...prevState, [input]: value.target.value };
    });
  };

  useEffect(() => {
    handleMultiInputs(inputValue);
  }, [inputValue]);

  return (
    <>
      {showInputs()[[...searchParams][0][0]].map((input) => {
        return (
          <InputSelectDiv>
            <h4 style={{ width: '40%'}}>{t(input)}</h4>
            <TextField
              id='outlined-basic'
              //   value={description}
              onChange={(value) => handleMultiInput(input, value)}
              placeholder={t(input + 'Ex')}
              sx={{
                width: '12vw',

                '& .MuiOutlinedInput-root': {
                  // borderRadius: '10px',
                  fontSize: '12px',
                  height: '30px',
                },
              }}
            />
          </InputSelectDiv>
        );
      })}
    </>
  );
};
