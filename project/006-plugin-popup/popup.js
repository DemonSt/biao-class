window.biaoPopup = {
    boot,
}
let btn, popup, mask, keys, config;
    const defaultConfig = {
        position: 'center',
        on: 'click',
        offsetX: 0,
        offsetY: 0
    }
    // boot ('#btn', '#popup', {});
    function boot (Selector1 = '#btn', Selector2 = '#popup', custom = {}) {
        btn = document.querySelector(Selector1);
        popup = document.querySelector(Selector2);
        keys = popup.querySelectorAll('button');    
        loadConfig (custom);
        initPopup ();
        initMask ();
        openMask ();
        closeMask ();
    }
    function loadConfig (custom) {
        config = Object.assign({}, defaultConfig, custom);
    }
    function initPopup () {
        popup.classList.add('popup');
    }
    function initMask () {
        mask = document.createElement('div');
        mask.classList.add('mask');
        document.body.appendChild(mask);
        mask.hidden = true;
    }
    function openMask () {
        btn.addEventListener(config.on, () => {
            setVisibility (true);
            repositionPopup (config.position, config.offsetX, config.offsetY);
        })
    }
    function closeMask () {
        mask.addEventListener('click', () => {
            setVisibility (false);
        })
        window.addEventListener('keyup', (event) => {
            if(event.key == 'Escape')
            setVisibility (false);
        })
    }
    function setVisibility (show = false) {
        popup.hidden = mask.hidden = !show;
    }
    //方法一 最简单的 （直接给它的父元素绑定 同时查找事件源）
    // popup.addEventListener('click', (event) => {
    //     repositionPopup (event.target.dataset.direction);
    // })
    
    function repositionPopup (position = 'center', offsetX = 0, offsetY = 0) {
        let width = popup.offsetWidth;
        let height = popup.offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        if(!position.includes('-')){
            if(position == 'left' || position == 'right')
                position += '-centerY';
            else if(position == 'top' || position == 'bottom')
                position += '-centerX';
            else
                position = 'centerX-centerY'
        }
        if(position.includes('centerX'))
            popup.style.left = windowWidth / 2 - width / 2 + 'px';
        if(position.includes('centerY'))
            popup.style.top = windowHeight / 2 - height / 2 + 'px';
        if(position.includes('top'))
            popup.style.top = 0 + 'px';
        if(position.includes('left'))
            popup.style.left = 0 + 'px';
        if(position.includes('right')){
            popup.style.left = 'auto';
            popup.style.right = 0 + 'px';
        } 
        if(position.includes('bottom')){
            popup.style.top = 'auto';
            popup.style.bottom = 0 + 'px';
        }   
    }