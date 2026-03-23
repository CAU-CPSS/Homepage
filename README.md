# CAU CPSS Lab Homepage

> Official website of the Cyber-Physical Systems Security Lab at Chung-Ang University.  
> 🔗 https://cpss.cau.ac.kr/

<img width="100%" alt="thumbnail" src="https://github.com/user-attachments/assets/869dc3a0-36e2-42a3-a964-db96987a6004" />

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Styled Components, Tailwind CSS
- **3D**: Three.js
- **Deployment**: Nginx + PM2

## Getting Started

### Prerequisites

- Node.js ≥ 18.x
- npm
- git
- Nginx

### Install & Run (Development)

```bash
git clone https://github.com/cau-cpss/Homepage.git
cd Homepage/next
npm install
npm run dev    # Only for local development
```

⚠️ **Do NOT use `npm run dev` on the SERVER!!!!!!!!!!!!!!!!** ⚠️
> Running `npm run dev` on the server will overwrite the production build in `.next/`
and cause PM2 production server to serve broken files (ChunkLoadError, 400 errors).

## Run on Production Server

On the CPSS server, always use:

```bash
cd $HOMEPAGE    # var/www/Homepage/next
bash deploy.sh  # Builds and restart PM2 safely
```

⚠️ **Do NOT run as root** ⚠️
> The script pulls the latest changes, builds the project, and restarts the server safely without corrupting the `.next/` folder.

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

## System Architecture

<img width="100%" alt="diagram" src="https://github.com/user-attachments/assets/c66e950c-c19d-483d-870e-6d6849d911c1" />

## Managing Data

All content is managed through JSON files in `src/data/`.

| File | Description |
| :---: | :---: |
| `members.json` | Current lab members |
| `alumni.json` | Graduated members |
| `projects.json` | Research projects |
| `publications.json` | Papers & publications |
| `research.json` | Research areas |

When a member graduates, move their entry from `members.json` to `alumni.json` and remove their photo from `public/images/members/`.

## Contributors

- Initially created by [karu-rress](https://github.com/karu-rress) & esther
- Next.js migration + Redesigned by [xaerinoo](https://github.com/xaerinoo)