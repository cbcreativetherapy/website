# Auth Recovery and Catastrophic Rollback Runbook

Date: 2026-06-08
Project: cbcreative / Sanity project `njbf7cxc`

Use this runbook when Studio login fails (especially GitHub auth in iframe context) and when you need a full emergency rollback.

## 1. Situation summary

Observed error pattern:
- Browser console shows `github.com refused to connect`
- CSP error: `Framing 'https://github.com/' violates ... frame-ancestors 'none'`

Interpretation:
- GitHub OAuth is being attempted inside an iframe.
- GitHub blocks framing by policy.
- This is an auth transport/context issue, not a content schema issue.

## 2. Fast auth recovery (targeted)

Goal:
- Restore editor login without changing data.

### Step A: force top-level login flow

1. Open the Studio URL directly in a new browser tab.
2. Do not open Studio from any embedded admin shell or iframe-based route.
3. Retry `Continue with GitHub`.

Expected:
- Login flow opens as full page or popup, not iframe.

### Step B: eliminate client-side blockers

1. Try Chrome Incognito.
2. Disable browser extensions for the Studio domain.
3. Retry in a second browser.

Expected:
- If auth works in clean profile, issue is client policy/extension-related.

### Step C: verify hosted Studio is v5 build

1. Confirm deployed code includes these commits:
   - `e8f2d54`
   - `54d54ee`
   - `63d8d5d`
   - `b2c5498`
2. Retest auth on the deployed v5 URL.

Expected:
- Modern auth flow should avoid legacy framed behavior.

### Step D: fallback access path

If GitHub auth still fails:
1. Ask a Sanity project admin to enable/confirm an alternate login provider (for example email or Google) for your user.
2. Use alternate provider to regain Studio access.
3. Keep GitHub auth remediation as a follow-up task.

## 3. If auth outage becomes critical: emergency rollback plan

Use this when production editing is blocked and must be restored quickly.

## 3.1 Safety checklist before rollback

1. Announce maintenance window and freeze content edits.
2. Capture a fresh backup of current production before any restore action.
3. Confirm you have access to rollback target commit and deploy permissions.

## 3.2 Backup current production state (pre-rollback)

Run from repository root:

```bash
npx -y sanity@latest dataset export production \
  sanity/backups/pre-rollback-$(date +%Y%m%d-%H%M%S).tar.gz \
  -p njbf7cxc --overwrite
```

## 3.3 Roll back application code to v2-era state

Current pre-migration commit anchor:
- `b7bd98f` (`origin/master` before v5 migration commits)

### Option A (recommended): deploy previous known-good commit in hosting UI

1. In hosting platform (Netlify or Sanity-hosted Studio workflow), redeploy last known good release tied to commit `b7bd98f`.
2. Verify Studio login and editor access.

### Option B: git-based rollback branch

```bash
cd /Users/philip.turkiewicz/Development/personal-projects/website
git checkout -b emergency-rollback-v2 b7bd98f
```

Then deploy this branch through your normal production deployment path.

## 3.4 Restore dataset from verified backup (only if needed)

Warning:
- `--replace` overwrites documents with matching IDs in target dataset.
- Do this only in a controlled maintenance window.

Verified migration-era backup:
- `sanity/backups/production-20260608-204856.tar.gz`

### Recommended dry run to temporary dataset first

```bash
# create temporary validation dataset
npx -y sanity@latest dataset create rollback-validate-$(date +%Y%m%d) -p njbf7cxc

# import backup into temporary dataset (capture dataset name used above)
npx -y sanity@latest datasets import \
  sanity/backups/production-20260608-204856.tar.gz \
  -p njbf7cxc -d rollback-validate-YYYYMMDD --replace
```

Validate content briefly in Studio pointed at the temporary dataset.

### Production restore command

```bash
npx -y sanity@latest datasets import \
  sanity/backups/production-20260608-204856.tar.gz \
  -p njbf7cxc -d production --replace
```

## 3.5 Post-restore verification

1. Re-run inventory:

```bash
cd /Users/philip.turkiewicz/Development/personal-projects/website/sanity
SANITY_DATASET=production npm run gate0:inventory
```

2. Compare against baseline:
- `sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json`

3. Smoke test key content routes and editor flows.

## 3.6 Recovery completion criteria

Recovery is complete when:
1. Studio login works in production.
2. Editors can open/edit/publish core document types.
3. Production site renders critical pages correctly.
4. Inventory parity is acceptable against baseline.

## 4. Decision tree

1. If CSP frame-ancestor error persists only in embedded context:
- Stop using embedded login path, use direct Studio URL.

2. If error persists in direct top-level tab:
- Use alternate provider for immediate access and continue auth config remediation.

3. If editor access is still blocked after provider fallback:
- Execute emergency rollback (code first, data restore only if required).

## 5. References and artifacts

Primary migration plan:
- `sanity/MIGRATION_EXECUTION_PLAN.md`

Backup artifacts:
- `sanity/backups/production-20260608-204856.tar.gz`
- `sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json`

Recent migration commits:
- `e8f2d54`
- `54d54ee`
- `63d8d5d`
- `b2c5498`

Pre-migration anchor commit:
- `b7bd98f`
