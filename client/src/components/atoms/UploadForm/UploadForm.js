import React, { useState } from 'react'

import { useDispatch } from 'react-redux';

import { uploadItem } from '../../../redux/items/actions';

export default function UploadForm() {

    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");

        if (url === '' || name === '' || type === '' || category === '') {
            setError('Please fill all fields');
        }
        else {
            setError('');
            console.log("uploading");
            dispatch(uploadItem({ url, name, type, category }));
        }


    }
    return (
        <div className="container p-5">
            <h2 className="text-center">Upload Gif or Meme</h2>
            {/* {currentUser && (
            <div variant="success">{currentUser.email} is logged in</div>
        )} */}
            {error && <p className="text-center danger">{error}</p>}
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoFocus
                            />
                            <label htmlFor="type-form">Type</label>
                            <select onClick={(e) => setType(e.target.value)} class="form-control" id="type-form">
                                <option onClick={(e) => setType(e.target.value)} value="meme">Meme</option>
                                <option onClick={(e) => setType(e.target.value)} value="gif">Gif</option>
                            </select>
                            <label htmlFor="type-form">Category</label>
                            <select onChange={(e) => setCategory(e.target.value)} class="form-control" id="type-form">
                                <option value="alfa">Alfa</option>
                                <option value="beta">Beta</option>
                            </select>
                            <label htmlFor="inputFile">Img</label>
                            <input
                                type="url"
                                className="form-control"
                                id="inputFile"
                                placeholder="Img URL"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <button
                            // disabled={loading}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Upload
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}


