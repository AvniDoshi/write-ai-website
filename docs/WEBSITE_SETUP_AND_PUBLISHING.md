# WRITE AI Website: Beginner Setup and Publishing Guide

This guide explains how a new contributor can go from a computer with no development tools installed to making a reviewed change that is publicly available at `https://writeai.center`.

It is written for Windows and the Codex experience in the ChatGPT desktop app. The Git and npm commands are also usable on macOS and Linux.

## The publishing system in one minute

The website has one source of truth:

```text
Local WRITE AI folder
        ↓
Git commit on a branch
        ↓
GitHub pull request
        ↓
Merge into GitHub main
        ↓
Cloudflare Workers Builds
        ↓
https://writeai.center
        ↓
https://www.writeai.center redirects to https://writeai.center
```

- Repository: `https://github.com/AvniDoshi/write-ai-website`
- Production branch: `main`
- Cloudflare Worker: `write-ai-website`
- Canonical public address: `https://writeai.center`
- Alternate public address: `https://www.writeai.center`
- Test address: `https://write-ai-website.writeaicenter.workers.dev`
- Production host: Cloudflare Workers
- Automatic deployment: Cloudflare Workers Builds connected to GitHub
- ChatGPT Sites: **not used**

Pushing a branch does not necessarily change the public website. Merging or pushing a commit into `main` starts the production Cloudflare build. A normal team change should use a branch and pull request so another person can review it first.

## 1. Get the required account access

Installing software is not enough. A contributor needs permission to the systems they will use.

### GitHub

1. Create a GitHub account at `https://github.com/signup` if needed.
2. Send the GitHub username to the repository administrator.
3. The administrator opens the repository, then **Settings → Collaborators** (or **Collaborators & teams**) and selects **Add people**.
4. Accept the invitation email.

Read access is enough to view or clone a public repository. Write access is required to push a branch. Administrative access should be limited to people who manage repository settings and collaborators.

GitHub access instructions: <https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository>

### Cloudflare

Day-to-day contributors do not need Cloudflare access just to edit code and open a pull request. Maintainers who diagnose deployments, manage domains, or perform emergency rollbacks do need access.

1. Create a Cloudflare login at `https://dash.cloudflare.com/sign-up` if needed.
2. Ask a WRITE AI Center Cloudflare administrator to open **Manage Account → Members → Invite**.
3. The administrator should grant only the permissions needed for the WRITE AI account, the `writeai.center` zone, and Workers.
4. Accept the invitation email and confirm that the WRITE AI account appears in the Cloudflare account switcher.

Cloudflare member instructions: <https://developers.cloudflare.com/fundamentals/manage-members/manage/>

### ChatGPT/Codex

Use the ChatGPT desktop app and sign in with the contributor's own authorized ChatGPT account. Do not share another person's password or session.

Official app quickstart: <https://learn.chatgpt.com/docs/quickstart?setup=app>

### Newsletter administration

The website's newsletter form and the newsletter mailer are related but separate:

- The public form in `app/contact/NewsletterSignup.tsx` submits addresses to a Google Form.
- Google Form responses are stored in a private Google Sheet.
- The Google Apps Script project named **WRITE AI Center Newsletter Mailer** sends automatic signup confirmations and manually initiated newsletter batches.
- The Apps Script is hosted in the `writeaicenter@gmail.com` Google account. A GitHub or Cloudflare login does not grant access to it.

Only newsletter administrators need access to the Google account, response sheet, and Apps Script project. Never put subscriber addresses in GitHub.

### Recommended long-term ownership

Production systems should not depend on one contractor's personal account. The preferred ownership model is:

- A WRITE AI Center GitHub organization owns the repository.
- At least two Center staff members can administer that organization.
- The WRITE AI Center Cloudflare account owns the Worker and domain zone.
- At least two Center staff members can administer that Cloudflare account.
- The Center controls the domain-registrar account and recovery information.
- The Center-controlled Google account owns the newsletter form, response sheet, Gmail drafts, and Apps Script project.

