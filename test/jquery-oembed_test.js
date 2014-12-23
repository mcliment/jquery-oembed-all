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

  module('jQuery.oembed', {
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

  module('jQuery.oembed#youtube');

  test('embeds video', function() {
    expect(2);
    var url = 'http://www.youtube.com/watch?v=bo36MrBfTk4';
    var embed = $('<a href="' + url + '">Douglas Crockford: The Better Parts</a>').oembed();
    var frame = embed.next().next();

    strictEqual(frame.prop('tagName'), "IFRAME", "creates iframe");
    ok(frame.attr('src').indexOf("youtube.com") > 0, "has url");
  });

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
