let sectionSitcoms, sectionWatching;

let continueAssistindo = [
    {
        title: "The Ranch",
        imgs: "imgs/theranch.png",
        progress: "90%"
    },
    {
        title: "Vis a Vis",
        imgs: "imgs/visavis.png",
        progress: "50%"
    },
    {
        title: "Brooklyn Nine-Nine",
        imgs: "imgs/b99.png",
        progress: "25%",
    }
];

let sitcomsAssistir = [
    {
        title: "Não nos calaremos",
        imgs: "imgs/naonoscalaremos.png"
    },
    {
        title: "Atypical",
        imgs: "imgs/atypical.png"
    },
    {
        title: "Machos Alfa",
        imgs: "imgs/machosalfa.png"
    },
    {
        title: "Desencanto",
        imgs: "imgs/desencanto.png"
    },
    {
        title: "Lucifer",
        imgs: "imgs/lucifer.png"
    },
    {
        title: "As Ladras",
        imgs: "imgs/asladras.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Criar os cards para "Continue Assistindo"
    continueAssistindo.forEach((info) => {
        criarCards(info, "sectionWatching");
    });

    // Criar os cards para "Sitcoms para Assistir"
    sitcomsAssistir.forEach((info) => {
        criarCards(info, "sectionSitcoms");
    });
});

function criarCards(infos, classe) {
    let html;

    if (classe === "sectionSitcoms") {
        sectionSitcoms = document.getElementById("section-sitcoms");

        html = `
            <div class="movie">
                <img src="${infos.imgs}" alt="${infos.title}">
            </div>
        `;

        return (sectionSitcoms.innerHTML += html);
    }

    sectionWatching = document.getElementById("section-watching");
    let progresso_bar;

    switch (infos.progress) {
        case "90%":
            progresso_bar = "progress-bar90";
            break;
        case "50%":
            progresso_bar = "progress-bar50";
            break;
        case "25%":
            progresso_bar = "progress-bar25";
            break;
        default:
            progresso_bar = "";
    }

    html = `
        <div class="movie">
            <img src="${infos.imgs}" alt="${infos.title}">
            <div class="progress-bar ${progresso_bar}"></div>
        </div>
    `;

    return (sectionWatching.innerHTML += html);
}
