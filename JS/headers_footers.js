function loadHeaderFooter() {
  const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
  fetch(basePath+ 'HTML/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('top-bar').innerHTML = html;
    })
    .catch(err => console.error('Header load failed:', err));

  fetch(basePath+'HTML/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(err => console.error('Footer load failed:', err));
}
loadHeaderFooter();