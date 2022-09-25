import React from 'react'
import "../styles/wallet.css"
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const AddMoney = (props) => {
  return (
    <div className='addMoney px-3 py-3 me-3' style={{height:"100%"}}>
        <p className='fw-bold addMoneyPara fs-5'>Add Money</p>
        <div className="amountInput p-2" style={{border:"2px solid #232323",borderRadius:"5px"}}>
             <Form.Label htmlFor="inputAmount" style={{color:"white"}}>Enter Amount to add</Form.Label>
      <Form.Control type="number" id="inputAmount" style={{background:"transparent", border:"none",color:"white",outline:"none"}} className="fs-5 fw-bold"/>
        </div>
        <div className="moneySelections mt-2">
            <ul className='moneyList d-flex px-0 flex-wrap '>
                <li className="moneyOptions">
                    <span>&nbsp;</span>
                    <p className='fw-bold fs-9 px-2 py-1'>$5,000</p>
                </li>
                <li className="moneyOptions ms-2">
                    <span>&nbsp;</span>
                    <p className='fw-bold fs-9 px-2 py-1'>$10,000</p>
                </li>
                <li className="moneyOptions ms-2">
                    <span>&nbsp;</span>
                    <span className='popular'>Popular</span>
                    <p className='fw-bold fs-9 px-2 py-1'>$50,000</p>
                </li>
                <li className="moneyOptions ms-2">
                    <span>&nbsp;</span>
                    <p className='fw-bold fs-9 px-2 py-1'>$100,000</p>
                </li>
            </ul>
        </div>
        <div className="sendMoney d-flex mb-4 ">
            <div className="bankIcon px-2 mb-0 pb-0" style={{alignItems: "center", display: "flex"}}>
                <AccountBalanceOutlinedIcon style={{color: "rgb(239, 170, 86)"}} className="fs-1" />
            </div>
            <div className='sendMoneyPara py-2 px-2'>
                <p className='fw-bold  my-0' style={{color: "white"}}>Send Money To Bank</p>
                <p style={{color: "rgb(169, 173, 194)"}} className="my-0">RTGS/NEFT/IMPS?</p>
            </div>
            <div className='d-flex align-items-end'>
                <p style={{color: "rgb(254, 191, 50)", cursor:"pointer"}} className="pb-1 mb-1 px-3">Know More</p>
            </div>
        </div>

        <Button style={{width:"100%",color:"black",backgroundColor:"rgb(7,229,125)", border:"none"}} onClick={props.openModal}>Continue</Button>
    </div>
  )
}

export default AddMoney