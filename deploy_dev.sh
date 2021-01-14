#!/bin/bash

sudo npm i

sudo npm i -D webpack
sudo npm i -D webpack-cli

sudo npm i -D html-webpack-plugin
sudo npm i -D clean-webpack-plugin
sudo npm i -D copy-webpack-plugin

sudo npm i -D style-loader
sudo npm i -D css-loader
sudo npm i -D json-loader
sudo npm i -D file-loader
sudo npm i -D xml-loader
sudo npm i -D csv-loader

sudo npm i normalize.css

sudo npm i -S jquery


echo webpack version:
./node_modules/.bin/webpack  -v

