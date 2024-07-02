const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Qual a importância da gamificação na educação para conscientizar os adolescentes sobre a importância de uma alimentação saudável e a prática de exercícios físicos, de modo a combater a obesidade na adolescência, enquanto também promovemos o uso de energias renováveis como parte das atividades educacionais?",
        alternativas: [
            {
                texto: "Isso é muito importante para o mundo atual!",
                afirmacao: "jogos educativos podem ser desenvolvidos onde os alunos assumem o papel de protagonistas, ganhando pontos por escolher alimentos saudáveis, participar de atividades físicas e completar desafios relacionados à energia renovável, como construir maquetes de painéis solares ou turbinas eólicas. Esse tipo de abordagem não só educa sobre hábitos saudáveis e sustentáveis, mas também cria uma experiência de aprendizado envolvente e divertida."
            },
            {
                texto: "Não tem tanta importância assim!",
                afirmacao: "Esse três temas não estão totalemnte integrados!."
            }
        ]
    },
];
