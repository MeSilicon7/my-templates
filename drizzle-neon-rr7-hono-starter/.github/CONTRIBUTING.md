# Contributing Guidelines

Thank you for considering contributing to **[Project Name]**! 🎉
We welcome contributions of all kinds — from bug reports and code improvements to documentation and ideas.

---

## 🧭 Table of Contents

* [Getting Started](#getting-started)
* [Development Setup](#development-setup)
* [Branch Naming](#branch-naming)
* [Commit Messages](#commit-messages)
* [Pull Requests](#pull-requests)
* [Code Style](#code-style)
* [Issue Reporting](#issue-reporting)
* [License](#license)

---

## 🚀 Getting Started

1. **Fork** this repository.
2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/your-username/project-name.git
   ```
3. **Create a branch** for your feature or fix:

   ```bash
   git checkout -b feat/add-awesome-feature
   ```

---

## 🛠️ Development Setup

Make sure you have the required tools installed:

* **Node.js** (v18+ recommended)
* **pnpm** or **npm** (use the one defined in the repo)
* Any additional dependencies listed in the project README

Install dependencies:

```bash
pnpm install
```

Run the project in development mode:

```bash
pnpm dev
```

Run tests before submitting:

```bash
pnpm test
```

---

## 🌿 Branch Naming

Follow this convention:

```
type/short-description
```

**Examples:**

* `fix/login-bug`
* `feat/add-dark-mode`
* `docs/update-readme`
* `chore/update-deps`

---

## 💬 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(optional scope): short summary
```

**Examples:**

* `fix(auth): handle token refresh`
* `feat(ui): add new button styles`
* `docs: update contributing guide`

**Common types:**
`feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `style`

---

## 🔁 Pull Requests

1. Make sure your branch is **up to date** with `main`.
2. Run all tests and linters before pushing:

   ```bash
   pnpm lint && pnpm test
   ```
3. Open a PR with a **clear title** and **description** of your changes.
4. Link related **issues** if applicable (e.g. “Closes #42”).
5. Wait for review — be open to feedback!

---

## 🎨 Code Style

* Use **Prettier** and **ESLint** (configured in the repo).
* Keep functions **small and focused**.
* Prefer **TypeScript** where possible.
* Document exported functions and components with JSDoc or comments.

---

## 🐛 Issue Reporting

If you find a bug:

1. Search existing issues before creating a new one.
2. Include:

   * Steps to reproduce
   * Expected behavior
   * Actual behavior
   * Screenshots or error logs (if applicable)

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (see [`LICENSE`](../LICENSE)).

---

### ❤️ Thank You

Your time and effort make this project better for everyone.
We’re grateful for your contributions!


