

//https://open.spotify.com/track/7Ie9W94M7OjPoZVV216Xus?si=324dd57088184b6b
//7Ie9W94M7OjPoZVV216Xus
//https://files.muffon.endorphine.by/temp/audio/spotify/7Ie9W94M7OjPoZVV216Xus.mp3



const btn = document.querySelector("#downloadTrack");
const dwLinkBox = document.querySelector(".downloadLink");
const songInfo = document.querySelector(".songInfo");
btn.addEventListener("click", download);



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
        let downloadLink = `https://files.muffon.endorphine.by/temp/audio/spotify/`+trackID+`.mp3`;
        dwLinkBox.innerHTML+=`<a href="${downloadLink}" target="_blank"> ${downloadLink}</a>`;


        /*Advanced download */
        songInfo.innerHTML+="loading..."
        
        //request
        
        fetch(muffonAPI+trackID).then(function (response){
            return response.json();
        }).then(function (obj){
            console.log(obj);
            advanced(obj);

            
        }).catch(function (e){
            console.error("You've got problem buddy");
            console.error(e);
        });

        
        



        // -------------------------------------------

        // let downloadLink = "https://files.muffon.endorphine.by/temp/audio/spotify/" + spotifyURL + ".mp3";
        //https://files.muffon.endorphine.by/temp/audio/spotify/
        
    }    
}


function advanced(song){
    console.log(JSON.stringify(song))
    songInfo.innerHTML+=JSON.stringify(song);

    // for (const property in song) {
    //     console.log(`${property}: ${object[property]}`);
    //   }

}

// responseText: "{\"track\":{\"player_id\":\"8511d1a5-f5f5-4311-8483-6bebf25c3378\",\"source_id\":\"spotify\",\"spotify_id\":\"6yr8GiTHWvFfi4o6Q5ebdT\",\"title\":\"'Till I Collapse\",\"artists\":[{\"name\":\"Eminem\",\"spotify_id\":\"7dGJo4pcD2V6oG8kP0tJRR\"},{\"name\":\"Nate Dogg\",\"spotify_id\":\"1Oa0bMld0A3u5OTYfMzp5h\"}],\"album\":{\"source_id\":\"spotify\",\"spotify_id\":\"1ftvBBcu7jYIvXyt3JWB8S\",\"title\":\"The Eminem Show\"},\"image\":{\"original\":\"https://i.scdn.co/image/ab67616d0000b273ccdb1982626f299b3b1d3efd\",\"large\":\"https://i.scdn.co/image/ab67616d0000b273ccdb1982626f299b3b1d3efd\",\"medium\":\"https://i.scdn.co/image/ab67616d00001e02ccdb1982626f299b3b1d3efd\",\"small\":\"https://i.scdn.co/image/ab67616d00004851ccdb1982626f299b3b1d3efd\",\"extrasmall\":\"https://i.scdn.co/image/ab67616d00004851ccdb1982626f299b3b1d3efd\"},\"duration\":\"04:58\",\"duration_seconds\":298,\"audio\":{\"present\":true,\"link\":\"https://files.muffon.endorphine.by/temp/audio/spotify/6yr8GiTHWvFfi4o6Q5ebdT.mp3\",\"source_id\":\"spotify\"}}}"



