/*Coluna esquerda - Jornalismo */

fetch('jsons/colunaEsquerdaJornalismo.json')
    .then(response => response.json())
    .then(arrayG1 => {

        const blocos = [
            { classe: ".g1Manchete", chave: "noticiaPrincipal", tipo: "manchete" },
            { classe: ".g1Li01", chave: "li01", tipo: "noticia" },
            { classe: ".g1Li02", chave: "li02", tipo: "noticia" },
            { classe: ".g1Li03", chave: "li03", tipo: "noticia" },
            { classe: ".noticiaG101", chave: "noticia01Ge", tipo: "detalhe" },
            { classe: ".noticiaG102", chave: "noticia02Ge", tipo: "detalhe" },
            { classe: ".noticiaG103", chave: "noticia03Ge", tipo: "detalhe" },
            { classe: ".noticiaG104", chave: "noticia04Ge", tipo: "detalhe" },
            { classe: ".noticiaG105", chave: "noticia05", tipo: "detalhe" },
            { classe: ".noticiaG106", chave: "noticia06", tipo: "detalhe" }
        ];
        
        for (let i = 0; i < blocos.length; i++) {
            const { classe, chave, tipo } = blocos[i];
            const noticia = arrayG1.find(x => x[chave] === true);

            if (noticia) {
                if (tipo === "manchete") {
                    document.querySelector(`${classe} h2 span`).textContent = noticia.manchete;
                    document.querySelector(classe).href = noticia.link;
                } else if (tipo === "noticia") {
                    document.querySelector(`${classe} span`).textContent = noticia.noticia;
                    document.querySelector(classe).href = noticia.link;
                } else if (tipo === "detalhe") {
                    document.querySelector(`${classe} a span`).textContent = noticia.noticia;
                    document.querySelector(`${classe} a li span`).textContent = noticia.subtitulo;
                    document.querySelector(`${classe} a img`).src = noticia.linkImagem;
                    document.querySelector(`${classe} a`).href = noticia.link;
                }
            }
        }
    })

/*Coluna meio - Esportes */

fetch('jsons/colunaMeioEsporte.json')
    .then(response => response.json())
    .then(arrayGe => {

        const seletores = [
            { classe: "geNoticia01", chave: "primeiraGeNoticiaGe" },
            { classe: "geNoticia02", chave: "segundaGeNoticiaGe" },
            { classe: "geNoticia03", chave: "terceiraGeNoticiaGe" },
            { classe: "geNoticia04", chave: "quartaNoticiaGe" }
        ];

        seletores.forEach(({ classe, chave }) => {
            const noticia = arrayGe.find(x => x[chave] === true);

            if (noticia) {
                document.querySelector(`.${classe} a`).href = noticia.link;
                document.querySelector(`.${classe} span`).textContent = noticia.noticia;
                document.querySelector(`.${classe} img`).src = noticia.imagemLink;
                document.querySelector(`.${classe} li span`).textContent = noticia.descricao;
            }
        });
    })


/* Coluna direita - Gshow*/

fetch('jsons/colunaDireitaGshow.json')
    .then(response => response.json())
    .then(arrayGshow => {

        const blocos = [
            { classe: ".noticia01Gshow", chave: "primeiraNoticiaGshow" },
            { classe: ".noticia02Gshow", chave: "segundaNoticiaGshow" },
            { classe: ".noticia03Gshow", chave: "terceiraNoticiaGshow" }
        ];


        for (let i = 0; i < blocos.length; i++) {
            const { classe, chave } = blocos[i];
            const noticia = arrayGshow.find(x => x[chave] === true);

            if (noticia) {
                const element = document.querySelector(classe);
                element.querySelector('a').href = noticia.link;
                element.querySelector('span').textContent = noticia.noticia;
                element.querySelector('img').src = noticia.imagemLink;
                element.querySelector('li span').textContent = noticia.descricao;
            }
        }
    })


