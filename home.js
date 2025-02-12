

let intro=document.querySelector(".intro");
let logo=document.querySelector('.logo-header');
let logoSpan=document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx+1)*1300)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (idx+1)*3000)
            })
        }, 3000);
       
        setTimeout(()=>{
            intro.style.opacity="0";
            intro.style.zIndex="0";
        },5500);
        
    })
   
}

)




