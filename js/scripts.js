
// Mobile Menu 
  document.getElementById("hamburguer-icon").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0";
 }

  document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "-360px";
}


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";


var aboutUsTab = document.getElementsByClassName("single-tab");
  for(var a = 0; a < aboutUsTab.length; a++){
    
    aboutUsTab[a].onclick = function()
    {
      var clickedValue = this.innerHTML;
      document.getElementById("box-text").innerHTML = aboutUs[clickedValue];                      //here we are not writing like aboutUs.clickedValue (not using dot operator) coz var clickedValue is not follow variable naming rule
 
    //inner loop for not selected element
    for(var b = 0; b < aboutUsTab.length; b++) {
      aboutUsTab[b].style["backgroundColor"] = unseletectedColor;               //we can also do --->style.background-color(by follow the naming rule)
      aboutUsTab[b].style["fontWeight"] = "normal";
    }
    
    //for selected element
      this.style["backgroundColor"] = seletectedColor; 
      this.style["fontWeight"] = "bold"; 
    }
}


// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];



var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");

var serviceTitle = document.getElementById("service-title");
var serviceText = document.getElementById("service-text");


var currentInedx = 0;              //variable for accessing the value of ourServices array


nextArrow.onclick = function(){
  if(currentInedx == (ourServices.length - 1)){               //length of array here is 3 and index is 2(start from 0) , last element = length of array - 1(when next arrow last element par hoga toh again currentIndex = 0 krdenge)
    currentInedx = 0;
  }else{
    currentInedx += 1;         
  }
    serviceTitle.innerHTML = ourServices[currentInedx].title;
    serviceText.innerHTML = ourServices[currentInedx].text;
}


previousArrow.onclick = function(){
  if(currentInedx == 0){              
    currentInedx = ourServices.length - 1;
  }else{
    currentInedx -= 1;  
  }
    serviceTitle.innerHTML = ourServices[currentInedx].title;
    serviceText.innerHTML = ourServices[currentInedx].text; 
}




// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();

  
   


   