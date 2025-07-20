import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const Updatenotes = () => {
    const [file, setfile] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams()
    const Update = {
        title,
        description,
        file: file

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`${import.meta.env.VITE_URL}notes/Update/${id}`, {
            title, description, file
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
            }

        }).then((res) => {
            console.log(res);
            toast.success(res.data.message || "Notes Updated Sucessfully")
        }).catch((err) => {
            console.log(err);
            toast.error(err || "Something went wrong")
        })
    };

    return (
        <div style={{ height: "100vh", paddingTop: "20px" }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
                <h2>Update Form</h2>
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
                <div style={{ marginBottom: "1rem" }}>
                    <label htmlFor="file">Choose File:  </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={(e) => setfile(e.target.files[0])}
                        style={{
                            marginTop: "0.5rem",
                            marginLeft: "10px"
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
    )
}

export default Updatenotes
