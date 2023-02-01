import { Calculate } from '@mui/icons-material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { FlexDiv, MainH1, MainH3, MainHeader, SidebarMargin } from '../components/commonComponents';
import { ResultsCard } from '../components/ResultsCard';
import { generateMarketingContentAction } from '../redux/apiActions';
export const MarketingContent = () => {
  const dispatch = useDispatch();
  const marketData = useSelector(
    (state) => state.marketContent.marketContentData
  );
  console.log('marketData==>', marketData);
  return (
    // <Box
    //   component='main'
    //   sx={{ flexGrow: 1, marginTop: '56px', marginLeft: '58px' }}
    // >
    <div style={{ display: 'flex', height: '100%' }}>
     <SidebarMargin/>
      <div
        style={{
          width: `calc(40vw - 65px)`,
          height: '100%',
          background: '#F2F2F2',
        }}
      >
        <MainHeader>
          <MainH1>Marketing Content</MainH1>
          <div style={{padding:"8px"}}>
            <MainH3>Description</MainH3>
            <TextField
            // disabled={textFieldDisable}
            id='outlined-basic'
            // label='Citation'
            // value={citation}
            variant='outlined'
            multiline
            rows={4}
            sx={{ width: '93%',
            // borderRadius:"20px",
            '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
             } 
            }}
            // focused
            inputProps={{
              // minlength: 250,
              //   maxLength: 500,
              height: '70px',
              
            }}
            // onChange={handleCitation}
            // placeholder='Minimum of 50 characters and Maximum of 500 characters'
          />
          <MainH3>Advanced Settings</MainH3>
          <FlexDiv>
          <MainH3>Creativity</MainH3>
          </FlexDiv>
          </div>
        </MainHeader>
      </div>
      <div style={{ width: '60vw', height: '100%' }}>
        <MainHeader>
          <MainH1>Choose from the results</MainH1>

        </MainHeader>
      </div>
      {/* </div> */}
      {/* <div> */}
      {/* <div style={{ width: '40vw', background: '#cbc7c7',padding:"3px" }}>
          <h1 style={{}}>GENERATE MARKETING CONTENT</h1>
          <div>Description</div>
          <TextField
            // disabled={textFieldDisable}
            id='outlined-basic'
            // label='Citation'
            // value={citation}
            variant='outlined'
            multiline
            rows={8}
            sx={{ width: '85%',borderRadius:"10px",'& .MuiOutlinedInput-root': {
                borderRadius: '20px',
             } }}
            // focused
            inputProps={{
              // minlength: 250,
              //   maxLength: 500,
              height: '70px',
              
            }}
            // onChange={handleCitation}
            // placeholder='Minimum of 50 characters and Maximum of 500 characters'
          />
          <div>Advanced Settings</div>
          <select name='cars' id='cars'>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
          <div>Creativity</div>

          <div>Outputs</div>
          
          <Button
          variant='contained'
          sx={{ background: '#FDD78C',color:"black"}}
          onClick = {() => dispatch(generateMarketingContentAction())}
        >
          Generate Now
        </Button>
        </div> */}
      {/* <div style={{ width: '60vw',height:"60vh" }}>
          <h1 style={{}}>Choose from the results</h1>
          <div style={{ }}>
              
            {marketData.map((data) => (
              <ResultsCard marketContent={data.text} />
            ))}
          </div>
        </div> */}
      {/* </div> */}
    </div>
    // </Box>
  );
};
