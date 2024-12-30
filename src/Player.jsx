import { useState, useEffect, useRef } from "react";
 import img5349 from "./assets/IMG_5349.jpeg";
 import audioFireboy from "./assets/Fireboy-DML---iseoluwa.mp3";
 import audioZinoleesky from "./assets/Zinoleesky-Ft.-Naira-Marley---Abanikanda.mp3";
 import audioMohbad1 from "./assets/Mohbad_Ask_About_Me_9jaflaver.com_.mp3";
 import audioMohbad from "./assets/Mohbad_Tiff_9jaflaver.com_.mp3";
 import audioVibes from "./assets/Vibez-Inc-Ft-TML-Vibes-Wells-Fargo.mp3"
function Player(){
 
const [music] = useState([
{name:"iseoluwa", artist: "Fireboy-DML", img:img5349, audio:audioFireboy, duration:"2:26" },
{name:"Abanikanda", artist: "Zinoleesky-ft.-Naira-Marley", img:img5349, audio:audioZinoleesky, duration:"2:26" },
{name:"Ask-About-me", artist: "Mohbad", img:img5349, audio:audioMohbad1, duration:"2:26" },
{name:"Tiff", artist: "Mohbad", img:img5349, audio:audioMohbad, duration:"2:26" },
{name:"Well-fargo", artist: "Vibes-inc-ft-TML-Vibes", img:img5349, audio:audioVibes, duration:"2:26" },

]);
 
const[currentSongIndex, setCurrentSongIndex] = useState(0);
const audioRef = useRef(new Audio(music[0].audio)); 
const [progress, setProgress] =useState(0);


useEffect(()=>{
  const updateProgress = ()=>{
    if(audioRef.current){
       const currentTime = audioRef.current.currentTime;
       const duration = audioRef.current.duration;
       setProgress((currentTime / duration)* 100);
    }
  };

  const handleSongEnd = () => {
    handleNext();
  };

  audioRef.current.addEventListener("timeupdate", updateProgress);
  audioRef.current.addEventListener("ended", handleSongEnd);

return()=>{
  if(audioRef.current){
    audioRef.current.removeEventListener("timeupdate", updateProgress);
    audioRef.current.removeEventListener("ended", handleSongEnd);
  }
}
}, [currentSongIndex]);

useEffect(() => {
 
  audioRef.current.src = music[currentSongIndex].audio;
  audioRef.current.play(); 
}, [currentSongIndex]);


function handleProgressChange(e){
  const value = e.target.value
  setProgress(value);
  audioRef.current.currentTime = (value/100) * audioRef.current.duration;
}

   
function handlePrevious(){
  setCurrentSongIndex((prevIndex=>
    prevIndex === 0 ? music.length - 1 : prevIndex - 1
  ))
}

function handlePlay(){
audioRef.current.play();
}

function handleStop(){
  audioRef.current.pause();

  setProgress(0)
}

function handleNext(){
  setCurrentSongIndex((prevIndex =>
    prevIndex === music.length - 1 ? 0 : prevIndex + 1 
  ))

}

function handleMusicClick(index){
  setCurrentSongIndex(index);
  audioRef.current.play();
}


return(
  <div>
 
  

  <div className="input">
  
    <h6>
       Now Playing: {music[currentSongIndex].name} -{" "}
      {music[currentSongIndex].artist}
    </h6>
  <input type="range" min="0" max="100" value={progress} onChange={handleProgressChange} />
  <div>
<button onClick={handlePrevious} className="pre"> Previous</button>
  <button onClick={handlePlay} className="pla">Play</button>  
<button onClick={handleStop} className="pau">Pause</button>
<button onClick={handleNext} className="nex">Next</button>

</div>
            
 </div>
 
 <br />

 <div className="parent">

<div>
      <img src={music[currentSongIndex].img} alt={music[currentSongIndex].name} height="200px" width="200px"/>
      <h5>{music[currentSongIndex].name}</h5>
      <p>{music[currentSongIndex].artist}</p>
      <p>{music[currentSongIndex].duration}</p> 
</div>
<div className="scrollbar" >
   <h2>Music List</h2>
<ul>
  {music.map((song,index)=>(
    <li key={index} onClick={()=>handleMusicClick(index)} style={{cursor:"pointer", marginBottom:"10px", listStyleType:"none"}}>
    <img src={song.img} alt={song.name}  height="50px" width="50px"/>
    <span>
      {song.name} - {song.artist} ({song.duration})
    </span>

    </li>
  ))}
</ul>

</div>

</div>




  </div>


)
}

export default Player;



