class Alert {
    constructor (title, {type, desc, timeout, onClick, onOpen, onClose, containerClass = 'biao-alert-container', clickToClose = true} = {}) {
        this.title = title;
        this.type = type
        this.desc = desc
        this.timeout = timeout
        this.onClick = onClick
        this.onOpen = onOpen
        this.onClose = onClose
        this.containerClass = containerClass
        this.clickToClose = clickToClose
        this.container = null;
        this.prepareEnv();
        this.render();
        this.open();
        this.bindClick();
    }
    prepareEnv() {
        this.container = this.getContainer();
        // 有就用
        if (this.getContainer())
            return;
        // 没有就造一个
        let container = this.container = document.createElement('div');
        container.classList.add(this.containerClass);
        document.body.appendChild(container);
    }
    getContainer() {
        return document.querySelector('.' + this.containerClass);
    }
    render() {
        let el = document.createElement('div');
        el.classList.add('biao-alert');
        // 不同类型不同颜色 所以加个类方便控制样式
        el.classList.add(this.type);
        el.innerHTML =`
        <div class="inner">
          <div class="title">${this.title}</div>
          ${this.desc ? `<div class="desc">${this.desc}</div>` : ''}
        </div>`;
        // 缓存下来后面用
        this.el = el;
    }
    open() {
        // 如果有回调的话就叫一下回调
        this.onOpen && this.onOpen();
        this.container.appendChild(this.el);
        // 如果没有期限，就让它一直显示吧
        if (!this.timeout)
            return;
        // 如果有期限
        setTimeout($ => {
            // 到了那个时间就隐藏
            this.close();
        }, this.timeout);
    }
    close() {
        // 如果有回调的话就叫一下回调
        this.onClose && this.onClose();
        this.el.remove();
    }
    bindClick() {
        this.el.addEventListener('click', e => {
            // 如果点击就关闭，那就关闭
            if (this.clickToClose)
                this.close();
            // 如果有回调的话就叫一下回调
            this.onClick && this.onClick(this);
        });
    }
}
export default Alert;
