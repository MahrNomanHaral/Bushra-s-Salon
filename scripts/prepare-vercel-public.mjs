import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const publicDir = join(process.cwd(), 'public');

if (!existsSync(distDir)) {
  console.error('Vite build output not found. Run vite build first.');
  process.exit(1);
}

if (existsSync(publicDir)) {
  rmSync(publicDir, { recursive: true });
}

mkdirSync(publicDir, { recursive: true });
cpSync(distDir, publicDir, { recursive: true });
console.log('Copied Vite dist/ to public/ for Next.js SPA fallback.');
