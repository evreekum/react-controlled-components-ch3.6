import React from 'react';
import './App.css';

function App() {
    return (
        <div className="form-container">

            <form>
                <div className="person-data">
                    <h2>gegevens</h2>
                    <label htmlFor="name-field">
                        naam:
                        <input
                            type="text"
                            id="name-field"

                        />
                    </label>

                    <label htmlFor="age-field">
                        leeftijd:
                        <input
                            type="number"
                            id="age-field"
                            placeholder="0"
                        />
                    </label>
                </div>
                <div className="person-review">
                    <h2>jou review</h2>
                    <label htmlFor="comments-field">
                        opmerkingen:
                        <input
                            type="text"
                            id="comments-field"
                            placeholder="Wat vond je van het recept?"
                        />
                    </label>

                    <label htmlFor="newsletter-box">
                        <input
                            type="checkbox"
                            id="newsletter-box"
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>
                </div>
            </form>
            <button
                type="submit"
            >
                Versturen
            </button>
        </div>
    );
}

export default App;
