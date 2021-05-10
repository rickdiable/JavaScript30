const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    // console.log(this);
    this.classList.toggle('open');
}

function toggleActive(e) {
    // console.log(e.propertyName);
    // 運用 e.propertyName 觀察點擊後發生甚麼 transition 並在此事件後觸發 transitionend 的監聽
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
    // 在 safari 上稱作 flex 在其他瀏覽器上稱作 flex-grow 所以使用 includes 同時包含兩者 
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// 因圖片有動畫 當文字上下滑入時會有不協調的狀況 因此運用兩個監聽事件達到畫面和諧的效果
// 然而當快速點擊兩下時 則會造成圖片+文字的錯置
// 其一解決方法為運用單一點擊監聽 並運用 transition 的延遲屬性設定文字的動畫效果在圖片動畫結束後才觸發