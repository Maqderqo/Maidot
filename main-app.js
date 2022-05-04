//#region Hamburger
{
    const hamburger = document.getElementById("hamburger");
    function addEvents() {
        hamburger.addEventListener("click", () => {
            hamburger.children[0].classList.toggle("rotate-right");
            hamburger.children[1].classList.toggle("rotate");
            hamburger.children[2].classList.toggle("rotate-left");
        });
    }
}
//#endregion


addEvents();