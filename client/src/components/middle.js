import React from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import workapi from '../../public/API/workapi';
import './mycss/middle.css'
export default function middle() {
    const Cont=styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:12px;
   `;
    const Box=styled.div`
    display: flex;
    
    `;
      //wrapping
     const Mybox=()=>{
           ////   
           return(
   <>
  <Card  >
    <Card.Img variant="top" className='cardimg' src="./images/blog2.jpg" />
    <Card.Body>
      <Card.Text>
      You’re the closest to heaven, that I’ll ever be
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
      "I will never stop trying. Because when you find the one... you never give up.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" className='cardimg' src="./images/blobnew1.png" />
  </Card>
</>
           )
     }
  return (
<Cont className='mycont'>

<Mybox/>
<Box className='boxstyle' style={{ marginBottom:"3rem"}}>
<Card border="info" style={{ width: '18rem'  ,margin: '1rem 1rem'}}>
<Card.Header>F. Scott Fitzgerald</Card.Header>
<Card.Body>
  {/* <Card.Title>F. Scott Fitzgerald</Card.Title> */}
  <Card.Text>
  You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement
  </Card.Text>
</Card.Body>
</Card>
<Card border="info" style={{ width: '18rem',margin: '1rem 1rem' }}>
<Card.Header>Angelita Lim</Card.Header>
<Card.Body>
  {/* <Card.Title>Angelita Lim</Card.Title> */}
  <Card.Text>
  I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more
  </Card.Text>
</Card.Body>
</Card>
</Box>
</Cont>
  )
  //
}

