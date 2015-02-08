tufte-css
=========

The file *index.html* is a self-describing document that walks through
the features of Tufte CSS. There is a version running at
[http://www.daveliepmann.com/tufte-css/](http://www.daveliepmann.com/tufte-css/).

As stated in the document, this project is directly inspired by and
based on [Tufte-LaTeX](https://code.google.com/p/tufte-latex/) and the
[R Markdown Tufte Handout](http://rmarkdown.rstudio.com/examples/tufte-handout.pdf).

Use
-
To use Tufte-CSS on your own HTML page, just copy `tufte.css`
and `ETBembo-RomanLF.ttf` to your project directory and add the
following to your HTML doc:

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
