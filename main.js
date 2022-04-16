

//https://open.spotify.com/track/7Ie9W94M7OjPoZVV216Xus?si=324dd57088184b6b
//7Ie9W94M7OjPoZVV216Xus
//https://files.muffon.endorphine.by/temp/audio/spotify/7Ie9W94M7OjPoZVV216Xus.mp3
// import { saveAs } from 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js';


const btn = document.querySelector("#downloadTrack");
const dwLinkBox = document.querySelector(".downloadLink");
const songInfo = document.querySelector(".songInfo");
const proBtn = document.querySelector("#proDownload");
btn.addEventListener("click", download);



let downloadLink;//just mp3
// const muffonAPI ="https://files.muffon.endorphine.by/temp/audio/spotify/7Ie9W94M7OjPoZVV216Xus.mp3"
// const muffonAPI = "https://muffon.endorphine.by/api/v2/spotify/tracks/7Ie9W94M7OjPoZVV216Xus";
const muffonAPI="https://muffon.endorphine.by/api/v2/spotify/tracks/"
const standardSpotifyUrl="https://open.spotify.com/track/";

function download(){
    validURL=true;
    let spotifyURL =document.querySelector("#trackID").value;

    if(!(spotifyURL.startsWith(standardSpotifyUrl))){
        validURL=false
        dwLinkBox.innerHTML="correct form: https://open.spotify.com/track/..."
    }
    else{
        let trackID;
        trackID = spotifyURL.indexOf("?")!=-1 ? spotifyURL.substring(standardSpotifyUrl.length,spotifyURL.indexOf("?")) : spotifyURL.substr(standardSpotifyUrl);//ucinanie adresu
    
            

        // alert(trackID)
        
       

        //simple download
        downloadLink = `https://files.muffon.endorphine.by/temp/audio/spotify/`+trackID+`.mp3`;
        dwLinkBox.innerHTML=`<a href="${downloadLink}" target="_blank"> ${downloadLink}</a>`;


        /*Advanced download */
        songInfo.innerHTML+="loading..."
        
        //request
        console.log(muffonAPI+trackID)
        // fetch(`resources/0.json`).then(function (response){
        fetch(muffonAPI+trackID).then(function (response){
            return response.json();
        }).then(function (obj){
            console.log(obj);
            advanced(obj);

            
        }).catch(function (e){
            console.error("You've got problem buddy");
            console.error(e);
        });
        
    }    
}


function advanced(song){
    
    console.log(JSON.stringify(song))
    songInfo.innerHTML=JSON.stringify(song);
    // console.log(songInfo["track"])
    

    song.getTitle = function(){
        return this.track.title;
    }
    song.getImg = function(){
        return this.track.image.original;
        
    }
    // console.log(song.track.title)
    console.log(song.getTitle());
    console.log(song.getImg());

    songInfo.innerHTML+=`<img src="${song.getImg()}" alt=${song.getTitle()}/>`;




    dwLinkBox.innerHTML+=`<br><br><a href="${downloadLink}" target="_blank" download="${song.getTitle()}">${song.getTitle()}.mp3</a>`;

    // proBtn.addEventListener("click", ()=>{
    //     proDownload(song.getTitle(),downloadLink);
    // });    

}


function proDownload(title, file){

    alert(file)


}





