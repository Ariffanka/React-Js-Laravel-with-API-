import React, { useState, useEffect } from 'react';
import NaviBar from '../components/NaviBar';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function UpdateD() {
  const { id } = useParams();
  const [nama, setNama] = useState('');
  const [desk, setDesk] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/test/${id}`);
      const jsonData = await response.json();
      setNama(jsonData.nama);
      setDesk(jsonData.desk);
      setUrl(jsonData.url);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function updateData() {
    try {
      const updatedData = { nama, desk, url };
      const response = await fetch(`http://127.0.0.1:8000/api/test/update/${id}`, {
        method: 'PUT', // atau 'PATCH' tergantung dari API Anda
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Data updated successfully');
        // Redirect to another page or perform any other action
      } else {
        console.error('Error updating data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  return (
    <div>
      <NaviBar />
      <div className="container mt-4">
        <h1 className="text-center">Update Character Data</h1>
        <Form>
          <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
          <Form.Control type="text" value={desk} onChange={(e) => setDesk(e.target.value)} />
          <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          <Button variant="primary" onClick={updateData}>
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateD;
