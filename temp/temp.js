var div = document.createElement("div");
        var figure = document.createElement("figure");
        var figure_div = document.createElement("div");
        var figcaption = document.createElement("figcaption");
        figcaption.innerText = "JS style";
        figure.appendChild(figcaption);
        const order = ["st", "nd", "rd", "th"];
        var figureP = [], smalls = [], sups = [];
        for (let i = 1; i <= 5; i++) {
            figureP[i - 1] = document.createElement("p");
            smalls[i - 1] = document.createElement("small");
            sups[i - 1] = document.createElement("sup");
            figureP[i - 1].innerText += i;
            sups[i - 1].innerText = order[i <= 4 ? i - 1 : 3];
            smalls[i - 1].appendChild(sups[i - 1]);
            figureP[i - 1].appendChild(smalls[i - 1]);
            figure_div.appendChild(figureP[i - 1]);
        }
        figure.appendChild(figure_div);
        div.appendChild(figure);
        document.body.appendChild(div);
        figure_div.classList.add("card");
        div.classList.add("middle");