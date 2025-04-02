# CAU CPSS Lab Homepage

The homepage of CPSS Lab. at Chung-Ang University.  
Guides written by [karu-rress](https://github.com/karu-rress).

## Contents

- [A Guide to Maintain the Website](#a-guide-to-maintain-the-website)
    - [Requirements](#requirements)
    - [Databases](#databases)
    - [Test the Website](#test-the-website)
    - [How to Deploy](#how-to-deploy)
- [Credits](#credits)

---

## A Guide to Maintain the Website

### Requirements

- Linux or other OSes that can run `.sh` file
- npm (>= 11.x)
- SvelteKit and other npm packages (install via `npm install`)
- git
- NginX

### Databases

The website uses JSON files to manage the data. Consider using RDBMS in case the data gets bigger.

- `src/lib/alumni.json`: defines the information of the alumni.
- `src/lib/members.json`: stores the current members of CPSS Lab. Move to `alumni.json` if they have graduated.
    - `static/images/card`: profile pictures of current members. The ratio should be 3:4, and delete the picture if the member graduated.
- `src/lib/projects.json`: list of the projects
- `src/lib/publications.json`: list of the publications

### Pages

The pages are defined in `src/routes`. Add the page by creating directory `<page_name>`. In the directory, you should create `+page.svelte` file to design a page.

The structure should be like:

```svelte
<script>
    <!-- scripts or JSON imports -->
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>
<div>
    <!-- HTML page definition -->
</div>
<style>
    @import "$lib/shared.css";

    /* CSS definitions */
</style>
```

The scripts and stylesheets are only visible in that page. If you need a shared element, consider using $lib (`src/lib`) directory. To avoid ambiguity, you must use shared elements as little as possible.

### Test the Website

Run

```bash
$ npm run dev -- --open
```

to debug the website while updating it. You must pass the `--open` option to open the page in the web browser. Also, you may want to add `--host` flag for other devices in the same network to access the debugging website.

### How to Deploy

Please run the command below in the CPSS server to deploy the website.  
NOTE: DO NOT USE ROOT PRIVILEGES HERE!

```bash
$ ./deploy.sh
```

This script will perform actions written below. If you are deploying on other environments, please execute them manually.

1. Remove old files (`index.html`, etc.)
2. Sync the origin/svelte branch (`git pull origin svelte`)
3. Build the website (`npm run build`)
4. Copy the new files (from `build` to server's root directory)
5. Restart the server (`sudo systemctl reload nginx`)

## Credits

Created by [karu-rress](https://github.com/karu-rress) & esther

Credits: http://freehtml5.co/