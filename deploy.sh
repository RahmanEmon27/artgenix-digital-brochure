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
rm -f "$DIST"/README.md "$DIST"/deploy.sh "$DIST"/netlify.toml "$DIST"/.gitignore "$DIST"/.nojekyll
netlify deploy --dir "$DIST" --prod

echo
echo "Done:"
echo "  Netlify:       https://artgenix-digital-brochure.netlify.app"
echo "  GitHub Pages:  https://rahmanemon27.github.io/artgenix-digital-brochure/"
