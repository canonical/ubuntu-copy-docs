# Ubuntu Copy Docs

Browser extension that adds a link to webpage details in the [Content System](https://cs.canonical.com) or the copydoc, depending on the project's availability in the content system.

![extenstion in action on ubuntu.com](/assets/copydocs-screenshot.png)

![extenstion in action on juju.is](/assets/copydocs-on-juju.png)

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
<meta name="copydoc" content="https://docs.google.com/document/d/example123" />
```

Currently the extension is configured on the following domains:

- `anbox-cloud.io`
- `canonical.com`
- `charmed-kubeflow.io`
- `charmed-osm.com`
- `cloud-init.io`
- `conjure-up.io`
- `dqlite.io`
- `etclite.io`
- `jaas.ai`
- `juju.is`
- `kubeflow-news.com`
- `maas.io`
- `microcloud.is`
- `microk8s.io`
- `microstack.run`
- `mir-server.io`
- `multipass.run`
- `netplan.io`
- `snapcraft.io`
- `ubuntu.com`
- `vanillaframework.io`

If you would like your domain added to those [file a bug](https://github.com/canonical-webteam/ubuntu-copy-docs/issues/new) or [create a PR](https://github.com/canonical-webteam/ubuntu-copy-docs/blob/main/copydocs/manifest.json#L18-L24) with it.

## How it works

This extension checks if the hostname is included within the currently available projects in the [Content System](https://cs.canonical.com). If true, the link will point to the corresponding web page details in the content system. Otherwise, the link will point to the webpage copydoc.
