document.getElementById('button').addEventListener('click', function () {
    document.querySelector('.homepage__bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.homepage__bg-modal').style.display = 'none';
});