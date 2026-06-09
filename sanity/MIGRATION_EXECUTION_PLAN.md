# Sanity v2 to v5 Migration Execution Plan

Date: 2026-06-08
Owner: AI-assisted migration with human approval gates

## Outcome target

- Primary objective: preserve all existing v2 dataset content through migration with zero unintended document loss.
- Migrate Studio from Sanity v2 architecture to current Sanity v5.
- Keep current dataset and content model semantics stable.
- Preserve Gatsby content delivery behavior.

## Content preservation policy

- Treat Studio migration as an application-layer upgrade only, not a data migration, unless explicitly approved.
- No destructive operations: no delete scripts, no bulk mutations, no schema renames/removals in the first cutover.
- Backups are mandatory before any production-facing step.
- Rollback must be validated before cutover.

## Approval model

- AI executes all non-destructive engineering work by default.
- Human approves only gate transitions and production-facing actions.
- Any data mutation, production deploy, or credential action requires explicit human go-ahead.

## Gate 0: Baseline and safety

Goal:
- Confirm current project can be trusted as migration baseline.
- Establish a content preservation baseline for later comparison.

AI actions:
- Verify package integrity and runtime constraints.
- Capture current dependency snapshot and key Sanity config footprint.
- Create and verify dataset export backup.
- Capture baseline content inventory (document count by _type and sample critical documents).
- Confirm no data migration is required for schema shape changes in initial cutover.

Human approval criteria:
- Confirm migration can proceed in this repository.
- Confirm no freeze-window conflict with active content editing.
- Confirm backup artifact exists and is restorable.

Exit artifacts:
- Baseline findings documented in this plan.
- Backup location and baseline inventory snapshot recorded.

Status:
- Completed.

Execution notes:
- Baseline inventory automation implemented and executed.
- Baseline inventory generated at sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json.
- Second baseline inventory generated at sanity/backups/baseline-inventory-2026-06-09T00-55-14-752Z.json.
- Dataset backup generated at sanity/backups/production-20260608-204856.tar.gz.
- Backup command now works with v5 CLI from workspace root using explicit project and dataset.

## Gate 1: Create parallel v5 Studio scaffold

Goal:
- Stand up a new v5 Studio in parallel with v2 so migration is reversible.

AI actions:
- Create a new Studio entrypoint and configuration using current projectId and dataset.
- Register core plugins in v5 style.
- Install compatible dependency set.
- Keep v2 Studio files untouched and runnable until Gate 4.

Human approval criteria:
- Approve file layout for new Studio bootstrap.
- Approve dependency update strategy.

Exit artifacts:
- New Studio starts locally.
- Old v2 files retained until cutover gate.
- No dataset writes performed by migration tooling.

Status:
- Completed.

## Gate 2: Schema and plugin migration

Goal:
- Port schema assembly and plugin configuration to v5 APIs.
- Preserve existing document compatibility.

AI actions:
- Replace legacy parts-based schema aggregation with v5 schema config.
- Migrate plugin options, including maps and vision configuration.
- Rewrite legacy client usage in utility scripts.
- Enforce schema compatibility mode for cutover: keep type names and field names stable.
- Defer breaking schema refactors to a post-migration phase.

Human approval criteria:
- Confirm editor-visible schema names and fields remain expected.
- Confirm plugin behavior remains acceptable.
- Confirm no existing document types become unreadable or invalid without remediation.

Exit artifacts:
- Studio compiles with no parts-system imports.
- Document editing works for core document types.
- Existing production documents load in the v5 Studio without loss.

Status:
- Completed.

Execution notes:
- Package dependencies migrated to Sanity v5 stack.
- Legacy part-based client usage replaced in sample utility script.
- Studio build succeeds with `npm run build`.

## Gate 3: Verification with frontend impact checks

Goal:
- Ensure Sanity content still supports Gatsby queries and rendering.
- Prove content preservation against baseline.

AI actions:
- Run schema and Studio sanity checks.
- Validate representative content paths used by Gatsby.
- Flag any portable text or image pipeline mismatches.
- Compare post-migration inventory against baseline (counts by _type, spot-check critical docs).

Human approval criteria:
- Confirm editorial workflows and preview expectations.
- Confirm no blocking regressions on key pages.
- Confirm baseline vs post-migration content checks pass.

Exit artifacts:
- Test checklist with pass or fail status.
- Remediation list for any non-blocking issues.
- Signed content-preservation verification report.

Status:
- Completed.

Gate 3 verification report (2026-06-09T01:42:23Z):
- Inventory files compared:
	- `sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json` (baseline)
	- `sanity/backups/baseline-inventory-2026-06-09T01-38-27-078Z.json` (latest)
- Content parity result: PASS
	- totalDocuments: 91 -> 91 (delta 0)
	- countsByType: no deltas
	- criticalDocs: 3 baseline IDs present in latest (missing 0)
