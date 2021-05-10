const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    // console.log(this);
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));


// 因圖片有動畫 當文字上下滑入時會有不協調的狀況 因此運用兩個監聽事件達到畫面和諧的效果
// 然而當快速點擊兩下時 則會造成圖片+文字的錯置
// 其一解決方法為運用單一點擊監聽 並運用 transition 的延遲屬性設定文字的動畫效果在圖片動畫結束後才觸發