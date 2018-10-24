#!/bin/sh
$(dirname $0)/dchlocal.js | elinks -dump | grep -v \{
