import React, { useState, useRef } from "react";
import Img from "../images/img.png";

function FileUploadButton() {
  // console.log(fruitsInfo)
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    // console.log(file);
    if (file) {
      const reader = new FileReader();
      console.log("reader.result : ", reader.result);
      reader.onload = () => {
        setSelectedImage(file);
        setShowImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      fetch("http://localhost:5000/classify", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <button className="uploadButton" onClick={handleClick}>
          {selectedImage ? (
            <>
              <div className="preview">
                <h1>Selected Image</h1>

                <img src={showImage} className="previewImage" alt="Selected" />
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
        <button type="submit" className="btn trynow" onClick={handleSubmit}>
          Identify !
        </button>
      </form>
    </div>
  );
}

export default FileUploadButton;
