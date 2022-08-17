# de-node-previewapps
Pugpig Preview App Server

### What is the Preview App Server?

Editorial, marketing, and Pubwerks need to review digital editions for magazines on iOS devices before issues are released. We sign preview apps with a corporate cert and need to distribute them to people. This server uses email addresses and passwords to ensure that only authorized people download the preview apps to review the content. Apple requires that apps distributed with corporate certs use a signed SSL cert which is handled by devops on the server side. The preivew app server runs as a Docker container to make life easier for devops.

### How do I update the server links?

`util/cnserver.js` contains the correct links for the downloads which are controlled by the environment the server runs in. The preview app server will replace any `https://stagpublish.condenast.com:3001` with the link in `util/cnserver.js`. For example in production `https://stagpublish.condenast.com:3001/previewapps/vanityfair/vanityfair.ipa` will become `https://preview.condenast.com/previewapps/vanityfair/vanityfair.ipa`. If you need to modify the `manifest.plist` files please keep the start of the links as `https://stagpublish.condenast.com:3001`.

### How do I update the preview apps?

Each brand has a preview app stored in `previewapps/<magazine name>/<magazine name>.ipa`. You can replace the ipa file with the latest version and ask devops to redeploy the preview app server. You should not need to modify the `manifest.plist` files when you update the ipa files.