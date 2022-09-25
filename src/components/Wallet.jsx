import React from 'react'
import "../styles/wallet.css";
import AddMoney from './AddMoney';
import Sidebar from './Sidebar';
import Transaction from './Transaction';
import TransactionModal from './TransactionModal';
import {useState,} from 'react';

const Wallet = (props) => {
    const [isopen, setIsopen] =  useState(true);
    

    const closeModal =()=>{
        setIsopen(false);
    }
    const openModal = ()=>{
        setIsopen(true);
    }

    return (
        
        <>
            <div className="walletSection" style={{position:"relative"}}>
                <div className="d-flex px-0 mx-0 walletSection">
                <Sidebar/>
                <Transaction data={props} />
                <AddMoney openModal={openModal}/>
                </div>
            </div>
           
            {isopen 
            ? <TransactionModal closeModal={closeModal}/>
            : null}
            
        </>
    )
}

export default Wallet;