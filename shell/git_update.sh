#!/bin/sh

cd /home/wanshuxue/asset/
ver=`git show|grep 'git-svn-id'|awk -F'@' '{print $2}'| awk -F ' ' '{print $1}'`
find . -name '*.css'|xargs sed -i "s/\(\w\+.\(png\|jpg\|gif\)\)\([^?]\)/\1?$ver\3/g" >> /tmp/ana.log

find /home/wanshuxue/www/config/ -name 'config.inc.php' |xargs sed -i "s/ASSET_VERSION',\(\w\+\)/ASSET_VERSION',$ver/"
