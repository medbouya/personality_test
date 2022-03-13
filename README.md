# Personality test
## _Are you introvert or extrovert_


Personality test is a small app created to pass an online test. It tells you, based on given responses, whether you are an introvert or an extrovert.

- It is written with Python/Django for the backend
- ...and in Javascript/React for the frontend

## Installation

This app requires Python 3 and Django 4.0 for its backend part.
It can run without installing React dependencies as it uses a built version of the frontend app.

Clone the repository.

```sh
git clone https://github.com/medbouya/personality_test.git
```
Install the Django dependencies .
```sh
cd backend
pip install -r requirements.txt
```

Run the app...

```sh
python manage.py runserver
```
...and visit http://localhost:8000 

## Instructions to setup the frontend app (React)
Further more, you can use the frontend app seperately by navigating to the frontend folder from the project root.

```sh
cd frontend
```
Install the dependencies.
```sh
yarn or npm -i
```
Start the server
```sh
yarn start or npm start 
```
Visit http://localhost:3000

