let cl = console.log;
const imageContainer = document.getElementById("imageContainer");

const count = 10;
const apiKey = 'xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw';
const baseUrl = `https://api.unsplash.com/photos/random/`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



const templating = (arr) => {
   arr.forEach(ele => {
        let div = document.createElement('div');
        div.classList.add('gallery-img');

        let anchor = document.createElement('a');
        anchor.setAttribute('href', `${ele.urls.regular}`)

        let img = document.createElement('img');
        img.setAttribute('src',  `${ele.urls.regular}`)

        anchor.appendChild(img);
        div.appendChild(anchor);
        imageContainer.appendChild(div)
   });
}


async function fetchData() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  cl(data)
  templating(data)
}

window.addEventListener('scroll', () => {
    
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    if(scrollTop + clientHeight >= scrollHeight - 300){
       fetchData()
    }
})

fetchData()