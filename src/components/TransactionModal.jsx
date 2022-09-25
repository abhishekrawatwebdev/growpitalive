
import React from 'react'
import "../styles/wallet.css"
import credited from "../logos/credited.png"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Button from 'react-bootstrap/Button';
import bankDetails from '../BankDetails/Details';


const TransactionModal = (props) => {
   

  return (
    <>
    <div className='transactionModal'>
        
        <div className="modalMiddle px-4 py-2" style={{backgroundColor:"#1e1e1e",borderRadius:"10px",width:"35%",position:'relative'}}>
            <CloseOutlinedIcon style={{position:"absolute",right:"1%",color:"white",cursor:"pointer"}} onClick={props.closeModal} />
            <div className="modalTop d-flex justify-content-between">
                <div className="modalTopData" style={{color:"white"}}>
                    <p className=''>Money added to wallet</p>
                    <p>from bank account</p>
                    <p className='fw-bold fs-4'>$15,000</p>
                    <p>12 Aug 2022, 03:55pm</p>
                </div>
                <div className="topIcon me-5 mt-2">
                    <img src={credited} alt="" style={{width:"24px",height:"24px"}} />
                </div>
            </div>
            <div className="modalTransactionStatus d-flex px-3 py-1 mt-3">
                <div className="statusIcon">
                    <CheckCircleOutlineOutlinedIcon style={{color:"rgb(7, 229, 125)"}}/>
                </div>
                <div className="statusDetail ms-2">
                    <p className='fw-bold fs-6 mb-0'>Transaction Complete!</p>
                    <p>Tap to View this transaction</p>
                </div>
            </div>
            <div className="transactionDetails p-2 mt-2 ">
                <div className="transactionFrom d-flex justify-content-between">
                    <div>
                        <p style={{color:"rgb(254, 191, 50)"}}>From</p>
                        <p className="moneyFrom fw-bold fs-5">
                          {bankDetails.senderDetails.sender}
                        </p>
                        <p>{bankDetails.senderDetails.bank}, IFSC {bankDetails.senderDetails.IFSC}</p>
                        <p>{bankDetails.senderDetails.accountno}</p>
                        <p>{bankDetails.senderDetails.transactiondate}</p>
                    </div>
                    <div className='fromLogo me-3 mt-2'>
                        <p className='fw-bolder p-2' style={{backgroundColor:"black",borderRadius:"50%"}}>SM</p>
                    </div>
                </div>
                <br />
                <div className="transactionTo d-flex justify-content-between">
                    <div>
                        <p style={{color:"rgb(254, 191, 50)"}}>To</p>
                        <p className="moneyTo fw-bold fs-5">{bankDetails.recieverDetails.reciever}</p>
                        <p>{bankDetails.recieverDetails.wallet}</p>
                        <p>Ref No. {bankDetails.recieverDetails.referenceno}</p>
                        <p>{bankDetails.recieverDetails.transactiondate}</p>
                    </div>
                    <div className="toLogo me-3 mt-2">
                        <AccountBalanceWalletOutlinedIcon style={{color:"rgb(7, 229, 125)"}}/>
                    </div>
                </div>
                <br />
                <div className="paymentMethod">
                    <p>Payment Method: {bankDetails.paymentmethod}</p>
                    <div className='d-flex'>
                        <p>Transaction id:{bankDetails.transactionId}</p>
                        <ContentCopyOutlinedIcon style={{color:"rgb(254, 191, 50)",cursor:"pointer"}} className="fs-6 ms-2"/>
                    </div>
                    
                </div>

                
            </div>
            <div className="helpShare d-flex jusify-content-center px-5 py-2">
                <Button className='me-2' style={{width:"50%",color:"black",backgroundColor:"rgb(254, 191, 50)", border:"none",borderRadius:"10px"}}>Help</Button>
                <Button style={{width:"50%",color:"white",backgroundColor:"black", border:"none",borderRadius:"10px"}}>Share</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default TransactionModal