from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load model and scaler
model = joblib.load('heart_model.pkl')
scaler = joblib.load('heart_scaler.pkl')

@app.route('/predict-heart', methods=['POST'])
def predict_heart():
    try:
        data = request.json
        features = [
            data['age'], data['sex'], data['cp'], data['trestbps'],
            data['chol'], data['fbs'], data['restecg'], data['thalach'],
            data['exang'], data['oldpeak'], data['slope'], data['ca'], data['thal']
        ]

        features = np.array(features).reshape(1, -1)
        features_scaled = scaler.transform(features)
        prediction = model.predict(features_scaled)[0]

        risk = 'High risk of heart disease' if prediction == 1 else 'Low risk of heart disease'
        return jsonify({'risk': risk})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

