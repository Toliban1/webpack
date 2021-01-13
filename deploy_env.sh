#!/bin/bash
sudo apt update

sudo apt install npm

sudo npm install -g n
sudo n stable


echo npm version:
npm -v
echo n version:
n --version
echo nodejs version:
nodejs -v