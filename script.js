let times = [];
let lastTime = null;

function moveButton(button) {
    const buffer = 100; // 缓冲区距离，确保按钮远离鼠标位置
    let x, y;
    
    do {
        x = Math.random() * (window.innerWidth - button.clientWidth);
        y = Math.random() * (window.innerHeight - button.clientHeight);
    } while (Math.abs(x - button.offsetLeft) < buffer && Math.abs(y - button.offsetTop) < buffer);
    
    button.style.transition = 'left 0.5s, top 0.5s'; // 添加过渡效果
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

function calculateAverage(times) {
    if (times.length < 3) {
        return "N/A";
    }
    const sum = times.slice(-3).reduce((a, b) => a + b, 0);
    return (sum / 3).toFixed(2) + " ms";
}

function updateAverageTime() {
    const averageTime = calculateAverage(times);
    document.getElementById('averageTimeButton').textContent = "Average Time: " + averageTime;
}

document.getElementById('awayButton').addEventListener('mouseover', function() {
    const currentTime = new Date().getTime();
    if (lastTime !== null) {
        const interval = currentTime - lastTime;
        times.push(interval);
        if (times.length > 3) {
            times.shift(); // 保留最近三次时间
        }
        updateAverageTime();
    }
    lastTime = currentTime;
    moveButton(this);
});

document.getElementById('loveButton').addEventListener('click', function() {
    window.location.href = 'video.html';
});


