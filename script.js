//first we are get value and store in a variable
const all_news = document.getElementById('all');
const business_news = document.getElementById('business');
const enter_news = document.getElementById('entertainment');
const gehelth_news = document.getElementById('generalhealth');
const science_news = document.getElementById('science');
const sport_news = document.getElementById('sports');
const tech_news = document.getElementById('technology');
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");


let newsDataArr = [];
//https://newsapi.org/v2/everything?q=keyword&apiKey=ada6a054fe0248cab98c81c24e3db24f
//api query is here
const API_KEY = "ada6a054fe0248cab98c81c24e3db24f";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ada6a054fe0248cab98c81c24e3db24f";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ada6a054fe0248cab98c81c24e3db24f";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ada6a054fe0248cab98c81c24e3db24f";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ada6a054fe0248cab98c81c24e3db24f";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ada6a054fe0248cab98c81c24e3db24f";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=ada6a054fe0248cab98c81c24e3db24f";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";


const getWeather = (city)=>{
   
    cityName.innerHTML = city

    fetch("https://newsapi.org/v2/everything?q="+city+"&apiKey=ada6a054fe0248cab98c81c24e3db24f" )
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        console.log(value2);  
       let ihtml = "";
        for( data in value2.articles){
            console.log(value2.articles[data].title); 
         
          ihtml += `
         
                    <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                              <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
                    
        `  
        }
        allcard.innerHTML = ihtml;
    })
}

submit.addEventListener("click", ()=>{
    event.preventDefault();
    getWeather(city.value)
})
getWeather("BITCOIN")

//WAIT A MIN

fetch(GENERAL_NEWS )
.then((value)=>{
    return value.json()
})
.then((value2)=>{
    console.log(value2);  
   let ihtml = "";
    for( data in value2.articles){
        console.log(value2.articles[data].title); 
     
      ihtml += `
     
                <div class="col mb-3">
                    <div class="card" style="width: 25rem;">
                        <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                        <div class="card-body">
                          <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                          <p class="card-text">
                          <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                          <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                        </div>
                      </div>
                </div>          
                
    `  
    }
    allcard.innerHTML = ihtml;
})

function all_news_data(){
    fetch(HEADLINES_NEWS)
.then((value)=>{
    return value.json()
})
.then((value2)=>{
    console.log(value2.articles);  
   let ihtml = "";
    for( data in value2.articles){
        console.log(value2.articles[data].title); 
     
      ihtml += `
     
                <div class="col mb-3">
                    <div class="card" style="width: 25rem;">
                        <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                        <div class="card-body">
                          <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                          <p class="card-text">
                          <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                          <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                        </div>
                      </div>
                </div>          
                
    `  
    }
    allcard.innerHTML = ihtml;
})


}
function BUSINESS_NEWS_data(){
    fetch(BUSINESS_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        console.log(value2.articles);  
       let ihtml = "";
        for( data in value2.articles){
            console.log(value2.articles[data].title); 
         
          ihtml += `
         
                    <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                              <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
                    
        `  
        }
        allcard.innerHTML = ihtml;
    })  
}
function enter_data(){
    fetch(ENTERTAINMENT_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        console.log(value2.articles);  
       let ihtml = "";
        for( data in value2.articles){
            console.log(value2.articles[data].title); 
         
          ihtml += `
         
                    <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                              <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
                    
        `  
        }
        allcard.innerHTML = ihtml;
    })  
}
function health_data(){
    fetch(SPORTS_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        console.log(value2.articles);  
       let ihtml = "";
        for( data in value2.articles){
            console.log(value2.articles[data].title); 
         
          ihtml += `
         
                    <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                              <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
                    
        `  
        }
        allcard.innerHTML = ihtml;
    })  
}
function science_data(){
    fetch(TECHNOLOGY_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        console.log(value2.articles);  
       let ihtml = "";
        for( data in value2.articles){
            console.log(value2.articles[data].title); 
         
          ihtml += `
         
                    <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                              <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
                    
        `  
        }
        allcard.innerHTML = ihtml;
    })  
}
function tech_data(){
    fetch(TECHNOLOGY_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        console.log(value2.articles);  
       let ihtml = "";
        for( data in value2.articles){
            console.log(value2.articles[data].title); 
         
          ihtml += `
         
                    <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.articles[data].urlToImage}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.articles[data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.articles[data].content}</h5></p>
                              <a href="${value2.articles[data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
                    
        `  
        }
        allcard.innerHTML = ihtml;
    })  
}

