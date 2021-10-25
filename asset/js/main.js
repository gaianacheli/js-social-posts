const posts = [
{
    id:'Francesco',
    avatar: 'https://i.picsum.photos/id/315/300/300.jpg?hmac=YWqnPrHCKQAIUAZSbXNjekfq1TbcljqwqzTNfoBQVHE',
    data: '2021/10/2',
    contenuto: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://i.picsum.photos/id/315/300/300.jpg?hmac=YWqnPrHCKQAIUAZSbXNjekfq1TbcljqwqzTNfoBQVHE',
    likes: 10
},
{
    id: 'Sara',
    avatar:'https://i.picsum.photos/id/563/300/300.jpg?hmac=_yODwhC9wmOj8yM7resDVXCVzX1HrmDC5D5dakomZPE',
    data: '2021/4/10',
    contenuto: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://i.picsum.photos/id/563/300/300.jpg?hmac=_yODwhC9wmOj8yM7resDVXCVzX1HrmDC5D5dakomZPE',
    likes: 3
},
{
    id: 'Manuel',
    avatar: 'https://i.picsum.photos/id/26/300/300.jpg?hmac=UMOujtfr34V3cEr43DgbCJYhdXQl8hbrc-GxqQd_Fug',
    data: '2021/5/2',
    contenuto: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://i.picsum.photos/id/26/300/300.jpg?hmac=UMOujtfr34V3cEr43DgbCJYhdXQl8hbrc-GxqQd_Fug',
    likes: 100
}
]
const like = ['Francesco','Sara','Manuel']

postUserEl(posts)

function postUser(member) {
    var today = new Date();
    var public = new Date(member.data)
    var tempoTrascorso = days_between(today, public) + ' giorni'
  
    return `
    <div class="card g-3" style="width: 37rem;">
        <div class="card-body">
            <img class="avatar" src="${member.avatar}" alt="">
          <h5 class="card-title"> ${member.id} </h5>
          <h6 class="card-subtitle mb-2 text-muted">${tempoTrascorso}</h6>
          <p class="card-text">${member.contenuto}</p>
          <img class="imgPost" src="${member.image}" alt="">
          <a href="#" class="card-link card_link"> <i class="fas fa-thumbs-up"></i> Mi piace</a>
          <p class="like">Piace a <span style="font-weight: 700;">${member.likes}</span>  persone</p>
        </div>
      </div> `  
}



function postUserEl(postsArray) {
    for (let index = 0; index < postsArray.length; index++) {
      const member = postsArray[index];


      document.querySelector('.row').insertAdjacentHTML('beforeend', postUser(member))
    }
}


function days_between(date1, date2) {
    console.log(date1, date2)
    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24
    
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()
    
    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)
    
    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)
    
    }
   