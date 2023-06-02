var lengthParameter = 580;
var maxw = lengthParameter;var maxh = lengthParameter;
var s;
var timesw=15;
var x1=350;var y1=350;
var startLevel = 1;


function checker()
{
	s=document.getElementById("a");
	s.height = lengthParameter; s.width = lengthParameter;
	if(s.width<=s.height){border = 10;boxwidth = s.width/80;}
	if(s.width>s.height){border = 10;boxwidth = s.height/80;}
	s.addEventListener("click",function(){if(timevelo==0)drawer();else zdir*=-1},false);
	s.addEventListener("mousemove",dre,false);
	settings = document.getElementById("settings");
	sett = document.getElementById("sett");
	sett.width = maxw-2*border;
	docent = document.getElementById("docent");
	docent.width = maxw-2*border;
    settings.addEventListener("click",savenew,false);
    settings.width = s.width;
    settings.height = s.height;
    document.getElementById("savenew").addEventListener("click",savenew,false);

    sett.addEventListener("click",function(){document.getElementById('docent').style.display='block';settingFunctionality();},false);
    s=document.getElementById("a").getContext("2d");
        s.fillStyle="rgba(256,256,256,0.9)";
    	s.fillRect(0,0,maxw,maxh);
    	s.lineWidth=5;
    	s.strokeRect(border,border,maxw-2*border,maxh-2*border);

    	s.fillStyle="black";
    	s.font="italic x-large 'Essays 1743','Marker Felt','Kristen ITC','Viner Hand ITC','Times New Roman',serif";
    	s.fillText(wincount+"/"+level,border,maxh-border-5);
    recall();
    level=startLevel;
    timeratio=timeratioorig;
	createbox();
	looker();
}

function savenew() {
        drawer();
        document.getElementById('settings').style.display='none';
        document.getElementById('sett').style.display='none';
        document.getElementById('docent').style.display='none';
}

var imgbad = new Image();
imgbad.src="data:image/png;base64,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";

var imggood = new Image();
imggood.src="data:image/png;base64,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";

var imgballs = new Image();
imgballs.src="data:image/png;base64,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";

var zdir=1;
var conv=80;var gconv=1.3;
var vconv=1;
var boxwidth;
var wincount=0;var opos=0;
var border;
var rotateangle = 0.03;
var incrementcounter=0;
var sumofsquares=0;
var highestscore=0;
var timeratio=0.3;
var timeratioorig=timeratio;
var vmulti = 4;
var timevelo=0;
var level=Math.round(startLevel);
var goodguys = [];
var badguys = [];
var balls = [];
var dragan = new Object();
dragan.gconv = gconv;
dragan.conv = conv;
dragan.timesw = timesw;
dragan.imggoodSrc = imggood.src;
dragan.imgbadSrc = imgbad.src;
dragan.imgballsSrc = imgballs.src;
dragan.startLevel = 1
dragan.timeratioorig = timeratioorig;

function drawer()
{
    var stats=0;var finalscore = 0;
    s.fillStyle="rgba(256,256,256,0.9)";
	s.fillRect(0,0,maxw,maxh);
	s.strokeRect(border,border,maxw-2*border,maxh-2*border);

	s.fillStyle="black";
	s.fillText(wincount+"/"+level,border,maxh-border-5);

	robotDrawer();

	for(var j =0;j<level;j++)
	{
    	if(balls[j].alive==1) {
    	    x=balls[j].x;y=balls[j].y;
    	    vx=balls[j].vx;vy=balls[j].vy;
            sumofsquares=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));

            var ax=zdir*(x1-x)/(gconv*sumofsquares);
    	    var ay=zdir*(y1-y)/(gconv*sumofsquares);

            var rotateFactor = Math.atan2(vx,vy)+(Math.PI/2000);

    	    s.translate(x,y);
    	    s.rotate(rotateFactor);
    	    s.drawImage(imgballs,-2*boxwidth,-2*boxwidth, 4*boxwidth, 4*boxwidth);
    	    s.rotate(-rotateFactor);
    	    s.translate(-x,-y);

    	    var ry=vy/conv;var rx=-vx/conv;
    	    vx=vx+ax+rx;vy=vy-ay-ry;
    	    x=x+(vconv)*vx;y=y-(vconv*vy);

     	    if((x>maxw-border-2*boxwidth)||(x<border+2*boxwidth)) {x=(maxh/2)+(x>(maxh/2)?1:-1)*((maxh/2)-border-2*boxwidth);vx=-vx;}
     	    if(Math.abs(y-(maxw/2))>(maxw/2)-border-2*boxwidth) {y=(maxw/2)+(y>(maxw/2)?1:-1)*((maxw/2)-border-2*boxwidth);vy=-vy;}

    	    balls[j].x=x;balls[j].y=y;balls[j].vx=vx;balls[j].vy=vy;
    	    stats += 1;
    	}
    };

    var tempTimeVortex = window.setTimeout(drawer,timesw);

    timebar();

    if(timevelo>1000*level) stats=0;
    if(stats==0)
    {
        window.clearTimeout(tempTimeVortex)
    	for(var i = 0;i<level;i++) finalscore+=i;
    	finalscore+=wincount;
    	if(finalscore>highestscore) highestscore=finalscore;
        loss();
        return;
    }
    for(var j = 0; j < level; j++) {if(balls[j].alive) balls[j].alive=collisionChecker(balls[j].x,balls[j].y);};
}