/* Histórias impressionantes*/

fetch('jsons/historias.json')
    .then(response => response.json())
    .then(arrayHistorias => {

        const blocos = [
            { classe: ".historia01", chave: "primeiraImpressionante" },
            { classe: ".historia02", chave: "segundaImpressionante" },
            { classe: ".historia03", chave: "terceiraImpressionante" },
            { classe: ".historia04", chave: "quartaImpressionante" }
        ];

        for (let i = 0; i < blocos.length; i++) {
            const { classe, chave } = blocos[i];
            const historia = arrayHistorias.find(x => x[chave] === true);

            if (historia) {
                const element = document.querySelector(classe);
                element.querySelector('a').href = historia.link;
                element.querySelector('span').textContent = historia.noticia;
                element.querySelector('a img').src = historia.imagemLink;
            }
        }
    })


/*Jornalismo - Esporte - Entreterimanto*/

/*Jornalismo*/

fetch('jsons/jornalismo.json')
    .then(response => response.json())
    .then(arrayJornalismo => {

        for (let i = 1; i <= 10; i++) {
            const index = i.toString().padStart(2, '0'); 
            const jornalismoItem = arrayJornalismo.find(x => x[`jornalismo${index}`] === true);

            if (jornalismoItem) {
                const selector = `.jornalismo${index}`;
                document.querySelector(`${selector} a`).href = jornalismoItem.link;
                document.querySelector(`${selector} span`).textContent = jornalismoItem.titulo;
                document.querySelector(`${selector} li`).textContent = jornalismoItem.subtitulo;
                document.querySelector(`${selector} img`).src = jornalismoItem.imagemLink;
            };
        };
    })


/*Esporte*/

fetch('jsons/esporte.json')
    .then(response => response.json())
    .then(arrayEsporte => {

        for (let i = 1; i <= 10; i++) {
            const index = i.toString().padStart(2, '0'); 
            const esporteItem = arrayEsporte.find(x => x[`esporte${index}`] === true);

            if (esporteItem) {
                const selector = `.esporte${index}`;
                document.querySelector(`${selector} a`).href = esporteItem.link;
                document.querySelector(`${selector} span`).textContent = esporteItem.titulo;
                document.querySelector(`${selector} li`).textContent = esporteItem.subtitulo;
                document.querySelector(`${selector} img`).src = esporteItem.imagemLink;
            };
        };
    })


    /* Entreterimento */

fetch('jsons/entreterimento.json')
    .then(response => response.json())
    .then(arrayEntreterimento => {

        for (let i = 1; i <= 10; i++) {
            const index = i.toString().padStart(2, '0'); 
            const entreterimentoItem = arrayEntreterimento.find(x => x[`entreterimento${index}`] === true);

            if (entreterimentoItem) {
                const selector = `.entreterimento${index}`;
                document.querySelector(`${selector} a`).href = entreterimentoItem.link;
                document.querySelector(`${selector} span`).textContent = entreterimentoItem.titulo;
                document.querySelector(`${selector} li`).textContent = entreterimentoItem.subtitulo;
                document.querySelector(`${selector} img`).src = entreterimentoItem.imagemLink;
            };
        };
    })
    

