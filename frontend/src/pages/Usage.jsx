import React, { useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import Heading from "../Components/Heading";
import StepsButton from "../Components/StepsButton";
import Upload from "../images/upload.png";
import Process from "../images/processing.png";
import Search from "../images/search.png";
import Img from "../images/img.png";
import { LeftLeaves, RightLeaves } from "../Components/Leaves";
import FileUploadButton from "../Components/FileUploadButton";
import Results from "./Results";

const Usage = () => {
  // console.log(fruitsInfo)
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [predictFruit, setPredictFruit] = useState(false);
  const [fruit, setFruit] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
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
      console.log("formData : ", formData);

      fetch("http://localhost:5000/classify", { 
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFruit(data.fruitname);
          setPredictFruit(true);
          navigate("/results", { state: { fruitname: data.fruitname } });
        })
        .catch((error) => {
          console.error(error);
          console.log("not working");
        });
    }
  };

  // return (
  //   <>
  //     {predictFruit ? (
  //       <>
  //         {console.log("Usage fruit  : ", fruit)}
  //         <Results fruitname={fruit} />
  //       </>
  //     ) : (
  //       <div className="content">
  //         <LeftLeaves count={3} />
  //         <div className="usageContainer">
  //           <Heading title="How to use?" />
  //           <div className="usageBtnContainer">
  //             <StepsButton
  //               icon={Upload}
  //               title="Upload"
  //               info="Upload any fruit or vegetable image from camera, drive or from the device.
  //             (Make sure you select relevant image)"
  //             />
  //             <StepsButton
  //               icon={Process}
  //               title="Processing"
  //               info="The image is passed through trained machine learning model(from kaggle dataset), where it identifies the image."
  //             />
  //             <StepsButton
  //               icon={Search}
  //               title="Get Results"
  //               info="Result of ml model displays name including where it if found, nutritional benefits and current price in market."
  //             />
  //           </div>

  //           <div className="lineDivider"></div>

  //           {/* File upload component */}
  //           <div>
  //             <form className="formDiv" onSubmit={handleSubmit}>
  //               <input
  //                 type="file"
  //                 accept="image/*"
  //                 onChange={handleFileSelect}
  //                 style={{ display: "none" }}
  //                 ref={fileInputRef}
  //               />
  //               <button className="uploadButton" onClick={handleClick}>
  //                 {selectedImage ? (
  //                   <>
  //                     <div className="preview">
  //                       <h1>Selected Image</h1>

  //                       <img
  //                         src={showImage}
  //                         className="previewImage"
  //                         alt="Selected"
  //                       />
  //                     </div>
  //                   </>
  //                 ) : (
  //                   <>
  //                     <img
  //                       src={Img}
  //                       className="imageIcons"
  //                       alt="upload Image"
  //                     />
  //                     <h2 className="finalUpload">Let’s find out!</h2>
  //                     <p className="usageInfo">Click here to add an image</p>
  //                   </>
  //                 )}
  //               </button>
  //               <button
  //                 type="submit"
  //                 className="btn trynow"
  //                 onClick={handleSubmit}
  //               >
  //                 Identify !
  //                 {/* <Link className="linkResult">
  //                 </Link> */}
  //               </button>
  //             </form>
  //           </div>
  //           {/* File upload component ends */}

  //           {/* <FileUploadButton /> */}
  //         </div>
  //         <RightLeaves count={3} />
  //       </div>
  //     )}
  //   </>
  // );
  return (
    <>
      <div className="content">
        <LeftLeaves count={3} />
        <div className="usageContainer">
          <Heading title="How to use?" />
          <div className="usageBtnContainer">
            <StepsButton
              icon={Upload}
              title="Upload"
              info="Upload any fruit or vegetable image from camera, drive or from the device.
              (Make sure you select relevant image)"
            />
            <StepsButton
              icon={Process}
              title="Processing"
              info="The image is passed through trained machine learning model(from kaggle dataset), where it identifies the image."
            />
            <StepsButton
              icon={Search}
              title="Get Results"
              info="Result of ml model displays name including where it if found, nutritional benefits and current price in market."
            />
          </div>

          <div className="lineDivider"></div>

          {/* File upload component */}
          <div>
            <form className="formDiv" onSubmit={handleSubmit}>
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

                      <img
                        src={showImage}
                        className="previewImage"
                        alt="Selected"
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
              <button
                type="submit"
                className="btn trynow"
                onClick={handleSubmit}
              >
                <Link className="linkResult">Identify !</Link>
              </button>
            </form>
          </div>
          {/* File upload component ends */}

          {/* <FileUploadButton /> */}
        </div>
        <RightLeaves count={3} />
      </div>
    </>
  );
};

export default Usage;
