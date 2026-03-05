![CI](https://github.com/mxn2020/minions-audiences-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-audiences

**Ideal customer profiles, niche definitions, market segments, and target audience personas**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-audiences/sdk minions-sdk

# Python
pip install minions-audiences

# CLI (global)
npm install -g @minions-audiences/cli
```

---

## CLI

```bash
# Show help
audiences --help
```

---

## Python SDK

```python
from minions_audiences import create_client

client = create_client()
```

---

## Project Structure

```
minions-audiences/
  packages/
    core/           # TypeScript core library (@minions-audiences/sdk on npm)
    python/         # Python SDK (minions-audiences on PyPI)
    cli/            # CLI tool (@minions-audiences/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [audiences.minions.help](https://audiences.minions.help)
- Blog: [audiences.minions.blog](https://audiences.minions.blog)
- App: [audiences.minions.wtf](https://audiences.minions.wtf)

---

## License

[MIT](LICENSE)
