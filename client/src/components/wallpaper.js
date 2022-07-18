import React, { useEffect, useState } from 'react'
import "./mycss/wallpaper.css"
export default function Wallpaper() {
    //initally user in empty arrat then we will call function Setuser and put json array and after that user has that array
    const [user, Setuser] = useState([]);
    console.log(user);
    //calling this function
    const getUser = async () => {
        // const response = await fetch('https://api.gettyimages.com/v3/');
       const response=await fetch(' https://raw.githubusercontent.com/yashshvi/Loveapi/main/json%20file.json');
    //    console.log(response);
    //     const data=await response.json();
    //     console.log(data);
        Setuser(await response.json());
    }
    // when ever a page relode or change in page useEffort will call
    useEffect(() => {
        getUser();
    }, []);
    //means the first time page will loade then it will call once useEffort function
    // [] is important in 16 line because getuser function eill call it elf infinite time to execute it for once only use []
   let p=0;
    return (
        <>
            {/* <h1>i am wallpaper</h1> */}
            <div className='container mt-5'>
               
                           
                 {
                    user.map((currele) => {
                        return (
                            <div className='myimagebox' key={p++}>
                                <div className='image'>
                                    <img src={currele.url} class='rounded' ></img>
                                </div>
                            </div>
                          
                        )
                    })
                }  
                    {/* <div className='myimagebox'>
                                <div className='image'>
                                    <img src='' class='rounded' width="155px" height="155px"></img>
                                </div>
                            </div> */}

            </div>
        </>
    )
}
