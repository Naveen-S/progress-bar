console.log('linked');
var progressBar = document.getElementById('progress-bar');
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
  progressBar.style.setProperty('--width', width + 0.1);
  if (width >= 500) {
    progressBar.setAttribute('data-label', 'Loaded');
  }
}, 5);
