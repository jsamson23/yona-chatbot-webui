import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {unhelpfulOne, unhelpfulTwo, unhelpfulThree, unhelpfulFour} from './annoyingFile.js';

function longFunction() {
    unhelpfulOne();
    unhelpfulTwo();
    // unhelpfulThree();
    unhelpfulFour();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Home page script loaded.");
    document.querySelector("#example-button").addEventListener('click', () => {
        console.log("Button clicked!");
        try {
            longFunction();
        } catch (error) {
            console.log("Button click function failed :(");
            console.log(`Exception message ${error}`);
        }
    })
});
