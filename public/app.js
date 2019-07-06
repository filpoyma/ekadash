const telButton = document.getElementById('phoneIDB');

const emailButton = document.getElementById('emailIDB');


telButton.addEventListener("click", async (event) => {
    let telField = document.getElementById('phoneIDF');
    let res = await fetch('/tel', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({telField: telField.value})
    });
    telField.value = await res.json();
});

emailButton.addEventListener("click", async (event) => {
    const emailField = document.getElementById('emailIDF');
    let res = await fetch('/email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({emailField: emailField.value})
    });
    emailField.value = await res.json();
});