import React from "react";
import Heading from "../Components/Heading";
import StepsButton from "../Components/StepsButton";
import Upload from "../images/upload.png";
import Process from "../images/processing.png";
import Search from "../images/search.png";
import Img from "../images/img.png";
import { LeftLeaves, RightLeaves } from "../Components/Leaves";
import FileUploadButton from "../Components/FileUploadButton";


const Usage = () => {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Handle the selected files here
    console.log(files);
  };
  return (
    <>
      <div className="content">
      <LeftLeaves count={3}/>
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
          {/* <button className="uploadButton">
            <input
              id="file-upload"
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .png"
              multiple
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
            <img className="imageIcons" src={Img} alt="upload button" />
            <h2 className="finalUpload">Let’s find out!</h2>
            <label htmlFor="file-upload" className="usageInfoLabel">
              Click here to add an image
            </label>
          </button> */}


            {/* <button className="uploadButton">
              <img className="imageIcons" src={Img} alt="upload button" />
              <h2 className="finalUpload">Let’s find out!</h2>
              <p className="usageInfo">Click here to add an image</p>
            </button> */}

            <FileUploadButton/>
            {/* <button className="btn trynow">Identify !</button> */}
        </div>
        <RightLeaves count={3}/>
      </div>
    </>
  );
};

export default Usage;
