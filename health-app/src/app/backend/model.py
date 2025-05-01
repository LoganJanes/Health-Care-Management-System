import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import joblib

columns = [
    'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs',
    'restecg', 'thalach', 'exang', 'oldpeak', 'slope',
    'ca', 'thal', 'target'
]

df = pd.read_csv('heart.csv', names=columns)


df.replace('?', np.nan, inplace=True)
df.dropna(inplace=True)


df = df.astype({
    'age': float, 'sex': int, 'cp': int, 'trestbps': float, 'chol': float,
    'fbs': int, 'restecg': int, 'thalach': float, 'exang': int,
    'oldpeak': float, 'slope': float, 'ca': float, 'thal': float, 'target': int
})


df['target'] = df['target'].apply(lambda x: 1 if x > 0 else 0)

X = df.drop('target', axis=1)
y = df['target']


scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)


X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)


joblib.dump(model, 'heart_model.pkl')
joblib.dump(scaler, 'heart_scaler.pkl')
