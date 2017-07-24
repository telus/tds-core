24-July-2017: This guide is out of date and un-maintained.


## Building and Maintaining the Icon Font

Core icons are implemented as an icon font. The source file is at `./designs/core-icons.glyphs`

The webfont build process requires [ttfautohint](https://www.freetype.org/ttfautohint/#download).

### Install ttfautohint on OS X

    brew install ttfautohint --with-python

### Install ttfautohint on Linux

    sudo apt-get install ttfautohint

### Install ttfautohint on Windows

Download the [Windows Binary](https://www.freetype.org/ttfautohint/#download) from Free Type's website.

### Icon webfont change process

1. Make a change or addition to `./designs/core-icons.glyphs`
2. Export an OTF file to `./core/fonts/core-icons.otf`
3. Execute `npm install` in the `./icons` module
4. Execute `npm run build:icons` in the `./icons` module

This process creates EOT, TTF, WOFF and WOFF2 files from `./core/fonts/core-icons.otf` and saves them in the same directory. These should be committed to Git (including the source OTF) and sent to master via pull request.
