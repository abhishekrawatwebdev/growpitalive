import React from 'react'
import "../styles/wallet.css"
import Button from 'react-bootstrap/Button';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import debited from "../logos/debited.png"
import credited from "../logos/credited.png"
import failed from "../logos/failed.png"
import bankDetails from '../BankDetails/Details';

const Transaction = () => {
    
  
  return (
    <div className='transaction px-5' style={{width: "58%"}} >
        <div className="balanceCard p-3">
           <div className='d-flex justify-content-between'>
            <div className="balance">
                 <p style={{color:"white"}} className="pb-0 mb-0">Your Balance</p>
                <p style={{color:"white"}} className="fs-4 fw-bold">${bankDetails.BankBalance}</p>
            </div>
            <div className="walletIcon">
                <AccountBalanceWalletOutlinedIcon style={{color:"white"}} className="fs-2 mt-2"/>
            </div>
            
           </div>
           <div className="addwithdrawbutton d-flex mt-3">
                <Button style={{backgroundColor:"rgb(254, 191, 50)",color:"black",border:"none"}} className="fw-bold px-4">Add money</Button>
                <Button style={{backgroundColor:"rgb(32, 34, 43)",color:"white",border:"none"}} className="fw-bold ms-2 px-4">Withdraw</Button>
            </div>
        </div>
        <div className="transactionDetailsMiddle p-2">
            <div className='d-flex justify-content-between'>
                <p style={{color:"white"}} className="fs-4 fw-bold">Transactions</p>
                <p style={{color:"rgb(239, 170, 86)",cursor:"pointer"}} className="fs-6">View All</p>
            </div>
            <div style={{overflowX:"hidden",height:"45vh"}} className="transactions">
                <ul style={{listStyleType:"none"}} >
                <li className='d-flex  justify-content-between mb-4'>
                    <div className='d-flex'>
                        <div>
                            <img src={debited} alt="" style={{height:"24px",width:"24px"}}/>
                        </div>
                        <div className='ms-3'>
                            <p style={{color:"white"}} className="fs-6 fw-bold my-0 ">Youtube Premium</p>
                            <p style={{color:"white",fontSize:"small"}} className="py-0 my-0">9 Aug 2022 8:30 PM</p>
                        </div>
                    </div>
                    <p style={{color:"white"}} className="ms-4 fw-bold">-$3,000</p>
                </li>
                <li className='d-flex  justify-content-between mb-4'>
                    <div className='d-flex'>
                        <div>
                            <img src={credited} alt="" style={{height:"24px",width:"24px"}}/>
                        </div>
                        <div className='ms-3'>
                            <p style={{color:"white"}} className="fs-6 fw-bold my-0">Facebook Ads</p>
                            <p style={{color:"white",fontSize:"small"}} className="py-0 my-0">9 Aug 2022 9:30 PM</p>
                        </div>
                    </div>
                    <p className="ms-4 fw-bold green">+$3,000</p>
                </li>

                <li className='d-flex  justify-content-between mb-4'>
                    <div className='d-flex'>
                        <div>
                            <img src={failed} alt="" style={{height:"24px",width:"24px"}}/>
                        </div>
                        <div className='ms-3'>
                            <p style={{color:"white"}} className="fs-6 fw-bold my-0">Facebook Ads</p>
                            <p style={{color:"white",fontSize:"small"}} className="py-0 my-0">9 Aug 2022 9:30 PM</p>
                        </div>
                    </div>
                    <p className="ms-4 fw-bold red d-flex flex-column">$3,000 <span className='smallred'>! failed </span></p>
                </li>

                <li className='d-flex  justify-content-between mb-4'>
                    <div className='d-flex'>
                        <div>
                            <img src={credited} alt="" style={{height:"24px",width:"24px"}}/>
                        </div>
                        <div className='ms-3'>
                            <p style={{color:"white"}} className="fs-6 fw-bold my-0">Hemant kant malviya sent money to Bank</p>
                            <p style={{color:"white",fontSize:"small"}} className="py-0 my-0">2 Aug 2022 4:30 PM</p>
                        </div>
                    </div>
                    <p className="ms-4 fw-bold green">+$3,000</p>
                </li>
                <li className='d-flex  justify-content-between mb-4'>
                    <div className='d-flex'>
                        <div>
                            <img src={failed} alt="" style={{height:"24px",width:"24px"}}/>
                        </div>
                        <div className='ms-3'>
                            <p style={{color:"white"}} className="fs-6 fw-bold my-0">Facebook Ads</p>
                            <p style={{color:"white",fontSize:"small"}} className="py-0 my-0">6 Aug 2022 3:30 PM</p>
                        </div>
                    </div>
                    <p className="ms-4 fw-bold red d-flex flex-column">$3,000 <span className='smallred'>! failed </span></p>
                </li>

                
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Transaction