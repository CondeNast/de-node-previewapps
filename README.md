# de-node-previewapps
Pugpig Preview App Server

### What is the Preview App Server?

Editorial, marketing, and Pubwerks need to review digital editions for magazines on iOS devices before issues are released. We sign preview apps with a corporate cert and need to distribute them to people. This server uses email addresses and passwords to ensure that only authorized people download the preview apps to review the content. Apple requires that apps distributed with corporate certs use a signed SSL cert which is handled by devops on the server side. The preivew app server runs as a Docker container to make life easier for devops.

### How do I update the preview apps?

Each brand has a preview app stored in `previewapps/<magazine name>/<magazine name>.ipa`. You can replace the ipa file with the latest version and then copy the file via Transmit to `publish.condenast.com`, the folder is `/data/de-node-previewapps/previewapps`. Each ipa is stored in a subfolders by brand so the path to the gq ipa is `/data/de-node-previewapps/previewapps/gq/gq.ipa`. You must replace the files with an ipa that has exactly the same name or it will not work.
