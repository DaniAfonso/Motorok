function card(e) {
    let c = `<div class="col s12 m7 card horizontal">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="./src/img/car.jpg">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">`+ e.alias + `<i class="material-icons right">more_vert</i></span>
                    <a class="btnDetail btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">` + e.alias + `<i class="material-icons right">close</i></span>
                    <div class='detalles'>
                        <div>
                            <p>Marca:</p>
                            <p>Modelo:</p>
                            <p>Motor:</p>
                            <p>Potencia:</p>
                            <p>Km:</p>
                            <p>Matrícula:</p>
                        </div>
                        <div>
                            <p> ` + e.marca + ` </p>
                            <p> ` + e.modelo + ` </p>
                            <p> ` + e.motor + ` </p>
                            <p> ` + e.potencia + ` </p>
                            <p> ` + e.km + ` </p>
                            <p> ` + e.matricula + ` </p>
                        </div>
                    </div>
                </div>
            </div>`
    return c;
}

function changeTab(a, b) {
    $(a).hide();
    classToggle(a, "active");
    $(b).attr("style", "display: block;");
    classToggle(b, "active");
}

function classToggle(a, b) {
    $(a).toggleClass(b);
}

function addListenerBtnDetail() {
    $(".btnDetail").click(function () {
        
        document.location.href = "./detail.html";
    })
}