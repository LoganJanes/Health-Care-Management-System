'use client';

import { useState, ChangeEvent, FormEvent, useEffect} from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    age: '', sex: '', cp: '', trestbps: '', chol: '',
    fbs: '', restecg: '', thalach: '', exang: '',
    oldpeak: '', slope: '', ca: '', thal: ''
  });

  const [result, setResult] = useState('');

  useEffect(() => {
    // This will run only on the client, after the initial render.
    setFormData({
      age: '', sex: '', cp: '', trestbps: '', chol: '',
      fbs: '', restecg: '', thalach: '', exang: '',
      oldpeak: '', slope: '', ca: '', thal: ''
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/predict-heart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        Object.fromEntries(
          Object.entries(formData).map(([k, v]) => [k, Number(v)])
        )
      )
    });

    const data = await response.json();
    setResult(data.risk || data.error);
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Heart Disease Risk Checker</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map(key => (
            <div key={key}>
              <label htmlFor={key} className="block font-medium capitalize mb-1">{key}</label>
              <input
                id={key}
                name={key}
                value={formData[key as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Predict
          </button>
        </form>
        {result && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Prediction: <span className="text-blue-600">{result}</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
