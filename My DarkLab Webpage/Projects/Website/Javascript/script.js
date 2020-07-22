var first=1;
var z=0;
var y = "";
var message="Welcome to My DarkLab...";
var active=1;
var status=1;
var i = 0;
var c="";
var ossi=true;
var hello=">Hello and welcome to my webpage! My name is Ashish Lonari .Lets Have fun with this machine.Its Simply Amazing:)";
var aboutme=">I am a student of PES Modern College Of Engineering, currently in my final year. I'm pursuing BE in Computer Engineering and am a Passionate Coder .:)";
var interests=">I have a vast variety of interests and love to explore new things. I love to play Cricket and have interest in solving Brain teasers , Sudoko and like Trekking";
var contactme=">You could contact me as my Mail id  is : ashish1234lonare@gmail.com<br><br>and my Linkedin id is <a href=\"https://www.linkedin.com/in/ashishlonari/\"><u>Here.</u></a> ";
var current=hello;
function onContentLoad()
{
	typeText();
	tid = setTimeout(mycode, 1);
}
function mycode() {
	// if (i<message.length)
	// {
		c=c.concat(message.charAt(i));
		i++;
		document.getElementById("p1").innerHTML=c;
		if (status==1) {
			var x = Math.ceil(c.length*6/message.length);
			for (var j=1;j<=x;j++)
			{
				document.getElementById("bulb"+j).src="Images/on.png";
			}


tid = setTimeout(mycode, 500);
}
}

function moveHome()
{
	if (status==0 && active!=1)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch1").src="Images/son.png";
		status=1;
		active=1;
		current=hello;
		slideText();
	}
}
function moveAboutMe()
{
	if (status==0 && active!=2)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch2").src="Images/son.png";
		status=1;
		active=2;
		current=aboutme;
		slideText();
	}
}
function moveInterests()
{
	if (status==0 && active!=3)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch3").src="Images/son.png";
		status=1;
		active=3;
		current=interests;
		slideText();
	}
}
function moveContactMe()
{
	if (status==0 && active!=4)
	{
		for (var j=1;j<=4;j++)
			document.getElementById("switch"+j).src="Images/soff.png";
		document.getElementById("switch4").src="Images/son.png";
		status=1;
		active=4;
		current=contactme;
		slideText();
	}

}
function slideText()
{
	typeText();
}

function typeText()
{
	y=0;
	tid2=setTimeout(type1(),1);
}

function type1()
{
	if (z<current.length)
	{
		y=y+current.charAt(z);
		z++;
		document.getElementById("maintext").innerHTML=y;
		
		if (first==0) {
			var d = new Date();
			var n = d.getSeconds();
			var bin="";
			while(n!=0)
			{
				var digit=n%2;
				bin=digit+bin;
				n=Math.floor(n/2);
			}
		}
		tid2=setTimeout(type1,90);
	}
	else
	{
		z=0;
		status=0;
		first=0;
	}
}