The repository currently uses the URL `AvniDoshi/write-ai-website`. Transferring it to a Center-owned GitHub organization is an administrative handoff project, not a routine code edit. After a transfer, update every local Git remote and reconnect Cloudflare Builds to the new repository location before removing the previous owner's access.

## 2. Install the development tools on Windows

Open Windows Terminal or PowerShell. The following commands install the required tools with Windows Package Manager:

```powershell
winget install --id 9PLM9XGG6VKS -s msstore
winget install --id Git.Git
winget install --id OpenJS.NodeJS.LTS
winget install --id GitHub.cli
```

The first command installs the ChatGPT desktop app. The others install Git, the current Node.js long-term-support release, and GitHub CLI.

Restart Windows Terminal and the ChatGPT desktop app after installation. Then confirm each tool works:

```powershell
git --version
node --version
npm --version
gh --version
```

This project requires Node.js `22.13.0` or newer. If `node --version` reports an older version, update Node before continuing.

If PowerShell reports that `npm.ps1` cannot run because scripts are disabled, read Microsoft's execution-policy documentation before changing the setting. A commonly used per-user setting is:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Do not run the ChatGPT app as an administrator for normal website work.

## 3. Configure Git and sign in to GitHub

Set the name and email that will appear on commits:

```powershell
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"
```

Then authenticate GitHub CLI:

```powershell
gh auth login
```

Choose:

1. `GitHub.com`
2. `HTTPS`
3. Sign in through the browser

Confirm the login:

```powershell
gh auth status
```

GitHub's command-line setup instructions: <https://docs.github.com/en/get-started/learning-to-code/getting-started-with-git>

## 4. Download the website repository

Choose a normal development folder that is backed up and that the contributor owns. Do not clone into a temporary folder.

```powershell
cd "$HOME\Documents"
gh repo clone AvniDoshi/write-ai-website
cd write-ai-website
```

Confirm the repository connection:

```powershell
git remote -v
git branch --show-current
git status
```

The remote should be `https://github.com/AvniDoshi/write-ai-website.git`, the branch should initially be `main`, and the working tree should be clean.

GitHub cloning instructions: <https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository>

## 5. Install the website dependencies and run it locally

From the repository folder:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` in a browser. Keep the terminal open while the development server is running. Press `Ctrl+C` in that terminal to stop it.

Before editing anything, verify the checked-out project can build and pass its rendered-page tests:

```powershell
npm test
```

If this fails on a fresh copy of `main`, save the entire error and ask a maintainer before making unrelated changes.

## 6. Open the local repository in Codex

1. Open the ChatGPT desktop app.
2. Select **Codex**.
3. Choose **Add new project** or **Open folder**.
4. Select the cloned `write-ai-website` folder—the folder containing `package.json` and `wrangler.jsonc`.
5. Keep **Ask for approval** enabled. Full-access mode is unnecessary for routine website edits.
6. Start a new Codex task for each distinct change.

Codex can read and edit the selected folder, run the build and tests, inspect Git changes, create commits, push branches, and open pull requests. It cannot grant itself GitHub, Cloudflare, or Google permissions.

## 7. Know where the important files are

| Location | Purpose |
| --- | --- |
| `app/` | Website pages, React components, styles, and content data |
| `app/people/data.ts` | People directory cards, biographies, roles, images, and links |
| `app/news/data.ts` | News items |
| `app/contact/NewsletterSignup.tsx` | Public newsletter signup form connection |
| `public/` | Images, PDFs, videos, and other public files |
| `worker/index.ts` | Cloudflare Worker entry point and `www` redirect |
| `wrangler.jsonc` | Cloudflare Worker name, runtime compatibility, and custom domains |
| `tests/rendered-html.test.mjs` | Server-rendered page regression tests |
| `scripts/verify-site.mjs` | Full post-deployment website crawler |
| `package.json` | Node version requirement and development commands |
| `README.md` | Short project overview and contributor summary |

Do not edit generated folders such as `node_modules`, `.vinext`, `dist`, or `.wrangler`. They are rebuilt automatically and are intentionally excluded from Git.

## 8. The normal change-to-production workflow

### Step A: Synchronize before starting

Every task starts from the newest production code:

```powershell
git switch main
git pull --ff-only origin main
git status
```

Do not start editing if `git status` shows changes you do not understand. They may belong to another person or unfinished task.

### Step B: Create a branch

Use a short descriptive branch name:

```powershell
git switch -c codex/add-person-name
```

Examples:

- `codex/update-maura-photo`
- `codex/add-fall-event`
- `codex/fix-mobile-navigation`

### Step C: Give Codex a complete request

Paste a prompt like this:

```text
Work only in the WRITE AI GitHub repository and use Cloudflare as the host.
Do not use ChatGPT Sites and do not make manual production-only changes.

