console.log( "Welcome spotify clone" );
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('itemname'));
let masterSongName = document.getElementById('masterSongName');

let songs =[
    {songName:"warriyo-mortals",filePath: "songs/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"cielo-huma-huma",filePath: "songs/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Different Heaven & Eh!DE",filePath: "songs/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"janji-heroes",filePath: "songs/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Flowers",filePath: "songs/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"Treat u better",filePath: "songs/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Let me love you",filePath: "songs/7.mp3",coverPath:"cover/7.jpg"},
    {songName:"Love story",filePath: "songs/8.mp3",coverPath:"cover/8.jpg"},
    {songName:"Perfect",filePath: "songs/9.mp3",coverPath:"cover/9.jpg"},
    {songName:"Dandelions",filePath: "songs/10.mp3",coverPath:"cover/10.jpg"},
]

//audioElement.play();

//handle play /pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
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
//listen to event

  audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
songItems.forEach((element,i)=>{ 
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("itemname")[0].innerText=songs[i].itemname;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})