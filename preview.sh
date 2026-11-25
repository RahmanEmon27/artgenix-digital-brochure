#!/usr/bin/env bash
# Local preview: starts a server for this folder and opens it in your browser.
# Usage:  ./preview.sh          (default port 8090)
#         ./preview.sh 3000     (custom port)
# Stop with Ctrl+C.
set -euo pipefail
cd "$(dirname "$0")"

PORT="${1:-8090}"
URL="http://localhost:$PORT"

if lsof -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "A server is already running on port $PORT — opening $URL"
  open "$URL"
  exit 0
fi

echo "Brochure preview: $URL"
echo "Phone on the same Wi-Fi: http://$(ipconfig getifaddr en0 2>/dev/null || echo '<your-mac-ip>'):$PORT"
echo "Press Ctrl+C to stop."
( sleep 1 && open "$URL" ) &
python3 -m http.server "$PORT" --bind 0.0.0.0
