# Github

## How to push
### Step 1: Init Repository
```bash
git init
```
### Step 2: Add a new file to the Repository
```bash
touch README.md
git status
```
### Step 3: Add a file to the staging environment
```bash
git add README.md
```
### Step 4: Create a commit
```bash
git commit -m "<Your message about the commit>"
```
### Step 5: Create new branch
```bash
git branch -m main
```
### Step 6: Create a new repository on GitHub
- [https://github.com/](https://github.com/)
### Step 7: Add the remote-url of github Repository
```bash
git remote add-url origin <remote-url>
```bash
### Step 8: Push a branch to GitHub
```bash
git push -u origin main
```

<hr/>

### Delete tag
```bash
git tag -d Lab01
git push origin --delete Lab01
git push Lab01
```
### Add tag
```bash
git tag -a Lab01 -m "Updated submission for Lab01"
git push origin Lab01
```
