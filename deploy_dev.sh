#!/bin/bash

sudo npm install
sudo npm install -D webpack
sudo npm install -D webpack-cli
sudo npm install -D html-webpack-plugin
sudo npm install -D clean-webpack-plugin

echo webpack version:
./node_modules/.bin/webpack  -v

