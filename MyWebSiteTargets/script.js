//https://ibb.co/C1y5fwj (target)
//https://ibb.co/C1y5fwjhttps://ibb.co/F3vnQrZ (gun)



function myFunction(e) {
    document.getElementById("gun").src = 'gun.png'
    var x = e.clientX;
    var y = e.clientY;
    var xw = 100*x/screen.width;
    var yh = 100-100*y/screen.height;
    var coor = "Coordinates: (" + xw + "%," + yh + "%)";
    if (xw < 50) {
        var deg = -180 + Math.atan(yh/(50-xw)) * 180/Math.PI - 30;
    }
    else {
        var deg = -Math.atan(yh/(xw+50)) * 180/Math.PI -10;
    }
    document.getElementById("gun").style.transform = "rotate(" + deg +"deg)"
    if (xw<50) {
        document.getElementById("gun").style.transform += "scaleY(-1)";
    }

  }
  
  function clearCoor() {
    document.getElementById("gun").src = 'blank.png'
  }

  function showstats(no){
    document.getElementById('audio').innerHTML = '<audio autoplay><source src="shot.mp3"></audio>';
  }