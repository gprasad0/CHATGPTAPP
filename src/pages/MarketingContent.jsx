import { Calculate } from '@mui/icons-material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FlexDiv,
  MainH1,
  MainH3,
  MainHeader,
  SidebarMargin,
  ColorButton,
  MainPaper
} from '../components/commonStyledComponents';
import { SelectComponent } from '../components/commonUiElements/SelectComponent';
import { ResultsCard } from '../components/ResultsCard';
import { generateMarketingContentAction,sample } from '../redux/apiActions';
import { getArray } from '../helperFunctions/commonHelperFunctions';
import { useTranslation } from "react-i18next";
import { PlaceHolder } from '../components/commonUiElements/PlaceHolder';


export const MarketingContent = () => {
  const { t, i18n } = useTranslation();

  const [description, setDescription] = useState('');
  const [creativity, setCreativity] = useState('');
  const [outputs, setoutputs] = useState(0);
  const dispatch = useDispatch();
  const marketData = useSelector(
    (state) => state.marketContent.marketContentData
  );
  console.log('marketData==>', marketData);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(()=>{
    dispatch(sample())
  },[])

  const handleSelect = (value, type) => {
    if (type == 'creativity') {
    console.log("value",value)

      setCreativity(value);
    } else {
      setoutputs(value);
    }
  };

  return (
    <MainPaper >
      <SidebarMargin />
      <div
        style={{
          width: `calc(40vw - 65px)`,
          height: '100%',
          background: 'rgb(242, 242, 242)',
        }}
      >
        <MainHeader style={{ background: 'rgb(242, 242, 242)' }}>
          <MainH1>
          {t("marketing_content")}
            {/* Marketing Content */}
            </MainH1>
          <div style={{ padding: '8px' }}>
            <MainH3> {t("description")}</MainH3>
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
                  borderRadius: '20px',
                },
              }}
              // focused
              inputProps={{
                // minlength: 250,
                //   maxLength: 500,
                height: '70px',
              }}
              onChange={(value) => handleDescription(value)}
              // placeholder='Minimum of 50 characters and Maximum of 500 characters'
            />
            <MainH3 style={{ marginTop: '26px' }}> {t("advancedSettings")}</MainH3>
            <FlexDiv
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <MainH3>{t("creativity")}</MainH3>
              <SelectComponent
                data={getArray('creativity')}
                handleSelect={handleSelect}
                type='creativity'
              />
            </FlexDiv>

            <FlexDiv
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <MainH3>{t("outputs")} </MainH3>
              <SelectComponent
                data={getArray('outputs')}
                handleSelect={handleSelect}
                type='outputs'
              />
            </FlexDiv>
          </div>
          <FlexDiv style={{ justifyContent: 'center' }}>
            <ColorButton
              onClick={() => dispatch(generateMarketingContentAction(description,creativity,outputs))}
            >
             {t("generateButton")}
            </ColorButton>
          </FlexDiv>
        </MainHeader>
      </div>
      <div style={{ width: '60vw', height: '100%' }}>
        <div style={{height:"98vh",overflow:"scroll"}}>
        <MainHeader>
          <MainH1>{t("chooseResults")}</MainH1>
          <div>
            {marketData.length > 0 ? <> {marketData.map((data) => (
              <ResultsCard marketContent={data.text} />
            ))}</> : <PlaceHolder />}
           
          </div>
        </MainHeader>
        </div>
      </div>
    </MainPaper>
  );
};