Make this change: [describe the requested result precisely].

First inspect the existing implementation and preserve unrelated work. Use the
current design and data structures. Add or update regression tests, run npm test,
review the diff for accidental changes, and tell me about any existing unrelated
lint failures. Do not publish until the implementation and tests are complete.
```

For a person or image update, attach the exact image and specify the section, role, institution, biography source, crop preference, and public links. Ask Codex to verify externally sourced facts against authoritative pages.

### Step D: Review locally

Ask Codex:

```text
Run the local site, inspect the changed page at desktop and mobile widths, and
show me the final diff. Confirm that the requested content, links, image, and
section placement are correct.
```

You can also run:

```powershell
npm run dev
npm test
npm run lint
git diff --check
git status
```

`npm test` builds the application and runs the rendered-page suite. Treat a failed build or failed test as a publishing blocker. If lint reports older unrelated issues, ask Codex to separate them from any new issue introduced by the change; do not silently ignore new errors.

### Step E: Commit and push the branch

After reviewing the change, ask Codex:

```text
Commit only the files for this task with a clear commit message. Push this
branch to GitHub and open a pull request into main. Do not push unrelated files.
```

The equivalent commands are:

```powershell
git status
git add path\to\each-changed-file
git commit -m "Describe the completed change"
git push -u origin codex/add-person-name
gh pr create --base main --fill
```

Never use `git add .` without first reviewing `git status`. It can include unrelated or private files.

### Step F: Review and merge the pull request

1. Open the pull request on GitHub.
2. Read the **Files changed** tab.
3. Confirm that only intended files changed.
4. Confirm all automated checks and any Cloudflare preview build succeeded.
5. Request review from the appropriate team member.
6. Merge into `main` only after approval.

GitHub pull-request instructions: <https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request>

### Step G: Let Cloudflare publish `main`

No one should copy files into Cloudflare by hand. Cloudflare Workers Builds watches GitHub `main`. A merged commit triggers:

1. `npm run build`
2. `npx wrangler deploy`
3. Promotion of the resulting Worker version to production

To monitor it:

1. Open Cloudflare.
2. Select the WRITE AI account.
3. Open **Workers & Pages → write-ai-website → Deployments**.
4. Wait for the build associated with the merged Git commit to succeed.

Cloudflare Git integration: <https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/>

### Step H: Verify production

Run the full production crawl:

```powershell
npm run verify:site -- https://writeai.center/
```

The command should report only successful responses. The total number of checked pages and assets will grow as the site grows.

Also verify:

```powershell
curl.exe -I https://writeai.center/
curl.exe -I https://www.writeai.center/
```

Expected behavior:

- `https://writeai.center/` returns `200`.
- `https://www.writeai.center/` returns a `308` redirect whose `Location` is `https://writeai.center/`.
- The changed page returns `200` and visibly shows the new content.
- Any newly added image or downloadable file returns `200`.

For a thorough Codex publishing request, use:

