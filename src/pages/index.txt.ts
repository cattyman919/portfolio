// src/pages/curl.txt.ts
import type { APIRoute } from "astro";

const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  bold: "\x1b[1m",
};

const colorize = (color: keyof typeof colors, text: string) =>
  `${colors[color]}${text}${colors.reset}`;

export const GET: APIRoute = async () => {
  const asciiArt = `
  ____                   
 / ___|  ___ _ __   ___  
 \___ \ / _ \ '_ \ / _ \ 
  ___) |  __/ | | | (_) |
 |____/ \___|_| |_|\___/ 
                         
`;
  const terminalContent = `
${colorize("cyan", asciiArt)}
${colorize("green", "Welcome to my Curlable Portfolio Site!")}

> This text only shows up in the terminal.
> You can put links, ASCII art, or your resume here.
  `;

  return new Response(terminalContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
