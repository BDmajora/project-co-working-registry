function MyFunction() {
    var val = document.getElementById('persontype').value;

    if (val == '1') {
        window.location.replace('properties/owner.html'); 
    }
    else if (val == '2') {
        window.location.replace('properties/coworker.html'); 
    }
}

function handleSubmit(event) {
	event.preventDefault();

		const data = new FormData(event.target);

		const value = Object.fromEntries(data.entries());

		console.log({ value });
	}

	const form = document.querySelector("form");
	form.addEventListener("notpersontype", handleSubmit);