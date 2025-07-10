import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Books() {

  const [Bookdata,setBookdata]=useState([])
  const [AddData, setAddData] = useState({ _id: '', title: '', image: '', price: '',description:'',author:'' });

  const [AddShow, setAddShow] = useState(false);
  const [editData, setEditData] = useState({  title: '', image: '', author:'',price:'' });
  const [show, setShow] = useState(false);


  // get data
  const getBooksData=()=>{
    axios.get("http://localhost:8000/bookRoutes/getbooks")
    .then((res)=>{
      setBookdata(res.data)
    //   console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getBooksData()
  },[])

  const AddClose = () => setAddShow(false);
  const handleClose = () => setShow(false);

  const AddDataFC = () => {
    setAddShow(true);
  };


  // Upadate Books
  const handleShow = (item) => {
    setEditData(item);
    setShow(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = (_id) => {
    axios
      .patch(`http://localhost:8000/bookRoutes/book/${editData._id}`, {
        title: editData.title,
        author: editData.author,
        image: editData.image,
        price: editData.price,
      })
      .then((res) => {
        console.log(res.data);
        alert('Data updated successfully');
        getBooksData();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to update data');
      });
  };


  // Add Books

  const handleAddData = () => {
    axios
      .post('http://localhost:8000/bookRoutes/addbooks', {
        
        title: AddData.title,
        image: AddData.image,
        price: AddData.price,
        description: AddData.description,
        author: AddData.author,
      })
      .then((res) => {
        console.log(res.data);
        alert('Data added successfully');
        setAddData({   title: '', image: '',price: '',author:'',description:'' });
        getBooksData();
        AddClose();
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to add data');
      });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const BookDelete=(_id)=>{
    
    axios.delete(`http://localhost:8000/bookRoutes/book/${_id}`)
    .then((res)=>{
      alert("product delete Successfully")

      setBookdata(Bookdata.filter((item) => item._id !== _id));
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <>
      <div className="container mt-1  text-center text-light ">
      <h3>
        All Book's List
      </h3>

      <div className='d-flex justify-content-around mb-4'>
          <h1 className='text-center text-white'>Dashboard</h1>
          <button className='text-center btn-dark btn' onClick={() => AddDataFC()}>
            Add New Book +
          </button>

          <Modal show={AddShow} onHide={AddClose} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
            

              <input
                type='text'
                name='title'
                value={AddData.title}
                onChange={handleAddChange}
                placeholder='Title'
                className='w-100 mb-2'
              />
              <input
                type='text'
                name='author'
                value={AddData.author}
                onChange={handleAddChange}
                placeholder='author'
                className='w-100 mb-2'
              />
              <input
                type='text'
                name='description'
                value={AddData.description}
                onChange={handleAddChange}
                placeholder='description'
                className='w-100 mb-2'
              />
              <input
                type='text'
                name='image'
                value={AddData.image}
                onChange={handleAddChange}
                placeholder='Image URL'
                className='w-100 mb-2'
              /> 

              <input
                type='text'
                name='price'
                value={AddData.price}
                onChange={handleAddChange}
                placeholder='Price'
                className='w-100 mb-2'
              />

            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={AddClose}>
                Close
              </Button>
              <Button variant='primary' onClick={handleAddData}>
                ADD DATA
              </Button>
            </Modal.Footer>
          </Modal>


        </div>

        <Row className='m-auto d-flex justify-content-center'>
        {
          Bookdata.map((el)=>(
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              key={el._id}
              className='mb-4 me-4  text-white  ps-0 pe-0'
              style={{ backgroundColor: '#15162C' }}
            >
              <img src={el.image }
                alt={el.title}
                height={320}
                width={250} 
              />
              <br />
              <h5>{el.title}</h5>
              <h6>Author:- {el.author}</h6>
              
              <p>Price :- ₹{el.price}</p>
              
             <div className='mb-3'>
             <Button  variant='outline-primary' onClick={() => handleShow(el)}>
             Edit
           </Button>&nbsp;&nbsp;&nbsp;&nbsp;
           <Button  variant='outline-danger' onClick={()=>BookDelete(el._id)}>
             Delete
           </Button>
             </div>
              
            </Col>
          ))}

          </Row>

             {/* Modal for editing */}
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Update Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type='text'
              name='title'
              value={editData.title}
              onChange={handleChange}
              placeholder='Title'
              className='w-100 mb-2'
            />
            <input
              type='text'
              name='author'
              value={editData.author}
              onChange={handleChange}
              placeholder='author'
              className='w-100 mb-2'
            />
            <input
              type='text'
              name='image'
              value={editData.image}
              onChange={handleChange}
              placeholder='Image URL '
              className='w-100 mb-2'
            /> 
            <input 
              type='text'
              name='price'
              value={editData.price}
              onChange={handleChange}
              placeholder='price'
              className='w-100'
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </>
  )
}

export default Books