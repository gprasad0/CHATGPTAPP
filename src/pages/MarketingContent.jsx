import { Calculate } from '@mui/icons-material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React,{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FlexDiv,
  MainH1,
  MainH3,
  MainHeader,
  SidebarMargin,
  ColorButton,
  MainPaper,
  InputSelectDiv,
} from '../components/commonStyledComponents';
import { SelectComponent } from '../components/commonUiElements/SelectComponent';
import { ResultsCard } from '../components/ResultsCard';
import { generateMarketingContentAction } from '../redux/apiActions';
import {
  getArray,
  returnCorrectDescription,
} from '../helperFunctions/commonHelperFunctions';
import { useTranslation } from 'react-i18next';
import { PlaceHolder } from '../components/commonUiElements/PlaceHolder';
import { InputsOnCard } from '../components/InputsOnCard';
import { useSearchParams } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const MarketingContent = () => {
  const { t, i18n } = useTranslation();
  const userData = useSelector(state=>state.userData)

  const [description, setDescription] = useState('');
  const [creativity, setCreativity] = useState('');
  const [outputs, setoutputs] = useState(0);
  const [searchParams] = useSearchParams();
  const [mainCardData, setmainCardData] = useState([...searchParams][0][0]);
  const [errorModal,setErrorModal] = useState(false)
  const [secondaryCardData, setSecondaryCardData] = useState(
    [...searchParams][0][1]
  );

  const [multiInput, setMultiInput] = useState({});
  console.log('searchParams', [...searchParams]);
  const dispatch = useDispatch();
  const marketData = useSelector(
    (state) => state.marketContent.marketContentData
  );
  const tokenExpired = useSelector(
    (state) => state.marketContent.tokenExpired
  );
  console.log('marketData==>', mainCardData);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    console.log("tokenExpired---->",tokenExpired)
    if(tokenExpired){
      setErrorModal(true)

    }
    // dispatch(sample())
  }, [tokenExpired]);


  const closeModal = () => {
    // setSignUp(false)
    setErrorModal(false)
    
  }

  const handleSelect = (value, type) => {
    if (type == 'creativity') {
      console.log('value', value);

      setCreativity(value);
    } else {
      setoutputs(value);
    }
  };

  const handleMultiInputs = (data) => {
    setMultiInput(data);
  };

  return (
    <MainPaper>
      <SidebarMargin />
      <div
        style={{
          width: `calc(40vw - 65px)`,
          height: '100%',
          background: '#f9fafc',
        }}
      >
        <MainHeader style={{ background: '#f9fafc', paddingLeft: '18px' }}>
          <MainH1>
            {secondaryCardData}
            {/* Marketing Content */}
          </MainH1>
          <div style={{ padding: '8px' }}>
            <MainH3 style={{ marginBottom: '10px' }}>
              {returnCorrectDescription(mainCardData)[0]}
              {/* {t('description')} */}
            </MainH3>

            <TextField
              // disabled={textFieldDisable}
              id='outlined-basic'
              // label='Citation'
              value={description}
              variant='outlined'
              multiline
              rows={4}
              sx={{
                width: '93%',
                // borderRadius:"20px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
              placeholder={returnCorrectDescription(mainCardData)[1]}
              // focused
              inputProps={{
                // minlength: 250,
                //   maxLength: 500,
                height: '70px',
              }}
              onChange={(value) => handleDescription(value)}
              // placeholder='Minimum of 50 characters and Maximum of 500 characters'
            />
             <InputsOnCard
              type={[...searchParams][0]}
              handleMultiInputs={handleMultiInputs}
            />
            <MainH3 style={{ marginTop: '26px' }}>
              {' '}
              {t('advancedSettings')}
            </MainH3>
            <InputSelectDiv>
              <h4 style={{ width: '40%' }}>{t('creativity')}</h4>
              <SelectComponent
                data={getArray('creativity')}
                handleSelect={handleSelect}
                type='creativity'
              />
            </InputSelectDiv>

            <InputSelectDiv>
              <h4 style={{ width: '40%' }}>{t('outputs')} </h4>
              <SelectComponent
                data={getArray('outputs')}
                handleSelect={handleSelect}
                type='outputs'
              />
            </InputSelectDiv>
           
          </div>

          <FlexDiv style={{ justifyContent: 'center' }}>
            <ColorButton
              width={500}
              onClick={() =>
                dispatch(
                  generateMarketingContentAction(
                    description,
                    creativity,
                    outputs,
                    multiInput,
                    mainCardData,
                    secondaryCardData,
                    userData.apiCount
                  )
                )
              }
            >
              {t('generateButton')}
            </ColorButton>
          </FlexDiv>
        </MainHeader>
      </div>

      <div style={{ width: '60vw', height: '100%' }}>
        <div style={{ height: '98vh', overflow: 'scroll' }}>
          <MainHeader>
            <MainH1>{t('chooseResults')}</MainH1>
            <div>
              {marketData.length > 0 ? (
                <>
                  {' '}
                  {marketData.map((data) => (
                    <ResultsCard marketContent={data.text} />
                  ))}
                </>
              ) : (
                <PlaceHolder />
              )}
            </div>
          </MainHeader>
          <Snackbar
          open={errorModal}
          autoHideDuration={6000}
          onClose={closeModal}
        >
          <Alert onClose={closeModal} severity='error' sx={{ width: '100%' }}>
            Token Expired. Please refresh token.
          </Alert>
        </Snackbar>
        </div>
      </div>
    </MainPaper>
  );
};
