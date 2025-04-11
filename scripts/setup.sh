#!/bin/bash

echo " Setting up Muse project..."

echo " Installing frontend dependencies..."
cd ../client
npm install

echo " Installing backend dependencies..."
cd ../server
npm install

echo " Setup complete!"