```text
The pull request is approved. Merge or push the approved commit to main, wait
for the matching Cloudflare production deployment, run the complete live-site
crawl, verify the changed page and assets, and verify both HTTPS hostnames.
Report the Git commit, live URLs, test results, and deployment result. Do not
claim it is published until the live site contains the change.
```

## 9. Emergency direct publishing

Directly pushing `main` skips pull-request review and immediately starts a production deployment. Use it only when the repository owner explicitly authorizes an urgent, low-risk fix.

The safe Codex instruction is:

```text
This is an authorized emergency production fix. Pull the latest origin/main
first. If GitHub has newer work, rebase safely and do not overwrite it. Make
only the requested change, run the full test suite, show the diff, commit it,
push main, wait for Cloudflare, and verify production.
```

Never use force push. Never use `git reset --hard` to solve a publishing problem. Never deploy uncommitted local code with Wrangler as a substitute for GitHub.

## 10. One-time Cloudflare setup for an owner or administrator

This section is for rebuilding the deployment connection or transferring it to a Center-owned account. Ordinary contributors should not repeat these steps.

### Required ownership

- The WRITE AI Center should control the Cloudflare account.
- The account must contain the active `writeai.center` zone.
- Domain nameservers must point to the Cloudflare nameservers assigned to that zone.
- The administrator must have access to the GitHub repository.

### Connect the existing Worker to GitHub

1. In Cloudflare, open **Workers & Pages**.
2. Open the existing Worker named `write-ai-website`.
3. Open **Settings → Builds → Connect**.
4. Choose GitHub and authorize the Cloudflare Workers & Pages GitHub App.
5. Grant the app access to `AvniDoshi/write-ai-website`. Selecting only this repository is sufficient.
6. Set the production branch to `main`.
7. Set the root directory to `/` or leave it at the repository root.
8. Set the build command to `npm run build`.
9. Set the deploy command to `npx wrangler deploy`.
10. Set the build environment variable `NEXT_PUBLIC_SITE_URL` to `https://writeai.center`.
11. Save, deploy, and verify the provided `workers.dev` address.

The Cloudflare Worker name must match `"name": "write-ai-website"` in `wrangler.jsonc`, or the build can fail.

Cloudflare build configuration: <https://developers.cloudflare.com/workers/ci-cd/builds/configuration/>

### Production domains and HTTPS

`wrangler.jsonc` declares both domains as Cloudflare Worker custom domains:

```json
"routes": [
  { "pattern": "writeai.center", "custom_domain": true },
  { "pattern": "www.writeai.center", "custom_domain": true }
]
```

Cloudflare creates the Worker DNS records and TLS certificates for custom domains. The code in `worker/index.ts` redirects `www.writeai.center` to `writeai.center` with status `308`.

Do not add old OpenAI/ChatGPT Sites DNS records. Do not create a second website in ChatGPT Sites. This project does not contain `.openai/hosting.json`, and ChatGPT Sites is not part of production.

Cloudflare custom-domain instructions: <https://developers.cloudflare.com/workers/configuration/routing/custom-domains/>

## 11. Newsletter workflow versus website publishing

A website deployment does not send a newsletter. These are separate operations.

### What happens automatically

1. A visitor submits the newsletter form on the website.
2. The form posts directly to the configured Google Form.
3. The linked Google Sheet receives the address.
4. The Apps Script `onSubscriberAdded` trigger marks a unique address active and sends its confirmation email.

### What happens manually

To send an issue, an authorized newsletter administrator creates the approved Gmail draft and runs `sendNewsletterFromDraft` in the **WRITE AI Center Newsletter Mailer** Apps Script project. The script records the issue subject for each successful recipient, stops at the available Google quota, and resumes with unsent subscribers when run again after the quota resets.

Changing the Apps Script or subscriber sheet is not a Cloudflare deployment. Changing `NewsletterSignup.tsx` is a website code change and must follow the GitHub workflow above.

## 12. Troubleshooting

### `Repository not found` or push permission denied

