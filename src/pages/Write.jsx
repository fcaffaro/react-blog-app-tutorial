import "../style/write.scss"
import 'react-quill/dist/quill.snow.css'
import ReactQuill from "react-quill";
import {useState} from "react";

const Write = () => {
    const [value, setValue] = useState('');
    return <div className="add">
        <div className='write-content'>
            <input type='text' placeholder="Title"></input>
            <div className="editorContainer">
                <ReactQuill theme="snow" value={value} onChange={setValue}/>
            </div>
        </div>
        <div className='write-menu'>
            <div className="item">
                <h1>Publish</h1>
                <span>
                    <b>Status:</b> Draft
                </span>
                <span>
                    <b>Visibility:</b> Public
                </span>
                <input style={{display:"none"}} type="file" id="file"/>
                <label className="file" htmlFor="file">Upload Image</label>
                <div className="buttons">
                    <button className="button-save-draft">Save as a draft</button>
                    <button className="button-update">Update</button>
                </div>

            </div>
            <div className="item">
                <h2>Category</h2>
                <div className="cat">
                    <input type="radio" id="art" value="art"/>
                    <label htmlFor="art">Art</label>
                </div>
                <div className="cat">
                    <input type="radio" id="science" value="science"/>
                    <label htmlFor="science">Science</label>
                </div>
                <div className="cat">
                    <input type="radio" id="technology" value="technology"/>
                    <label htmlFor="technology">Technology</label>
                </div>
                <div className="cat">
                    <input type="radio" id="cinema" value="cinema"/>
                    <label htmlFor="cinema">Cinema</label>
                </div>
                <div className="cat">
                    <input type="radio" id="design" value="design"/>
                    <label htmlFor="design">Design</label>
                </div>
                <div className="cat">
                    <input type="radio" id="food" value="food"/>
                    <label htmlFor="food">Food</label>
                </div>


            </div>
        </div>

    </div>;
}

export default Write;