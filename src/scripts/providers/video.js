$.fn.oembed.addProvider(
    'youtube',
    'video',
    ['youtube\\.com/watch.+v=[\\w-]+&?', 'youtu\\.be/[\\w-]+', 'youtube.com/embed'],
    'http://www.youtube.com/embed/$1?wmode=transparent',
    {
        templateRegex: /.*(?:v\=|be\/|embed\/)([\w\-]+)&?.*/,
        embedtag: {
            tag: 'iframe',
            width: '425',
            height: '349'
        }
    }
);

// $.fn.oembed.addProvider(
//     'youtube',
//     'video',
//     ['youtube\\.com/watch.+v=[\\w-]+&?', 'youtu\\.be/[\\w-]+'],
//     'http://www.youtube.com/oembed',
//     {
//         useYQL: "json"
//     }
// );

// $.fn.oembed.addProvider(
//     'youtubeiframe',
//     'video',
//     ['youtube.com/embed'],
//     "$1?wmode=transparent",
//     {
//         templateRegex: /(.*)/,
//         embedtag: {
//             tag: "iframe",
//             width: "425",
//             height: "349"
//         }
//     }
// );

$.fn.oembed.addProvider(
    'wistia',
    'video',
    ['wistia.com/m/.+', 'wistia.com/embed/.+', 'wi.st/m/.+', 'wi.st/embed/.+'],
    'http://fast.wistia.com/oembed',
    {useYQL: 'json'}
);

$.fn.oembed.addProvider(
    'xtranormal',
    'video',
    ['xtranormal\\.com/watch/.+'],
    'http://www.xtranormal.com/xtraplayr/$1/$2',
    {
        templateRegex: /.*com\/watch\/([\w\-]+)\/([\w\-]+).*/,
        embedtag: {
            tag: 'iframe',
            width: '320',
            height: '269'
        }
    }
);

$.fn.oembed.addProvider(
    'scivee',
    'video',
    ['scivee.tv/node/.+'],
    'http://www.scivee.tv/flash/embedCast.swf?',
    {
        templateRegex: /.*tv\/node\/(.+)/,
        embedtag: {
            width: '480',
            height: '400',
            flashvars: 'id=$1&type=3'
        }
    }
);

$.fn.oembed.addProvider(
    'veoh',
    'video',
    ['veoh.com/watch/.+'],
    'http://www.veoh.com/swf/webplayer/WebPlayer.swf?version=AFrontend.5.7.0.1337&permalinkId=$1&player=videodetailsembedded&videoAutoPlay=0&id=anonymous',
    {
        templateRegex: /.*watch\/([^\?]+).*/,
        embedtag: {
            width: '410',
            height: '341'
        }
    }
);

$.fn.oembed.addProvider(
    'gametrailers',
    'video',
    ['gametrailers\\.com/video/.+'],
    'http://media.mtvnservices.com/mgid:moses:video:gametrailers.com:$2',
    {
        templateRegex: /.*com\/video\/([\w\-]+)\/([\w\-]+).*/,
        embedtag: {
            width: '512',
            height: '288'
        }
    }
);

$.fn.oembed.addProvider(
    'funnyordie',
    'video',
    ['funnyordie\\.com/videos/.+'],
    'http://player.ordienetworks.com/flash/fodplayer.swf?',
    {
        templateRegex: /.*videos\/([^\/]+)\/([^\/]+)?/,
        embedtag: {
            width: 512,
            height: 328,
            flashvars: 'key=$1'
        }
    }
);

$.fn.oembed.addProvider('colledgehumour', 'video', ['collegehumor\\.com/video/.+'], 'http://www.collegehumor.com/moogaloop/moogaloop.swf?clip_id=$1&use_node_id=true&fullscreen=1',
         {templateRegex: /.*video\/([^\/]+).*/, embedtag: {width: 600, height: 338}});

$.fn.oembed.addProvider('metacafe', 'video', ['metacafe\\.com/watch/.+'], 'http://www.metacafe.com/fplayer/$1/$2.swf',
       {templateRegex: /.*watch\/(\d+)\/(\w+)\/.*/, embedtag: {width: 400, height: 345}});

$.fn.oembed.addProvider('bambuser', 'video', ['bambuser\\.com\/channel\/.*\/broadcast\/.*'], 'http://static.bambuser.com/r/player.swf?vid=$1',
     {templateRegex: /.*bambuser\.com\/channel\/.*\/broadcast\/(\w+).*/, embedtag: {width: 512, height: 339 }});

