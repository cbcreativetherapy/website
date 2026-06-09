# Deployment Next Steps (Deferred)

This checklist is intentionally saved for later execution after non-deployment work is complete.

## Current state snapshot

- Migration gates (0 through 4) are marked complete in the migration plan.
- Local branch has 4 migration-related commits ahead of origin.
- No push has been executed yet.

## Step 1: Final local verification pass

1. Run Sanity build:
   - `npm --prefix /Users/philip.turkiewicz/Development/personal-projects/website/sanity run build`
2. Run Gatsby develop and confirm Sanity sourcing:
   - `npm --prefix /Users/philip.turkiewicz/Development/personal-projects/website/gatsby run develop`
3. Manual smoke-check key pages in browser:
   - Home, blog list/detail, resources, contact, FAQ.
4. Confirm Studio is reachable and editorial workflows still function.

## Step 2: Confirm Netlify environment variables

1. Ensure `SANITY_PROJECT_ID` is configured in Netlify.
2. Ensure `SANITY_TOKEN` is configured if Gatsby build/runtime path requires authenticated Sanity access.
3. Ensure variable scopes are appropriate for production deploy context.

## Step 3: Publish the migration commits

1. Verify local branch status and ahead count.
2. Push local commits to origin:
   - `git push origin master`

## Step 4: Monitor deploy and validate production

1. Watch Netlify deploy logs for build success.
2. Verify production site routes and content rendering.
3. Verify Studio accessibility and login flow (if self-hosted route is in use).

## Step 5: Rollback references (if needed)

1. Dataset backup artifact:
   - `sanity/backups/production-20260608-204856.tar.gz`
2. Baseline inventory reference:
   - `sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json`
3. Application rollback path:
   - Re-deploy last known-good commit in Netlify.
4. Data rollback path:
   - Import verified backup with Sanity CLI in controlled maintenance window.

## Related plan document

- `sanity/MIGRATION_EXECUTION_PLAN.md`
