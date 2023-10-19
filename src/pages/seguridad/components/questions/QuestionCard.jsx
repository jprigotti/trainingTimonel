import React, {useState} from 'react'

const QuestionCard = ({ pregunta, opcion_1, opcion_2, opcion_3, correcta }) => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            {/* <p>{pregunta}</p>
            <p>{opcion_1}</p>
            <p>{opcion_2}</p>
            <p>{opcion_3}</p>
            <p>Respuesta: {correcta}</p> */}

            <div>
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={(event) => setSelectedOption(event.target.value)}
                    />
                    Option 1
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={(event) => setSelectedOption(event.target.value)}
                    />
                    Option 2
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="radioGroup"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={(event) => setSelectedOption(event.target.value)}
                    />
                    Option 3
                </label>
                <br />
                <p>Selected option: {selectedOption}</p>
            </div>
        </div>
    )
}

export default QuestionCard