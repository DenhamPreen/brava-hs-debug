# Envio Codegen pnpm Workspace Bug

**Issue**: `envio codegen` fails when run inside a pnpm workspace/monorepo, but works fine in a standalone project.

## Quick Reproduction

```bash
# 1. Clone this repo
git clone <this-repo>
cd envio-pnpm-workspace-repro

# 2. Install dependencies
pnpm install

# 3. Run codegen (FAILS)
cd apps/indexer
pnpm codegen
```

## Expected Behavior

Codegen should complete successfully and generate TypeScript types in `./generated/`.

## Actual Behavior

```
Generating HyperIndex code...
>>>> Start compiling
Dependency on rescript-schema
Dependency on rescript-envsafe
Different compiler version: clean current repo
File "bsconfig.json", line 1
Error: package @dzakh/rescript-ava not found or built 
- Did you install it?
>>>> Finish compiling (exit: 2)
```
