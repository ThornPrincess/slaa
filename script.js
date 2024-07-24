const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda com vontade de gritar?",
        alternativas: [
            {
                texto: "Nunca notei, mas meus pais reclamam",
                afirmacao: "você pode nunca ter notado,"
            },
            {
                texto: "Eu pelo menos admito",
                afirmacao: "você sempre soube,"
            }
        ]
    },
    {
        enunciado: "Poucas ideais, qualquer coisa você dá uma bicada?",
        alternativas: [
            {
                texto: "Obvio que não",
                afirmacao: "mas você já tinha atitudes suspeitas,"
            },
            {
                texto: "Essa é a única opção!",
                afirmacao: "sempre agiu como um,"
            }
        ]
    },
    {
        enunciado: "Queria poder voar e largar tudo?",
        alternativas: [
            {
                texto: "Com certeza!",
                afirmacao: "tem sonhos específicos,"
            },
            {
                texto: "Não deixe meus pais descobrirem!",
                afirmacao: "teve os mesmos sonhos,"
            }
        ]
    },
    {
        enunciado: "Se questiona todos os dias porque o principal meio de transporte no Brasil é o rodoviário se nosso país tem proporções continentais ",
        alternativas: [
            {
                texto: "Deixa baixo, deixa baixo",
                afirmacao: "dúvidas de qualquer galinha,"
            },
            {
                texto: "VOCẼ É DO GOVERNO, NÉ",
                afirmacao: "pensamentos tão inteligentes, referentes ao cérebro de galinha,"
            }
        ]
    },
    {
        enunciado: "As pessoas costumam te chamar de galinha",
        alternativas: [
            {
                texto: "Já me ocorreu",
                afirmacao: "só você não tinha percebido, você é um galo carijó."
            },
            {
                texto: "Não, eu sou um galo carijó, mais respeito",
                afirmacao: "você é um exímio galo carijó, parabéns"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é um galo carijó!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();