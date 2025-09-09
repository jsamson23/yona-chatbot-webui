export function unhelpfulOne() {
    return true;
}

export function unhelpfulTwo() {
    console.log("I'M LOST");
}

export function unhelpfulThree() {
    throw "Have fun debugging!";
}


export function unhelpfulFour() {
    const heading = document.createElement('div');
    heading.textContent = 'Thanks for watching! Have fun developing!';
    heading.className = 'text-center mt-5 text-primary alert alert-success';
    document.body.appendChild(heading);

    document.querySelector("#example-button").className = "btn btn-danger";
}