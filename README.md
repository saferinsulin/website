# SaferInsulin.org | website

[![Build Status](https://travis-ci.com/saferinsulin/website.svg?branch=master)](https://travis-ci.com/saferinsulin/website)
[![npm version](https://badge.fury.io/js/insulin-calc.svg)](https://badge.fury.io/js/insulin-calc)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/saferinsulin/website/blob/master/LICENSE)

This respository houses the only the website which is is live at https://saferinsulin.org. For the underlying insulin infusion rate calculator module, see https://github.com/jplomas/saferinsulin

The website and associated calculator module are provided to medical professionals for use at their own discretion and under the terms of the MIT licence.  Preparing the requirements for UKCA marking is underway and the tool has been used successfully in the Greater Manchester Critical Care Network.

## Technicals

### Building and deploying a mirror

This is positively encouraged, as it gives resiliance to the availability of the calculator.  To build:

- ensure nodejs/npm installed
- clone repository
- run ``npm install``
- run ``npm run build``
- the website will be in the ``dist/`` folder
- a local server can be spun up to test by running ``npm run serve``

If you run a public mirror, let me know so this can be publicised.

Private mirrors on intranets are a good idea for redundancy in the case of loss of access to external networks: the website as built here is self-contained with no external dependencies required to run.