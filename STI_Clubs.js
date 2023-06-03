function reload(){
    window.location.reload();
    return false;
    }
    function refresh(){
        window.location.reload();
    }
    function yes_title(){
        var x = document.getElementById("clubs-title-container");
        x.innerHTML = "YES Club"
        x.style.right = "700px"
        var y = document.getElementById("each-club-mean");
        y.innerHTML ="A club that will help you develop your knowledge and gain meaningful information on starting a business."
    
    }
    function stage_title(){
        var x = document.getElementById("clubs-title-container");
        x.innerHTML = "The Stage Club"
        x.style.right = "650px"
        var y = document.getElementById("each-club-mean");
        y.innerHTML = "A club that will help you discover your talent that you have not shown to other people such as dancing, hiphop, ballroom and others."
    }
    function leader_title(){
        var x = document.getElementById("clubs-title-container");
        x.innerHTML = "Leadership Club"
        x.style.right = "650px"
        var y = document.getElementById("each-club-mean");
        y.innerHTML = "A leadership club can serve as a platform for individuals to develop their leadership skills, exchange ideas, and collaborate on projects or initiatives aimed at making a positive impact."
    }
    function chef_title(){
        var x = document.getElementById("clubs-title-container");
        x.innerHTML = "Chef Club"
        x.style.right = "700px"
        var y = document.getElementById("each-club-mean");
        y.innerHTML = "A club for you to know what you have learned in cooking different types of dishes or desserts and learn from it."
    }
    function dmc_title(){
        var x = document.getElementById("clubs-title-container");
        x.innerHTML = "DMC Club"
        x.style.right = "700px"
        var y = document.getElementById("each-club-mean");
        y.innerHTML = "A Digital Millennial Club connects and empowers millennials interested in digital technology through skill development, networking, innovation, and entrepreneurial support. A club where computers, games and others you can join here and expand your knowledge of using computers."
    }
    function rcy_title(){
        var x = document.getElementById("clubs-title-container");
        x.innerHTML = "RCY Club"
        x.style.right = "700px"
        var y = document.getElementById("each-club-mean");
        y.innerHTML = "A club that will educate and empower the children and youth in the spirit of Red Cross through trainings that include effective leadership, provide opportunities for directing and harnessing their energy and idealism into worthwhile humanitarian activities."
    }
    
    function funcbar() {
      
        var x = document.getElementById("snackbar1");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

    function funcbar2() {
        var y = document.getElementById("snackbar2");
        y.className = "show";
        setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
      }
    function funcbar3() {
        var z = document.getElementById("snackbar3");
        z.className = "show";
        setTimeout(function(){ z.className = z.className.replace("show", ""); }, 3000);
      }