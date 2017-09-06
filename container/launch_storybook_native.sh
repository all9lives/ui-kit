#!/bin/bash

docker run -v "$PWD:/usr/src/app" -w /usr/src/app -p 7007:7007 --rm -t -i node sh -c "yarn storybook:native"
