#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WORKSPACE_DIR="$(cd "$ROOT_DIR/.." && pwd)"

PROJECT_ID="${SANITY_PROJECT_ID:-}"
DATASET="${SANITY_DATASET:-}"

PROJECT_ID="${PROJECT_ID:-njbf7cxc}"
DATASET="${DATASET:-production}"

if [[ -z "$PROJECT_ID" || -z "$DATASET" ]]; then
  echo "Missing Sanity project configuration. Set SANITY_PROJECT_ID and SANITY_DATASET."
  exit 1
fi

cd "$WORKSPACE_DIR"

TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="$ROOT_DIR/backups"
BACKUP_FILE="$BACKUP_DIR/production-$TIMESTAMP.tar.gz"

mkdir -p "$BACKUP_DIR"

echo "Creating dataset backup at $BACKUP_FILE"
echo "Project: $PROJECT_ID"
echo "Dataset: $DATASET"

# Uses the currently authenticated Sanity CLI user/token.
npx -y sanity@latest dataset export "$DATASET" "$BACKUP_FILE" -p "$PROJECT_ID" --overwrite

if [[ ! -s "$BACKUP_FILE" ]]; then
  echo "Backup failed: output file missing or empty"
  exit 1
fi

echo "Backup complete: $BACKUP_FILE"
