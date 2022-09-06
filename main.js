// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!z
const likers = document.querySelectorAll('.like-glyph');
likers.forEach(liker => liker.addEventListener('click', () => {
                        mimicServerCall()
                        .then(res => {
                          console.log(res)
                          console.log(liker)
                          if(liker.className !== 'like-glyph activated-heart'){
                            liker.classList.add('activated-heart')
                          }
                          else{
                            liker.classList.remove('activated-heart')
                          }
                        })
                        .catch(res => {
                          console.log(res)
                          document.querySelector('#modal').className = 'not-hidden'
                          setTimeout(() => {document.querySelector('#modal').className = 'hidden'}, 300)
                        })
                }));



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
