#!/bin/bash

docker run -v "$PWD:/usr/src/app" -w /usr/src/app --rm -t -i node sh -c "yarn test:watch"
