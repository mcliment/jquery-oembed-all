$.fn.oembed.addProvider('official.fm', 'rich', ['official.fm/.+'], 'http://official.fm/services/oembed', {useYQL: 'json'});

$.fn.oembed.addProvider('chirbit', 'rich', ['chirb.it/.+'], 'http://chirb.it/oembed.json', {useYQL: 'json'});

$.fn.oembed.addProvider('chirbit', 'audio', ['chirb\\.it/.+'], 'http://chirb.it/wp/$1', {templateRegex: [/.*chirb\.it\/wp\/(\w+).*/, /.*chirb\.it\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('Huffduffer', 'rich', ['huffduffer.com/[-.\\w@]+/\\d+'], 'http://huffduffer.com/oembed');

$.fn.oembed.addProvider('Spotify', 'rich', ['open.spotify.com/(track|album|user)/'], 'https://embed.spotify.com/oembed/');

$.fn.oembed.addProvider('shoudio', 'rich', ['shoudio.com/.+', 'shoud.io/.+'], 'http://shoudio.com/api/oembed');

$.fn.oembed.addProvider('mixcloud', 'rich', ['mixcloud.com/.+'], 'http://www.mixcloud.com/oembed/', {useYQL: 'json'});

$.fn.oembed.addProvider('rdio.com', 'rich', ['rd.io/.+', 'rdio.com'], 'http://www.rdio.com/api/oembed/');

$.fn.oembed.addProvider('Soundcloud', 'rich', ['soundcloud.com/.+', 'snd.sc/.+'], '//soundcloud.com/oembed', {format: 'js'});

$.fn.oembed.addProvider('bandcamp', 'rich', ['bandcamp\\.com/album/.+'], null,
{
  yql: {
    xpath: '//meta[contains(@content, \\"EmbeddedPlayer\\")]',
    from: 'html',
    datareturn: function (results) {
      return results.meta ? '<iframe width="400" height="100" src="' + results.meta.content + '" allowtransparency="true" frameborder="0"></iframe>' : false;
    }
  }
});
