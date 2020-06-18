/**
 * Check custom time stamps generated by console.timeStamp() method.
 */
define([
  "./config",
  "./DriverUtils",
  "dojo/node!@theintern/leadfoot",
], function(config, DriverUtils, leadfoot) {
  const { registerSuite } = intern.getInterface("object");
  const { assert } = intern.getPlugin("chai");
  const { testBase } = config;

  function assertLength(selector, len, msg) {
    const makeMsg = (elements) => `${selector}: expected ${len} elements, found ${elements.length}`;
    return function() {
      return this.parent.findAllByCssSelector(selector)
        .then((elements) => assert.strictEqual(elements.length, len, msg || makeMsg(elements)));
    };
  }

  registerSuite("testEmbeddedInvalidPreview", {
    "testEmbeddedInvalidPreview1": function() {
      // Some of these tests need a larger timeout for finding DOM elements
      // because we need the HAR to parse/display fully before we query the DOM.
      const { findTimeout } = config;

      // HAR file is specified inside the test page.
      const url = testBase + "tests/testEmbeddedInvalidPreview1.html";

      return this.remote
        .setFindTimeout(findTimeout)
        .get(url)
        .findByCssSelector("iframe")
        .then(function(iframe) {
          return this.parent.switchToFrame(iframe)
            .end(Infinity)
            .then(assertLength(".errorTable", 1))
            .end(Infinity)
            .then(assertLength(".errorRow", 1))
            .end(Infinity)
            .then(assertLength(".errorProperty", 1))
            .end(Infinity)
            .then(assertLength(".errorMessage", 1));
        });
    },

    "testEmbeddedInvalidPreview2": function() {
      // Some of these tests need a larger timeout for finding DOM elements
      // because we need the HAR to parse/display fully before we query the DOM.
      const { findTimeout } = config;

      // HAR file is specified inside the test page.
      const url = testBase + "tests/testEmbeddedInvalidPreview2.html";

      return this.remote
        .setFindTimeout(findTimeout)
        .get(url)
        .findByCssSelector("iframe")
        .then(function(iframe) {
          return this.parent.switchToFrame(iframe)
            .end(Infinity)
            .then(assertLength(".pageTable", 1))
            .end(Infinity)
            .then(assertLength(".netRow", 49));
        });
    },
  });
});