
(async function(){
  var projects = []
  const response = await fetch("https://raw.githubusercontent.com/canonical/cs.canonical.com/main/sites.yaml")
  if(response.ok){
    const yamlStr = await response.text()
    projects = yamlStr
      .split("\n")
      .filter((line) => line.trim() && !line.startsWith("sites:"))
      .map((line) => line.trim().replace(/^\- /, ""))
      .filter((line) => line);
  }

  var copyDocMeta = document.querySelector('meta[name="copydoc"]');
  var copyDoc;

  if (projects.includes(window.location.hostname)) {
    copyDoc = `https://cs.canonical.com/app/webpage/${window.location.hostname}${window.location.pathname}`
  } else if (copyDocMeta) {
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
