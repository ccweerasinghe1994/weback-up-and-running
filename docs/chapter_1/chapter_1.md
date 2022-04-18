# WEBPACK UP AND RUNNING
- [WEBPACK UP AND RUNNING](#webpack-up-and-running)
  - [The fundamentals of Webpack 5](#the-fundamentals-of-webpack-5)
  - [General concepts behind Webpack 5](#general-concepts-behind-webpack-5)
  - [Terminology](#terminology)
    - [Note](#note)
## The fundamentals of Webpack 5

Essentially, Webpack is a module bundler for JavaScript applications. Webpack takes a
series of JavaScript files, along with dependencies such as image files, which make up an
application, and constructs something called a dependency graph. A dependency graph is a
representation of how these files and dependencies are ordered and linked within an
application and shows how the files interact with each other.

This dependency graph then forms a template that the bundler follows when taking all of
the dependencies and files to compress them into a smaller set. Webpack is then able to
bundle these files into a larger, but usually less-numerous, set of files. This eliminates
problems such as unused code, repetitive code, and the need for rewriting. To some extent,
the code can be formatted more succinctly.

Webpack recursively builds every module in your application, then packs all those
modules into a small number of bundles. For the most part, a bundled application will
contain a script that is ideal to be read by a program, such as a web browser, but too
complicated for a programmer to use. The developer, therefore, will take a set of source
files and make changes to this area of the program, then bundle this source into an
output—a bundled application.

Bundling was originally intended to improve browser-reading performance, but it also has
many other advantages. Once a set of source files is bundled by Webpack, it will usually
follow a systematic and conventional filing structure. Errors within the code can halt a
bundling operation; this book will instruct you on how to overcome these problems.

Now, let's explore the general concepts around Webpack 5.

## General concepts behind Webpack 5
Here, we will begin to understand the key concepts and the purpose of Webpack, rather
than expect you to have any prior understanding of it. Bundling is carried out locally on a
desktop using Node.js or npm and the command-line interface (CLI), usually Command
Prompt.

Webpack is a build tool that puts all of your assets into a dependency graph. This includes
JavaScript files, images, fonts, and Cascading Style Sheets (CSS). It will take Sassy
CSS (SCSS) and TypeScript files and place them into CSS and JavaScript files, respectively.
Webpack will only be able to do this when the code is compatible with the latter format.

When programming in JavaScript and other languages, the source code will often use a
statement such as require(), which points one file to another. Webpack will detect this
statement and determine the file that is needed as a dependency. This will decide how the
files are processed in your final JavaScript bundle. This will also include replacing a URL
path to a content delivery network (CDN)—which is, essentially, a network of proxy
servers—with a local file.

The following diagram is a representation of the general purpose of Webpack, which is to
take a set of files or dependencies and output the content in an optimized form:

![](./1.png)

Now, let's take a closer look at some of the terminology, which you may be unfamiliar with
but can be considered common parlance when using Webpack.

## Terminology
This section will cover the terminology used in Webpack 5. This will include native terms,
as well as some more unusual acronyms:
- **Assets**: This is a term frequently used in Webpack to prevent conflations of
concepts. It refers to image files, or even data or script files, collated by the
software when producing a bundled application.
- **Bundle**: This refers to the application that is output once Webpack has compiled
an application. This is an optimized version of the original or source
application—the reasons for this will be discussed in detail in later chapters. The
bundler will combine these files into one file, which makes unpicking and
hacking very difficult. It also improves browser performance. It does this by
ensuring that processors are kept to an optimal level and removing any coding
structure that does not conform to a standard. This also encourages the developer
to adopt conventions a lot more diligently. Should there be any insecure
programming, these locations are more easily identified, isolated, and corrected.

- **SASS**: A version of CSS that has enhanced features. Webpack handles this code
as it does CSS; however, it is a phrase that may come up and leave you stumped,
so it is worth knowing about.

- **SCSS**: This is simply the name for the syntax version used to give SASS extra
functionality. It is useful to know that Webpack is capable of transpiling both
syntaxes.

- **Transpiling**: This is the process where Webpack 5 takes a set of input source
code and changes it into a more optimized output distribution code. This is done
by removing unused or duplicated code. Transpiling is used to convert one set of
files into a simpler set. For instance, SCSS often contains script that can be easily
stored inside a CSS file. You might also transpile SCSS to CSS, or TypeScript to
JavaScript.
- **TypeScript**: For the uninitiated, TypeScript is a type of code that is similar to
JavaScript in many ways. Browsers, for instance, most commonly run JavaScript,
so it may be more appropriate to use JavaScript, where possible. Webpack 5 will
transpile TypeScript into JavaScript whenever the former allows.
- **CDN**: A CDN is a network of proxy servers that provides high availability and
high performance. Some examples are Google APIs, such as Google Fonts, and
other similar tools that all JavaScript developers are, no doubt, familiar with.
- **Dependency graphs**: In Webpack 5, a dependency graph is a directed graph
representing the dependency of several assets to each other. Webpack 5 maps a
list of assets and dependencies itself and records how they depend on each other
in an application. It uses this to derive an appropriate output file structure.

Though JavaScript is the entry point, Webpack appreciates that your other asset
types—such as HTML, CSS, and SVG—each have dependencies of their own, which should
be considered as part of the build process.

Webpack is comprised of input and output. The output can be made of one or more files.
As well as bundling modules, Webpack can carry out a lot of functions on your files. The
input refers to the original files when they are in their original structure, before bundling.
The output refers to the resulting bundled files in their new and optimized filing structure.
Inputs, therefore, are comprised of the source files and outputs can be comprised of
development files or production files.

There is often a conflation between the terms input and output and source code and
development code.

### Note
Source code refers to the original application before it is bundled.
Development code refers to the application after it is placed in the
Node.js environment and bundled in developmental mode. A more
"tightly packed" version of the bundle is produced in production mode,
but this version is difficult to work on. Therefore, the development code
can be altered to some degree after it is bundled, which is very useful, for
example, in a case where you are altering a database's connection
configurations.

