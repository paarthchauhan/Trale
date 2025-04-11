#!/bin/bash

echo " Starting backend..."
cd ../server
npm start &

echo " Starting frontend..."
cd ../client
npm start
