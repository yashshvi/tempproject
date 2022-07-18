import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import './mycss/about.css'
const Cont = styled.div`
position: absolute;
top: 4rem;
width: 100%;
height: 80%;
display:flex;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
padding: 1rem 1rem;
`;
const Rbox = styled.div`
 
`;

const About = () => {
    const history = useHistory();
    const [useData, setUserData] = useState({});
    // initially no data in present with {} in useState  then calling function setUserData and data will be stored in useData
    const callMatchingPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if (!res.status === 2000) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (e) {
            console.log(e);
            history.push("/login");
            window.location.reload()
        }
    }
    console.log("**********" + useData.name);


    useEffect(() => {
        callMatchingPage();

    }, [])
    // By using this Hook, you tell React that your component needs to do something after render.

    return (
        <Cont>
            {/* let myname={useData.name};
                alert(myname); */}
            {/* <h1>welcome back</h1> */}

            <Rbox className="aboutcon">
               <div>
                <h1 className="name">{useData.name}</h1>
                    <h2 className="h2">Hoobies</h2>
                    <h3 className="h3">{useData.Hoobies}</h3>
                    <h2 className="h2">Favrouit Color</h2>
                    <h3 className="h3">{useData.color}</h3>
                    <h2 className="h2">About</h2>
                    <p className="h3">{useData.about}</p>
                </div>
                <div> 
                    <img src="https://joeschmoe.io/api/v1/${useData.name}" className="aboutimg" ></img>
                </div>
              
            </Rbox>
        </Cont>
    )
}

export default About