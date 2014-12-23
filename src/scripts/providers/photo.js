$.fn.oembed.addProvider('deviantart', 'photo', ['deviantart.com/.+', 'fav.me/.+', 'deviantart.com/.+'], '//backend.deviantart.com/oembed', {format: 'jsonp'});

$.fn.oembed.addProvider('skitch', 'photo', ['skitch.com/.+'], null,
{
  yql: {
    xpath: 'json',
    from: 'json',
    url: function (externalurl) {
      return 'http://skitch.com/oembed/?format=json&url=' + externalurl;
    },
    datareturn: function (data) {
      return $.fn.oembed.getPhotoCode(data.json.url, data.json);
    }
  }
});

$.fn.oembed.addProvider('mobypicture', 'photo', ['mobypicture.com/user/.+/view/.+', 'moby.to/.+'], 'http://api.mobypicture.com/oEmbed');

$.fn.oembed.addProvider('flickr', 'photo', ['flickr\\.com/photos/.+'], '//flickr.com/services/oembed', {callbackparameter: 'jsoncallback'});

$.fn.oembed.addProvider('photobucket', 'photo', ['photobucket\\.com/(albums|groups)/.+'], 'http://photobucket.com/oembed/');

$.fn.oembed.addProvider('instagram', 'photo', ['instagr\\.?am(\\.com)?/.+'], '//api.instagram.com/oembed');

//$.fn.oembed.addProvider('yfrog', 'photo', ['yfrog\\.(com|ru|com\\.tr|it|fr|co\\.il|co\\.uk|com\\.pl|pl|eu|us)/.+'], 'http://www.yfrog.com/api/oembed',{useYQL:'json'});

$.fn.oembed.addProvider('SmugMug', 'photo', ['smugmug.com/[-.\\w@]+/.+'], 'http://api.smugmug.com/services/oembed/');

$.fn.oembed.addProvider('dribbble', 'photo', ['dribbble.com/shots/.+'], 'http://api.dribbble.com/shots/$1?callback=?',
{
  templateRegex: /.*shots\/([\d]+).*/,
  templateData: function (data) {
    if (!data.image_teaser_url) {
      return false;
    }
    return  '<img src="' + data.image_teaser_url + '"/>';
  }
});

$.fn.oembed.addProvider('chart.ly', 'photo', ['chart\\.ly/[a-z0-9]{6,8}'], 'http://chart.ly/uploads/large_$1.png',
{templateRegex: /.*ly\/([^\/]+).*/, embedtag: {tag: 'img'}, nocache: 1});

//$.fn.oembed.addProvider('stocktwits.com', 'photo', ['stocktwits\\.com/message/.+'], 'http://charts.stocktwits.com/production/original_$1.png?',
//  { templateRegex: /.*message\/([^\/]+).*/, embedtag: { tag: 'img'},nocache:1 });

$.fn.oembed.addProvider('circuitlab', 'photo', ['circuitlab.com/circuit/.+'], 'https://www.circuitlab.com/circuit/$1/screenshot/540x405/',
{templateRegex: /.*circuit\/([^\/]+).*/, embedtag: {tag: 'img'}, nocache: 1});

$.fn.oembed.addProvider('23hq', 'photo', ['23hq.com/[-.\\w@]+/photo/.+'], 'http://www.23hq.com/23/oembed', {useYQL: 'json'});

$.fn.oembed.addProvider('img.ly', 'photo', ['img\\.ly/.+'], '//img.ly/show/thumb/$1',
{templateRegex: /.*ly\/([^\/]+).*/, embedtag: {tag: 'img'}, nocache: 1});

$.fn.oembed.addProvider('twitgoo.com', 'photo', ['twitgoo\\.com/.+'], 'http://twitgoo.com/show/thumb/$1',
{templateRegex: /.*com\/([^\/]+).*/, embedtag: {tag: 'img'}, nocache: 1});

$.fn.oembed.addProvider('imgur.com', 'photo', ['imgur\\.com/gallery/.+'], 'http://imgur.com/$1l.jpg',
{templateRegex: /.*gallery\/([^\/]+).*/, embedtag: {tag: 'img'}, nocache: 1});

$.fn.oembed.addProvider('visual.ly', 'rich', ['visual\\.ly/.+'], null,
{
  yql: {
    xpath: '//a[@id=\\"gc_article_graphic_image\\"]/img',
    from: 'htmlstring'
  }
});

$.fn.oembed.addProvider('gravtar', 'photo', ['mailto:.+'], null,
{
  templateRegex: /mailto:([^\/]+).*/,
  template: function (wm, email) {
    return '<img src="http://gravatar.com/avatar/' + email.md5() + '.jpg" alt="on Gravtar" class="jqoaImg">';
  }
});

$.fn.oembed.addProvider('achewood', 'photo', ['achewood\\.com\\/index.php\\?date=.+'], 'http://www.achewood.com/comic.php?date=$1', {templateRegex: /.*achewood\.com\/index.php\?date=(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('fotokritik', 'photo', ['fotokritik\\.com/.+'], 'http://www.fotokritik.com/embed/$1', {templateRegex: [/.*fotokritik\.com\/embed\/(\w+).*/, /.*fotokritik\.com\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('giflike', 'photo', ['giflike\\.com/.+'], 'http://www.giflike.com/embed/$1', {templateRegex: [/.*giflike\.com\/embed\/(\w+).*/, /.*giflike\.com\/a\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});
