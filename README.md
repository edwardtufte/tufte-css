tufte-css
=========
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
following to your HTML doc's <head>:

    <link rel="stylesheet" href="tufte.css"/>

All the other files can be ignored, as they are solely related to
project maintenance and testing.

Contributors
-
 - Dave Liepmann (creator)
 - Clay Harmon (media queries, rem units)

Pull requests are welcome. For best results, keep contributions to
single changes at a time, and verify functionality against
`index.html`. Please keep your CSS formatting in line with the
existing structure.

Released under the MIT license. See *LICENSE.TXT*.
