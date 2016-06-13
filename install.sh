#!/bin/sh

wdgt=${1////}".wdgt"

rsync -a $1 $wdgt --exclude=".git"
cp jquery-2.1.4.min.js $wdgt/

open $wdgt
