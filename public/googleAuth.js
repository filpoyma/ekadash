

const GOOGLE_API_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFmZGU4MGViMWVkZjlmM2JmNDQ4NmRkODc3YzM0YmE0NmFmYmJhMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTA3MjYxNjk0MDcwLW44MzRjbXBhYmQ5cThwZW9kanJtdWs2NXVodm01aWw0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTA3MjYxNjk0MDcwLW44MzRjbXBhYmQ5cThwZW9kanJtdWs2NXVodm01aWw0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA3ODk2Nzk4NTU4NDQ2NTAxMjk4IiwiZW1haWwiOiJmaWxwb3ltYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJNRDAwN25WVW5RejU0M2NnZW40bmciLCJuYW1lIjoiUm8gTWFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tMmduWWlfWWRIS0EvQUFBQUFBQUFBQUkvQUFBQUFBQUFCdVEvaHY0WVNOQ0txLWMvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IlJvIiwiZmFtaWx5X25hbWUiOiJNYW4iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU2MjI1MjEyOSwiZXhwIjoxNTYyMjU1NzI5LCJqdGkiOiJhN2U5NDZhMTM3ZDA1NWRlNGQ3NTMyZWFmZWRlMmI0YTU3YmZkYjMxIn0.qV_yJLSwfemFqkDhLRjs9oFB_wHY5Iaf3TQ_0On13N5qOTiZbKobvKd38_m-Uq0_1NgA2J9F1EqSRbOOE6YyNJeAH8ita7eAAFr0oCLtAKxkRqibGgA-1RBfYROZovmAKUwkaYmASLzx-1whi3mwOZu9uuAUz02DTTnVAeeXcThqgCn3sLUrzbyR_wOfd4qF4PBsteuP_Tm5-p33ujlz62tt32GMaRsG8OOYFY7kFSsiifhgtcVAGtm6ZThyDpXFvS1XbZCJSkXiUYpljzpiWvfuvSd436-HiV-58rbvDSl6jHw8ae7m9hrCJXARKFCj5zyRcgNhi8UCVWQY3V42IQ'
const CLIENT_ID = 'ID928209564220-pafhn79at5fpipgmk40jb54tl12lcbsg.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCLOexBa19q3sHOk1IKY2pn4UcsklFiUBY';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    //const id_token = googleUser.getAuthResponse().id_token;
    //console.log("ID Token: " + id_token);
};

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

 async function signIn() {
    const auth2 = window.gapi.auth2.getAuthInstance();
     const googleUser = await auth2.signIn();
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // не посылайте подобную информацию напрямую, на ваш сервер!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        // токен
        //const id_token = googleUser.getAuthResponse().id_token;
        //console.log('ID Token: ' + id_token);

     let resApi = await fetch('/auth', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({profile})
            });
            //let responce = await resApi.json();

     //    const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events`;
     //    const data = { end: { dateTime: "2019-07-22T11:30:00-07:00" }
     //        , start: { dateTime: "2019-07-22T11:00:00-07:00" }
     //        , summary: "New Calendar Event from API"
     //    };
     //    let resApi = await fetch(url, {
     //        method: 'POST',
     //        headers: {
     //            'Accept': 'application/json',
     //            'Content-Type': 'application/json'
     //        },
     //        body: JSON.stringify({data})
     //    });
     //    let responce = await resApi.json();
     // console.log('responce', responce);



     // const request = await gapi.client.calendar.events.insert({
     //     'calendarId': 'primary',
     //     'resource': event
     // });
     //
     // request.execute(function(event) {
     //     appendPre('Event created: ' + event.htmlLink);
     // });


};
// const signInButton = document.getElementById('googleEnter2');
// signInButton.addEventListener("click", async (event) => {
//     const request = await gapi.client.calendar.events.insert({
//         'calendarId': 'primary',
//         'resource': event
//     });
//
//     request.execute(function(event) {
//         appendPre('Event created: ' + event.htmlLink);
//     });
// });