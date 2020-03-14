#!/bin/bash

while read url; do
    fileName="$(b=${url##*/}; echo ${b%.*})"
    echo "== $fileName.mp3 == $url =="
    curl -L $url -o "mp3/$fileName.mp3"
done < fileList.txt