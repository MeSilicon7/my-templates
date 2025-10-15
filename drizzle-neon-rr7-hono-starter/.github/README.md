TODO: why .github folder and its file explain


## Links
https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository

https://code.visualstudio.com/docs/copilot/overview



## CODEOWNERS FILE
Automatic Assignment via CODEOWNERS

If you have a .github/CODEOWNERS file, GitHub will automatically request reviews from the users or teams listed in it when a pull request modifies files matching the patterns.

You just need to enable branch protection (optional, but recommended) if you want to enforce approvals:

Go to Settings → Branches → Branch protection rules

Select your branch (e.g., main)

Enable:

✅ “Require pull request reviews before merging”

✅ “Require review from Code Owners”

After that, PRs touching those files are automatically assigned to the correct code owners.