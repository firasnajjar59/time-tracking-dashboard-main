// json object
let jsonArray= `[
  
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`;
// js object
let jsArray= JSON.parse(jsonArray);

// on load function (display daily information)
document.addEventListener('onload',displayData("daily"));

// function to display info sorted by time(weekly, daily, monthly)
function displayData(time){
    active(time);
    
    let last="";
    if(time=="daily"){
        last="day";
    }else if(time=="monthly"){
        last="month";
        
    }else{
        
        last="week";
    }

  for(let i=0; i<jsArray.length;i++){
    
    
    
    
    let id=document.getElementById(i);


    id.innerHTML=`<div class="bg-img"><img src="./images/icon-${jsArray[i].title}.svg" alt=""></div>
    <div class="info">
      <div class="info-title">
        <h3>${jsArray[i].title}</h3>
        <div class="icon"> <img src="./images/icon-ellipsis.svg" alt=""></div>
      </div>
      <p> ${jsArray[i].timeframes[time].current}hrs </p>
      <p>last ${last} - ${jsArray[i].timeframes[time].previous}hrs</p>
    </div>`
  }

}
// function to move active class
function active(timeValue){
    
    switch (timeValue){
        case "daily":
            document.getElementById("daily").setAttribute("class","active");
            document.getElementById("weekly").removeAttribute("class","active");
            document.getElementById("monthly").removeAttribute("class","active");
            break;
        case "monthly":
            document.getElementById("daily").removeAttribute("class","active");
            document.getElementById("weekly").removeAttribute("class","active");
            document.getElementById("monthly").setAttribute("class","active");
            break;
        case "weekly":
            document.getElementById("daily").removeAttribute("class","active");
            document.getElementById("monthly").removeAttribute("class","active");
            document.getElementById("weekly").setAttribute("class","active");
            break;
    }
}
