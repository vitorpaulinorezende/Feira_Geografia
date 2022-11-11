const texts = {
	1: ["Economia", 
		"O PIB é o produto interno bruto representa a soma de todos os bens e serviços finais produzidos numa determinada região e durante um determinado período, o PIB é um dos indicadores mais utilizados na macroemia  com o objetivo de quantificar a atividade econômica de uma região.<br/><br/> Com 38 milhões de habitantes, A Polônia é a maior economia da Europa Central e Leste . O país , que registra um crescimento ininterrupto desde que virou uma economia de mercado a 30 anos, avançou 4,1% em 2019, após uma alta de 5,3% em 2018",
		"./Images/graphic.png"],
	2: ["Importação / Exportação",
		"A importação tem em 1° lugar medicamento, em 2° lugar partes de carros como volante e etc., em 3° lugar borrachas sintéticas. Isso gera um gasto de 192 milhões de dólares. <br/><br/> A exportação tem em 1° lugar minérios de cobre, em 2° lugar farelos de soja e outros alimentos para animais, em 3° lugar motores de pistão. Esses produtos geram um ganho de 598 milhões de dólares e um lucro de 406 milhões de dólares com os gastos da importação",
		"./Images/polonia_dados.png"],
	3: ["Parceiros e Blocos Econômicos",
		"Principais Parceiros de Exportação: Alemanha 28,8,Reino Unido 6,6, República Tcheca 6,4,França 6,3,Itália 5,5, países baixos 4,5, Rússia 4,5 (2011) <br/><br/> Principais Parceiros de Importação: Alemanha 26,7, Rússia 10,3, países baixos 5,9,Itália 5,3,República popular da China 5,3, França 4,4, República Tcheca 4,3(2011) <br/><br/> Blocos econômicos: OMC ,União Europeia(UE), OCDE",
		"./Images/bloco.jpg"],
};

var selectedContent = 1;
var contentContainer = document.querySelector(".content-container");
var content = document.querySelector(".content");

function setContent(number) {
	content.querySelector("h1").setHTML("<h1>"+texts[number][0]+"</h1>");
	content.querySelector("p").setHTML("<p>"+texts[number][1]+"</p>");
	content.querySelector("img").setAttribute("src", texts[number][2]);
}

function prevContent() {
	if (selectedContent > 1) {
		selectedContent--;
		setContent(selectedContent)
	}
	else if (selectedContent == 1) {
		selectedContent = 4
		setContent(selectedContent)
	};
	content.setAttribute("id", "anim");
}

function nextContent() {
	if (selectedContent < 3) {
		selectedContent++;
		setContent(selectedContent)
	}
	else if (selectedContent == 3) {
		selectedContent = 1
		setContent(selectedContent)
	};
	content.setAttribute("id", "anim");
}


document.addEventListener("click", function click(event) {
	if (window.innerWidth < 720){
		if (event.clientX < window.innerWidth / 2) {
			prevContent()
		} else if (event.clientX > window.innerWidth / 2) {
			nextContent()
		}
	}
})
