const bazahasel = new Array  ("Lucyfer","Skazaniec","Lista Życzeń","Zima Stulecia","Poczucie humoru");
var randHaslo = bazahasel[Math.floor(Math.random() * bazahasel.length)];

var haslo:string = randHaslo;

haslo = haslo.toUpperCase();

var dlugosc:number = haslo.length;
var ile_skuch:number = 0;

var haslo1:string = "";

for (let i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
	{
	document.getElementById("plansza").innerHTML = haslo1;
	}

window.onload = start;

const litery:string[] = new Array<string>("A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż");



function start()
{
	
	var tresc_diva:string ="";
	
	for ( let i=0; i<=34; i++)
	{
		var element:string = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 16 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	document.getElementById("alfabet").innerHTML = tresc_diva;
		
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce:number, znak:string) {
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr:number)
{
	var trafiona:boolean = false
		
	for(let i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak (i,litery[nr]);
			trafiona = true
			
		}
	}

	if (trafiona == true)
	{
		var element:string = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color= "#00C000";
		document.getElementById(element).style.border= "3px solid #00C000";
		document.getElementById(element).style.cursor= "default";
		wypisz_haslo()
	}
	else
	{
		var element:string = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color= "#C00000";
		document.getElementById(element).style.border= "3px solid #C00000";
		document.getElementById(element).style.cursor= "default";
		document.getElementById(element).setAttribute("onclick",";");

		ile_skuch++;
		var obraz = "img/im"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}

	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML = "Wygrałeś! Hasło odkryte: " + haslo + 
	'<br /><br /> <span class = "reset" onclick= "location.reload()">Jeszcze raz?</span>';

	if(ile_skuch >=9)
	document.getElementById("alfabet").innerHTML = "Przegrałeś! Haśło to: " + haslo + 
	'<br /><br /> <span class = "reset" onclick= "location.reload()">Jeszcze raz?</span>';
}
