const scriptURL = 'https://script.google.com/macros/s/AKfycbw0JpYUD0IH8HQYu2Qkw8wOmIEpTKorgkOK2Yn0bUB7JU60qgJRJNoUxUmVcumV_IFlmQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Thank You For Subscribing!'
        setTimeout(function(){
            msg.innerHTML = ''
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})