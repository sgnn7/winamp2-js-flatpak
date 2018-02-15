# winamp2-js-flatpak

## Electron'd and Flatpak'd Winamp2-js

## Prerequisites (Electron app)

- Node.js
- npm

## Running (Electron app)

- `npm install`
- `cd <checkout_of_winamp-j2>` See note below for why this is needed
- `npm install`
- `npm run build-library`
- `cp -r built <this_repo_dir>/node_modules/winamp2-js/`
- `cd -`
- `./winamp2`

If you see error `Cannot find module winamp2-js`, see note at bottom (there's gotta be a better way to generate that lib)

## Prerequisites (Flatpak app building)

- Flatpak
- Flatpak-builder
- Maybe something else?

## Building the flatpak

- `./make_flatpak.sh`

## Installing the Flatpak

- `flatpak remote-add flathub https://dl.flathub.org/repo/`
- `flatpak install --user --bundle *.bundle`

I think the dependencies auto-download but you may need to get the runtimes manually installed from the Flathub remote.

## Running the Flatpak

- `flatpak run com.jordaneldredge.Winamp2`

**NOTE: If you are running just the Electron app, you _must_ build the `winamp.bundle.js` (`npm run build-library` in the `winamp2-js` checkout folder) on your own and place it in `node_modules/winamp2-js/built/` folder. I did not figure out yet how to get this built with just the installed dependencies.**

PS: This needs a _ton_ of work and is pretty poor quality but it should be enough to get the ball rolling on getting this into a real app.
