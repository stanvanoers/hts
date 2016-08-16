# Dependencies
_ = require "underscore"
$ = require "jquery"
base = require "backbone"
stats = require "mixpanel"

# Add browser class
platform = require "./CheckPlatform.coffee"
$("body").addClass platform()
