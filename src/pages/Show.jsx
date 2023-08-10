import React, { useState, useEffect } from 'react';
import NaviBar from '../components/NaviBar';
import { json } from 'react-router-dom';
import CardS from '../components/CardS';
import { Container, Row, Col } from 'react-bootstrap';

function ShowD() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/test/');
      const jsonData = await response.json();
      setData(jsonData.data);
    //   console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
    <NaviBar />
    <Container>
        <h1 className='text-center mt-4'>Ini merupakan karakter dari anime Fire Force</h1>
      <Row xs={1} md={3} className="g-4 mt-4">
        {data.map((item) => (
          <Col key={item.id}>
            <CardS
              id={item.id}
              nama={item.nama}
              desk={item.desk}
              url={item.url}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default ShowD;
