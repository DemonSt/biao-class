window.dropdown = {
    boot:boot,
}

function boot () {
    let btn, dropdown;
        dDown('.btn', '.box');
        function dDown (btnSelector = '.btn', boxSelector = '.box') {
            btn = document.querySelector(btnSelector);
            dropdown = document.querySelector(boxSelector);
            
            document.body.addEventListener('click', (event) => {
                if(event.target.classList.contains('btn')){
                    dropdown.hidden = !dropdown.hidden;
                    return;
                }
                if(!event.target.closest('.box'))
                    dropdown.hidden = true;
            });

            dropdown.addEventListener('mouseleave', () => {
                dropdown.hidden = true;
            });
        }
}