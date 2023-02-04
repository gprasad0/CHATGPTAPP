import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useState } from 'react';
import { IconDiv, FlexDiv } from './commonStyledComponents';
import { NotificationBar } from './commonUiElements/NotificationBar';


export const ResultsCard = ({ marketContent }) => {

  const [showCopiedNotif,setShowCopiedNotif] = useState(false)

  const copyData = () =>{
    setShowCopiedNotif(true)
    navigator.clipboard.writeText(marketContent)
  }

  const handleCloseNotif = () =>{
    setShowCopiedNotif(false)
  }

  return (
    <div
      style={{
        width: '70%',
        border: '1px solid rgb(163 152 152)',
        margin: 'auto',
        marginTop: '100px',
        // borderRadius: '4px',
      }}
    >
      <div
        style={{
          borderBottom: '1px solid rgb(163 152 152)',
          display: 'flex',
          justifyContent: 'space-between',
          background: 'whitesmoke',
        }}
      >
        <FlexDiv>
          <IconDiv>
            <ContentCopyIcon sx={{ fontSize: '1.2rem' }} onClick={copyData}></ContentCopyIcon>
          </IconDiv>
          <IconDiv>
            <StarBorderIcon sx={{ fontSize: '1.2rem' }}> </StarBorderIcon>
          </IconDiv>
          <IconDiv>
            <ThumbUpOutlinedIcon sx={{ fontSize: '1.2rem' }}></ThumbUpOutlinedIcon>
          </IconDiv>
          <IconDiv>
            <ThumbDownOffAltOutlinedIcon sx={{ fontSize: '1.2rem' }}></ThumbDownOffAltOutlinedIcon>
          </IconDiv>
        </FlexDiv>
        <FlexDiv>
          <FlexDiv
            style={{
              color: 'grey',
              alignItems: 'center',
              borderRight: '1px solid grey',
              width:"130px",
              alignItems:"center",
              justifyContent:"space-around"
            }}
          >
            <div>Characters:</div>
            <div>{marketContent.length}</div>
          </FlexDiv>

          <FlexDiv style={{ color: 'grey', alignItems: 'center' ,width:"86px",
              justifyContent:"space-around",
              alignItems:"center",
            }}>
            <div>Words:</div>
            <div>{marketContent.trim().split(/\s+/).length}</div>
          </FlexDiv>
        </FlexDiv>
      </div>
      <div style={{ minHeight: '10vh',padding:"10px" ,color:"#7e8299"}}>"{marketContent}"</div>
      <NotificationBar message="Copied" handleClose={handleCloseNotif} open = {showCopiedNotif} type="success" />
    </div>
  );
};