- Sanity build result: PASS (`npm run build`)
- Sanity runtime boot result: PASS (`npm run dev`, Studio ready at http://localhost:3333)
- Gatsby integration runtime result: PASS with warnings (`npm run develop`)
	- Sanity source fetched 91 documents
	- GraphQL schema stitched and queries executed
	- Site served at http://localhost:8000
	- Non-blocking warnings observed: Browserslist outdated data and Node deprecation warning (`util._extend`)
- Manual editor workflow verification: COMPLETED
	- Completed: user confirmed open/edit/publish workflow is functioning
	- Completed: user confirmed page-level visual/content checks are good

Gate 3 status decision:
- Automated checks: PASS
- Full Gate 3 sign-off: PASS

## Gate 4: Cutover and cleanup

Goal:
- Retire v2-specific files after v5 acceptance.

AI actions:
- Remove obsolete v2 configuration files and dependencies.
- Normalize scripts for v5 lifecycle commands.
- Prepare concise rollback notes.
- Keep latest verified backup and rollback commands in release notes.

Human approval criteria:
- Approve final cleanup and deployment sequence.
- Confirm rollback drill is understood and feasible.

Exit artifacts:
- Clean v5 Studio codebase.
- Deployment-ready change set.

Status:
- Completed.

Execution notes:
- Retired v2-only files: `sanity/schemas/schema.js` and `sanity/sanity.v2.json`.
- Gate 0 scripts no longer depend on legacy v2 config files.
- Repository artifact policy applied (`sanity/dist`, `sanity/.sanity`, `sanity/backups`, `gatsby/public`, `gatsby/.cache` ignored).

Deployment checklist (final):
- Verify clean source-only change set (`git status` reflects intentional source/config changes only).
- Confirm Studio build passes: `npm --prefix /Users/philip.turkiewicz/Development/personal-projects/website/sanity run build`.
- Confirm Gatsby boots and sources data: `npm --prefix /Users/philip.turkiewicz/Development/personal-projects/website/gatsby run develop`.
- Confirm required Netlify environment variables are set for Gatsby (`SANITY_PROJECT_ID`, `SANITY_TOKEN` if required by build/runtime).
- Push to repository and monitor Netlify production deploy logs.
- Perform post-deploy smoke check on key pages and Studio accessibility.

Rollback notes (concise):
- Data rollback source: `sanity/backups/production-20260608-204856.tar.gz`.
- Data inventory baseline: `sanity/backups/baseline-inventory-2026-06-09T00-44-23-072Z.json`.
- Application rollback: redeploy last known-good commit in Netlify.
- If content rollback is needed, import the verified backup with Sanity CLI in a controlled maintenance window.

## Risk controls

- Never mutate dataset content during migration unless explicitly requested.
- Keep old and new configuration side by side until Gate 4.
- Validate before deletion: compile, run, and editor smoke test.
- Prohibit destructive scripts during migration window unless separately approved.
- Require backup verification before every production-impacting step.

## Repository artifact policy

Policy:
- Track source and configuration files only.
- Do not track generated build artifacts, local caches, or local metadata.

Tracked (examples):
- Studio and Gatsby source files.
- Schema files and migration scripts.
- Build and deployment configuration.

Ignored (approved):
- `sanity/dist` (generated Studio build output).
- `sanity/.sanity` (local Studio metadata/cache).
- `sanity/backups` (local backup artifacts).
- `gatsby/public` and `gatsby/.cache` (generated Gatsby output/cache).

Rationale:
- Netlify Git-based deployments are source-driven: Netlify runs build commands and deploys build output.
- Sanity Studio `dist` is explicitly auto-generated by the build process.
- Keeping generated artifacts out of version control reduces noisy diffs and prevents machine-specific churn.

References:
- Netlify file-based build configuration: https://docs.netlify.com/build/configure-builds/file-based-configuration/
- Netlify deploy workflows (Git and manual): https://docs.netlify.com/deploy/create-deploys/
- Sanity Studio project structure (`dist` is auto-generated): https://www.sanity.io/docs/studio/project-structure
- Sanity Studio deployment/build output behavior: https://www.sanity.io/docs/studio/deployment
- Gatsby starter ignore conventions for generated folders: https://github.com/gatsbyjs/gatsby/blob/master/starters/default/.gitignore

## Data safety checklist

- Backup exported and restore path validated.
- Baseline inventory captured before migration.
- Schema identifiers unchanged for initial cutover.
- Post-migration inventory matches baseline.
- Rollback commands documented and tested.

## Operator checklist

- Confirm who will perform production deploy.
- Confirm secret management owner.
- Confirm acceptance tester for editor UX.

## Next action

- Prepare commit and deploy from the v5 source-only configuration.
