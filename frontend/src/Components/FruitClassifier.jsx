import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs-converter';
import model from "../models/model4.json"

function FruitClassifier() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [classificationResult, setClassificationResult] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const classifyImage = async () => {
    // Load the trained model
    const model = await loadGraphModel('../models/model4.json');

    // Load and preprocess the selected image
    const imageElement = document.createElement('img');
    imageElement.src = selectedImage;
    await imageElement.decode();
    const imageTensor = tf.browser.fromPixels(imageElement).toFloat();
    const inputTensor = imageTensor.expandDims();

    // Normalize the image pixel values
    const normalizedTensor = inputTensor.div(tf.scalar(255));

    // Run inference to classify the image
    const predictions = await model.predict(normalizedTensor);

    // Get the top prediction
    const topPrediction = tf.argMax(predictions, 1).dataSync()[0];

    // Display the classification result
    setClassificationResult(`Class ${topPrediction}`);

    // Clean up resources
    imageTensor.dispose();
    inputTensor.dispose();
    normalizedTensor.dispose();
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Selected" />}
      <button onClick={classifyImage}>Classify</button>
      {classificationResult && <p>Classification Result: {classificationResult}</p>}
    </div>
  );
}

export default FruitClassifier;
