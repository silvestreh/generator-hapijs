# generator-japi [![Build Status](https://travis-ci.org/silvestreh/generator-japi.svg?branch=master)](https://travis-ci.org/silvestreh/generator-japi)

A simple Yeoman generator for Hapi.js + Mongoose + Handlebars applications. Forked from Tom Caflisch's marvelous [generator-hapijs](https://github.com/toymachiner62/generator-hapijs/).

## Installation

To install generator-japi from npm, run:

    $ npm install -g generator-japi

## Usage

#### Main
Scaffolds out a hapijs project.

    $ yo japi [project-name]

#### Module
Scaffolds out a module to an existing hapijs project

    $ yo japi:module [module-name]

#### Endpoint
Scaffolds out a new endpoint for an existing module

    $ yo japi:endpoint  

#### Generated Directory Structure

This hapijs generator assumes that you want your project structure to look like this:

    project-root/
        views/
            view.html
            partials/
                partial-view.html
        public/
        modules/
            module/
                module-ctrl.js
                module-dao.js
                module-model.js
                module-routes.js
                module-test.js
        database.js
        server.js

## Contributing

To run tests:

    $ npm test

To install your local version of this package rather than the NPM published version, fork it and then:

    $ git clone <your forked repo>
    $ cd generator-japi
    $ npm link
