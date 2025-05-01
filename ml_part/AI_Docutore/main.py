from flask import Flask, request, render_template, jsonify
import numpy as np
import pandas as pd
import pickle

# Initialize Flask app
app = Flask(__name__)

# Load datasets
sym_des = pd.read_csv("datasets/symtoms_df.csv")
precautions = pd.read_csv("datasets/precautions_df.csv")
workout = pd.read_csv("datasets/workout_df.csv")
description = pd.read_csv("datasets/description.csv")
medications = pd.read_csv("datasets/medications.csv")
diets = pd.read_csv("datasets/diets.csv")

# Load pre-trained model
svc = pickle.load(open('models/svc.pkl', 'rb'))

# Helper function
def helper(dis):
    desc = description[description['Disease'] == dis]['Description']
    desc = " ".join([w for w in desc])

    pre = precautions[precautions['Disease'] == dis][['Precaution_1', 'Precaution_2', 'Precaution_3', 'Precaution_4']]
    pre = [col for col in pre.values]

    med = medications[medications['Disease'] == dis]['Medication']
    med = [med for med in med.values]

    die = diets[diets['Disease'] == dis]['Diet']
    die = [die for die in die.values]

    wrkout = workout[workout['disease'] == dis]['workout']
    wrkout = list(wrkout.values)  # convert to list for templating

    return desc, pre, med, die, wrkout

# Symptoms dictionary and disease list
# (no changes here — make sure your data structure is correct and matches your model's expectations)
symptoms_dict = {...}  # Use your existing symptoms_dict here
diseases_list = {...}  # Use your existing diseases_list here

# Model Prediction function
def get_predicted_value(patient_symptoms):
    input_vector = np.zeros(len(symptoms_dict))
    for item in patient_symptoms:
        if item in symptoms_dict:
            input_vector[symptoms_dict[item]] = 1
    return diseases_list[svc.predict([input_vector])[0]]

# Routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route('/predict', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        symptoms = request.form.get('symptoms')
        print(f"Received symptoms: {symptoms}")

        if not symptoms or symptoms.lower().strip() == "symptoms":
            message = "Please enter valid symptoms separated by commas."
            return render_template('index.html', message=message)

        # Clean input
        user_symptoms = [s.strip("[]' ").lower() for s in symptoms.split(',')]

        # Predict
        try:
            predicted_disease = get_predicted_value(user_symptoms)
            dis_des, pre, medications, rec_diet, workout = helper(predicted_disease)

            my_precautions = [item for item in pre[0]]

            return render_template(
                'index.html',
                predicted_disease=predicted_disease,
                dis_des=dis_des,
                my_precautions=my_precautions,
                medications=medications,
                my_diet=rec_diet,
                workout=workout
            )
        except Exception as e:
            print(f"Prediction error: {e}")
            message = "An error occurred during prediction. Please check your input symptoms."
            return render_template('index.html', message=message)

    return render_template('index.html')

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/developer')
def developer():
    return render_template("developer.html")

@app.route('/blog')
def blog():
    return render_template("blog.html")

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
