import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.createElement('h1');
    heading.textContent = 'Hello from the about page!';
    heading.className = 'text-center mt-5 text-success';
    document.body.appendChild(heading);
    console.log("About page script loaded.");
});
