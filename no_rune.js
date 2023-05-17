nej_tak = ['Holger Rune', 'Brøndby IF', 'FCK', 'tennisikonet']

var list_items = document.querySelectorAll('li'), i;

for (i = 0; i < list_items.length; ++i) {
	if (nej_tak.some(el => list_items[i].innerText.includes(el))) {
		list_items[i].remove();
	}	
}
