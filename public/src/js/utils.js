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

function li(e) {
    let l = `
            <li class="collection-item avatar">
                <i class="material-icons circle green">insert_chart</i>
                <span class="title">` + e.type + `</span>
                <div class='detalles'>
                        <div>
                            <p>Descripcion:</p>
                            <p>Precio:</p>
                            <p>Kms:</p>
                        </div>
                        <div>
                            <p> ` + e.description + ` </p>
                            <p> ` + e.price + ` </p>
                            <p> ` + e.km + ` </p>
                        </div>
                    </div>
                <a href="#!" class="secondary-content">
                    <i class="material-icons">grade</i>
                </a>
            </li>
            `
    return l;
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

function saveLocal(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
}

function loadLocal(k) {
    let local
    let conv
    local = localStorage.getItem(k)
    if (local != null) {
        conv = JSON.parse(local)
    } else {
        conv = []
    }
    return conv
}

function loadUrl() {
    let u = document.URL
    let p = u.search("#")
    let f = u.slice(p + 1, u.length)
    return f
}

function toast(m) {
    M.toast({ html: m, classes: 'rounded' });
}

function saveCookie(u) {
    var expiresdate = new Date(2068, 1, 02, 11, 20);
    document.cookie = "userId=" + encodeURIComponent(u) + "; expires=" + expiresdate.toUTCString() + "; domain=.daniafonso.github.io";
}