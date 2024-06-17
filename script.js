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
                afirmacao: "afirmação"
            },
            {
                texto: "Eu pelo menos admito",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Poucas ideais, qualquer coisa você dá uma bicada?",
        alternativas: [
            {
                texto: "Obvio que não",
                afirmacao: "afirmação"
            },
            {
                texto: "Essa é a única opção!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Queria poder voar e largar tudo?",
        alternativas: [
            {
                texto: "Com certeza!",
                afirmacao: "afirmação"
            },
            {
                texto: "Não deixe meus pais descobrirem!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Se questiona todos os dias porque o principal meio de transporte no Brasil é o rodoviário se nosso país tem proporções continentais ",
        alternativas: [
            {
                texto: "Deixa baixo, deixa baixo",
                afirmacao: "afirmação"
            },
            {
                texto: "VOCẼ É DO GOVERNO, NÉ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "As pessoas costumam te chamar de galinha",
        alternativas: [
            {
                texto: "Já me ocorreu",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, eu sou um galo carijó, mais respeito",
                afirmacao: "S2"
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
    const S2 = opcaoSelecionada.S2;
    historiaFinal += S2 + "S2";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é um galo carijó!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();