import { Form,Button } from "react-bootstrap"
import { useState } from 'react'


function FormI() {

  const [nama,setNama] = useState("")
  const [desk,setDesk] = useState("")
  const [url,setUrl] = useState("")

  let isSubmitting = false; // Tambahkan state untuk melacak pengiriman data

async function subForm(e) {
  e.preventDefault();

  if (!isSubmitting) {
    isSubmitting = true;

    let item = { nama, desk, url };
    let result= await fetch("http://127.0.0.1:8000/api/test/store",{
      method:'POST',
      body: JSON.stringify(item),
      headers:{
        "content-type":"application/json",
        "Accept":"application/json"
      }
    })

    result= await result.json()
    // console.log(result)
    isSubmitting = false;
    window.location.href = '/ ';
  } else {
    alert("Data is already being submitted.");
  }
}


  return (
    <div className="form-container">
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
      <Form.Label>Desc</Form.Label>
      <Form.Control
        type="text"
        value={desk}
        onChange={(e) => setDesk(e.target.value)}
      />
      <Form.Label>Image</Form.Label>
      <Form.Control
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      /> 
      <div className="text-center mt-4">
      <Button variant="primary" onClick={subForm}>Submit</Button>
      </div>
    </div>
  );
}

export default FormI;
