//Rich
$.fn.oembed.addProvider('twitter', 'rich', ['twitter.com/.+'], 'https://api.twitter.com/1/statuses/oembed.json');

$.fn.oembed.addProvider('gmep', 'rich', ['gmep.imeducate.com/.*', 'gmep.org/.*'], 'http://gmep.org/oembed.json');

$.fn.oembed.addProvider('urtak', 'rich', ['urtak.com/(u|clr)/.+'], 'http://oembed.urtak.com/1/oembed');

$.fn.oembed.addProvider('cacoo', 'rich', ['cacoo.com/.+'], 'http://cacoo.com/oembed.json');

$.fn.oembed.addProvider('dailymile', 'rich', ['dailymile.com/people/.*/entries/.*'], 'http://api.dailymile.com/oembed');

$.fn.oembed.addProvider('dipity', 'rich', ['dipity.com/timeline/.+'], 'http://www.dipity.com/oembed/timeline/', {useYQL: 'json'});

$.fn.oembed.addProvider('sketchfab', 'rich', ['sketchfab.com/show/.+'], 'http://sketchfab.com/oembed', {useYQL: 'json'});

$.fn.oembed.addProvider('speakerdeck', 'rich', ['speakerdeck.com/.+'], 'http://speakerdeck.com/oembed.json', {useYQL: 'json'});

$.fn.oembed.addProvider('popplet', 'rich', ['popplet.com/app/.*'], 'http://popplet.com/app/Popplet_Alpha.swf?page_id=$1&em=1',
{
    templateRegex: /.*#\/([^\/]+).*/,
    embedtag: {
        width: 460,
        height: 460
    }
});

$.fn.oembed.addProvider('pearltrees', 'rich', ['pearltrees.com/.*'], 'http://cdn.pearltrees.com/s/embed/getApp?',
{
    templateRegex: /.*N-f=1_(\d+).*N-p=(\d+).*/,
    embedtag: {
        width: 460,
        height: 460,
        flashvars: 'lang=en_US&amp;embedId=pt-embed-$1-693&amp;treeId=$1&amp;pearlId=$2&amp;treeTitle=Diagrams%2FVisualization&amp;site=www.pearltrees.com%2FF'
    }
});

$.fn.oembed.addProvider('prezi', 'rich', ['prezi.com/.*'], '//prezi.com/bin/preziloader.swf?',
{
    templateRegex: /.*com\/([^\/]+)\/.*/,
    embedtag: {
        width: 550,
        height: 400,
        flashvars: 'prezi_id=$1&amp;lock_to_path=0&amp;color=ffffff&amp;autoplay=no&amp;autohide_ctrls=0'
    }
});

$.fn.oembed.addProvider('tourwrist', 'rich', ['tourwrist.com/tours/.+'], null,
{
    templateRegex: /.*tours.([\d]+).*/,
    template: function (wm, tourid) {
        setTimeout(function () {
            if (loadEmbeds) {
                loadEmbeds();
            }
        }, 2000);
        return '<div id="' + tourid + '" class="tourwrist-tour-embed direct"></div> <script type="text/javascript" src="http://tourwrist.com/tour_embed.js"></script>';
    }
});

$.fn.oembed.addProvider('meetup', 'rich', ['meetup\\.(com|ps)/.+'], 'http://api.meetup.com/oembed');

$.fn.oembed.addProvider('ebay', 'rich', ['ebay\\.*'], 'http://togo.ebay.com/togo/togo.swf?2008013100',
{
    templateRegex: /.*\/([^\/]+)\/(\d{10,13}).*/,
    embedtag: {
        width: 355,
        height: 300,
        flashvars: 'base=http://togo.ebay.com/togo/&lang=en-us&mode=normal&itemid=$2&query=$1'
    }
});