/*Economia - Agenda - Horoscopo*/

    /*Economia*/

    fetch('jsons/economia.json')
    .then(response => response.json())
    .then(arrayEconomia => {

        const economiaItem = arrayEconomia.find(x => x ["economia"] === true);

        if (economiaItem)
        document.getElementById("porcentagemVerde").textContent = economiaItem.porcentagem; 
        document.getElementById("pontos").textContent = economiaItem.pontos; 
        document.getElementById("dolar").textContent = economiaItem.dolar; 
        document.getElementById("euro").textContent = economiaItem.euro; 
    });

    /*Agenda*/

    fetch('jsons/agenda.json')
    .then(response => response.json())
    .then(arrayAgenda => {

        const agendaItem = arrayAgenda.find(x => x ["agenda"] === true);

        if(agendaItem)
            document.getElementById("nomeTime01").textContent = agendaItem.nomeTime01;
            document.getElementById("bandeiraTime01").src = agendaItem.bandeiraTime01;
            document.getElementById("nomeTime02").textContent = agendaItem.nomeTime02;
            document.getElementById("bandeiraTime02").src = agendaItem.bandeiraTime02;
            document.getElementById("horarioJogo01").textContent = agendaItem.horarioJogo01;
            document.getElementById("campeonato01").textContent = agendaItem.campeonato01;

            document.getElementById("nomeTime03").textContent = agendaItem.nomeTime03;
            document.getElementById("bandeiraTime03").src = agendaItem.bandeiraTime03;
            document.getElementById("nomeTime04").textContent = agendaItem.nomeTime04;
            document.getElementById("bandeiraTime04").src = agendaItem.bandeiraTime04;
            document.getElementById("horarioJogo02").textContent = agendaItem.horarioJogo02;
            document.getElementById("campeonato02").textContent = agendaItem.campeonato02;

            document.getElementById("nomeTime05").textContent = agendaItem.nomeTime05;
            document.getElementById("bandeiraTime05").src = agendaItem.bandeiraTime05;
            document.getElementById("nomeTime06").textContent = agendaItem.nomeTime06;
            document.getElementById("bandeiraTime06").src = agendaItem.bandeiraTime06;
            document.getElementById("horarioJogo03").textContent = agendaItem.horarioJogo03;
            document.getElementById("campeonato03").textContent = agendaItem.campeonato03;
    });


/* Vai cozinhar Hoje ?*/

fetch('jsons/vaiCozinharHoje.json')
    .then(response => response.json())
    .then(arrayVaiCozinharHoje => {

        for (let i = 1; i <= 10; i++) {
            const index = i.toString().padStart(2, '0'); 
            const receitaItem = arrayVaiCozinharHoje.find(x => x[`receita${index}`] === true);

            if (receitaItem) {
                const selector = `.receita${index}`;
                document.querySelector(`${selector} a`).href = receitaItem.link;
                document.querySelector(`${selector} h6`).textContent = receitaItem.h6;
                document.querySelector(`${selector} span`).textContent = receitaItem.span;
                document.querySelector(`${selector} li`).textContent = receitaItem.li;
                document.querySelector(`${selector} img`).src = receitaItem.imagemLink;
            };
        };
    })


/*A Gente Explica*/

fetch('jsons/aGenteExplica.json')
.then(response => response.json())
.then(arrayaGenteExplica => {

    for (let i = 1; i <= 3; i++) {
        const index = i.toString().padStart(2, '0'); 
        const explicaItem = arrayaGenteExplica.find(x => x[`explica${index}`] === true);

        if (explicaItem) {
            const selector = `.explica${index}`;
            document.querySelector(`${selector} a`).href = explicaItem.link;
            document.querySelector(`${selector} h6`).textContent = explicaItem.h6;
            document.querySelector(`${selector} span`).textContent = explicaItem.span;
            document.querySelector(`${selector} li`).textContent = explicaItem.li;
            document.querySelector(`${selector} img`).src = explicaItem.imagemLink;
        };
    };
})


/* Curiosidades */

fetch('jsons/curiosidades.json')
.then(response => response.json())
.then(arrayCuriosidades => {

    for (let i = 1; i <= 3; i++) {
        const index = i.toString().padStart(2, '0'); 
        const curiosidadeItem = arrayCuriosidades.find(x => x[`curiosidade${index}`] === true);

        if (curiosidadeItem) {
            const selector = `.curiosidade${index}`;
            document.querySelector(`${selector} a`).href = curiosidadeItem.link;
            document.querySelector(`${selector} h6`).textContent = curiosidadeItem.h6;
            document.querySelector(`${selector} span`).textContent = curiosidadeItem.span;
            document.querySelector(`${selector} li`).textContent = curiosidadeItem.li;
            document.querySelector(`${selector} img`).src = curiosidadeItem.imagemLink;
        };
    };
})


