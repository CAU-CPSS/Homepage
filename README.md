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
    │   ├── publications/
    │   └── research/
    │   └── page.tsx        # HomePage
    │   └── ...
    ├── components/
    │   ├── home/           # Hero, Research/Project sections
    │   ├── layout/         # Nav, Page Header, Footer
    │   ├── people/         # MemberCard, AlumniCard
    │   └── ui/             # Shared styles
    └── data/               # JSON datasets
        ├── members.json
        ├── alumni.json
        ├── projects.json
        ├── publications.json
        └── research.json
```

## 📊 Managing Data

All content is managed through JSON files in `src/data/`.

| File | Description |
| :---: | :---: |
| `members.json` | Current lab members |
| `alumni.json` | Graduated members |
| `projects.json` | Research projects |
| `publications.json` | Papers & publications |
| `research.json` | Research areas |

When a member graduates, move their entry from `members.json` to `alumni.json` and remove their photo from `public/images/members/`.

## 👤 Contributors

- Initially created by [@karu-rress](https://github.com/karu-rress) & esther
- Next.js migration + Redesigned by [@xaerinoo](https://github.com/xaerinoo)
