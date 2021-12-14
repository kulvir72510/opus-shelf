import React, { useState } from 'react'
import "../stylesheets/NewClass.css"

function NewClass() {
    const [classData,setClassData] = useState({
        className:"",
        discription:""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setClassData({...classData,[name]:value} );
    }

    const handleSubmit = (event) => {
        
    } 

    return (
        <div className="new-class">
            {/* <h4>className is : {classData.className}</h4>
            <h4>Discription is : {classData.discription}</h4> */}

            <form  method="POST" onSubmit={handleSubmit}>
                 <label for="className">Class Name:</label>
                <input  
                    className="class-name"                        
                    type="text"
                    maxLength="40"
                    id="className"
                    name="className"
                    value={classData.className}
                    placeholder="Class Name"
                    onChange={handleChange}
                    required/><br/><br/>
                
                <label for="discription">Discription :</label>
                <textarea id="discription"
                    name="discription"
                    maxLength="100"
                    value={classData.discription}
                    placeholder="Write your discription here..."
                    onChange={handleChange} /><br/><br/>

                <label for="fileUpload">Upload File :</label>
                <input type="file"
                    id="fileUpload" 
                    name="myFile"
                    onChange={handleChange}
                    required/><br/><br/>
                 <button>ADD</button>
            </form>
        </div>
    )
}

export default NewClass;
