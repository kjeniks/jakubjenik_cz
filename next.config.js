/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // povolí statický export do složky "out"
};

module.exports = nextConfig;
// Tento soubor konfiguruje Next.js pro statický export aplikace.
// Všechny stránky budou exportovány jako statické HTML soubory do složky "out" při spuštění příkazu `next export`.