function timebar(){
    s.fillStyle="blue";
    s.fillRect(border/2+2,0,(timevelo/level)*(maxw-1.5*border+1)/1000,border);
    timevelo+=timeratio*timesw;
}

function collisionChecker(x,y) {
    var returnValue=1;
    for(var i =0; i<level; i++)                               //Checks for goodguy/badguy collisions
    {
        if(goodguys[i].alive==1){
            var boxx=goodguys[i].x; var boxy = goodguys[i].y;
            if((x<boxx+4*boxwidth)&&(x>boxx-boxwidth)&&(y<boxy+4*boxwidth)&&(y>boxy-boxwidth)){
        	    goodguys[i].alive=0;
        	    wincount+=1;
        	    if(wincount==level) victory();
            }
        }
        if(badguys[i].alive==1){
            var boxx=badguys[i].x; var boxy = badguys[i].y;
            if((x<boxx+4*boxwidth)&&(x>boxx-boxwidth)&&(y<boxy+4*boxwidth)&&(y>boxy-boxwidth)){
        	    returnValue = 0;
        	    break;
            }
        }
    }
    return returnValue;
}

function robotDrawer() {
	for(var i = 0;i<level;i++)
	{
	    if(goodguys[i].alive==1){
	    	s.drawImage(imggood,goodguys[i].x,goodguys[i].y,4*boxwidth,4*boxwidth);
        	goodguys[i].x += vmulti*goodguys[i].vx;
        	goodguys[i].y += vmulti*goodguys[i].vy;
        	var xpos=goodguys[i].x;var ypos=goodguys[i].y;
        	if((ypos>maxh-border-4*boxwidth)||(ypos<border)) goodguys[i].vy *= -1;
        	if((xpos>maxw-border-4*boxwidth)||(xpos<border)) goodguys[i].vx *= -1;
	    }
	    if(badguys[i].alive==1){
	        var rotateFactor = Math.atan2(badguys[i].vx,-badguys[i].vy);
           	var xtranslate = badguys[i].x+2*boxwidth;
           	var ytranslate = badguys[i].y+2*boxwidth;
           	s.translate(xtranslate,ytranslate);
           	s.rotate(rotateFactor);
           	s.drawImage(imgbad,-2*boxwidth,-2*boxwidth,4*boxwidth,4*boxwidth);
           	s.rotate(-rotateFactor);
           	s.translate(-xtranslate,-ytranslate);
            badguys[i].x += vmulti*badguys[i].vx;
        	badguys[i].y += vmulti*badguys[i].vy;
        	var xpos=badguys[i].x;var ypos=badguys[i].y;
        	if((ypos>maxh-border-4*boxwidth)||(ypos<border)) badguys[i].vy *=-1;
        	if((xpos>maxw-border-4*boxwidth)||(xpos<border)) badguys[i].vx *= -1;
        }
	}
}

function victory() {
    timeratio *= 1.3;
    console.log("Level win: "+level);
    level += 1;
    console.log(level);
    wincount = 0;
    createbox();
    timevelo = 0;
}

function loss() {
    timeratio = timeratioorig;
   	level = startLevel;
   	wincount = 0;
   	createbox();
   	timevelo = 0;
   	looker();
}

function dre(event)
{
	x1=event.clientX;
	y1=event.clientY;
};

