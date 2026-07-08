window.addEventListener("load", function () {

    const el = document.getElementById("typeit-headline");

    if (!el) return;

    const text = el.innerHTML;

    el.innerHTML = "";

    new TypeIt("#typeit-headline", {
        strings: [text],
        speed: 45,
        lifeLike: true,
        waitUntilVisible: true,
        loop: true,
        html: true,
        cursor: true
    }).go();

});