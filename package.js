// package metadata file for Meteor.js
var packageName = 'mushk:angulartics-segment';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.1.2';
var summary = 'segment provider for angulartics';
var gitLink = 'https://github.com/mushkab/angulartics-segment';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('mushk:angulartics@0.20.1', where);


  api.addFiles('./dist/angulartics-segment.min.js', where);

  
  });

 