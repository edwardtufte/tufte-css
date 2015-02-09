tufte-css
=========
>Simplicity, to me, has always been the essence of good taste.
> -- Cary Grant

Edward Tufte uses a distinctive style in his handouts: simple, with well-set
typography, extensive sidenotes, and tight integration of graphics and
charts. `tufte-css` brings that style to HTML documents.

This project is directly inspired by and
based on [Tufte-LaTeX](https://code.google.com/p/tufte-latex/) and the
[R Markdown Tufte Handout](http://rmarkdown.rstudio.com/examples/tufte-handout.pdf).

Demo
-
The file *index.html* is a self-describing document that walks through
the features of Tufte CSS by demonstrating them. Check out the live version at
[http://www.daveliepmann.com/tufte-css/](http://www.daveliepmann.com/tufte-css/).

Use
-
To use Tufte-CSS on your own HTML page, just copy `tufte.css`
and `ETBembo-RomanLF.ttf` to your project directory and add the
following to your HTML doc's head block:

    <link rel="stylesheet" href="tufte.css"/>

All the other files can be ignored, as they are solely related to
project maintenance and testing.

Contributors
-
 - Dave Liepmann (creator)
 - Clay Harmon (media queries, rem units)

Pull requests are welcome. For best results, keep contributions to
single changes at a time, and verify functionality against
`index.html`.

CSS Style Guide
-
>Every major open-source project has its own style guide: a set of
>conventions (sometimes arbitrary) about how to write code for that
>project. It is much easier to understand a large codebase when all the
>code in it is in a consistent style.
> -- Google Style Guide (https://code.google.com/p/google-styleguide/)

Tufte-CSS aims for clarity, concision, and uniformity. Here's a basic
example of our CSS conventions:

    p { font-size: 1.4rem;
        line-height: 1.4;
        margin-top: 1.4rem;
        margin-bottom: 1.4rem;
        width: 55%;
        padding-right: 0;
        vertical-align: baseline; }

    @media screen and (max-width: 600px) { p { width: 70%; }}
    @media screen and (max-width: 400px) { p { width: 90%; }}

Notice the single spacing between most syntactic markers, the single
blank lines between unrelated blocks, and the absence of line breaks
after an open-paren and before end-parens. Notice also that these
rules change slightly for media queries.

License
-
Released under the MIT license. See *LICENSE.TXT*.
