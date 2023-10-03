import flask
import os
import time
from flask import Flask, request, jsonify
from tensorflow import keras
from tensorflow.keras.preprocessing import image
import numpy as np
from flask_cors import CORS

# Load the trained model
model = keras.models.load_model('model.h5')

# Define the class labels
class_names = ['apple', 'banana', 'beetroot', 'bell pepper', 'cabbage',
               'capsicum', 'carrot', 'cauliflower', 'chilli pepper',
               'corn', 'cucumber', 'eggplant', 'garlic', 'ginger',
               'grapes', 'jalepeno', 'kiwi', 'lemon', 'lettuce',
               'mango', 'onion', 'orange', 'paprika', 'pear', 'peas',
               'pineapple', 'pomegranate', 'potato', 'raddish',
               'soy beans', 'spinach', 'sweetcorn', 'sweetpotato',
               'tomato', 'turnip', 'watermelon']

app = Flask("__main__")
CORS(app)


@app.route('/classify', methods=['POST', 'GET'])
def classify_fruit():
    img = request.files['image']
    image_path1 = os.path.join('../frontend/public/uploads', img.filename)
    image_path = os.path.join('uploads', img.filename)
    img.save(image_path)
    img = image.load_img(image_path, target_size=(224, 224, 3))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])
    pred = model.predict(images, batch_size=32)

    # os.remove(image_path)

    # Return the predicted fruit class name
    print(class_names[np.argmax(pred)])
    img.save(image_path1)
    return (jsonify({"fruitname": class_names[np.argmax(pred)]}))


uploads_dir = "uploads"


@app.route('/images', methods=['GET'])
def get_images():
    # Get the most recent image file in the uploads directory
    images = [filename for filename in os.listdir(
        uploads_dir) if filename.endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    images.sort(key=lambda x: os.path.getmtime(os.path.join(uploads_dir, x)))

    if images:
        # Return the URL of the most recent image
        filename = images[-1]
        image_url = f"{filename}"
        return jsonify({"image_url": image_url})
    else:
        return jsonify({"image_url": ""})


del_dir = "../frontend/public/uploads"
# Cleanup function to remove files in the uploads folder
def cleanup_uploads_folder():
    while True:
        time.sleep(20)  # Wait for 10 seconds
        for filename in os.listdir(del_dir):
            file_path = os.path.join(del_dir, filename)
            if os.path.isfile(file_path):
                os.remove(file_path)

# Start the cleanup mechanism in a separate thread
import threading
cleanup_thread = threading.Thread(target=cleanup_uploads_folder) 
cleanup_thread.start()



@app.route('/clear-uploads-folder', methods=['POST'])
def clear_uploads_folder():
    for filename in os.listdir(uploads_dir):
        file_path = os.path.join(uploads_dir, filename)
        if os.path.isfile(file_path):
            os.remove(file_path)

    return jsonify({"message": "Uploads folder cleared successfully."})


if __name__ == "__main__":
    app.run(debug=True)
