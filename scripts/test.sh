#!/bin/bash

echo "🔍 Checking if Muse backend is running..."

sleep 1

response=$(curl.exe -s -o /dev/null -w "%{http_code}" http://localhost:8800)

if [[ "$response" == "200" || "$response" == "304" || "$response" == "404" ]]; then
  echo "✅ Muse server is UP and responding (HTTP $response)"
else
  echo "❌ Muse server not reachable. Status: $response"
fi
