# 🏠 CAU CPSS Lab Homepage

> Official website of the Cyber-Physical Systems Security Lab at Chung-Ang University.  
> 🔗 https://cpss.cau.ac.kr/

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Styled Components, Tailwind CSS
- **3D**: Three.js
- **Deployment**: Nginx + PM2

<img width="100%" alt="diagram" src="https://github.com/user-attachments/assets/27c841d2-3566-4670-abfe-054cc822e0d7" />

## 🚀 Development

```bash
git clone https://github.com/cau-cpss/Homepage.git
cd Homepage/next
npm install
npm run dev    # Only for local development
```

> **Do NOT use `npm run dev` on the SERVER!!!!!!!!!!!!!!!! ⚠️**<br />
> Server will overwrite the production build in `.next/` and cause PM2 production server to serve broken files (ChunkLoadError, 400 errors).

## 📤 Deployment

On the CPSS server, use:

```bash
cd $HOMEPAGE    # var/www/Homepage/next
bash deploy.sh  # Builds and restart PM2 safely
```

> **Do NOT run as root. ⚠️**<br />
> The script pulls the latest changes, builds the project, and restarts the server safely without corrupting the `.next/` folder.

### Build failure

If the build fails, `deploy.sh` will abort before restarting PM2.<br />
This causes a mismatch between the old running server and the new build files, resulting in ChunkLoadError.<br />
If this happens, fix the code and simply run `bash deploy.sh` again.

### Also...

- Do NOT use `as any` (`@typescript-eslint/no-explicit-any` is enforced)
- When writing browser compatibility polyfills, always use explicit type declarations instead of `any`

> Always be careful of ESLint errors for your mental health. 👍

## Project Structure

```
next/
├── deploy.sh
├── public/
│   ├── files/              # Certificate file
│   └── images/
│       └── members/        # Member profile photos (git-ignore)
└── src/
    ├── app/                # Pages
    │   ├── alumni/
    │   ├── contact/
    │   ├── members/
    │   │   └── professor/  # Professor profile
    │   ├── news/
    │   ├── publications/
    │   └── research/
    │   └── page.tsx        # HomePage
    │   └── globals.css     # Design tokens (colors, radii, shadows) + base styles
    │   └── ...
    ├── components/
    │   ├── home/           # Hero, News, Research/Project sections
    │   ├── layout/         # Nav, Page Header, Footer
    │   ├── people/         # MemberCard, AlumniCard, PeopleTabs
    │   └── ui/             # LangToggle, shared styles
    ├── content/            # Site config & typed views of the data
    │   ├── site.ts         # Lab info, navigation menu, shared UI strings
    │   ├── data.ts         # Typed exports of src/data/*.json
    │   └── vocab.ts        # ko/en dictionary for repeated terms & badges
    ├── lib/
    │   └── i18n.tsx        # KOR/ENG language store (`useT`, `useLanguage`)
    └── data/               # JSON datasets
        ├── members.json
        ├── alumni.json
        ├── professor.json
        ├── projects.json
        ├── publications.json
        ├── research.json
        └── news.json
```

## 🌐 Korean / English

Every visitor-facing string is bilingual. Text lives as `{ "ko": "...", "en": "..." }`
and components read it through `const t = useT()`:

```tsx
const t = useT();
<h1>{t(site.labName)}</h1>       // string
{t(area.keywords).map(...)}      // string[] works too
```

The chosen language is stored in `localStorage` (`cpss-lang`) and defaults to the
browser language. Menu labels and page titles stay in English in both modes.

Publications and member names are stored in English only — they are cited that way.
Short repeated terms (degrees, departments, schools) are stored in English in the JSON
and translated at render time through `src/content/vocab.ts`; unknown values fall back
to the original string, so adding a new value never breaks the page.

## 📊 Managing Data

All content is managed through JSON files in `src/data/`.

| File | Description |
| :---: | :---: |
| `members.json` | Current lab members |
| `alumni.json` | Graduated members (names and status are bilingual) |
| `professor.json` | Professor profile shown on `/members/professor` |
| `projects.json` | Research projects (bilingual) |
| `publications.json` | Papers & publications (English only) |
| `research.json` | Research areas (bilingual) |
| `news.json` | News items shown on the home page and `/news` |

### Adding a news item

Add an entry to the top of `news.json`. `date` accepts `"YYYY.MM"` or `"YYYY"` — use
just the year when the exact month is unknown. `category` must be one of
`paper`, `career`, `award`, `project`, `notice` (see `src/content/vocab.ts`).
Items are sorted newest-first automatically, and the home page shows the latest four.

```json
{
  "id": "2026-example",
  "date": "2026.09",
  "category": "paper",
  "title": { "ko": "...", "en": "..." },
  "body":  { "ko": "...", "en": "..." }
}
```

When a member graduates, move their entry from `members.json` to `alumni.json` and remove their photo from `public/images/members/`.

## 👤 Contributors

- Initially created by [@karu-rress](https://github.com/karu-rress) & esther
- Next.js migration + Redesigned by [@xaerinoo](https://github.com/xaerinoo)
