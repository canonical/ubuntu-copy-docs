(function(){
  var copyDocMeta = document.querySelector('meta[name="copydoc"]');
  var copyDoc;

  if (copyDocMeta) {
    copyDoc = copyDocMeta.getAttribute('content');
  }

  if (copyDoc) {
    var editStrip = document.createElement('div');
    editStrip.innerHTML = 'Propose changes to this page in the ' +
      '<a class="p-link--external" href="' + copyDoc + '" target="_blank">copy document</a>';

    editStrip.style.background = '#fad542';
    editStrip.style.margin = '0';
    editStrip.style.padding = '0.5rem 1rem 0.5rem 2.5rem';
    editStrip.style.position = 'fixed';
    editStrip.style.left = '1rem';
    editStrip.style.bottom = '0';
    editStrip.style.zIndex = '9999';
    editStrip.style.borderRadius = '2px 2px 0 0';
    editStrip.style.backgroundImage = 'url(https://assets.ubuntu.com/v1/b562c17f-edit.svg)';
    editStrip.style.backgroundRepeat = 'no-repeat';
    editStrip.style.backgroundSize = '16px 16px';
    editStrip.style.backgroundPosition = '16px 50%';

    document.body.appendChild(editStrip);
  }
})();
