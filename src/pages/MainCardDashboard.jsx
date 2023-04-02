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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeOrderRequest, verfiyPaymentAction } from '../redux/apiActions';
import { createSubscription } from 'react-redux/es/utils/Subscription';

export const MainCardDashboard = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.payment.orderId);

  const amount = useSelector((state) => state.payment.amount);

  const [mainCard, setMainCard] = useState('socialMedia');
  const [selectedCard, setSelectedCard] = useState('socialMedia');
  const handleCards = (value) => {
    setMainCard(value);
    setSelectedCard(value);
  };

  useEffect(() => {
    if (orderId !== '') {
      // displayRazorPay()
    }
  }, [orderId]);

  const displayRazorPay = async () => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
    // 	t.json()
    // )

    // console.log(data)

    var options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'STORYSCAPE', //your business name
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        console.log('response====>', response);
        dispatch(verfiyPaymentAction(response, orderId));
      },
      // "callback_url": "http://localhost:3000/api/paymentData",
      prefill: {
        name: 'Gaurav Kumar', //your customer's name
        email: 'gaurav.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    console.log('options=====>', options);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    // var rzp1 = new Razorpay(options);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSecondaryCard = (card) => {
    // navigate("/")

    navigate({
      pathname: '/assistant',
      search: `?${mainCard}=${card}`,
    });
  };

  const makePaymentRequest = () => {
    dispatch(makeOrderRequest());
  };

  return (
    <MainPaper sx={{ background: '#f9fafc' }}>
      <SidebarMargin />
      <div
        style={{
          width: 'calc(100vw - 65px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#f9fafc',
        }}
      >
        <MainHeader
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1250px',
            background: '#f9fafc',
          }}
        >
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
                    borderBottom:
                      card === selectedCard
                        ? '4px solid black'
                        : '4px solid #4723d9',
                    cursor: 'pointer',
                  }}
                >
                  {t(card)}
                </div>
              );
            })}
          </div>
        </MainHeader>

        <MainHeader
          style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1250px',
            background: '#f9fafc',
          }}
        >
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
                  onClick={() => handleSecondaryCard(card)}
                  style={
                    {
                      // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                      // borderBottom: '3px solid #4723d9',
                    }
                  }
                >
                  {t(card)}
                </SecondaryTopicCard>
              );
            })}
            {/* </div> */}
          </div>
          {/* <div>
            <button onClick={makePaymentRequest}>razorpay</button>
          </div> */}
        </MainHeader>
      </div>
    </MainPaper>
  );
};
