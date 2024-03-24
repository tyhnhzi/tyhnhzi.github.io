// Src1 //
var words = ["Web-Developer", "TyhnhziEN", "Haruka416", "Tnz", "Vet Mua"]
function updateDynamicText() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var randomWord = words[randomIndex];
    document.getElementById("dynamic-text").innerText = randomWord;
}
setInterval(updateDynamicText, 300);
// Src2 //
var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

// Chỉ mục ban đầu của mảng màu
var index = 0;

// Hàm thay đổi màu tiêu đề sau mỗi khoảng thời gian nhất định
function changeHeaderColor() {
    var header = document.getElementById('dynamic-header');
    header.style.color = colors[index]; // Thay đổi màu của tiêu đề
    index = (index + 1) % colors.length; // Di chuyển đến màu tiếp theo trong mảng màu
}

// Thực hiện hàm changeHeaderColor sau mỗi khoảng thời gian nhất định (ví dụ: sau mỗi giây)
setInterval(changeHeaderColor, 1000);