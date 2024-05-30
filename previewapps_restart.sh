#!/usr/bin/env bash

PREVIEWAPPS_RUNNING=$(ps -ef | grep 'node' | grep '/data/de-node-previewapps')
if [ "$PREVIEWAPPS_RUNNING" ]; then
    #PROCESS_NUM=$(echo $PREVIEWAPPS_RUNNING | cut -d ' ' -f 2)
    killall -9 node
    echo "issued restart"
fi

cd /data/de-node-previewapps
nohup npm start
echo ""
echo "restarted"