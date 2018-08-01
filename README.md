# Ubuntu Copy Docs

Browser extension that adds a link to copy docs to Ubuntu and Canonical websites.

![extenstion in action on ubuntu.com](https://raw.githubusercontent.com/canonical-webteam/ubuntu-copy-docs/master/assets/copydocs-screenshot.png)

## Install

### Firefox

Get [Ubuntu Copy Docs](https://addons.mozilla.org/en-US/firefox/addon/ubuntu-copy-docs/) from Firefox Add-ons.

### Chrome

Get [Ubuntu Copy Docs](https://chrome.google.com/webstore/detail/ubuntu-copy-docs/cmljegnknolilmjdconnapgllmefigfl?hl=en-US) from Chrome Web Store.


## How to add it to the site

This extension looks for specific meta data in the page HTML.

If you want to link your page to a copy doc you need to add a `<meta name="copydoc" content="...">` tag to the page HTML head, where the content is the URL of the copy doc.

For example:

```html
<meta name="copydoc" content="https://docs.google.com/document/d/example123">
```

Currently the extension is configured only on some domains (including `ubuntu.com`, `canonical.com`, `snapcraft.io`, `maas.io`).
If you would like your domain added to those [file a bug](https://github.com/canonical-webteam/ubuntu-copy-docs/issues/new) or [create a PR](https://github.com/canonical-webteam/ubuntu-copy-docs/blob/master/copydocs/manifest.json#L18-L24) with it.
