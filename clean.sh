#!/bin/sh

substance=~/Library/Widgets/${1////}".wdgt"

if [ -e $substance ]; then
  rm -r $substance
  echo done
fi
