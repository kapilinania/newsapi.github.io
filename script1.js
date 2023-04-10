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
//api query is here
const GENERAL_NEWS = "https://inshorts.deta.dev/news?category=all";
const BUSINESS_NEWS = "https://inshorts.deta.dev/news?category=business";
const SPORTS_NEWS = "https://inshorts.deta.dev/news?category=sports";
const ENTERTAINMENT_NEWS = "https://inshorts.deta.dev/news?category=entertainment";
const TECHNOLOGY_NEWS = "https://inshorts.deta.dev/news?category=technology";
const world_news = "https://inshorts.deta.dev/news?category=world";
const politics_news = "https://inshorts.deta.dev/news?category=politics";
const startup_news = "https://inshorts.deta.dev/news?category=startup";
const miscellaneous_news = "https://inshorts.deta.dev/news?category=miscellaneous";
const hatke_news = "https://inshorts.deta.dev/news?category=hatke";
const automobile_news = "https://inshorts.deta.dev/news?category=automobile";
const sci_news = "https://inshorts.deta.dev/news?category=science";


//all news is here
function all_news_data(){
    fetch(GENERAL_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})   
}
all_news_data()

//first part all news is here
function all_news_data(){
    fetch(GENERAL_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})   
}
//Business is here
function BUSINESS_NEWS_data(){
    fetch(BUSINESS_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})   
}
//sport is here
function sportdata(){
    fetch(SPORTS_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})   
}
//entertaiment is here
function enter_data(){
    fetch(ENTERTAINMENT_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}
//technology is here
function techno(){
    fetch(TECHNOLOGY_NEWS)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}
//world news is here
function worlddata(){
    fetch(world_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}
//politices is here
function politices_data(){
    fetch(politics_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}

//startup news is here
function startup_data(){
    fetch(startup_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}
//misscellinous is here
function miscellaneous_data(){
    fetch(miscellaneous_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}
//hatke data is here
function hatke_data(){
    fetch(hatke_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}
//automobile is here 
function auto_data(){
    fetch(automobile_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}

//science news is here
function sci_data(){
    fetch(sci_news)
    .then((value)=>{
        return value.json()
    })
    .then((value2)=>{
        let ihtml="";
        console.log(value2.data);  
        for( let section_data in value2.data){
           
            console.log(value2.data[section_data].title); 
        ihtml += `
        <div class="col mb-3">
                        <div class="card" style="width: 25rem;">
                            <img src="${value2.data[section_data].imageUrl}" class="card-img-top img-fluid" alt="..." >
                            <div class="card-body">
                              <h5 class="card-title text-justify">${value2.data[section_data].title}</h5>
                              <p class="card-text">
                              <h5 class="text-truncate">${value2.data[section_data].content}</h5></p>
                              <a href="${value2.data[section_data].url}" class="btn btn-primary" target="_blank">View News</a>
                            </div>
                          </div>
                    </div>          
        
`
allcard.innerHTML = ihtml;
        }
})
}



