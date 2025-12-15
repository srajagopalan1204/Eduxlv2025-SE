Purpose: This page is your single source of truth to recover, continue, or hand off the project if anything goes wrong—or when you pause and resume later.

Last updated: Oct 23, 2025

1) Repos & Roles

Portfolio/site repo (live): Eduxlv2025-SE

Contains the framework (Unit_staging, Integrated_Testing, Production shell), assets, viewer, and private checklist.

Production roles are wired but we’re not using Production yet.

Workshop/build repo (authoring): son_e_lum

You’ll prepare SOP content here (CSV, images, optional HTML stubs).

Then copy artifacts (images + JSON) into Eduxlv2025-SE.

2) Live URLs (bookmark)

Unit staging (open):
https://<YOUR-USER>.github.io/Eduxlv2025-SE/Unit_staging/index.html

Integrated testing (open):
https://<YOUR-USER>.github.io/Eduxlv2025-SE/Integrated_Testing/index.html

Production (parked for later; has login):
https://<YOUR-USER>.github.io/Eduxlv2025-SE/login.html

Private checklist (do not share):
https://<YOUR-USER>.github.io/Eduxlv2025-SE/docs/private/checklist.html

3) Current State (what exists today)

Entities & tiles: Scott Electric, Palco (Palco → Service → TechMobile path is wired)

Viewer: reads env/<ENV>/story.json and renders frames

Environments:

Unit_staging → author here (open)

Integrated_Testing → QA merge (open)

Production → later only; front-end role gating enabled

Private interactive checklist at docs/private/checklist.html

4) Decisions to Carry Forward

Images live once under /SOP/images/... and are shared by all envs.

Versioned image filenames (e.g., G1_v1.png → G1_v2.png).

Promotion is intentional: Unit → Integrated (merge) → Production (copy).

No auto-pick latest: each env has its own JSON snapshot.

Role gating only in Production (UI lock, not real security).

5) Directory Pointers (in Eduxlv2025-SE)
assets/                  # CSS/JS; login & roles helpers
env/<ENV>/*.json         # nav_config, taxonomy, story, all_story for each env
<Sites> Unit_staging/ Integrated_Testing/ Production/
SOP/images/<Entity>/<Function>/<SubEntity?>/   # all images live here
docs/private/checklist.html                    # private, localStorage-based
login.html              # Production entry (parked)
README.md

6) How to Resume (Next Session plan)

We will finish “CSV → Unit_staging JSON → view” using your TechMobile CSV & images in son_e_lum.

Bring to next session:

CSV: mk_tw_in (path on disk)

Images: TechMobile frames folder (already on your machine)

SOP ID you want (e.g., TechMobile_Intro)

If titles aren’t in CSV: a quick list Code → Title (e.g., G1 → Start Menu)

What I’ll provide:

A small toolkit (in son_e_lum/tools/):

csv_to_story.py (generates story.json entries for Unit_staging)

validate_env.py (checks JSON + image paths)

patch_images.py (bump image versions from a CSV map)

promote.py (for later, when we care about Production)

templates/sop_frame.json5 and docs/IMAGE_NAMING.md

docs/STAGING_CHECKLIST.md (short per-SOP checklist)

Minimal flow (next session):

Run csv_to_story.py on mk_tw_in → get JSON block for Unit_staging.

Copy images → Eduxlv2025-SE/SOP/images/Palco/Service/TechMobile/

Append JSON to env/Unit_staging/story.json (+ update all_story.json).

Open Unit_staging TechMobile page → verify.

7) Quick SOP Porting Cheatsheet (for later)

Add frames (Unit_staging):

{
  "SOP_path": "SOP/Palco/Service/TechMobile/TechMobile_Intro",
  "Entity": "Palco",
  "Function": "Service",
  "SubEntity": "TechMobile",
  "SOP_id": "TechMobile_Intro",
  "Code": "G1",
  "Title": "Start Menu",
  "Image_sub_url": "SOP/images/Palco/Service/TechMobile/G1_v1.png"
}


Repeat one object per frame; keep the same SOP_path for all frames in an SOP.

View directly:

/Unit_staging/viewer.html?sop=SOP/Palco/Service/TechMobile/TechMobile_Intro

8) Demo Logins (Production – for later)

trainer1 / Welcome1! → roles: Scott, Palco

viewer1 / Scott123 → role: Palco:Service:TechMobile

Production role gating is UI-only; staging remains open.

9) Cache Notes

Images: version via filename (*_v2.png) → busts cache automatically.

JSON: fetched with no-store (refresh picks up changes).

CSS/JS: if changed, add ?v=<date> query to asset URLs to force reload.

10) Disaster Recovery Checklist

Repo exists and Pages enabled (main / root).

Open Unit_staging index. If it loads, the framework is intact.

If assets look stale, run a cache-bust commit (append ?v=YYYYMMDDHHMM to CSS/JS in HTML).

Re-copy any missing images into SOP/images/... and re-append story.json entries for Unit_staging.

Validate links by loading the direct viewer URL for a known SOP.

11) Change Log (fill as you go)

2025-10-23: Initial framework committed; staging environments verified; Production parked.