from flask import Flask, request, jsonify
from sklearn import preprocessing
from sklearn.neighbors import KNeighborsClassifier
import numpy as np
import pandas as pd
from flask_cors import CORS
import pyttsx3

app = Flask(__name__)
CORS(app)

loc = "Crop_recommendation.csv"
data = pd.read_csv(loc)

NITROGEN = list(data["N"])
PHOSPHORUS = list(data["P"])
POTASSIUM = list(data["K"])
TEMPERATURE = list(data["temperature"])
HUMIDITY = list(data["humidity"])
PH = list(data["ph"])
RAINFALL = list(data["rainfall"])

features = list(zip(NITROGEN, PHOSPHORUS, POTASSIUM,
                TEMPERATURE, HUMIDITY, PH, RAINFALL))
features = np.array([NITROGEN, PHOSPHORUS, POTASSIUM,
                    TEMPERATURE, HUMIDITY, PH, RAINFALL])

le = preprocessing.LabelEncoder()
crop = le.fit_transform(list(data["label"]))

features = features.transpose()

model = KNeighborsClassifier(n_neighbors=2)
model.fit(features, crop)


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    nitrogen_content = data['nitrogen_content']
    phosphorus_content = data['phosphorus_content']
    potassium_content = data['potassium_content']
    temperature = data['temperature']
    humidity = data['humidity']
    ph = data['ph']
    rainfall = data['rainfall']

    test_data = np.array([nitrogen_content, phosphorus_content,potassium_content, temperature, humidity, ph, rainfall]).reshape(1, -1)
    predicted_crop = model.predict(test_data)[0]
    predicted_crop_name = le.inverse_transform([predicted_crop])[0]

    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    rate = engine.getProperty('rate')
    engine.setProperty('voice', voices[1].id)
    engine.setProperty('rate', rate-50)
    engine.say(f"Based on the provided data, the recommended crop is {predicted_crop_name}")
    engine.runAndWait()

    return jsonify({'crop': predicted_crop_name}), 200



if __name__ == '__main__':
    app.run(debug=True,port=8000)
    print(f"Flask app running at http://localhost:8000/")
