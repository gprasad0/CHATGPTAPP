import {
  MainHeader,
  MainPaper,
  MainTopicCard,
  SecondaryTopicCard,
  SidebarMargin,
} from '../components/commonStyledComponents';
import { TopicCard } from '../components/TopicCard';
import {
  mainCardsButton,
  mainCardsHeading,
} from '../helperFunctions/commonHelperFunctions';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const MainCardDashboard = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [mainCard, setMainCard] = useState('socialMedia');
  const [selectedCard,setSelectedCard] = useState('socialMedia')
  const handleCards = (value) => {
    setMainCard(value);
    setSelectedCard(value)
  };

  const handleSecondaryCard = () =>{
    navigate("/")

  }


  return (
    <MainPaper sx={{ background: '#f9fafc' }}>
      <SidebarMargin />
      <div style={{ width: 'calc(100vw - 65px)',display:"flex",flexDirection:"column",alignItems:"center",background: '#f9fafc' }}>
        <MainHeader style={{ display: 'flex', justifyContent: 'center',maxWidth:"1250px", background: '#f9fafc' }}>
          <div
            style={{
              
              display: 'flex',
              paddingTop: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* {mainCardsHeading().map(card =>{
            return <><TopicCard card={card}></TopicCard></>
              // return <div style={{display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"10px",width:"30%",height:"150px",margin:"20px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>{card}</div>
          })} */}
            {mainCardsHeading().map((card, i) => {
              return (
                <div
                  onClick={() => handleCards(card)}
                  style={{
                    height: '40px',
                    margin: '10px',
                    padding: '10px',
                    color: 'black',
                    borderRadius: '4px',
                    fontWeight: '600',
                    background: 'white',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    borderBottom: card === selectedCard ? "4px solid black" : "4px solid #4723d9",
                    cursor:"pointer"
                  }}
                >
                  {t(card)}
                </div>
              );
            })}
          </div>
        </MainHeader>

        <MainHeader style={{ display: 'flex', justifyContent: 'center',maxWidth:"1250px", background: '#f9fafc' }}>
          <div
            style={{
              
              display: 'flex',
              padding: '30px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
           

            {/* <div style={{ width: '100%' }}> */}
              {mainCardsButton()[mainCard].map((card) => {
                return (
                  <SecondaryTopicCard
                  onClick={handleSecondaryCard}
                    style={{
                      
                      // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                      // borderBottom: '3px solid #4723d9',
                    }}
                  >
                    {t(card)}
                  </SecondaryTopicCard>
                );
              })}
            {/* </div> */}
          </div>
        </MainHeader>
      </div>
    </MainPaper>
  );
};
