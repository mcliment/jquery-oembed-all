(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit
    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery#oembed', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.oembed(), this.elems, 'should be chainable');
  });

  //test('is awesome', function() {
  //  expect(1);
  //  strictEqual(this.elems.oembed().text(), 'awesome0awesome1awesome2', 'should be awesome');
  //});

  module('jQuery.oembed');

  //test('is awesome', function() {
  //  expect(2);
  //  strictEqual($.oembed(), 'awesome.', 'should be awesome');
  //  strictEqual($.oembed({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  //});

  //module(':awesome selector', {
  //  // This will run before each test in this module.
  //  setup: function() {
  //    this.elems = $('#qunit-fixture').children();
  //  }
  //});

  //test('is awesome', function() {
  //  expect(1);
  //  // Use deepEqual & .get() when comparing jQuery objects.
  //  deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
  //});

}(jQuery));