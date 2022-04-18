# WEBPACK UP AND RUNNING
- [WEBPACK UP AND RUNNING](#webpack-up-and-running)
  - [The fundamentals of Webpack 5](#the-fundamentals-of-webpack-5)
    - [General concepts behind Webpack 5](#general-concepts-behind-webpack-5)
    - [Terminology](#terminology)
      - [Note](#note)
      - [Note](#note-1)
    - [How Webpack works](#how-webpack-works)
    - [What's new in Webpack 5?](#whats-new-in-webpack-5)
    - [Modes](#modes)
  - [Setting up Webpack](#setting-up-webpack)
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

### General concepts behind Webpack 5
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

### Terminology
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

#### Note
Source code refers to the original application before it is bundled.
Development code refers to the application after it is placed in the
Node.js environment and bundled in developmental mode. A more
"tightly packed" version of the bundle is produced in production mode,
but this version is difficult to work on. Therefore, the development code
can be altered to some degree after it is bundled, which is very useful, for
example, in a case where you are altering a database's connection
configurations.

When working with Webpack 5, these phrases may present themselves and it is important
that you don't get too confused by them.

#### Note
Most other terminology will be explained as we encounter it, or it is so
common that we assume you understand these terms if you are familiar
with JavaScript.

That summarizes the bulk of the terminology you will come across when using Webpack.
Now, we will explore how the software works.

### How Webpack works
Webpack works by generating a dependency graph of assets in a set of source files, which it
transpiles an optimized set of distribution files from. These source and distribution files
contain source code and distribution code, respectively. This distributed code forms the
output. Distribution is simply another name for the output or bundle.

Webpack begins by finding an entry point in the source files and from there, it builds a
dependency graph. The selection of an entry point is optional in Webpack 5 and the choice
of selection will alter the nature of the build process, either in terms of speed or output
optimization.

Webpack 5 is capable of transforming, bundling, or packaging just about any resource or
asset.

We have covered a good overview of how the software works; experienced users of
previous Webpack versions may consider this overview rudimentary, so let's have a look at
what is new in this current version.
### What's new in Webpack 5?
The popular Webpack module bundler has undergone a massive update for the release of
version 5. Webpack 5 offers massive performance improvements, more dynamic scalability,
and basic backward compatibility.

Webpack 5 takes over from version 4, where backward compatibility wasn't always
possible with many of the various loaders available, which were often more compatible
with version 2, which meant that a developer would often encounter deprecation warnings
in the command line if version 2 wasn't used. Webpack 5 has now addressed this issue.

Another big selling point of version 5 is federated modules. We will discuss this in more
detail in a later Chapter 6, Production, Integration, and Federated Modules. However, to sum it
up, federated modules are essentially a way for a bundled application to utilize and interact
with modules and assets in remotely stored separate bundles.

The advantages of Webpack 5 are summarized as follows:

- Webpack 5 offers control over HTTP requests, which improves speed and
performance, and also alleviates security concerns.
- Webpack 5 has some advantages over rival bundlers such as Browserify and
systemjs—namely, speed. The build time directly depends on the configuration
but it's faster than its nearest rivals.
- Little or no configuration is required to use Webpack 5, but you always have it as
an option.
- It can be more complicated to use than alternatives, but this is mainly due to its
versatility and scope and it is well worth overcoming.
- Webpack 5 has optimization plugins that remove unused code fantastically well.
It also has many related features, such as tree shaking, which we will discuss in
more detail later in this book.
- It is more flexible than Browserify, allowing the user to select more entry points
and use different types of assets. It's also better, when it comes to speed and
flexibility, for bundling large web applications and for single-page web
applications.

Webpack is now considered an incredibly important tool for application development and
web development, transforming the structure and optimizing the loading time for all of
your web assets, such as HTML, JS, CSS, and images. Let's now get to grips with using
Webpack practically. To do that, the first thing we will look at that may be new to you—if
you have, perhaps, only worked with Vanilla JavaScript up to now—is modes.

### Modes
Once you have understood the general concepts, the first thing you need to learn about
when running a build is modes. Modes are central to how Webpack works and compiles
projects, so it is best to cover this brief but important topic before we go any further.

Modes use the CLI, a process that we will cover in more detail later. If you are used to
using Vanilla JavaScript, this may be new to you. However, rest assured it is not a complex
topic to get your head around.

Webpack ships with two configuration files, which are as follows:

- Development config: This uses webpack-dev-server (hot reloading),
debugging enabled, and so on.
- Production config: This will spit out an optimized, minimized (uglify JS), sourcemapped bundle that is used in production environments.

Since the release of version 5, Webpack takes care of the mode features by default by
simply adding a mode argument to the command. Webpack can't use package.json alone
to find the mode to determine the correct build path.

Now that we have a grasp of the fundamentals, it's time to progress to the practical setup.
## Setting up Webpack
This book follows the development of a sample project step by step, and I am sure you will
find this a simple way to learn how to use Webpack 5.

Webpack 5 packages all its dependencies within the application you wish to bundle on a
local machine. Theoretically, this can be done remotely, but to save any confusion for firsttime users, I will emphasize the use of a local machine.

Installing packages locally is recommended for most projects. It makes things easier when
upgrade or break changes are introduced.

We will begin with the npm installation. npm is the package manager that you will use with
Webpack 5. Once this is installed on your local machine, you will be able to use the npm
command using a CLI, such as Command Prompt.

Once you have installed npm, you can move on to the next step, which is to open your CLI.
There are many to choose from, but for the sake of this tutorial, we will use Command
Prompt.

Let's break this down step by step so that you can follow along:
1. Install the npm package manager, which you will use with Wepback 5.
2.  Open the CLI (in this tutorial, we will be using Command Prompt) and type the
following:

  - ```npm init -y```
  - output
```
{
  "name": "webpack5",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
```
mkdir webpack4 && cd webpack5
npm init -y
npm install webpack webpack-cli --save-dev
```
  Let's break down the code block. The preceding command will first create a new
  directory on your local machine, called webpack5. It will then identify the current
  directory (cd) as webpack5. This means any further commands made through the
  CLI will be made with respect to that directory. The next command is to initialize
  npm. A full list of these basic commands and what they mean can be found in the
  Further reading section at the end of this chapter. This section makes for some
  interesting reading and I'm sure you will learn something new. Then, we locally
  install Webpack and install webpack-cli—this is the tool used to run Webpack
  on the command line.

  3.  Next, install the latest release, or a specific version of Webpack, and run the
following command. However, on the second line, replace <version> with the
version of your choice, such as 5.00:

```
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```
4.  The next command is npm install, which will install Webpack 5 in the
directory and save the project in a development environment. It is important to
note that there is a difference between the development and production
environments (or modes):
```
npm install --save-dev webpack-cli
```
The following lines are a code snippet from the package.json file. We need
these in the input files to generate a webpack.config.js file, which holds the
configuration information for your Webpack bundle.

5. We must take care to ensure that the package.json file is coded as follows:
```
"scripts": {
"build": "webpack --config webpack.config.js"
}
```
When using Webpack 5, you can access its binary version by running npx
webpack in the CLI.
We should also decide which type of installation we need; any re-installation will
overwrite the previous one, so don't worry if you have already followed the
preceding steps.

6.  Let's do that installation now, if applicable.
There are two types of installation:
    - Global: A global installation will lockdown your installation to a
specific version of Webpack.
The following npm installation will make Webpack available
globally:
```
npm install --global webpack
```
 - Local: A local installation will allow you to run Webpack in the
project directory. This needs to be done via the npm script:
```
npm install webpack --save-dev
```
You will need to carry out all of the preceding steps every time you begin a new project on
a new local machine. Once you have completed the installation, it is time to revert your
attention to building a project.