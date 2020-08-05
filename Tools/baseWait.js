/* global protractor */
'use strict'
const EC = protractor.ExpectedConditions
const delayShort = 1100 // control global delays from one place; for no waits set here: delayShort = 0
const delayMedium = 5 * delayShort
const delayLong = 10 * delayShort
const delayVeryLong = 15 * delayShort

function _waitShort () {
  var start = Date.now()
  var now = start
  while (now - start < delayShort) {
    now = Date.now()
  }
};

function _waitMedium () {
  var start = Date.now()
  var now = start
  while (now - start < delayMedium) {
    now = Date.now()
  }
};

function _waitLong () {
  var start = Date.now()
  var now = start
  while (now - start < delayLong) {
    now = Date.now()
  }
};

function _waitVeryLong () {
  var start = Date.now()
  var now = start
  while (now - start < delayVeryLong) {
    now = Date.now()
  }
};

function _untilClickable (element, timeout = delayLong) {
  return browser.wait(EC.elementToBeClickable(element), timeout)
}

function _untilVisible (element, timeout = delayLong) {
  return browser.wait(EC.visibilityOf(element), timeout)
}

module.exports = {
  short: _waitShort,
  medium: _waitMedium,
  long: _waitLong,
  veryLong: _waitVeryLong,
  untilClickable: _untilClickable,
  untilVisible: _untilVisible,

  delayShort,
  delayMedium,
  delayLong,
  delayVeryLong
}