- Run `gh auth status`.
- Confirm the correct GitHub account is signed in.
- Confirm that account accepted the repository collaborator invitation.
- Run `git remote -v` and verify the repository URL.

### Push rejected because GitHub contains newer work

Do not force push. Save or commit the current task, then integrate the new remote work safely. Ask Codex:

```text
The push was rejected because origin has newer commits. Fetch origin, inspect
the difference, rebase this task onto the current target branch without losing
either person's work, rerun the tests, and push normally. Stop if there is a
real content conflict that requires a human decision.
```

### `npm` is missing or the Node version is too old

Reinstall or update Node.js LTS, restart the terminal, and check `node --version` again. This repository requires Node.js `22.13.0` or newer.

### The site works locally but Cloudflare fails

Check the Cloudflare build log for the exact commit. Confirm:

- Worker name: `write-ai-website`
- Production branch: `main`
- Root directory: repository root
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- The GitHub App still has access to the repository
- The committed `wrangler.jsonc` is present

### GitHub changed but the live site did not

1. Confirm the commit is actually on `main`, not only on a branch.
2. Check **Cloudflare → write-ai-website → Deployments**.
3. Match the deployment commit to `git rev-parse origin/main`.
4. Wait for a successful deployment.
5. Reload the canonical `https://writeai.center` address, not only the `workers.dev` address.
6. Run the production crawler.

### Root domain works but `www` does not

Confirm that both custom-domain entries remain in `wrangler.jsonc`, the Cloudflare zone is active, and the latest deployment succeeded. The Worker handles the redirect; do not point `www` back to the former host.

### A newsletter signup is saved but no newsletter issue is sent

That is expected. Signup confirmation is automatic; distributing a newsletter issue requires the authorized administrator to run the Apps Script batch function from an approved Gmail draft.

## 13. Rollback and recovery

The preferred rollback keeps GitHub and production aligned:

1. Identify the bad commit.
2. Create a new branch from the latest `main`.
3. Use `git revert <bad-commit-sha>` rather than deleting history.
4. Test the revert.
5. Open and merge a pull request.
6. Let Cloudflare deploy the revert.
7. Verify production again.

For an active outage, an authorized Cloudflare administrator can open **Workers & Pages → write-ai-website → Deployments**, select the last known-good version, and choose **Rollback**. Immediately follow that emergency action with a Git revert so the next GitHub deployment does not restore the broken code.

Cloudflare rollback instructions: <https://developers.cloudflare.com/workers/versions-and-deployments/rollbacks/>

## 14. Security rules every contributor must follow

- Never commit passwords, API tokens, Google subscriber lists, private student data, unpublished research data, or `.env` files.
- Never paste secrets into a Codex prompt or public GitHub issue.
- Keep production changes in GitHub; do not maintain a different private copy in Cloudflare.
- Give each person their own GitHub, Cloudflare, and ChatGPT login.
- Grant the minimum account permissions needed.
- Review every changed file before committing.
- Never force push `main`.
- Never delete DNS records, domains, Workers, deployments, branches, or repository history simply to fix a routine error.
- Confirm the production result before telling someone a change is live.

## 15. New-contributor completion checklist

A contributor is fully set up only when all of the following are true:

- [ ] GitHub invitation accepted
- [ ] ChatGPT desktop app installed and signed in
- [ ] Git installed
- [ ] Node.js `22.13.0` or newer installed
- [ ] GitHub CLI installed and authenticated
- [ ] Repository cloned from GitHub
- [ ] `npm install` completed
- [ ] `npm test` passed on current `main`
- [ ] Local site opened successfully
- [ ] Repository folder opened as a Codex project
- [ ] Test branch pushed successfully
- [ ] Pull-request workflow understood
- [ ] Cloudflare access confirmed if the person's role requires it
- [ ] Newsletter Google access confirmed if the person's role requires it
- [ ] Contributor understands that GitHub `main` publishes through Cloudflare and ChatGPT Sites is not used
