# Risk Review: Last 4 Commits

Date: 2026-06-08
Scope:
- `b2c5498` docs: finalize Sanity migration gates, verification report, and rollback notes
- `63d8d5d` fix(gatsby): make develop/build compatible with current Node runtime
- `54d54ee` feat(sanity): migrate Studio from v2 to v5 and retire legacy config
- `e8f2d54` chore: ignore generated artifacts and untrack Sanity build output

Ordered by severity, then likelihood.

## 1. High severity, high likelihood

### GitHub iframe auth failure is not explicitly fixed in these commits

Risk:
- The observed blocker (`github.com refused to connect` with CSP frame-ancestors) is an auth transport/context issue.
- These commits do not include explicit provider/hosting header/auth flow changes.

Failure point:
- Production Studio login can still fail after deploy if the framed login path is still used.

Evidence:
- `sanity/sanity.config.js`
- `sanity/MIGRATION_EXECUTION_PLAN.md`

## 2. High severity, medium likelihood

### Backup artifacts are local-only by policy unless copied elsewhere

Risk:
- Backups are ignored in Git by design.
- If local storage is lost and no secondary storage exists, rollback data may be unavailable.

Failure point:
- Disaster recovery path fails due to missing backup artifacts.

Evidence:
- `.gitignore` (`sanity/backups` ignored)
- `sanity/MIGRATION_EXECUTION_PLAN.md` backup references

## 3. Medium severity, high likelihood

### Gatsby runtime relies on OpenSSL legacy compatibility mode

Risk:
- Startup/build depend on `NODE_OPTIONS=--openssl-legacy-provider`.
- This is a compatibility bridge, not a modernization.

Failure point:
- Future Node/CI/Netlify runtime changes may re-break Gatsby behavior.

Evidence:
- `gatsby/package.json` scripts
- `gatsby` remains on legacy major versions

## 4. Medium severity, medium likelihood

### Backup/inventory scripts default to production identifiers when env vars are missing

Risk:
- Scripts can run against defaults silently.

Failure point:
- Operator executes in wrong context and receives misleading confirmation.

Evidence:
- `sanity/scripts/gate0-backup.sh` default project/dataset
- `sanity/scripts/gate0-content-inventory.mjs` default project/dataset

## 5. Medium severity, medium likelihood

### Removing committed Studio build artifacts can break artifact-based deployment assumptions

Risk:
- `sanity/dist` is no longer tracked.

Failure point:
- Any legacy/manual workflow that depended on committed dist files stops working.

Evidence:
- `.gitignore` includes `sanity/dist`
- dist files removed in commit `e8f2d54`

## 6. Low severity, high likelihood

### Ongoing dependency/toolchain drift remains

Risk:
- Mixed-era dependencies and older tooling increase maintenance burden.

Failure point:
- More frequent warnings and upgrade friction over time.

Evidence:
- `gatsby/package.json` and `sanity/package.json` dependency sets

## Open assumptions

1. Netlify deploy is source-build based, not artifact-upload based.
2. No external backup replication is currently guaranteed.
3. Auth issue occurs on hosted Studio and not only an embedded/local context.

## Priority hardening actions

1. Validate auth in direct top-level Studio URL post-deploy.
2. Store backup artifact outside local machine (encrypted cloud/offsite copy).
3. Add explicit env guardrails to backup/inventory scripts.
4. Plan Gatsby modernization to remove OpenSSL legacy dependency.
