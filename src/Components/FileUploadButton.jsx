import React, { useState, useRef } from "react";
import Img from "../images/img.png";

function FileUploadButton() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    console.log("Submitting");
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      fetch('http://127.0.0.1:5000/classify', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'image/*'
        },
      })
        .then((response) => response.json())
        .then((data) => {

          console.log(data);
          const fruitName = data.fruitName;
          console.log(fruitName);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>

      <button
        className="uploadButton"
        onClick={handleClick}
      >
        {selectedImage ? (
          <>
            <div className="preview">
              <h1>Selected Image</h1>

              <img
                src={selectedImage}
                className="previewImage"
                alt="Selected"
                style={{}}
              />
            </div>
          </>
        ) : (
          <>
            <img src={Img} className="imageIcons" alt="upload Image" />
            <h2 className="finalUpload">Let’s find out!</h2>
            <p className="usageInfo">Click here to add an image</p>
          </>
        )}
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      {/* {selectedImage && (
     <button type="submit" className="btn trynow" onClick={handleSubmit}>Identify !</button>
      )} */}
      <button type="submit" className="btn trynow" onClick={handleSubmit}>Identify !</button>
    </>
  );
}

export default FileUploadButton;
