# Panic Mode Rollback (10-command version)

Use this only during an active outage when editor access is broken.

Full details live in:
- `sanity/AUTH_RECOVERY_AND_ROLLBACK_RUNBOOK.md`

## 0. Preconditions

- Project ID: `njbf7cxc`
- Backup target to restore: `sanity/backups/production-20260608-204856.tar.gz`
- Pre-migration code anchor: `b7bd98f`

## 1. Freeze and capture current state

```bash
cd /Users/philip.turkiewicz/Development/personal-projects/website
```

```bash
npx -y sanity@latest dataset export production \
  sanity/backups/pre-rollback-$(date +%Y%m%d-%H%M%S).tar.gz \
  -p njbf7cxc --overwrite
```

## 2. Roll back code to known-good v2 commit

```bash
git checkout -b emergency-rollback-v2 b7bd98f
```

Deploy this branch through your normal production path immediately.

## 3. Restore data only if needed

```bash
npx -y sanity@latest datasets import \
  sanity/backups/production-20260608-204856.tar.gz \
  -p njbf7cxc -d production --replace
```

## 4. Verify quickly

```bash
cd /Users/philip.turkiewicz/Development/personal-projects/website/sanity
```

```bash
SANITY_DATASET=production npm run gate0:inventory
```

Compare latest inventory to baseline:
- `sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json`

## 5. Exit criteria

- Studio login works.
- Editors can open/edit/publish core document types.
- Key frontend pages render correctly.

## Notes

- Do not run data import unless code rollback alone fails to restore acceptable behavior.
- `--replace` overwrites existing documents with matching IDs.
