'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bundleIdentifiers = bundleIdentifiers;
// nS - No Space
// lC - Lowercase

function bundleIdentifiers(currentAppName, newName, projectName, currentBundleID, newBundleID, newBundlePath) {
  var nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  var nS_NewName = newName.replace(/\s/g, '');
  var lC_Ns_CurrentBundleID = currentBundleID.toLowerCase();
  var lC_Ns_NewBundleID = newBundleID.toLowerCase();

  return [{
    regex: currentBundleID,
    replacement: newBundleID,
    paths: ['android/app/BUCK', 'android/app/build.gradle', 'android/app/src/main/AndroidManifest.xml']
  }, {
    regex: currentBundleID,
    replacement: newBundleID,
    paths: [newBundlePath + '/MainActivity.java', newBundlePath + '/MainApplication.java']
  }, {
    regex: lC_Ns_CurrentBundleID,
    replacement: lC_Ns_NewBundleID,
    paths: [newBundlePath + '/MainApplication.java']
  }, {
    // App name (probably) doesn't start with `.`, but the bundle ID will
    // include the `.`. This fixes a possible issue where the bundle ID
    // also contains the app name and prevents it from being inappropriately
    // replaced by an update to the app name with the same bundle ID
    regex: new RegExp('(?!\\.)(.|^)' + nS_CurrentAppName, 'g'),
    replacement: '$1' + nS_NewName,
    paths: [newBundlePath + '/MainActivity.java']
  }];
}