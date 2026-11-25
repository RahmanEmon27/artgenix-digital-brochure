#!/usr/bin/env bash
# Deploy the brochure: commit changes, push to GitHub (GitHub Pages), deploy to Netlify.
# Usage:  ./deploy.sh "what you changed"
set -euo pipefail
cd "$(dirname "$0")"

MSG="${1:-Update brochure}"

# 1) Commit local changes (if any)
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "$MSG"
else
  echo "No local changes to commit."
fi

# 2) Push to GitHub -> GitHub Pages updates in 1–2 minutes
git push origin main

# 3) Deploy only the site files to Netlify (no README / scripts)
DIST="$(mktemp -d)"
trap 'rm -rf "$DIST"' EXIT
git archive HEAD | tar -x -C "$DIST"
rm -f "$DIST"/README.md "$DIST"/deploy.sh "$DIST"/preview.sh "$DIST"/netlify.toml "$DIST"/.gitignore "$DIST"/.nojekyll

# Upload as a draft first, then publish that draft to production.
# (A direct `--prod` deploy has returned "Forbidden" on this project.)
SITE_ID="2f21d40c-69db-4343-9b5e-1a4798034f4d"
echo "Uploading draft to Netlify..."
DEPLOY_ID="$(netlify deploy --dir "$DIST" --site "$SITE_ID" --json \
  | python3 -c 'import json,sys; print(json.load(sys.stdin)["deploy_id"])')"
echo "Publishing deploy $DEPLOY_ID to production..."
netlify api restoreSiteDeploy \
  --data "{\"site_id\":\"$SITE_ID\",\"deploy_id\":\"$DEPLOY_ID\"}" > /dev/null
echo "Netlify deploy is live."

echo
echo "Done:"
echo "  Netlify:       https://artgenix-digital-brochure.netlify.app"
echo "  GitHub Pages:  https://rahmanemon27.github.io/artgenix-digital-brochure/"
