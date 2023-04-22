document.addEventListener('keydown', function (event) {
    // 禁用 Ctrl 和 + 缩放页面
    if (event.ctrlKey && (event.key === '+' || event.key === '=')) {
        event.preventDefault();
    }
    // 禁用 Ctrl 和 - 缩放页面
    if (event.ctrlKey && event.key === '-') {
        event.preventDefault();
    }
    // 禁用 Ctrl 和鼠标滚轮缩放页面
    if (event.ctrlKey && event.deltaY) {
        event.preventDefault();
    }
});