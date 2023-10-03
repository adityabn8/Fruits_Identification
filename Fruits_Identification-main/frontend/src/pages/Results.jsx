// import React, { useState, useEffect } from "react";
// import Heading from "../Components/Heading";
// import { LeftLeaves, RightLeaves } from "../Components/Leaves";
// import { fruitsInfo } from "../Components/dataJSON/fruitsInfo";

// const Results = ({ fruitname, img }) => {
//   const [fruitDetail, setFruitDetail] = useState("");

//   useEffect(() => {
//     const fruit = fruitsInfo.find((fruit) => fruit.fruitName === fruitname);

//     if (fruit) {
//       setFruitDetail(fruit);
//       console.log("fruit : ", fruit);
//     }
//   }, []);
//   console.log("fruit detail : ", fruitDetail);
//   console.log("fruitname : ", fruitname);

//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     fetchImage();
//   }, []);

//   const fetchImage = () => {
//     fetch("http://localhost:5000/images") // Replace with your Flask backend URL
//       .then((response) => response.json())
//       .then((data) => setImageUrl(data.image_url))
//       .catch((error) => console.error(error));
//   };

//   console.log("imgurl res : ", imageUrl);

//   return (
//     <>
//       <div className="content">
//         <LeftLeaves count={3} />
//         <div className="resultContainer">
//           <Heading title="Results" />
//           <div className="resultBox">
//             <div className="upperPart">
//               <img
//                 className="fruitimg"
//                 src={`uploads/${imageUrl}`}
//                 alt="Recent Processed Image"
//               />
//               <div className="generalInfo">
//                 <h2 className="points">
//                   Name :
//                   <span className="fruitDetail"> {fruitDetail.fruitName}</span>
//                 </h2>
//                 <h2 className="points">
//                   Binomial name :
//                   <span className="fruitDetail">
//                     {fruitDetail.Binomial_Name}
//                   </span>
//                 </h2>
//                 <h2 className="points">
//                   Genus :
//                   <span className="fruitDetail"> {fruitDetail.genus} </span>
//                 </h2>
//                 <h2 className="points">
//                   Family :
//                   <span className="fruitDetail"> {fruitDetail.family} </span>
//                 </h2>
//                 <h2 className="points">
//                   Origin :
//                   <span className="fruitDetail"> {fruitDetail.origin} </span>
//                 </h2>
//                 <h2 className="points">
//                   Category :
//                   <span className="fruitDetail"> {fruitDetail.fruitType} </span>
//                 </h2>
//               </div>
//             </div>
//             <div className="lineDivider"></div>

//             <div className="lowerPart">
//               <h2 className="points">
//                 Description :
//                 <span className="fruitDetail"> {fruitDetail.description}</span>
//               </h2>
//               <h2 className="points">
//                 Nutritional Information :
//                 <span className="fruitDetail">
//                   <div className="nutrition">
//                     <div className="column">
//                       {fruitDetail?.nutritional_information &&
//                         Object.entries(fruitDetail.nutritional_information)
//                           .slice(
//                             0,
//                             Math.ceil(
//                               Object.keys(fruitDetail.nutritional_information)
//                                 .length / 2
//                             )
//                           )
//                           .map(([key, value]) => (
//                             <p key={key}>
//                               {key}: {value}
//                             </p>
//                           ))}
//                     </div>
//                     <div className="column">
//                       {fruitDetail?.nutritional_information &&
//                         Object.entries(fruitDetail.nutritional_information)
//                           .slice(
//                             Math.ceil(
//                               Object.keys(fruitDetail.nutritional_information)
//                                 .length / 2
//                             )
//                           )
//                           .map(([key, value]) => (
//                             <p key={key}>
//                               {key}: {value}
//                             </p>
//                           ))}
//                     </div>
//                   </div>
//                 </span>{" "}
//               </h2>
//               <h2 className="points">
//                 Health Benefits :
//                 <span className="fruitDetail">
//                   {fruitDetail?.health_benefits &&
//                     fruitDetail.health_benefits.map((health) => (
//                       <p className="listvalues">{health}</p>
//                     ))}
//                 </span>
//               </h2>
//               <h2 className="points">
//                 Seasonality :
//                 <span className="fruitDetail"> {fruitDetail.seasonality} </span>
//               </h2>
//               <h2 className="points">
//                 Allergenicity :
//                 <span className="fruitDetail">{fruitDetail.allergenicity}</span>
//               </h2>
//               <h2 className="points">
//                 Current price :
//                 <span className="fruitDetail"> {fruitDetail.price} </span>
//               </h2>
//             </div>
//           </div>
//         </div>
//         <RightLeaves count={3} />
//       </div>
//     </>
//   );
// };

