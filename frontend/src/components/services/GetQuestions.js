import React, { useEffect, useState } from 'react';

const API = 'http://127.0.0.1:8000/api/questions/'

const GetQuestions = () => {
    
    const [questions, setQuestions] = useState([])

    const fetchQuestions = () => {
        fetch(API)
            .then(response => {
            console.log(response.json)
            return response.json()
        })
        .then(data => {
            setQuestions(data)
        })
    }
  
    useEffect(() => {
        fetchQuestions()
    }, [])

    return [questions]
}

export default GetQuestions