$.fn.oembed.addProvider('twitvid', 'video', ['twitvid\\.com/.+'], 'http://www.twitvid.com/embed.php?guid=$1&autoplay=0',
   {templateRegex: /.*twitvid\.com\/(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360 }});

$.fn.oembed.addProvider('aniboom', 'video', ['aniboom\\.com/animation-video/.+'], 'http://api.aniboom.com/e/$1',
{templateRegex: /.*animation-video\/(\d+).*/, embedtag: {width: 594, height: 334}});

$.fn.oembed.addProvider('vzaar', 'video', ['vzaar\\.com/videos/.+', 'vzaar.tv/.+'], 'http://view.vzaar.com/$1/player?',
{templateRegex: /.*\/(\d+).*/, embedtag: {tag: 'iframe', width: 576, height: 324 }});

$.fn.oembed.addProvider('snotr', 'video', ['snotr\\.com/video/.+'], 'http://www.snotr.com/embed/$1',
{templateRegex: /.*\/(\d+).*/, embedtag: {tag: 'iframe', width: 400, height: 330}, nocache: 1 });

$.fn.oembed.addProvider('youku', 'video', ['v.youku.com/v_show/id_.+'], 'http://player.youku.com/player.php/sid/$1/v.swf',
{templateRegex: /.*id_(.+)\.html.*/, embedtag: {width: 480, height: 400}, nocache: 1 });

