import React from 'react'
import './navbar.css'

export default function Navbar() {
/*
    const sendData = () => {
        fetch('https://node-test-321906.de.r.appspot.com/', {
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
*/
    const sendData = () =>{
        console.log("sendData")
        fetch('/test',{method:"get"})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    
    return (
        <div className="navbar-container" >
            <div className="navbar" >
                <div 
                style={{ width: 360 }} 
                onClick={()=>{
                    sendData()
                }}
                > QQQpost </div>
                <div
                    style={{ width: 215 }}
                    //onClick={() => { sendData() }}
                >
                    search
                </div>
                <div className="button-container" >
                    <div className="button-case" >
                        <div > a </div>
                        <div > b </div>
                        <div> c </div>
                        <div > d </div>
                        <div > e </div>
                    </div>
                </div>
            </div>
        </div>
    )
}