const telButton = document.getElementById('phoneIDB');

const emailButton = document.getElementById('emailIDB');

async function myFetch(url, body) {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

telButton.addEventListener('click', async () => {
  let telField = document.getElementById('phoneIDF');
  telField.value = await myFetch('/tel', { telField: telField.value });
});

emailButton.addEventListener('click', async () => {
  const emailField = document.getElementById('emailIDF');
  emailField.value = await myFetch('/email', { emailField: emailField.value });
});