// export default Results;

import React, { useState,useEffect } from "react";
import Heading from "../Components/Heading";
import { LeftLeaves, RightLeaves } from "../Components/Leaves";
import { fruitsInfo } from "../Components/dataJSON/fruitsInfo";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const fruitname = location.state?.fruitname || "";
  const [fruitDetail, setFruitDetail] = useState("");

  useEffect(() => {
    const fruit = fruitsInfo.find((fruit) => fruit.fruitName === fruitname);

    if (fruit) {
      setFruitDetail(fruit);
      console.log("fruit : ", fruit);
    }
  }, [fruitname]);
  console.log("fruit detail : ", fruitDetail);
  console.log("fruitname : ", fruitname);

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchImage();

    // Attach event listener for beforeunload event
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = async () => {
    // Make a request to clear the uploads folder
    try {
      await fetch("http://localhost:5000/clear-uploads-folder", {
        method: "POST",
      });
      console.log("Uploads folder cleared successfully.");
    } catch (error) {
      console.error("Failed to clear uploads folder:", error);
    }
  };

  const fetchImage = () => {
    fetch("http://localhost:5000/images") // Replace with your Flask backend URL
      .then((response) => response.json())
      .then((data) => setImageUrl(data.image_url))
      .catch((error) => console.error(error));
  };

  console.log("imgurl res : ", imageUrl);

  return (
        <>
          <div className="content">
            <LeftLeaves count={3} />
            <div className="resultContainer">
              <Heading title="Results" />
              <div className="resultBox">
                <div className="upperPart">
                  <img
                    className="fruitimg"
                    src={`uploads/${imageUrl}`}
                    alt="Recent Processed Image"
                  />
                  <div className="generalInfo">
                    <h2 className="points">
                      Name :
                      <span className="fruitDetail"> {fruitDetail.fruitName}</span>
                    </h2>
                    <h2 className="points">
                      Binomial name :
                      <span className="fruitDetail">
                        {fruitDetail.Binomial_Name}
                      </span>
                    </h2>
                    <h2 className="points">
                      Genus :
                      <span className="fruitDetail"> {fruitDetail.genus} </span>
                    </h2>
                    <h2 className="points">
                      Family :
                      <span className="fruitDetail"> {fruitDetail.family} </span>
                    </h2>
                    <h2 className="points">
                      Origin :
                      <span className="fruitDetail"> {fruitDetail.origin} </span>
                    </h2>
                    <h2 className="points">
                      Category :
                      <span className="fruitDetail"> {fruitDetail.fruitType} </span>
                    </h2>
                  </div>
                </div>
                <div className="lineDivider"></div>
    
                <div className="lowerPart">
                  <h2 className="points">
                    Description :
                    <span className="fruitDetail"> {fruitDetail.description}</span>
                  </h2>
                  <h2 className="points">
                    Nutritional Information :
                    <span className="fruitDetail">
                      <div className="nutrition">
                        <div className="column">
                          {fruitDetail?.nutritional_information &&
                            Object.entries(fruitDetail.nutritional_information)
                              .slice(
                                0,
                                Math.ceil(
                                  Object.keys(fruitDetail.nutritional_information)
                                    .length / 2
                                )
                              )
                              .map(([key, value]) => (
                                <p key={key}>
                                  {key}: {value}
                                </p>
                              ))}
                        </div>
                        <div className="column">
                          {fruitDetail?.nutritional_information &&
                            Object.entries(fruitDetail.nutritional_information)
                              .slice(
                                Math.ceil(
                                  Object.keys(fruitDetail.nutritional_information)
                                    .length / 2
                                )
                              )
                              .map(([key, value]) => (
                                <p key={key}>
                                  {key}: {value}
                                </p>
                              ))}
                        </div>
                      </div>
                    </span>{" "}
                  </h2>
                  <h2 className="points">
                    Health Benefits :
                    <span className="fruitDetail">
                      {fruitDetail?.health_benefits &&
                        fruitDetail.health_benefits.map((health) => (
                          <p className="listvalues">{health}</p>
                        ))}
                    </span>
                  </h2>
                  <h2 className="points">
                    Seasonality :
                    <span className="fruitDetail"> {fruitDetail.seasonality} </span>
                  </h2>
                  <h2 className="points">
                    Allergenicity :
                    <span className="fruitDetail">{fruitDetail.allergenicity}</span>
                  </h2>
                  <h2 className="points">
                    Current price :
                    <span className="fruitDetail"> {fruitDetail.price} </span>
                  </h2>
                </div>
              </div>
            </div>
            <RightLeaves count={3} />
          </div>
        </>
      );
};

export default Results;
