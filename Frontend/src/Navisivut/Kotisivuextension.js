import '../App.css';
import React, { useState } from 'react';
import Kotisivuasettelu from "../Navisivut/Kotisivuasettelu.css";

// tämä on Mökki (Kuvat sivujen text grid-container versio alpha 0.011)
function Kotisivuextension() {
    return (
        <div className="grid-palaute">
            <div class="grid-item">
                <h2>Feedback</h2>
                <p>"Hyvä mökki hienolla paikalla. Suosittelen mökkiä varsinkin talviaikaan!"</p>
            </div>

        </div>


    )
}
export default Kotisivuextension;