$.fn.oembed.addProvider('wikipedia', 'rich', ['wikipedia.org/wiki/.+'], 'http://$1.wikipedia.org/w/api.php?action=parse&page=$2&format=json&section=0&callback=?', {
    templateRegex: /.*\/\/([\w]+).*\/wiki\/([^\/]+).*/,
    templateData: function (data) {
        if (!data.parse) {
            return false;
        }
        var text = data.parse.text['*'].replace(/href="\/wiki/g, 'href="http://en.wikipedia.org/wiki');
        return  '<div id="content"><h3><a class="nav-link" href="http://en.wikipedia.org/wiki/' + data.parse.displaytitle + '">' + data.parse.displaytitle + '</a></h3>' + text + '</div>';
    }
});

$.fn.oembed.addProvider('imdb', 'rich', ['imdb.com/title/.+'], 'http://www.imdbapi.com/?i=$1&callback=?',
{
    templateRegex: /.*\/title\/([^\/]+).*/,
    templateData: function (data) {
        if (!data.Title) {
            return false;
        }
        return  '<div id="content"><h3><a class="nav-link" href="http://imdb.com/title/' + data.imdbID + '/">' + data.Title + '</a> (' + data.Year + ')</h3><p>Rating: ' + data.imdbRating + '<br/>Genre: ' + data.Genre + '<br/>Starring: ' + data.Actors + '</p></div>  <div id="view-photo-caption">' + data.Plot + '</div></div>';
    }
});

$.fn.oembed.addProvider('livejournal', 'rich', ['livejournal.com/'], 'http://ljpic.seacrow.com/json/$2$4?jsonp=?',
{
    templateRegex: /(http:\/\/(((?!users).)+)\.livejournal\.com|.*users\.livejournal\.com\/([^\/]+)).*/,
    templateData: function (data) {
        if (!data.username) {
            return false;
        }
        return  '<div><img src="' + data.image + '" align="left" style="margin-right: 1em;" /><span class="oembedall-ljuser"><a href="http://' + data.username + '.livejournal.com/profile"><img src="http://www.livejournal.com/img/userinfo.gif" alt="[info]" width="17" height="17" /></a><a href="http://' + data.username + '.livejournal.com/">' + data.username + '</a></span><br />' + data.name + '</div>';
    }
});

$.fn.oembed.addProvider('circuitbee', 'rich', ['circuitbee\\.com/circuit/view/.+'], 'http://c.circuitbee.com/build/r/schematic-embed.html?id=$1',
{
    templateRegex: /.*circuit\/view\/(\d+).*/,
    embedtag: {
        tag: 'iframe',
        width: '500',
        height: '350'
    }
});

$.fn.oembed.addProvider('googlecalendar', 'rich', ['www.google.com/calendar/embed?.+'], '$1',
{templateRegex: /(.*)/, embedtag: {tag: 'iframe', width: '800', height: '600' }});

$.fn.oembed.addProvider('jsfiddle', 'rich', ['jsfiddle.net/[^/]+/?'], 'http://jsfiddle.net/$1/embedded/result,js,resources,html,css/?',
{templateRegex: /.*net\/([^\/]+).*/, embedtag: {tag: 'iframe', width: '100%', height: '300' }});

$.fn.oembed.addProvider('jsbin', 'rich', ['jsbin.com/.+'], 'http://jsbin.com/$1/?',
{templateRegex: /.*com\/([^\/]+).*/, embedtag: {tag: 'iframe', width: '100%', height: '300' }});

$.fn.oembed.addProvider('jotform', 'rich', ['form.jotform.co/form/.+'], '$1?',
{templateRegex: /(.*)/, embedtag: {tag: 'iframe', width: '100%', height: '507' }});

$.fn.oembed.addProvider('reelapp', 'rich', ['reelapp\\.com/.+'], 'http://www.reelapp.com/$1/embed',
{templateRegex: /.*com\/(\S{6}).*/, embedtag: {tag: 'iframe', width: '400', height: '338'}});

$.fn.oembed.addProvider('linkedin', 'rich', ['linkedin.com/pub/.+'], 'https://www.linkedin.com/cws/member/public_profile?public_profile_url=$1&format=inline&isFramed=true',
{templateRegex: /(.*)/, embedtag: {tag: 'iframe', width: '368px', height: 'auto'}});

$.fn.oembed.addProvider('timetoast', 'rich', ['timetoast.com/timelines/[0-9]+'], 'http://www.timetoast.com/flash/TimelineViewer.swf?passedTimelines=$1',
{templateRegex: /.*timelines\/([0-9]*)/, embedtag: { width: 550, height: 400}, nocache: 1});

$.fn.oembed.addProvider('pastebin', 'rich', ['pastebin\\.com/[\\S]{8}'], 'http://pastebin.com/embed_iframe.php?i=$1',
{templateRegex: /.*\/(\S{8}).*/, embedtag: {tag: 'iframe', width: '100%', height: 'auto'}});

$.fn.oembed.addProvider('mixlr', 'rich', ['mixlr.com/.+'], 'http://mixlr.com/embed/$1?autoplay=ae',
{templateRegex: /.*com\/([^\/]+).*/, embedtag: {tag: 'iframe', width: '100%', height: 'auto' }});

$.fn.oembed.addProvider('pastie', 'rich', ['pastie\\.org/pastes/.+'], null, {yql: {xpath: '//pre[@class="textmate-source"]'}});

$.fn.oembed.addProvider('github', 'rich', ['gist.github.com/.+'], 'https://github.com/api/oembed');

$.fn.oembed.addProvider('github', 'rich', ['github.com/[-.\\w@]+/[-.\\w@]+'], 'https://api.github.com/repos/$1/$2?callback=?',
{templateRegex: /.*\/([^\/]+)\/([^\/]+).*/,
    templateData: function (data) {
        if (!data.data.html_url){
            return false;
        }
        return  '<div class="oembedall-githubrepos"><ul class="oembedall-repo-stats"><li>' + data.data.language + '</li><li class="oembedall-watchers"><a title="Watchers" href="' + data.data.html_url + '/watchers">&#x25c9; ' + data.data.watchers + '</a></li>' +
        '<li class="oembedall-forks"><a title="Forks" href="' + data.data.html_url + '/network">&#x0265; ' + data.data.forks + '</a></li></ul><h3><a href="' + data.data.html_url + '">' + data.data.name + '</a></h3><div class="oembedall-body"><p class="oembedall-description">' + data.data.description + '</p>' +
        '<p class="oembedall-updated-at">Last updated: ' + data.data.pushed_at + '</p></div></div>';
    }
});

$.fn.oembed.addProvider('facebook', 'rich', ['facebook.com'], null,
{templateRegex: /.*\/([^\/]+)\/([^\/]+).*/,
    template: function (url) {
        // adding script directly to DOM to make sure that it is loaded correctly.
        if (!$.fn.oembed.facebokScriptHasBeenAdded) {
            $('<div id="fb-root"></div>').appendTo('body');
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = '(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));';
            document.body.appendChild(script);
            $.fn.oembed.facebokScriptHasBeenAdded = true;
        }

        // returning template with url of facebook post.
        return '<div class="fb-post" data-href="' + url + '" data-width="520"><div class="fb-xfbml-parse-ignore"><a href="' + url + '"></div></div>';

    }
});

$.fn.oembed.addProvider('stackoverflow', 'rich', ['stackoverflow.com/questions/[\\d]+'], 'http://api.stackoverflow.com/1.1/questions/$1?body=true&jsonp=?',
{templateRegex: /.*questions\/([\d]+).*/,
    templateData: function (data) {
        if (!data.questions) {
            return false;
        }
        var q = data.questions[0];
        var body = $(q.body).text();
        var out = '<div class="oembedall-stoqembed"><div class="oembedall-statscontainer"><div class="oembedall-statsarrow"></div><div class="oembedall-stats"><div class="oembedall-vote"><div class="oembedall-votes">' +
        '<span class="oembedall-vote-count-post"><strong>' + (q.up_vote_count - q.down_vote_count) + '</strong></span><div class="oembedall-viewcount">vote(s)</div></div>' +
        '</div><div class="oembedall-status"><strong>' + q.answer_count + '</strong>answer</div></div><div class="oembedall-views">' + q.view_count + ' view(s)</div></div>' +
        '<div class="oembedall-summary"><h3><a class="oembedall-question-hyperlink" href="http://stackoverflow.com/questions/' + q.question_id + '/">' + q.title + '</a></h3>' +
        '<div class="oembedall-excerpt">' + body.substring(0, 100) + '...</div><div class="oembedall-tags">';
        for (var i in q.tags) {
            if (q.tags.hasOwnProperty(i)) {
                out += '<a title="" class="oembedall-post-tag" href="http://stackoverflow.com/questions/tagged/' + q.tags[i] + '">' + q.tags[i] + '</a>';
            }
        }

        out += '</div><div class="oembedall-fr"><div class="oembedall-user-info"><div class="oembedall-user-gravatar32"><a href="http://stackoverflow.com/users/' + q.owner.user_id + '/' + q.owner.display_name + '">' +
        '<img width="32" height="32" alt="" src="http://www.gravatar.com/avatar/' + q.owner.email_hash + '?s=32&amp;d=identicon&amp;r=PG"></a></div><div class="oembedall-user-details">' +
        '<a href="http://stackoverflow.com/users/' + q.owner.user_id + '/' + q.owner.display_name + '">' + q.owner.display_name + '</a><br><span title="reputation score" class="oembedall-reputation-score">' +
        q.owner.reputation + '</span></div></div></div></div></div>';
        return out;
    }
});

$.fn.oembed.addProvider('wordpress', 'rich', ['wordpress\\.com/.+', 'blogs\\.cnn\\.com/.+', 'techcrunch\\.com/.+', 'wp\\.me/.+'], 'http://public-api.wordpress.com/oembed/1.0/?for=jquery-oembed-all');

$.fn.oembed.addProvider('screenr', 'rich', ['screenr\\.com'], 'http://www.screenr.com/embed/$1',
{templateRegex: /.*\/([^\/]+).*/, embedtag: {tag: 'iframe', width: '650', height: 396}});

$.fn.oembed.addProvider('gigpans', 'rich', ['gigapan\\.org/[-.\\w@]+/\\d+'], 'http://gigapan.org/gigapans/$1/options/nosnapshots/iframe/flash.html',
{templateRegex: /.*\/(\d+)\/?.*/, embedtag: {tag: 'iframe', width: '100%', height: 400 }});

$.fn.oembed.addProvider('scribd', 'rich', ['scribd\\.com/.+'], 'http://www.scribd.com/embeds/$1/content?start_page=1&view_mode=list',
{templateRegex: /.*doc\/([^\/]+).*/, embedtag: {tag: 'iframe', width: '100%', height: 600}});

$.fn.oembed.addProvider('kickstarter', 'rich', ['kickstarter\\.com/projects/.+'], '$1/widget/card.html',
{templateRegex: /([^\?]+).*/, embedtag: {tag: 'iframe', width: '220', height: 380}});

$.fn.oembed.addProvider('amazon', 'rich', ['amzn.com/B+', 'amazon.com.*/(B\\S+)($|\\/.*)'], 'http://rcm.amazon.com/e/cm?t=_APIKEY_&o=1&p=8&l=as1&asins=$1&ref=qf_br_asin_til&fc1=000000&IS2=1&lt1=_blank&m=amazon&lc1=0000FF&bc1=000000&bg1=FFFFFF&f=ifr',
{
    apikey: true,
    templateRegex: /.*\/(B[0-9A-Z]+)($|\/.*)/,
    embedtag: {
        tag: 'iframe',
        width: '120px',
        height: '240px'}
    });

$.fn.oembed.addProvider('slideshare', 'rich', ['slideshare\\.net'], '//www.slideshare.net/api/oembed/2', {format: 'jsonp'});

$.fn.oembed.addProvider('roomsharejp', 'rich', ['roomshare\\.jp/(en/)?post/.*'], 'http://roomshare.jp/oembed.json');

$.fn.oembed.addProvider('lanyard', 'rich', ['lanyrd.com/\\d+/.+'], null,
{
    yql: {
        xpath: '(//div[@class="primary"])[1]',
        from: 'htmlstring',
        datareturn: function (results) {
            if (!results.result) {
                return false;
            }
            return '<div class="oembedall-lanyard">' + results.result + '</div>';
        }
    }
});

$.fn.oembed.addProvider('asciiartfarts', 'rich', ['asciiartfarts.com/\\d+.html'], null,
{
    yql: {
        xpath: '//pre/font',
        from: 'htmlstring',
        datareturn: function (results) {
            if (!results.result) {
                return false;
            }
            return '<pre style="background-color:#000;">' + results.result + '</div>';
        }
    }
});

$.fn.oembed.addProvider('coveritlive', 'rich', ['coveritlive.com/'], null, {
    templateRegex: /(.*)/,
    template: '<iframe src="$1" allowtransparency="true" scrolling="no" width="615px" frameborder="0" height="625px"></iframe>'});

$.fn.oembed.addProvider('polldaddy', 'rich', ['polldaddy.com/'], null, {
    templateRegex: /(?:https?:\/\/w?w?w?.?polldaddy.com\/poll\/)([0-9]*)\//,
    template: '<script async type="text/javascript" charset="utf-8" src="http://static.polldaddy.com/p/$1.js"></script>',
    nocache: 1
});

$.fn.oembed.addProvider('360io', 'rich', ['360\\.io/.+'], 'http://360.io/$1', {templateRegex: /.*360\.io\/(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('bubbli', 'rich', ['on\\.bubb\\.li/.+'], 'http://on.bubb.li/$1', {templateRegex: /.*on\.bubb\.li\/(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360}, nocache: 1 });

$.fn.oembed.addProvider('cloudup', 'rich', ['cloudup\\.com/.+'], 'http://cloudup.com/$1?chromeless', {templateRegex: [/.*cloudup\.com\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }});

$.fn.oembed.addProvider('codepen', 'rich', ['codepen.io/.+'], 'http://codepen.io/$1/embed/$2', {templateRegex: [/.*io\/(\w+)\/pen\/(\w+).*/, /.*io\/(\w+)\/full\/(\w+).*/], embedtag: {tag: 'iframe', width: '100%', height: '300'}, nocache: 1 });

$.fn.oembed.addProvider('googleviews', 'rich', ['(.*maps\\.google\\.com\\/maps\\?).+(output=svembed).+(cbp=(.*)).*'], 'https://maps.google.com/maps?layer=c&panoid=$3&ie=UTF8&source=embed&output=svembed&cbp=$5', {templateRegex: /(.*maps\.google\.com\/maps\?).+(panoid=(\w+)&).*(cbp=(.*)).*/, embedtag: {tag: 'iframe', width: 480, height: 360}, nocache: 1 });

$.fn.oembed.addProvider('googlemaps', 'rich', ['google\\.com\/maps\/place/.+'], 'http://maps.google.com/maps?t=m&q=$1&output=embed', {templateRegex: /.*google\.com\/maps\/place\/([\w\+]*)\/.*/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('imajize', 'rich', ['embed\\.imajize\\.com/.+'], 'http://embed.imajize.com/$1', {templateRegex: /.*embed\.imajize\.com\/(.*)/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('mapjam', 'rich', ['mapjam\\.com/.+'], 'http://www.mapjam.com/$1', {templateRegex: /.*mapjam\.com\/(.*)/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('polar', 'rich', ['polarb\\.com/.+'], 'http://assets-polarb-com.a.ssl.fastly.net/api/v4/publishers/unknown/embedded_polls/iframe?poll_id=$1', {templateRegex: /.*polarb\.com\/polls\/(\w+).*/, embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});

$.fn.oembed.addProvider('ponga', 'rich', ['ponga\\.com/.+'], 'https://www.ponga.com/embedded?id=$1', {templateRegex: [/.*ponga\.com\/embedded\?id=(\w+).*/, /.*ponga\.com\/(\w+).*/], embedtag: {tag: 'iframe', width: 480, height: 360 }, nocache: 1});
