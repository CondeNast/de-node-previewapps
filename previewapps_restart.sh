#!/usr/bin/env bash

export NODE_ENV=production
PREVIEWAPPS_RUNNING=$(ps -ef | grep 'node' | grep '/data/de-node-previewapps')
if [ "$PREVIEWAPPS_RUNNING" ]; then
    killall -9 node
    echo "issued restart"
fi

cd /data/de-node-previewapps
nohup npm start
echo ""
echo "restarted"