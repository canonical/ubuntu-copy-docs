(function(){
  var copyDocMeta = document.querySelector('meta[name="copydoc"]');
  var copyDoc;

  if (copyDocMeta) {
    copyDoc = copyDocMeta.getAttribute('content');
  }

  if (copyDoc) {
    var editStrip = document.createElement('div');

    var link = document.createElement('a');
    Object.assign(link, {
      className: "p-link--external",
      href: copyDoc,
      target: "_blank"
    });
    link.appendChild(document.createTextNode('copy document'));

    editStrip.appendChild(document.createTextNode('Propose changes to this page in the '));
    editStrip.appendChild(link);

    Object.assign(editStrip.style, {
      background: '#fad542',
      padding: '0.5rem 1rem 0.5rem 2.5rem',
      position: 'fixed',
      left: '1rem',
      bottom: '0',
      zIndex: '9999',
      borderRadius: '2px 2px 0 0',
      backgroundImage: 'url(https://assets.ubuntu.com/v1/b562c17f-edit.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px 16px',
      backgroundPosition: '16px 50%'
    })

    document.body.appendChild(editStrip);
  }
})();
