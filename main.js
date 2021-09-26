function generate(){
	const quotes = {
		"- Deepak Chopra" : '"Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them."',
		"- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
		"- Henry D. Thoreau" : '"The preachers and lecturers deal with men of straw, as they are men of straw themselves. Why, a free-spoken man, of sound lungs, cannot draw a long breath without causing your rotten institutions to come toppling down by the vacuum he makes. Your church is a baby-house made of blocks, and so of the state."',
		"- Pierce Brown, Red Rising" : '"Man cannot be freed by the same injustice that enslaved it."',
		
	}
	const authors = Object.keys(quotes);
 const author = authors[Math.floor(Math.random() * authors.length)];
	
	const quote = quotes[author];
	
	document.getElementById("quote").innerHTML = quote;
		document.getElementById("author").innerHTML = author;
	
	
	}