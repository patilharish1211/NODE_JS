import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

function Customer() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({ id: '', title: '', image: '' });
  const [AddData, setAddData] = useState({ id: '', title: '', image: '' });
  const [show, setShow] = useState(false);
  const [AddShow, setAddShow] = useState(false);
  const [hoveredItemId, setHoveredItemId] = useState(null); 

  const getData = () => {
    axios
      .get('http://localhost:8000/data')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClose = () => setShow(false);
  const AddClose = () => setAddShow(false);

  const AddDataFC = () => {
    setAddShow(true);
  };

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

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddData = () => {
    axios
      .post('http://localhost:8000/addData', {
        id: AddData.id,
        title: AddData.title,
        image: AddData.image,
      })
      .then((res) => {
        console.log(res.data);
        alert('Data added successfully');
        getData();
        setAddData({ id: '', title: '', image: '' });
        AddClose();
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to add data');
      });
  };

  const handleSaveChanges = () => {
    axios
      .patch(`http://localhost:8000/patchdata/${editData.id}`, {
        title: editData.title,
        image: editData.image,
      })
      .then((res) => {
        console.log(res.data);
        alert('Data updated successfully');
        getData();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to update data');
      });
  };

  const Delete_btn = (id) => {
    axios
      .delete(`http://localhost:8000/deletedata/${id}`)
      .then((res) => {
        console.log(res.data);
        alert('Data deleted successfully');
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert('Failed to delete data');
      });
  };

  return (
    <>
      <Container fluid>
        <div className='d-flex justify-content-around'>
          <h1 className='text-center text-white'>Dashboard</h1>
          <button className='text-center btn-dark btn' onClick={() => AddDataFC()}>
            Add New Customer +
          </button>

          <Modal show={AddShow} onHide={AddClose} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Add Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type='text'
                name='id'
                value={AddData.id}
                onChange={handleAddChange}
                placeholder='ID'
                className='w-100 mb-2'
              />
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
                name='image'
                value={AddData.image}
                onChange={handleAddChange}
                placeholder='Image URL'
                className='w-100 mb-2'
              /> 
              <input
                type='text'
                name='image'
                value={AddData.image_2}
                onChange={handleAddChange}
                placeholder='Car Image URL'
                className='w-100'
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
        <br />
        <br />
        <br />
        <Row className='m-auto d-flex justify-content-center'>
          {data.map((el, index) => (
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              key={el.id || index}
              className='mb-4 me-4  text-white card ps-0 pe-0'
              style={{ backgroundColor: '#15162C' }}
              onMouseEnter={() => setHoveredItemId(el.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <img
                src={hoveredItemId === el.id ? el.image_2 : el.image }
                alt={el.title}
                height={250}
                width={250} 
              />
              <br />
              <h5>{el.title}</h5>
              <br />
              <p>Car: {el.car}</p>
              <br />
              <Button variant='outline-primary' onClick={() => handleShow(el)}>
                Edit
              </Button>
              <Button variant='outline-danger' onClick={() => Delete_btn(el.id)}>
                Delete
              </Button>
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
              name='image'
              value={editData.image}
              onChange={handleChange}
              placeholder='Image URL'
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
      </Container>
    </>
  );
}

export default Customer;
