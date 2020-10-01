
import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

  
*/

const boxCards = document.querySelector('.cards')

function adamCard(data){
  
  const cardDiv = document.createElement('div')
  const picture = document.createElement('img')
  const header = document.createElement('h2')
  const para = document.createElement('p')


picture.src = data.avatar_url

header.textContent = data.login
para.textContent = data.location


boxCards.appendChild(cardDiv)
cardDiv.appendChild(picture)
cardDiv.appendChild(header)
cardDiv.appendChild(para)





}

axios.get('https://api.github.com/users/adamrappaport')
.then(res=>{
  console.log(res.data)
  const data = res.data
  adamCard(data)

})
.catch(drama =>{
  console.log(drama)
})



 const followersArray = [
   "CScori",
   "Matte-matt",
   "Benaiah-Varner",
   "s-munro",
   "roberttierie"

 ];

 followersArray.map(item =>{
   axios.get(`https://api.github.com/users/${item}`)
   .then(res=>{
     adamCard(res)
     console.log(res)
   })

   .catch(err=>{
     console.log(err)
   })
 })


 function adamCard2(data){
  
  const cardDiv = document.createElement('div')
  const picture = document.createElement('img')
  const header = document.createElement('h2')
  const para = document.createElement('p')


picture.src = data.avatar_url

header.textContent = data.login
para.textContent = data.location


boxCards.appendChild(cardDiv)
cardDiv.appendChild(picture)
cardDiv.appendChild(header)
cardDiv.appendChild(para)


boxCards.appendChild(cardDiv)


}



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
