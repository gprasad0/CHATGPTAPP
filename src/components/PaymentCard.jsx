import { PaymentCardDiv } from "./commonStyledComponents"

export const PaymentCard = ({amount,makePaymentRequest}) =>{


    const makePaymentRequestToRazorPay = () =>{
        makePaymentRequest(amount)
    }

    return(
        <PaymentCardDiv style={{borderRadius:"10px"}} onClick={makePaymentRequestToRazorPay}>
            <h1 style={{margin:"60px",color:'white'}}>{amount} API</h1>
            <h1  style={{margin:"60px",color:'white'}}>{amount} Rs</h1>
        </PaymentCardDiv>
    )
}