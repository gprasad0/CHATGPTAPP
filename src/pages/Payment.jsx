import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MainHeader,
  MainPaper,
  MainTopicCard,
  SecondaryTopicCard,
  SidebarMargin,
} from '../components/commonStyledComponents';
import { PaymentCard } from '../components/PaymentCard';
import { makeOrderRequest } from '../redux/apiActions';
let paymentAmount = [100, 200, 300];
export const Payment = () => {
  const dispatch = useDispatch();
  const orderId = useSelector((state) => state.payment.orderId);
  //   const amount = useSelector((state) => state.payment.amount);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
      console.log("orderId===>",orderId)
    if (orderId !== '' && amount>0) {
      displayRazorPay();
    }
  }, [orderId]);

  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
        // Anything in here is fired on component unmount.
    setAmount(0);

    }
}, [])

  useEffect(() => {
      console.log("amopunt===>",amount)
    if (amount > 0) {
      console.log("amopunt===>",amount, amount > 0)

      dispatch(makeOrderRequest(amount));
    }
  }, [amount]);

  const makePaymentRequest = (amount) => {
      console.log("amount==>",amount)
    setAmount(amount);
  };

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
        <MainHeader>
          <div style={{ display: 'flex', marginTop: '100px' }}>
            {paymentAmount.map((data) => (
              <PaymentCard
                amount={data}
                makePaymentRequest={makePaymentRequest}
              />
            ))}
          </div>
        </MainHeader>
      </div>
    </MainPaper>
  );
};
