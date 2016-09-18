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

Contributing
-
If you notice something wrong or broken, let us know by opening an
issue. **Pull requests are very welcome**.

For best results, keep pull requests to one change at a time, and
test your fix or new functionality against `index.html` on screens as
small as an iPhone 4 and as big as, well, as big as you use
normally. (If you don't have a mobile device handy, fake different
devices with your browser's developer tools.)  See the Issues page, especially
[Help Wanted](https://github.com/edwardtufte/tufte-css/labels/help%20wanted),
for opportunities to contribute. Keep our style guide in mind:

CSS Style Guide
-
>Every major open-source project has its own style guide: a set of
>conventions (sometimes arbitrary) about how to write code for that
>project. It is much easier to understand a large codebase when all the
>code in it is in a consistent style. <br/>
> -- [Google Style Guide](https://github.com/google/styleguide)

Tufte CSS aims for clarity, concision, and uniformity. Here's a basic
example of our CSS conventions:

```css
p { font-size: 1.4rem;
    line-height: 2rem;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
    width: 55%;
    padding-right: 0;
    vertical-align: baseline; }
    
@media screen and (max-width: 600px) { p { width: 70%; }}
@media screen and (max-width: 400px) { p { width: 90%; }}
```

Notice the single spacing between most syntactic markers, the single
blank lines between unrelated blocks, and the absence of line breaks
after an open-paren and before end-parens. Notice also that these
rules change slightly for media queries.

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