function createbox() {
	for(var i = 0; i<3*level;i++)
	{
		var psych = new Object();
		psych.x = border+Math.random()*(maxw-2*border-4*boxwidth);
		psych.y = border+Math.random()*(maxh-2*border-4*boxwidth);
		psych.vx = Math.random()-0.5;
		psych.vy = Math.random()-0.5;
		psych.alive = 1;
		if(i<level) goodguys[i] = psych;
		else if((level<=i)&&(i<2*level)) badguys[i-level] = psych;
		else balls[i-2*level] = psych;
	}
} 

function looker()
{
	document.getElementById("highscorebloc").innerHTML = highestscore;
	settings.style.display = "block";
	sett.style.display='block';
    docent.style.display = "none";
	igood = document.getElementById("good");
    igood.src = imggood.src;
    igood.width = boxwidth*4;
    igood.height = boxwidth*4;
    ibad = document.getElementById("bad");
    ibad.src = imgbad.src;
    ibad.width = boxwidth*4;
    ibad.height = boxwidth*4;
    iballs = document.getElementById("balls");
    iballs.src = imgballs.src;
    iballs.width = boxwidth*4;
    iballs.height = boxwidth*4;
}

function settingFunctionality() {
    tgconv = document.getElementsByClassName("tgconv")[0];
        tgconv.value = gconv;
        tgconv.addEventListener("change",function(){gconv=this.value;savetolocalstorage();},false);
        document.getElementsByClassName("tgconv")[1].innerHTML= tgconv.value;
    tconv = document.getElementsByClassName("tconv")[0];
        tconv.value = conv;
        tconv.addEventListener("change",function(){conv=this.value;savetolocalstorage();},false);
        document.getElementsByClassName("tconv")[1].innerHTML= tconv.value;
    ttimesw = document.getElementsByClassName("ttimesw")[0];
        ttimesw.value = timesw;
        ttimesw.addEventListener("change",function(){timesw=this.value;savetolocalstorage();},false);
        document.getElementsByClassName("ttimesw")[1].innerHTML= ttimesw.value;
    tstartlevel = document.getElementsByClassName("tstartlevel")[0];
        tstartlevel.value = startLevel;
        tstartlevel.addEventListener("change",function(){startLevel=Math.round(this.value);level=startLevel;createbox();savetolocalstorage();},false);
        document.getElementsByClassName("tstartlevel")[1].innerHTML= tstartlevel.value;
    ttimeratioorig = document.getElementsByClassName("ttimeratioorig")[0];
        ttimeratioorig.value = timeratioorig;
        ttimeratioorig.addEventListener("change",function(){timeratioorig=this.value;timeratio=timeratioorig;savetolocalstorage();},false);
        document.getElementsByClassName("ttimeratioorig")[1].innerHTML= timeratioorig;
    tballs = document.getElementById("tballs");
        tballs.value = imgballs.src;
        tballs.addEventListener("change",function(){imgballs.src=this.value;iballs.src = imgballs.src;savetolocalstorage();},false);
    tgoodguys = document.getElementById("tgoodguys");
        tgoodguys.value = imggood.src;
        tgoodguys.addEventListener("change",function(){imggood.src=this.value;igood.src = imggood.src;savetolocalstorage();},false);
    tbadguys = document.getElementById("tbadguys");
        tbadguys.value = imgbad.src;
        tbadguys.addEventListener("change",function(){imgbad.src=this.value;ibad.src = imgbad.src;savetolocalstorage();},false);
    resetDefaults = document.getElementById("resetDefaults");
        resetDefaults.addEventListener("click",function(){savetolocalstorage(dragan);recall();},false);
}

function savetolocalstorage(ard){
    if(ard==null){
        var ard = new Object();
        ard.gconv = gconv;
        ard.conv = conv;
        ard.timesw = timesw;
        ard.imggoodSrc = imggood.src;
        ard.imgbadSrc = imgbad.src;
        ard.imgballsSrc = imgballs.src;
        ard.startLevel = startLevel;
        ard.timeratioorig = timeratioorig;
    }
    localStorage.setItem('spaceshipsExtensionSessionStorage3',JSON.stringify(ard));
}

function recall(){
    data = JSON.parse(localStorage.getItem('spaceshipsExtensionSessionStorage3'));
    if (data) {
        gconv = data.gconv;
        conv = data.conv;
        timesw = data.timesw;
        imggood.src = data.imggoodSrc;
        imgbad.src = data.imgbadSrc;
        imgballs.src = data.imgballsSrc;
        startLevel = data.startLevel;
        timeratioorig = data.timeratioorig;
    }
    else savetolocalstorage(dragan);
}

document.addEventListener("DOMContentLoaded",checker,false);
