let downloadLink;//just mp3
const muffonAPI="https://muffon.endorphine.by/api/v2/spotify/tracks/"
const standardSpotifyUrl="https://open.spotify.com/track/";

const dwLinkBox = document.querySelector(".downloadLink");
const dwLinkError = document.querySelector(".downloadLink__error");
const songInfo = document.querySelector(".songInfo");
const downBTN = document.querySelector(".download_btn")
btnClicked = false;
downBTN.addEventListener('click', function(){
    
    if(btnClicked==false){
        btnClicked=true;
        download()
        buttonTransform.start()
    }
    
});


function download(){
    validURL=true;
    let spotifyURL =document.querySelector("#url").value;
  

    if(!(spotifyURL.startsWith(standardSpotifyUrl))){
        validURL=false
        dwLinkError.innerHTML="correct form: https://open.spotify.com/track/..."
        btnClicked=false;
    }
    else{
        let trackID;
        trackID = spotifyURL.indexOf("?")!=-1 ? spotifyURL.substring(standardSpotifyUrl.length,spotifyURL.indexOf("?")) : spotifyURL.substr(standardSpotifyUrl);//ucinanie adresu
    
            

        // alert(trackID)
        
       

        //simple download
        downloadLink = `https://files.muffon.endorphine.by/temp/audio/spotify/`+trackID+`.mp3`;
        dwLinkBox.innerHTML=`<a href="${downloadLink}" target="_blank"> download *.mp3</a>`;
        dwLinkError.innerHTML="";


        /*Advanced download */
        song_title.innerHTML+="loading..."
        
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


const song_title = document.querySelector(".song_title")
const  song_image= document.querySelector(".song_image")
const  song_PRO_link= document.querySelector(".song_PRO_link")
const song_artists = document.querySelector(".song_artists")
const song_duration = document.querySelector(".song_duration")






function advanced(song){
    
    console.log(JSON.stringify(song))
    // songInfo.innerHTML=JSON.stringify(song);
    // console.log(songInfo["track"])
    

    song.getTitle = function(){
        return this.track.title;
    }
    song.getImg = function(){
        return this.track.image.original;
        
    }

    song.getArtists = function(){
        return this.track.artists[0].name;   
    }
    song.getDuration = function(){
        return this.track.duration;
    }

    // console.log(song.track.title)
    console.log(song.getTitle());
    console.log(song.getImg());

    song_image.innerHTML+=`<img src="${song.getImg()}" alt=${song.getTitle()}/>`;

    song_title.innerHTML=`${song.getTitle()}`;

    song_artists.innerHTML=`${song.getArtists()}`;
    song_duration.innerHTML=`${song.getDuration()}`;




    dwLinkBox.innerHTML+=`<br><br>Advanced download:<br><a href="${downloadLink}" target="_blank" title="download with artist and album image" onclick="alert('download with artist and album image\n SOON')" download="${song.getTitle()}">${song.getTitle()}.ogg</a>`;

    // proBtn.addEventListener("click", ()=>{
    //     proDownload(song.getTitle(),downloadLink);
    // });    

}




























// -----------------------animations


const buttonTransform = KUTE.fromTo(
    '#btnStyle1', {
        path: '#btnStyle1'
    }, {
        path: '#btnStyle2'
    }, {
        repeat: 0,
        duration: 1500,
        // yoyo: true
    }

)



const blob = KUTE.fromTo(
    '#blob1',
        {path: '#blob1'},
        {path: '#blob2'},
        {repeat: 999, duration: 3000, yoyo: true}
    
)

blob.start()