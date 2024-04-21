btn = document.querySelector('button')
heading = document.querySelector('h1')
body = document.querySelector('body')

counter = 0



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



btn.addEventListener('click', function(){
    counter += 1
    heading.innerHTML = counter
    
    if (counter == 1){
        let x=getRandomInt(30)
        if (x>20){
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }
    if (counter == 5){
        let x=getRandomInt(30)
        if (x>20){
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }
    if (counter == 100){
        let x=getRandomInt(30)
        if (x>20){
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
    }
    if (counter == 5){
        body.style.backgroundImage = 'url(2.jpeg)'
    }
    if (counter == 6){
        btn.style.transform = 'translate(100px,100px)'
    }
    if (counter == 120){
        btn.style.transform = 'translate(200px,-100px)'
    }
    if (counter == 520){
        btn.style.transform = 'translate(-200px,70px)'
    }
    if (counter == 1020){
        btn.style.transform = 'translate(200px,-200px)'
    }
    
    if (counter == 50){
            body.style.backgroundImage = 'url(3.jpg)'
        }


    if (counter == 100){
        body.style.backgroundImage = 'url(4.webp)'   
    }
    if (counter == 200){
        body.style.backgroundImage = 'url(https://minecraft-max.ru/upload/resize_cache/iblock/b8a/1110_635_2433ea41128299926be4a754872778461/b8a58263c92bfc8d838b7ff613bc820a.png)'   
    }
    if (counter == 300){
        body.style.backgroundImage = 'url(https://games.mail.ru/hotbox/content_files//gallery/36/1a/6b16cd80.jpeg)'   
    }
if (counter == 500){
        body.style.backgroundImage = 'url(https://vkplay.ru/hotbox/content_files/article/32075/lead_pic/b721f.jpeg)'
    }
if (counter == 600){
        body.style.backgroundImage = 'url(https://avatars.dzeninfra.ru/get-zen_doc/5098316/pub_63ded9c6870d200d285916d3_63def8067f14905056db8116/scale_1200)'
    }
if (counter == 800){
        body.style.backgroundImage = 'url(https://avatars.dzeninfra.ru/get-zen_doc/168601/pub_5f3cf77c447aa77d86c79661_5f3cfa36fdd0fe4bbaecafec/scale_1200)'
    }
    
   if (counter == 1000){
        body.style.backgroundImage = 'url(https://avatars.dzeninfra.ru/get-zen_doc/3384412/pub_5ee3ba452802463bcd50eec7_5ee494f2d82e982b889daa1c/scale_1200)'
    }

 
    if (counter == 5000){
        body.style.backgroundImage = 'url(https://cdn.shazoo.ru/535226_KAtOhu9W8I_axolotl.jpg)'
    }

})

    

  



  


  
    


 


