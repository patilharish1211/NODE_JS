import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const Create = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const Update = {
        title,
        description,
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_URL}notes/create`, {
            title, description, 
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res);
            toast.success(res.data.message || "Notes created Sucessfully")
        }).catch((err) => {
            console.log(err);
            toast.error(err || "Something went wrong")
        })
    };

    return (
        <div style={{ height: "100vh", paddingTop: "20px" }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
                <h2>Create Notes</h2>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            marginTop: "0.5rem",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            marginTop: "0.5rem",
                        }}
                    />
                </div>
                
                <button
                    type="submit"

                    className='formbtn'
                >
                    Submit
                </button>
            </form>
        </div>

                   ) }
export default Create
