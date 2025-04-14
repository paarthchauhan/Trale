#!/bin/bash

echo " Setting up Muse project..."

echo " Installing frontend dependencies..."
cd ../client
npm install

echo " Installing backend dependencies..."
cd ../server
npm install

echo " Setup complete!"
# This is a minor update to help close issue #4

