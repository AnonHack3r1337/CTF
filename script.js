document.getElementById('toc-dropdown').addEventListener('change', function() {
  var selected = this.value;
  if (selected !== '') {
    window.location.href = selected;
  }
});
