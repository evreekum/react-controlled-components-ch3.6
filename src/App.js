import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState(0);
    const [messageValue, setMessageValue] = React.useState('');
    const [newsLetterValue, setNewsLetterValue] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();

    }


    return (

        <form onSubmit={handleSubmit}>
            <h2>gegevens</h2>
            <label htmlFor="name-field">
                naam:
                <input
                    type="text"
                    name="name"
                    id="name-field"
                    value={nameValue}
                />
            </label>

            <label htmlFor="age-field">
                leeftijd:
                <input
                    type="number"
                    name="age"
                    id="age-field"
                    value={ageValue}

                />
            </label>


            <h2>jouw review</h2>
            <label htmlFor="comments-field">
                opmerkingen:
                <textarea
                    name="message"

                    id="comments-field"
                    cols="45"
                    rows="5"
                    placeholder="Wat vond je van het recept?"
                    value={messageValue}
                >

                </textarea>

            </label>

            <label htmlFor="newsletter-box">
                <input
                    type="checkbox"
                    name="newsletter"
                    checked={newsLetterValue}
                    id="newsletter-box"
                />
                Ik schrijf me in voor de nieuwsbrief
            </label>
            <button
                type="submit"
            >
                Versturen
            </button>
        </form>

    );
}

export default App;
