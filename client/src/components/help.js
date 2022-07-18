import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';



import styled from 'styled-components';
const Cont = styled.div`
position: absolute;
top: 4rem;
width: 90%;
height: 80%;
display:flex;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
margin-left: 5%;


`;
const Lbox = styled.div`
    width: 30%;
    height: 80%;
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

//useContext  context  in react

export default function Allblog() {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get('/allblog').then((response) => {
            setData(response.data)
        })
    },[])


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
    return (
        <>
        {console.log(data)}
        {data.map((innerData)=>{
            return <p>{JSON.stringify(innerData)}</p>
        })}
           
           <Cont>
                <Lbox />
                <Rbox>
                    <div style={{ height: '10%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', marginBottom: '0.5rem' }}>to</div>
                    <div style={{ height: '70%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', }}>desc</div>
                    <div style={{ height: '10%', boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', marginTop: '0.5rem' }}>from</div>
                </Rbox>
                {/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */}
            </Cont>
        </>
    )
}
