const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    // dataset 會抓取所有在該標籤的 data-資料
    // console.log(this.getAttribute('data-sizing')); 
    // 效果等同上一行
    console.log(this.name, this.value + suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener("change", handleUpdate));

// 增加滑動時的監聽
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));