function showInfo() {
    var infoSection = document.getElementById('committee-info');
    infoSection.style.display = 'block';  
    setTimeout(function() {
        infoSection.classList.add('show');  
    }, 100);  
}
