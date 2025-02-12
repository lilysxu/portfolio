



const musicIntro=document.getElementById("music-intro");
const button=document.getElementsByClassName("dropbtn");

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    musicIntro.style.opacity="0";
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          
        }
      }
    }
  }

function showText(id){
    switch(id){
        case"selfie":
        setTimeout(()=>{
          document.getElementById("caption").innerHTML="this was taken on this day blah blah"; 
                  },500);
            document.getElementById("selfie").classList.toggle("resize1");

            break;
        case "maddy":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="the intricacies of the water in this piece made it the hardest one for me to start; just looking at the ripples made my nose wrinkle in distaste. But perhaps it was that mental blockade I had to overcome that made this piece the most satisfying to complete (it's now one of my favorite drawings!)"; 
                    },500);
          
            document.getElementById("maddy").classList.toggle("resize2");
            break;
        case "pic3":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="pic3"; 
                    },500);
       
          document.getElementById("pic3").classList.toggle("resize3");
          break;
        case "pic4":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="pic4"; 
                    },500);
        
          document.getElementById("pic4").classList.toggle("resize4");
          break;
        case "pic5":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="pic5"; 
                    },500);
        
          document.getElementById("pic5").classList.toggle("resize5");
          break;
        case "pic6":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="pic6"; 
                    },500);
         
          document.getElementById("pic6").classList.toggle("resize6");
          break;
        case "pic7":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="pic7"; 
                    },500);
       
          document.getElementById("pic7").classList.toggle("resize7");
          break;
        case "pic8":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="pic8"; 
                    },500);
         
          document.getElementById("pic8").classList.toggle("resize8");
          break;
        case "pic9":
          setTimeout(()=>{
            document.getElementById("caption").innerHTML="I lost my grandfather in March of 2020 to cancer; soon after the funeral, I inherited his room in the house. When I first began moving in, his things were still neatly placed on the desk as if he was to return to them one day. Titled 'I Miss You' in Mandarin, this sketch is meant to honor his presence in our room: the jacket laid on the chair is his. The hat, glasses and mug are his, but the lamp and textbooks are mine."; 
                    },500);
       
          document.getElementById("pic9").classList.toggle("resize9");
          break;
    }
}


function showSong(id){
    switch(id){
        case"classical":
            document.getElementById("standard").src = "https://open.spotify.com/embed/track/1XdFVaI2UjsZ46bBpIeG6e?utm_source=generator";
            document.getElementById("standard").style.display="inline";
            break;
        case"soul":
            document.getElementById("standard").src = "https://open.spotify.com/embed/track/65GbQI9VDTs7vo6MJL2iJA?utm_source=generator";
            document.getElementById("standard").style.display="inline";
            break;
        case"r&b":
            document.getElementById("standard").src = "https://open.spotify.com/embed/track/0W4NhJhcqKCqEP2GIpDCDq?utm_source=generator";
            document.getElementById("standard").style.display="inline";
            break;
          case"bedroom pop":
          document.getElementById("standard").src = "https://open.spotify.com/embed/track/0eAuGrXyGFYwur9ARUe7LJ?utm_source=generator";
          document.getElementById("standard").style.display="inline";
          break;

    }
}

