#!/bin/bash

docker run -v "$PWD:/usr/src/app" -w /usr/src/app -p 6006:6006 --rm -t -i node sh -c "yarn storybook:web"
