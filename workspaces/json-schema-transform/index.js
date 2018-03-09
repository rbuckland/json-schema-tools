var mergeCfRecurse = require('./lib/mergeCfRecurse');
var allOf = require('./lib/allOf');
var example = require('./lib/example');
var apiDoc = require('./lib/apiDoc');
var dereferencer = require('./lib/dereferencer');

module.exports = {
  mergeCfRecurse: mergeCfRecurse.mergeCfRecurse,
  makeCfRecurseWalker: mergeCfRecurse.makeCfRecurseWalker,
  pruneDefinitions: mergeCfRecurse.pruneDefinitions,
  removeLinksAndDefs: mergeCfRecurse.removeLinksAndDefs,
  getCollapseAllOfCallback: allOf.getCollapseAllOfCallback,
  collapseSchemas: allOf.collapseSchemas,
  rollUpExamples: example.rollUpExamples,
  getCurlExampleCallback: example.getCurlExampleCallback,
  processApiDocSchema: apiDoc.processApiDocSchema,
  AutoExtensionDereferencer: dereferencer.AutoExtensionDereferencer,

  // TODO: These should probably be namespaced in some way
  //       as they do specific things with the keywords rather
  //       than being full implementations of the specs.
  DRAFT_04: allOf.DRAFT_04,
  DRAFT_04_HYPER: allOf.DRAFT_04_HYPER,
  CLOUDFLARE_DOCA: allOf.CLOUDFLARE_DOCA
};