/* GShow */

fetch('jsons/gshow.json')
    .then(response => response.json())
    .then(arraygshow => {

        for (let i = 1; i <= 10; i++) {
            const index = i.toString().padStart(2, '0'); 
            const gshowItem = arraygshow.find(x => x[`gshow${index}`] === true);

            if (gshowItem) {
                const selector = `.gshow${index}`;
                document.querySelector(`${selector} a`).href = gshowItem.link;
                document.querySelector(`${selector} h6`).textContent = gshowItem.h6;
                document.querySelector(`${selector} span`).textContent = gshowItem.span;
                document.querySelector(`${selector} li`).textContent = gshowItem.li;
                document.querySelector(`${selector} img`).src = gshowItem.imagemLink;
            };
        };
    })


/* Tegnologia & Games */

fetch('jsons/tecnologiaEGames.json')
    .then(response => response.json())
    .then(arrayTecnologia => {

        for (let i = 1; i <= 10; i++) {
            const index = i.toString().padStart(2, '0'); 
            const tecnologiaItem = arrayTecnologia.find(x => x[`tecnologia${index}`] === true);

            if (tecnologiaItem) {
                const selector = `.tecnologia${index}`;
                document.querySelector(`${selector} a`).href = tecnologiaItem.link;
                document.querySelector(`${selector} h6`).textContent = tecnologiaItem.h6;
                document.querySelector(`${selector} span`).textContent = tecnologiaItem.span;
                document.querySelector(`${selector} li`).textContent = tecnologiaItem.li;
                document.querySelector(`${selector} img`).src = tecnologiaItem.imagemLink;
            };
        };
    })


/* Top globo */

    /* Jornalismo */

    fetch('jsons/topGloboJornalismo.json')
    .then(response => response.json())
    .then(arraytopGloboJornalismo => {

        for (let i = 1; i <= 5; i++) {
            const index = i.toString().padStart(2, '0'); 
            const jornalismoItem = arraytopGloboJornalismo.find(x => x[`topGloboJornalismo${index}`] === true);

            if (jornalismoItem) {
                const selector = `.topGloboJornalismo${index}`;
                document.querySelector(`${selector} a`).href = jornalismoItem.link;
                document.querySelector(`${selector} h6`).textContent = jornalismoItem.h6;
            };

        };
    })


    /* Esporte */

    fetch('jsons/topGloboEsporte.json')
    .then(response => response.json())
    .then(arraytopGloboEsporte => {

        for (let i = 1; i <= 5; i++) {
            const index = i.toString().padStart(2, '0'); 
            const esporteItem = arraytopGloboEsporte.find(x => x[`topGloboEsporte${index}`] === true);

            if (esporteItem) {
                const selector = `.topGloboEsporte${index}`;
                document.querySelector(`${selector} a`).href = esporteItem.link;
                document.querySelector(`${selector} h6`).textContent = esporteItem.h6;
            };

        };
    })


    /* Entreterimento */

    fetch('jsons/topGloboEntreterimento.json')
    .then(response => response.json())
    .then(arraytopGloboEntreterimento => {

        for (let i = 1; i <= 5; i++) {
            const index = i.toString().padStart(2, '0'); 
            const entreterimentoItem = arraytopGloboEntreterimento.find(x => x[`topGloboEntreterimento${index}`] === true);

            if (entreterimentoItem) {
                const selector = `.topGloboEntreterimento${index}`;
                document.querySelector(`${selector} a`).href = entreterimentoItem.link;
                document.querySelector(`${selector} h6`).textContent = entreterimentoItem.h6;
            };

        };
    })
