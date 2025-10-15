#!/usr/bin/env node

import inquirer from "inquirer";
import degit from "degit";
import chalk from "chalk";
import { execSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { templates } from "./templates";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log(chalk.cyanBright("\n✨ Welcome!\n"));

  // Step 1: Choose template
  const { templateName } = await inquirer.prompt([
    {
      type: "list",
      name: "templateName",
      message: "Select a template:",
      choices: templates.map((t) => t.name),
    },
  ]);

  const template = templates.find((t) => t.name === templateName);

  if (!template) {
    console.log(chalk.red("❌ Template not found."));
    process.exit(1);
  }

  // Step 2: Project name
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project folder name:",
      default: templateName.replace(/\s+/g, "-").toLowerCase(),
    },
  ]);

  const targetDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`❌ Folder '${projectName}' already exists.`));
    process.exit(1);
  }

  // Step 3: Clone template
  console.log(chalk.blue(`\n📦 Downloading '${templateName}' template...\n`));

  const emitter = degit(template.repo, { cache: false, force: true });
  await emitter.clone(projectName);

  console.log(chalk.green(`✅ Template downloaded into '${projectName}'\n`));

  // Step 4: Choose package manager
  const { packageManager } = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Select a package manager:",
      choices: ["npm", "pnpm", "yarn", "bun"],
      default: "npm",
    },
  ]);

  // Step 5: Install deps (optional)
  const { installDeps } = await inquirer.prompt([
    {
      type: "confirm",
      name: "installDeps",
      message: "Install dependencies now?",
      default: true,
    },
  ]);

  if (installDeps) {
    console.log(chalk.yellow(`📥 Installing dependencies with ${packageManager}...\n`));
    execSync(`${packageManager} install`, { cwd: targetDir, stdio: "inherit" });
  }

  // Step 6: Git initialization (optional)
  const { initGit } = await inquirer.prompt([
    {
      type: "confirm",
      name: "initGit",
      message: "Initialize git repository?",
      default: true,
    },
  ]);

  if (initGit) {
    console.log(chalk.yellow("\n📚 Initializing git repository...\n"));
    execSync("git init", { cwd: targetDir, stdio: "inherit" });
    execSync("git add .", { cwd: targetDir, stdio: "inherit" });
    execSync('git commit -m "Initial commit"', { cwd: targetDir, stdio: "inherit" });
    console.log(chalk.green("✅ Git repository initialized\n"));
  }

  console.log(chalk.greenBright("\n🎉 All done!"));
  console.log(chalk.cyan(`\nNext steps:`));
  console.log(chalk.white(`  cd ${projectName}`));
  if (!installDeps) {
    console.log(chalk.white(`  ${packageManager} install`));
  }
  console.log(chalk.white(`  ${packageManager} run dev`));
}

main().catch((err) => {
  console.error(chalk.red("❌ Error:"), err);
  process.exit(1);
});
