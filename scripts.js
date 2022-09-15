console.log("welcome");
let songIndex=0;
let audioElement= new Audio('./projectmusic/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myprogress=document.getElementById("myprogress");
let masterSongName=document.getElementById("masterSongName");
let songs=[
    {songName:"Deva-Deva" ,filePath:"./projectmusic/1.mp3",coverpath:"./covers/1.jpg"},
    {songName:"Kesariya" ,filePath:"./projectmusic/2.mp3",coverpath:"./covers/2.jpg"},
    {songName:"Meri-Jindagi-hai-tu" ,filePath:"./projectmusic/3.mp3",coverpath:"./covers/3.jpg"},
    {songName:"Rata-Lambiya" ,filePath:"./projectmusic/4.mp3",coverpath:"./covers/4.jpg"},
    {songName:"Talash" ,filePath:"./projectmusic/5.mp3",coverpath:"./covers/5.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
   //console.log('timeupdate');
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   //console.log(progress);
   myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value * audioElement/100;
})

const makeallplay = ()=>{
    
    Array.from(document.getElementsByClassName('sonItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
 }

Array.from(document.getElementsByClassName('sonItemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeallplay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        audioElement.src=`./projectmusic/${songIndex+1}.mp3`
        masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`./projectmusic/${songIndex+1}.mp3`
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`./projectmusic/${songIndex+1}.mp3`
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})