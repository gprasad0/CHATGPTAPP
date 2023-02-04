import {
  MainHeader,
  MainPaper,
  SidebarMargin,
} from '../components/commonStyledComponents';
let data = ["1","2","3",4,5,6]
export const MainCardDashboard = () => {
  return (
    <MainPaper>
      <SidebarMargin />

      <MainHeader>
          <div style={{width:"calc(100vw - 65px)",display:"flex",flexWrap:"wrap",padding:"30px",justifyContent:"center"}}>
          {data.map(card =>{
              return <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"10px",width:"30%",height:"150px",margin:"20px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>card</div>
          })}
          </div>
      </MainHeader>
    </MainPaper>
  );
};
