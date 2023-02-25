import {
  MainHeader,
  MainPaper,
  MainTopicCard,
  SidebarMargin,
} from '../components/commonStyledComponents';
import { TopicCard } from '../components/TopicCard';
import { mainCardsHeading } from '../helperFunctions/commonHelperFunctions';
import { useTranslation } from "react-i18next";
let colors = [
  'linear-gradient(to right top, #cf6dd7, #e86ab2, #ef7191, #e8807b, #d98f70)',
  'linear-gradient(to right, #97adeb, #7e92db, #6778cb, #525db9, #3f43a7)',
  'linear-gradient(to right, #c8a1e2, #bc8edd, #b07ad8, #a367d3, #9653ce)',
  'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
  'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)',
  'linear-gradient(15deg, #13547a 0%, #80d0c7 100%)'

];
export const MainCardDashboard = () => {
  const { t, i18n } = useTranslation();
  return (
    <MainPaper sx={{background:"#f9fafc"}}>
      <SidebarMargin />
    <div style={{display:"flex",flexDirection:"column"}}>
      <MainHeader style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:"calc(100vw - 65px)",display:"flex",padding:"30px",justifyContent:"center"}}>
          {/* {mainCardsHeading().map(card =>{
            return <><TopicCard card={card}></TopicCard></>
              // return <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"10px",width:"30%",height:"150px",margin:"20px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>{card}</div>
          })} */}
          {
            mainCardsHeading().map((card,i)=>{
              return <div style={{height:"40px",margin:"10px",padding:"10px",color:"black",borderRadius:"4px",fontWeight:"600",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderBottom:"3px solid #4723d9"}}>{t(card)}</div>
            })
            
          }
    
          </div>
          
      </MainHeader>


      <MainHeader style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:"calc(100vw - 65px)",display:"flex",padding:"30px",justifyContent:"center",flexWrap:"wrap"}}>
          {/* {mainCardsHeading().map(card =>{
            return <><TopicCard card={card}></TopicCard></>
              // return <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"10px",width:"30%",height:"150px",margin:"20px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>{card}</div>
          })} */}
          {/* {
            mainCardsHeading().map((card,i)=>{
              return <div style={{height:"40px",margin:"10px",padding:"10px",color:"black",borderRadius:"4px",fontWeight:"600",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderBottom:"3px solid #4723d9"}}>{t(card)}</div>
            })
            
          } */}
          {
            mainCardsHeading().map(card=>{
              return <div style={{height:"40px",margin:"10px",padding:"10px",color:"black",borderRadius:"4px",fontWeight:"600",background:"white",boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderBottom:"3px solid #4723d9"}}>{t(card)}</div>

            })
            
          }
          </div>
          
      </MainHeader>
      </div>
    </MainPaper>
  );
};
