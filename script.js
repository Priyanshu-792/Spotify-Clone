 console.log("Welcome to spotify");
 let songIndex=-1;
 let audioElement = new Audio('musics/2.mp3');
 let masterPlay=document.getElementById('masterPlay');
 let myProgressBar=document.getElementById('myProgressBar');

 let gif=document.getElementById('gif');
 let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

  let songs=[
    {songName:"Kaash Aisa hota", filePath:"musics/2.mp3", coverPath:"covers/cover2.jpg"},
    {songName:"Tu Hi Yaar Mera", filePath:"musics/3.mp3", coverPath:"covers/cover3.jpg"},
    {songName:"Loser", filePath:"musics/4.mp3", coverPath:"covers/cover4.jpg"},
    {songName:"Raat Bhar", filePath:"musics/5.mp3", coverPath:"covers/cover5.jpg"},
    {songName:"Kaabil Hoon", filePath:"musics/6.mp3", coverPath:"covers/cover6.jpg"},
    {songName:"Raghupati Raghav", filePath:"musics/7.mp3", coverPath:"covers/cover7.jpg"},
    {songName:"Kesariya", filePath:"musics/8.mp3", coverPath:"covers/cover8.jpg"},
    {songName:"Sajna ve", filePath:"musics/9.mp3", coverPath:"covers/cover9.jpg"},
    {songName:"Behati hawa sa Tha Woh", filePath:"musics/10.mp3", coverPath:"covers/cover10.jpg"},
    {songName:"Bhool Bhuliya 2 Title track", filePath:"musics/11.mp3", coverPath:"covers/cover11.jpg"},
    {songName:"Dilbar", filePath:"musics/12.mp3", coverPath:"covers/cover12.jpg"},
 ]
 songItems.forEach((element, i)=>{
  // console.log(element, i);
 element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })
//  audioElement.play();
//Handle play pause click
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else
    {
      audioElement.pause();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity=0;
    }
 })
 //listen to events
 audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
 })

 const makeAllPlays = ()=>{
 
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    
  })
 }

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
   
    makeAllPlays();
    
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
   
    audioElement.src= `musics/${songIndex+2}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    
    audioElement.currentTime=0;
    audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;

  })
 })

 


 document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=11){
    songIndex = 0;
  }
  else{
  
    songIndex+=1;
  }
  audioElement.src= `musics/${songIndex+2}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     
     gif.style.opacity=1;
 })

 
 document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex = 0;
  }
  else{
    songIndex -=1;
  }
  audioElement.src= `musics/${songIndex+2}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
     gif.style.opacity=1;
 })
