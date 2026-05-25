function inicializar() {
    
    //criando o header
    let body = document.getElementById("body");
    let header = document.createElement("Header");
    body.appendChild(header);
    header.innerHTML=`
        <h1>Picolé & Cia</h1>
            <nav>
                <ul>
                    <li>Sobre Nós</li>
                    <li>Fale Conosco</li>
                </ul>
            </nav>
    `;
    
    //criando div pagina
    let divpg = document.createElement("div");
    divpg.id="pagina"
    body.appendChild(divpg);
    
    //criando main
    let main = document.createElement("main");
    divpg.appendChild(main);

    //criando Div1 classe  container
    let div1 = document.createElement("div");
    div1.className = "container";
    main.appendChild(div1);
    div1.innerHTML = `
        <div id="promocoes">
            <div class="titulo">Promoções</div>
            <div class="produtos"></div>
        </div>
        <div id="anuncios">
            <h3>Anuncie Aqui</h3>
            <p>Entre em contato conosco para saber mais sobre como anunciar seus produtos aqui.</p>
        </div>
    `;

    //criando Div2 classe container
    let div2 = document.createElement("div");
    div2.className = "container";
    main.appendChild(div2);
    div2.innerHTML = `
        <div id="produtos">
            <div class="titulo">Produtos</div>
            <div class="produtos"></div>
        </div>
    `;

    //criando aside
    let aside = document.createElement("aside");
    divpg.appendChild(aside);
    aside.innerHTML = `
        <h4>Frutos do Cerrado</h4>
            <ul>
                <li>Cajá</li>
                <li>Murici</li>
                <li>Caju</li>
                <li>Bacaba</li>
                <li>Buriti</li>
            </ul>
        <h4>Artificiais</h4>
            <ul>
                <li>Leite Condensado</li>
                <li>Brigadeiro</li>
                <li>Nutella</li>
                <li>Ninho com Nutella</li>
                <li>Chocomenta</li>
            </ul>
    `;
    
    
    // Dados das promoções
    const promocoes = [
        {
            img: "imagens/caja_150.jpg",
            categoria: "Frutos do Cerrado",
            sabor: "Cajá",
            preco: "R$ 5,00"
        },
        {
            img: "imagens/murici_150.jpg",
            categoria: "Frutos do Cerrado",
            sabor: "Murici",
            preco: "R$ 5,00"
        },
        {
            img: "imagens/nutella_150.png",
            categoria: "Artificiais",
            sabor: "Nutella",
            preco: "R$ 12,00"
        },
        {
            img: "imagens/brigadeiro_150.png",
            categoria: "Artificiais",
            sabor: "Brigadeiro",
            preco: "R$ 12,00"
        }
    ];

    // Dados dos produtos
    const produtos = [
        {
            img: "imagens/caja_150.jpg",
            categoria: "Frutos do Cerrado",
            sabor: "Cajá",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/murici_150.jpg",
            categoria: "Frutos do Cerrado",
            sabor: "Murici",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/caju_150.png",
            categoria: "Frutos do Cerrado",
            sabor: "Caju",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/bacaba_150.jpg",
            categoria: "Frutos do Cerrado",
            sabor: "Bacaba",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/buriti_150.jpg",
            categoria: "Frutos do Cerrado",
            sabor: "Buriti",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/brigadeiro_150.png",
            categoria: "Artificiais",
            sabor: "Brigadeiro",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/nutella_150.png",
            categoria: "Artificiais",
            sabor: "Nutella",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/leite-condensado_150.png",
            categoria: "Artificiais",
            sabor: "Leite Condensado",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/chocomenta_150.png",
            categoria: "Artificiais",
            sabor: "Chocomenta",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/ninho-nutella_150.jpg",
            categoria: "Artificiais",
            sabor: "Ninho com Nutella",
            preco: "R$ 15,00"
        }
    ];

    // Preencher promoções usando for
    const promocoesDiv = document.querySelector("#promocoes .produtos");
    if (promocoesDiv) {
        promocoesDiv.innerHTML = "";
        for (let i = 0; i < promocoes.length; i++) {
            const p = promocoes[i];
            promocoesDiv.innerHTML += `
                <div class="produto">
                    <img src="${p.img}" alt="Picolé de ${p.sabor}">
                    <p class="label">${p.categoria}</p>
                    <h3>${p.sabor}</h3>
                    <p>${p.preco}</p>
                </div>
            `;
        }
    }

    // Preencher produtos usando for
    const produtosDiv = document.querySelector("#produtos .produtos");
    if (produtosDiv) {
        produtosDiv.innerHTML = "";
        for (let i = 0; i < produtos.length; i++) {
            const p = produtos[i];
            produtosDiv.innerHTML += `
                <div class="produto">
                    <img src="${p.img}" alt="Picolé de ${p.sabor}">
                    <p class="label">${p.categoria}</p>
                    <h3>${p.sabor}</h3>
                    <p>${p.preco}</p>
                </div>
            `;
        }
    }
        // criando footer
    let footer = document.createElement("footer");
    body.appendChild(footer);
    footer.innerHTML = `
        <p>&copy; Picolé & Cia - Todos os direitos reservados.</p>
        <p>Desenvolvido por KelphSistems - 2026.</p>
        <address>
            <p>Avenida Teotônio Segurado, Nº 125, Centro</p>
            <p>CEP 77000-000</p>
            <p>Palmas, Tocantins</p>
        </address>
    `;
};



