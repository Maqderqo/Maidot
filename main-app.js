//#region Hamburger
{
    const hamburger = document.getElementById("hamburger");

    function addEvents() {
        hamburger.addEventListener("click", () => {
            hamburger.children[0].classList.toggle("rotate-right");
            hamburger.children[1].classList.toggle("rotate");
            hamburger.children[2].classList.toggle("rotate-left");
            const bg1 = document.getElementsByClassName('menubg1')[0]
            const bg2 = document.getElementsByClassName('menubg2')[0]
            if (!bg1.classList.contains("openmenu")) {
                bg1.classList.add("openmenu");
                bg1.classList.remove("closemenu");
                setTimeout(() => {
                    bg2.classList.add("openmenu");
                    bg2.classList.remove("closemenu");

                }, 200);

            } else {
                bg2.classList.add("closemenu");
                bg2.classList.remove("openmenu");

                setTimeout(() => {
                    bg1.classList.add("closemenu");
                    bg1.classList.remove("openmenu");

                }, 200);

            }


        });
    }
}
//#endregion



addEvents();