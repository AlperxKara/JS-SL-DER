var models = [
    {
        name: 'audi rs6',
        image: 'img/audi-rs6.jpg',
        link: 
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arabam.com%2Fblog%2Fhaberler%2F2020-audi-rs6-avant%2F&psig=AOvVaw1TzF01SEkExJRt3lkivGaw&ust=1723811425302000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLigxI-A94cDFQAAAAAdAAAAABAE'
    },
    {
        name: 'bmw',
        image: 'img/bmw.jpg',
        link: 
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.motor1.com%2Fnews%2F668953%2Fbmw-tasarim-dili-elektrikli-otomobiller%2F&psig=AOvVaw3Rym0b1MNsdNMGsvRKwqxx&ust=1723811469954000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiQyKaA94cDFQAAAAAdAAAAABAE'
    },
    {
        name: 'mustang',
        image: 'img/mustang.jpg',
        link: 
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fclassic-recreations.com%2Fmodels%2F1969-hitman-fastback%2F&psig=AOvVaw3sLl6GbD_P1TfgL8PMzgUi&ust=1723811515931000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjr9bqA94cDFQAAAAAdAAAAABAE'
    },
    {
        name: 'polo',
        image: 'img/polo.jpg',
        link: 
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.motor1.com%2Fnews%2F667763%2Fvw-polo-gti-25-edition%2F&psig=AOvVaw1x-Vyza3MKvbjEtB4cnkcX&ust=1723811546711000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiHlsmA94cDFQAAAAAdAAAAABAE'
    },
]

var index = 0;

var slytCount = models.length;
var interval;



var settings ={
    duration: '1000',
    random: false,
}
 


init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener(
    'click', function(){
        index--;
        showSlide(index);
        console.log(index);
    }
);


document.querySelector('.fa-arrow-circle-right').addEventListener(
    'click', function(){
        index++;
        showSlide(index);
        console.log(index);
    }
);

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})



document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){

    var prev;

  interval=  setInterval(function(){

       
        if(settings.random){
            do{
            index = Math.floor(Math.random() * slytCount)

            }while(index==prev)
                prev = index;
            //random index
        }else{
            if(slytCount == index+1){
                index = -1;

            }
            showSlide(index);
            console.log(index);
            index++;
            //artan index
        }     
        showSlide(index);
    }, settings.duration)
}





function showSlide(i){
    index = i;

    if(i<0){
        index = slytCount -1;
    } 
    if(i>= slytCount){
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models
        [index].image);
    
    
    
    document.querySelector('.card-link').setAttribute('href',models [index].link);
    
}




