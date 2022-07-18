import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';


import styled from 'styled-components';
const Mymiddle=styled.div`
height: calc(100vh - 10vh);
    box-sizing: border-box;
  
    top: 20vh;   
`;
const Cont = styled.div`
// position: absolute;
top: 4rem;
width: 90%;
height: 80%;
display:flex;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
margin-left: 5%;
margin-bottom:12px;

`;
const Lbox = styled.div`
width: 12rem;
height: 12rem;
    position: relative;
    top: 5%;
    background-image: url('/images/poster1.jpg');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    margin: 1rem 1rem;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;
const Rbox = styled.div`
// box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    width: 70%;
    height: 100%;
padding:12px 12px;
`;
const divstyle={
    height:"20rem"
}
//useContext  context  in react

export default function Allblog() {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get('/allblog').then((response) => {
            setData(response.data)
        })
    }, [])

    const history = useHistory();
    const [useData, setUserData] = useState({});
    const callfun = async () => {
        try {
            const res = await fetch('')

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        callfun();
    }, [])
    // function makedivoncall(){
    //     console.log("function is called");
    //     const newdiv=document.createElement('div');
    //     var mybody = document.getElementsByTagName("BODY")[0];
    //     mybody.appendChild(newdiv);
    //     newdiv.innerHTML=` <Cont>
    //     <Lbox />
    //     <Rbox>
    //         <div style={{ height: '10%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    //          marginBottom: '0.5rem' }}>{innerData.tosomeone}</div>
    //         <div style={{ height: '70%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', }}>
    //             {innerData.description}</div>
    //         <div style={{ height: '10%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    //          marginTop: '0.5rem' }}>{innerData.from}</div>
    //     </Rbox>
    // </Cont>`;


    // } 
    return (
      
            <Mymiddle style={{ marginTop:'4rem'}} >
                {data.map((innerData) => {
                    return (<div style={divstyle} className="read">
                        <Cont>
                            {
                                console.log(innerData)
                            }
                            <Lbox />
                            <Rbox>
                                <div style={{
                                    height: '10%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                                    marginBottom: '0.5rem'
                                }}>{innerData.tosomeone}</div>
                                <div style={{ height: '70%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', }}>
                                    {innerData.description}</div>
                                <div style={{
                                    height: '10%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                                    marginTop: '0.5rem'
                                }}>{innerData.from}</div>
                            </Rbox>
                        </Cont>
                    </div>
                    )
                })}
            </Mymiddle>
       
    )
}
