(function(){
  var copyDocMeta = document.querySelector('meta[name="copydoc"]');
  var copyDoc;

  if (copyDocMeta) {
    copyDoc = copyDocMeta.getAttribute('content');
  }

  if (copyDoc) {
    var editStrip = document.createElement('div');
    editStrip.className = 'copy-docs-widget is-light';

    var link = document.createElement('a');
    Object.assign(link, {
      className: "p-link--external",
      href: copyDoc,
      target: "_blank"
    });
    link.appendChild(document.createTextNode('copy document'));

    editStrip.appendChild(document.createTextNode('Propose changes to this page in the '));
    editStrip.appendChild(link);

    document.body.appendChild(editStrip);
  }
})();
