Tufte CSS
=========
Edward Tufte uses a distinctive style in his handouts: simple, with well-set
typography, extensive sidenotes, and tight integration of graphics and
charts. `tufte-css` brings that style to HTML documents.

This project is directly inspired by and
based on [Tufte-LaTeX](https://tufte-latex.github.io/tufte-latex/) and the
[R Markdown Tufte Handout](http://rmarkdown.rstudio.com/examples/tufte-handout.pdf).


Getting Started
-
The file *index.html* is a self-describing demonstration document that walks through
the features of Tufte CSS. The live version at
[https://edwardtufte.github.io/tufte-css/](https://edwardtufte.github.io/tufte-css/)
is the best overview of the project.

To use Tufte CSS, just copy `tufte.css` and the `et-book` font
directory to your project and add the following to your HTML doc's
head block:

```html
<link rel="stylesheet" href="tufte.css"/>
```

All other files in the repository can be ignored, as they are merely
used by the demonstration document.


Project Scope and Status
-
Tufte CSS is specifically a CSS-only solution for styling HTML for the web.

That means that JavaScript solutions, although often superior to pure CSS, are out of scope for this project and will not be used. Also out of scope are handling printed versions of web pages and integration with static site generators or other formats. Thankfully, all these useful applications can be well served by separate work that builds on top of Tufte CSS.

This project is maintained but not under active development. It is considered essentially feature-complete. Refactoring and new functionality are a very low priority. However, contributions are still welcome to fix bugs or add functionality.


Deploying
-
1. Make changes
2. From shell, invoke [clean-css-cli](https://github.com/jakubpawlowicz/clean-css-cli): `cleancss -o tufte.min.css tufte.css`
3. Bump version in *package.json*
4. From shell: `npm publish`


Contributing
-
If you notice something wrong or broken, let us know by opening an
issue, or better yet, a pull request with how you think it should be
fixed.

Please document your issues and fixes thoroughly. This means a clear
description of the concern, steps on how to reproduce it, and (if
possible) before and after screenshots and links to prior discussions
or commits. Please keep pull requests to one change at a time.

Fixes and new functionality should be tested against `index.html` on
screens as small as an iPhone 4 and as big as, well, as big as you use
normally. (If you don't have a mobile device handy, fake different
devices with your browser's developer tools.)

See the Issues page, especially [Help
Wanted](https://github.com/edwardtufte/tufte-css/labels/help%20wanted),
for opportunities to contribute.


Contributors
-
 - Dave Liepmann (creator, project maintainer, design)
 - Edward Tufte (editing, direction, design)
 - [Adam Schwartz](https://github.com/adamschwartz) (ET Book font, descender-clearing link underlines)
 - [Clay Harmon](https://github.com/edwardtufte/tufte-css/commits/master?author=clayh53) (media queries, rem units)
 - [Linjie Ding](https://github.com/edwardtufte/tufte-css/commits/master?author=pyrocat101) (italic typeface)
 - [Stephen A Thomas](https://github.com/edwardtufte/tufte-css/commits/master?author=sathomas) (automagically numbered sidenotes)
 - [Ben Newman](https://github.com/edwardtufte/tufte-css/pull/9) (sidenote numbering style)
 - [Kevin Godby](https://github.com/edwardtufte/tufte-css/commits/master?author=godbyk) (booktabs tables)
 - [James Kolce](https://github.com/edwardtufte/tufte-css/commits/master?author=jameskolce) (sidenote fixes)
 - [Chris MacKay](https://github.com/crmackay) (sidenote toggling on small screens)
 - [Paul Rodriguez](https://github.com/edwardtufte/tufte-css/commits/master?author=ruricolist)
   (sidenote style tweaks)
 - [Claudiu-Vlad Ursache](https://github.com/edwardtufte/tufte-css/commits/master?author=ursachec) (HTML5 conformity)


License
-
Released under the MIT license. See [LICENSE](https://github.com/edwardtufte/tufte-css/blob/gh-pages/LICENSE).
