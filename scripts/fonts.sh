#!/usr/bin/env bash
# Copy the licensed Pangram Pangram web fonts the site uses into public/fonts/pp/ (git-ignored).
# Usage: scripts/fonts.sh <path to a clone of the private saragram-ux/fonts repo>
# Only these files are published; everything else in the fonts repo stays private.
set -euo pipefail
src="${1:?usage: scripts/fonts.sh <fonts repo path>}"
dest="$(dirname "$0")/../public/fonts/pp"
files=(
  PPRightGrotesk-CompactBlack.woff2
  PPMori-Regular.woff2
  PPMori-Italic.woff2
  PPMori-Semibold.woff2
  PPSupplyMono-Regular.woff2
  PPSupplyMono-Medium.woff2
)
rm -rf "$dest" && mkdir -p "$dest"
for f in "${files[@]}"; do cp "$src/$f" "$dest/"; done
echo "fonts: copied ${#files[@]} files to public/fonts/pp/"