$.fn.oembed.addProvider('tudou', 'video', ['tudou.com/programs/view/.+\/'], 'http://www.tudou.com/v/$1/v.swf',
{templateRegex: /.*view\/(.+)\//, embedtag: {width: 480, height: 400}, nocache: 1 });

$.fn.oembed.addProvider('embedr', 'video', ['embedr\\.com/playlist/.+'], 'http://embedr.com/swf/slider/$1/425/520/default/false/std?',
{templateRegex: /.*playlist\/([^\/]+).*/, embedtag: {width: 425, height: 520}});

$.fn.oembed.addProvider('blip', 'video', ['blip\\.tv/.+'], '//blip.tv/oembed/');

$.fn.oembed.addProvider('minoto-video', 'video', ['http://api.minoto-video.com/publishers/.+/videos/.+', 'http://dashboard.minoto-video.com/main/video/details/.+', 'http://embed.minoto-video.com/.+'], 'http://api.minoto-video.com/services/oembed.json', {useYQL: 'json'});

$.fn.oembed.addProvider('animoto', 'video', ['animoto.com/play/.+'], 'http://animoto.com/services/oembed');

$.fn.oembed.addProvider('hulu', 'video', ['hulu\\.com/watch/.*'], '//www.hulu.com/api/oembed.json');

$.fn.oembed.addProvider('ustream', 'video', ['ustream\\.tv/recorded/.*'], 'http://www.ustream.tv/oembed', {useYQL: 'json'});

$.fn.oembed.addProvider('videojug', 'video', ['videojug\\.com/(film|payer|interview).*'], 'http://www.videojug.com/oembed.json', {useYQL: 'json'});

$.fn.oembed.addProvider('sapo', 'video', ['videos\\.sapo\\.pt/.*'], 'http://videos.sapo.pt/oembed', {useYQL: 'json'});

$.fn.oembed.addProvider('vodpod', 'video', ['vodpod.com/watch/.*'], 'http://vodpod.com/oembed.js', {useYQL: 'json'});

$.fn.oembed.addProvider('vimeo', 'video', ['www\\.vimeo\\.com\\/groups\\/.*\\/videos\\/.*', 'www\\.vimeo\\.com\\/.*', 'vimeo\\.com\\/groups\\/.*\\/videos\\/.*', 'vimeo\\.com\\/.*'], '//vimeo.com/api/oembed.json');

$.fn.oembed.addProvider('dailymotion', 'video', ['dailymotion\\.com/.+'], '//www.dailymotion.com/services/oembed');

$.fn.oembed.addProvider('5min', 'video', ['www\\.5min\\.com/.+'], 'http://api.5min.com/oembed.xml', {useYQL: 'xml'});

$.fn.oembed.addProvider('National Film Board of Canada', 'video', ['nfb\\.ca/film/.+'], 'http://www.nfb.ca/remote/services/oembed/', {useYQL: 'json'});

$.fn.oembed.addProvider('qik', 'video', ['qik\\.com/\\w+'], 'http://qik.com/api/oembed.json', {useYQL: 'json'});

$.fn.oembed.addProvider('revision3', 'video', ['revision3\\.com'], 'http://revision3.com/api/oembed/');

$.fn.oembed.addProvider('dotsub', 'video', ['dotsub\\.com/view/.+'], 'http://dotsub.com/services/oembed', {useYQL: 'json'});

$.fn.oembed.addProvider('clikthrough', 'video', ['clikthrough\\.com/theater/video/\\d+'], 'http://clikthrough.com/services/oembed');

$.fn.oembed.addProvider('Kinomap', 'video', ['kinomap\\.com/.+'], 'http://www.kinomap.com/oembed');

$.fn.oembed.addProvider('VHX', 'video', ['vhx.tv/.+'], 'http://vhx.tv/services/oembed.json');

$.fn.oembed.addProvider('bambuser', 'video', ['bambuser.com/.+'], 'http://api.bambuser.com/oembed/iframe.json');

$.fn.oembed.addProvider('justin.tv', 'video', ['justin.tv/.+'], 'http://api.justin.tv/api/embed/from_url.json', {useYQL: 'json'});

$.fn.oembed.addProvider('vine', 'video', ['vine.co/v/.*'], null,
{
  templateRegex: /https?:\/\/w?w?w?.?vine\.co\/v\/([a-zA-Z0-9]*).*/,
  template: '<iframe src="https://vine.co/v/$1/embed/postcard" width="600" height="600" allowfullscreen="true" allowscriptaccess="always" scrolling="no" frameborder="0"></iframe>' +
  '<script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>',
  nocache: 1
});

$.fn.oembed.addProvider('boxofficebuz', 'video', ['boxofficebuz\\.com\\/embed/.+'], 'http://boxofficebuz.com/embed/$1/$2', {templateRegex: [/.*boxofficebuz\.com\/embed\/(\w+)\/([\w*\-*]+)/], embedtag: {tag: 'iframe', width: 480, height: 360 }});

$.fn.oembed.addProvider('clipsyndicate', 'video', ['clipsyndicate\\.com/video/play/.+', 'clipsyndicate\\.com/embed/iframe\\?.+'], 'http://eplayer.clipsyndicate.com/embed/iframe?pf_id=1&show_title=0&va_id=$1&windows=1', {templateRegex: [/.*www\.clipsyndicate\.com\/video\/play\/(\w+)\/.*/, /.*eplayer\.clipsyndicate\.com\/embed\/iframe\?.*va_id=(\w+).*.*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('coub', 'video', ['coub\\.com/.+'], 'http://www.coub.com/embed/$1?muted=false&autostart=false&originalSize=false&hideTopBar=false&noSiteButtons=false&startWithHD=false', {templateRegex: [/.*coub\.com\/embed\/(\w+)\?*.*/, /.*coub\.com\/view\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('discoverychannel', 'video', ['snagplayer\\.video\\.dp\\.discovery\\.com/.+'], 'http://snagplayer.video.dp.discovery.com/$1/snag-it-player.htm?auto=no', {templateRegex: [/.*snagplayer\.video\.dp\.discovery\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }});

$.fn.oembed.addProvider('telly', 'video', ['telly\\.com/.+'], 'http://www.telly.com/embed.php?guid=$1&autoplay=0', {templateRegex: [/.*telly\.com\/embed\.php\?guid=(\w+).*/, /.*telly\.com\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }});

$.fn.oembed.addProvider('minilogs', 'video', ['minilogs\\.com/.+'], 'http://www.minilogs.com/e/$1', {templateRegex: [/.*minilogs\.com\/e\/(\w+).*/, /.*minilogs\.com\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('viddy', 'video', ['viddy\\.com/.+'], 'http://www.viddy.com/embed/video/$1', {templateRegex: [/.*viddy\.com\/embed\/video\/(\.*)/, /.*viddy\.com\/video\/(\.*)/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('worldstarhiphop', 'video', ['worldstarhiphop\\.com\/embed/.+'], 'http://www.worldstarhiphop.com/embed/$1', {templateRegex: /.*worldstarhiphop\.com\/embed\/(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('zapiks', 'video', ['zapiks\\.fr\/.+'], 'http://www.zapiks.fr/index.php?action=playerIframe&media_id=$1&autoStart=fals', {templateRegex: /.*zapiks\.fr\/index.php\?[\w\=\&]*media_id=(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});
