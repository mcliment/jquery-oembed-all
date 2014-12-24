(function ($) {
    'use strict';

    var shortURLList = ['0rz.tw', '1link.in', '1url.com', '2.gp', '2big.at', '2tu.us', '3.ly', '307.to', '4ms.me', '4sq.com', '4url.cc', '6url.com', '7.ly', 'a.gg', 'a.nf', 'aa.cx', 'abcurl.net',
    'ad.vu', 'adf.ly', 'adjix.com', 'afx.cc', 'all.fuseurl.com', 'alturl.com', 'amzn.to', 'ar.gy', 'arst.ch', 'atu.ca', 'azc.cc', 'b23.ru', 'b2l.me', 'bacn.me', 'bcool.bz', 'binged.it',
    'bit.ly', 'bizj.us', 'bloat.me', 'bravo.ly', 'bsa.ly', 'budurl.com', 'canurl.com', 'chilp.it', 'chzb.gr', 'cl.lk', 'cl.ly', 'clck.ru', 'cli.gs', 'cliccami.info',
    'clickthru.ca', 'clop.in', 'conta.cc', 'cort.as', 'cot.ag', 'crks.me', 'ctvr.us', 'cutt.us', 'dai.ly', 'decenturl.com', 'dfl8.me', 'digbig.com',
    'http:\\/\\/digg\\.com\\/[^\\/]+$', 'disq.us', 'dld.bz', 'dlvr.it', 'do.my', 'doiop.com', 'dopen.us', 'easyuri.com', 'easyurl.net', 'eepurl.com', 'eweri.com',
    'fa.by', 'fav.me', 'fb.me', 'fbshare.me', 'ff.im', 'fff.to', 'fire.to', 'firsturl.de', 'firsturl.net', 'flic.kr', 'flq.us', 'fly2.ws', 'fon.gs', 'freak.to',
    'fuseurl.com', 'fuzzy.to', 'fwd4.me', 'fwib.net', 'g.ro.lt', 'gizmo.do', 'gl.am', 'go.9nl.com', 'go.ign.com', 'go.usa.gov', 'goo.gl', 'goshrink.com', 'gurl.es',
    'hex.io', 'hiderefer.com', 'hmm.ph', 'href.in', 'hsblinks.com', 'htxt.it', 'huff.to', 'hulu.com', 'hurl.me', 'hurl.ws', 'icanhaz.com', 'idek.net', 'ilix.in', 'is.gd',
    'its.my', 'ix.lt', 'j.mp', 'jijr.com', 'kl.am', 'klck.me', 'korta.nu', 'krunchd.com', 'l9k.net', 'lat.ms', 'liip.to', 'liltext.com', 'linkbee.com', 'linkbun.ch',
    'liurl.cn', 'ln-s.net', 'ln-s.ru', 'lnk.gd', 'lnk.ms', 'lnkd.in', 'lnkurl.com', 'lru.jp', 'lt.tl', 'lurl.no', 'macte.ch', 'mash.to', 'merky.de', 'migre.me', 'miniurl.com',
    'minurl.fr', 'mke.me', 'moby.to', 'moourl.com', 'mrte.ch', 'myloc.me', 'myurl.in', 'n.pr', 'nbc.co', 'nblo.gs', 'nn.nf', 'not.my', 'notlong.com', 'nsfw.in',
    'nutshellurl.com', 'nxy.in', 'nyti.ms', 'o-x.fr', 'oc1.us', 'om.ly', 'omf.gd', 'omoikane.net', 'on.cnn.com', 'on.mktw.net', 'onforb.es', 'orz.se', 'ow.ly', 'ping.fm',
    'pli.gs', 'pnt.me', 'politi.co', 'post.ly', 'pp.gg', 'profile.to', 'ptiturl.com', 'pub.vitrue.com', 'qlnk.net', 'qte.me', 'qu.tc', 'qy.fi', 'r.ebay.com', 'r.im', 'rb6.me', 'read.bi',
    'readthis.ca', 'reallytinyurl.com', 'redir.ec', 'redirects.ca', 'redirx.com', 'retwt.me', 'ri.ms', 'rickroll.it', 'riz.gd', 'rt.nu', 'ru.ly', 'rubyurl.com', 'rurl.org',
    'rww.tw', 's4c.in', 's7y.us', 'safe.mn', 'sameurl.com', 'sdut.us', 'shar.es', 'shink.de', 'shorl.com', 'short.ie', 'short.to', 'shortlinks.co.uk', 'shorturl.com',
    'shout.to', 'show.my', 'shrinkify.com', 'shrinkr.com', 'shrt.fr', 'shrt.st', 'shrten.com', 'shrunkin.com', 'simurl.com', 'slate.me', 'smallr.com', 'smsh.me', 'smurl.name',
    'sn.im', 'snipr.com', 'snipurl.com', 'snurl.com', 'sp2.ro', 'spedr.com', 'srnk.net', 'srs.li', 'starturl.com', 'stks.co', 'su.pr', 'surl.co.uk', 'surl.hu', 't.cn', 't.co', 't.lh.com',
    'ta.gd', 'tbd.ly', 'tcrn.ch', 'tgr.me', 'tgr.ph', 'tighturl.com', 'tiniuri.com', 'tiny.cc', 'tiny.ly', 'tiny.pl', 'tinylink.in', 'tinyuri.ca', 'tinyurl.com', 'tk.', 'tl.gd',
    'tmi.me', 'tnij.org', 'tnw.to', 'tny.com', 'to.ly', 'togoto.us', 'totc.us', 'toysr.us', 'tpm.ly', 'tr.im', 'tra.kz', 'trunc.it', 'twhub.com', 'twirl.at',
    'twitclicks.com', 'twitterurl.net', 'twitterurl.org', 'twiturl.de', 'twurl.cc', 'twurl.nl', 'u.mavrev.com', 'u.nu', 'u76.org', 'ub0.cc', 'ulu.lu', 'updating.me', 'ur1.ca',
    'url.az', 'url.co.uk', 'url.ie', 'url360.me', 'url4.eu', 'urlborg.com', 'urlbrief.com', 'urlcover.com', 'urlcut.com', 'urlenco.de', 'urli.nl', 'urls.im',
    'urlshorteningservicefortwitter.com', 'urlx.ie', 'urlzen.com', 'usat.ly', 'use.my', 'vb.ly', 'vevo.ly', 'vgn.am', 'vl.am', 'vm.lc', 'w55.de', 'wapo.st', 'wapurl.co.uk', 'wipi.es',
    'wp.me', 'x.vu', 'xr.com', 'xrl.in', 'xrl.us', 'xurl.es', 'xurl.jp', 'y.ahoo.it', 'yatuc.com', 'ye.pe', 'yep.it', 'yfrog.com', 'yhoo.it', 'yiyd.com', 'youtu.be', 'yuarel.com',
    'z0p.de', 'zi.ma', 'zi.mu', 'zipmyurl.com', 'zud.me', 'zurl.ws', 'zz.gd', 'zzang.kr', '›.ws', '✩.ws', '✿.ws', '❥.ws', '➔.ws', '➞.ws', '➡.ws', '➨.ws', '➯.ws', '➹.ws', '➽.ws'];

    $.fn.oembed = function (url, options, embedAction) {

        settings = $.extend(true, $.fn.oembed.defaults, options);

        if ($('#jqoembeddata').length === 0) {
            $('<span id="jqoembeddata"></span>').appendTo('body');
        }

        return this.each(function () {
            var container = $(this),
                resourceURL = (url && (!url.indexOf('http://') || !url.indexOf('https://'))) ? url : container.attr('href'),
                provider;

            if (embedAction) {
                settings.onEmbed = embedAction;
            }
            else if (!settings.onEmbed) {
                settings.onEmbed = function (oembedData) {
                    $.fn.oembed.insertCode(this, settings.embedMethod, oembedData);
                };
            }

            if (resourceURL && typeof(resourceURL) !== 'undefined') {
                //Check if shorten URL
                if (settings.expandUrls) {
                    for (var j = 0, l = shortURLList.length; j < l; j++) {
                        var regExp = new RegExp('://' + shortURLList[j] + '/', 'i');

                        if (regExp.test(resourceURL)) {
                            provider = expandUrl(container, resourceURL);

                            return container;
                        }
                    }
                }

                provider = $.fn.oembed.getOEmbedProvider(resourceURL);

                //remove fallback
                if (settings.fallback === false) {
                    provider = provider.name.toLowerCase() === 'opengraph' ? null : provider;
                }

                if (provider !== null) {
                    provider.params = getNormalizedParams(settings[provider.name]) || {};
                    provider.maxWidth = settings.maxWidth;
                    provider.maxHeight = settings.maxHeight;
                    embedCode(container, resourceURL, provider);
                } else {
                    settings.onProviderNotFound.call(container, resourceURL);
                }
            }

            return container;
        });
    };

    var settings;

    // Plugin defaults
    $.fn.oembed.defaults = {
        fallback: true,
        maxWidth: null,
        maxHeight: null,
        includeHandle: true,
        expandUrls: true,
        embedMethod: 'auto', // 'auto', 'replace', 'fill', 'append'
        onProviderNotFound: function () {},
        beforeEmbed: function () {},
        afterEmbed: function () {},
        onEmbed: null,
        onError: function() {},
        ajaxOptions: {}
    };

    /* Private functions */
    function rand(length, current) { //Found on http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
        current = current ? current : '';
        return length ? rand(--length, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * 60)) + current) : current;
    }

    function getRequestUrl(provider, externalUrl) {
        var url = provider.apiendpoint,
            qs = '',
            i;
        url += (url.indexOf('?') <= 0) ? '?' : '&';
        url = url.replace('#', '%23');

        if (provider.maxWidth !== null && (typeof provider.params.maxwidth === 'undefined' || provider.params.maxwidth === null)) {
            provider.params.maxwidth = provider.maxWidth;
        }

        if (provider.maxHeight !== null && (typeof provider.params.maxheight === 'undefined' || provider.params.maxheight === null)) {
            provider.params.maxheight = provider.maxHeight;
        }

        for (i in provider.params) {
            if (provider.params.hasOwnProperty(i)) {
                // We don't want them to jack everything up by changing the callback parameter
                if (i === provider.callbackparameter) {
                    continue;
                }

                // allows the options to be set to null, don't send null values to the server as parameters
                if (provider.params[i] !== null) {
                    qs += '&' + encodeURIComponent(i) + '=' + provider.params[i];
                }
            }
        }

        url += 'format=' + provider.format + '&url=' + encodeURIComponent(externalUrl) + qs;

        if (provider.dataType !== 'json') {
            url += '&' + provider.callbackparameter + '=?';
        }

        return url;
    }

    function success(oembedData, externalUrl, container) {
        $('#jqoembeddata').data(externalUrl, oembedData.code);
        settings.beforeEmbed.call(container, oembedData);
        settings.onEmbed.call(container, oembedData);
        settings.afterEmbed.call(container, oembedData);
    }

    function expandUrl(container, resourceURL) {
        var provider;

        //AJAX to http://api.longurl.org/v2/expand?url=http://bit.ly/JATvIs&format=json&callback=hhh
        var ajaxopts = $.extend({
            url: 'http://api.longurl.org/v2/expand',
            dataType: 'jsonp',
            data: {
                url: resourceURL,
                format: 'json'
                //callback: '?'
            },
            success: function (data) {
                //this = $.fn.oembed;
                resourceURL = data['long-url'];
                provider = $.fn.oembed.getOEmbedProvider(data['long-url']);

                //remove fallback
                if (settings.fallback === false) {
                    provider = provider.name.toLowerCase() === 'opengraph' ? null : provider;
                }

                if (provider !== null) {
                    provider.params = getNormalizedParams(settings[provider.name]) || {};
                    provider.maxWidth = settings.maxWidth;
                    provider.maxHeight = settings.maxHeight;
                    embedCode(container, resourceURL, provider);
                } else {
                    settings.onProviderNotFound.call(container, resourceURL);
                }
            },
            error: function () {
                settings.onError.call(container, resourceURL);
            }
        }, settings.ajaxOptions || {});

        $.ajax(ajaxopts);
    }

    function embedCode(container, externalUrl, embedProvider) {
        var ajaxopts;

        if (typeof $('#jqoembeddata').data(externalUrl) !== 'undefined' && embedProvider.embedtag.tag !== 'iframe') {
            var oembedData = {code: $('#jqoembeddata').data(externalUrl)};
            success(oembedData, externalUrl, container);
        } else if (embedProvider.yql) {
            var from = embedProvider.yql.from || 'htmlstring';
            var url = embedProvider.yql.url ? embedProvider.yql.url(externalUrl) : externalUrl;
            var query = 'SELECT * FROM ' + from +
                ' WHERE url="' + (url) + '"' +
                ' and ' + (/html/.test(from) ? 'xpath' : 'itemPath') + '="' + (embedProvider.yql.xpath || '/') + '"';

            if (from === 'html') {
                query += ' and compat="html5"';
            }

            ajaxopts = $.extend({
                url: '//query.yahooapis.com/v1/public/yql',
                dataType: 'jsonp',
                data: {
                    q: query,
                    format: 'json',
                    callback: '?'
                },
                success: function (data) {
                    var result, i, l;

                    if (embedProvider.yql.xpath && embedProvider.yql.xpath === '//meta|//title|//link') {
                        var meta = {};

                        if (data.query === null) {
                            data.query = {};
                        }
                        if (data.query.results === null) {
                            data.query.results = {'meta': []};
                        }
                        for (i = 0, l = data.query.results.meta.length; i < l; i++) {
                            var name = data.query.results.meta[i].name || data.query.results.meta[i].property || null;
                            if (name === null) {
                                continue;
                            }
                            meta[name.toLowerCase()] = data.query.results.meta[i].content;
                        }
                        if (!meta.hasOwnProperty('title') || !meta.hasOwnProperty('og:title')) {
                            if (data.query.results.title !== null) {
                                meta.title = data.query.results.title;
                            }
                        }
                        if (!meta.hasOwnProperty('og:image') && data.query.results.hasOwnProperty('link')) {
                            for (i = 0, l = data.query.results.link.length; i < l; i++) {
                                if (data.query.results.link[i].hasOwnProperty('rel')) {
                                    if (data.query.results.link[i].rel === 'apple-touch-icon') {
                                        if (data.query.results.link[i].href.charAt(0) === '/') {
                                            meta['og:image'] = url.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1] + data.query.results.link[i].href;
                                        } else {
                                            meta['og:image'] = data.query.results.link[i].href;
                                        }
                                    }
                                }
                            }
                        }
                        result = embedProvider.yql.datareturn(meta);
                    } else {
                        result = embedProvider.yql.datareturn ? embedProvider.yql.datareturn(data.query.results) : data.query.results.result;
                    }
                    if (result === false) {
                        return;
                    }
                    var oembedData = {};
                    if (typeof result === 'object')
                    {
                        oembedData = $.extend(oembedData, result);
                    }
                    oembedData.code = result;
                    success(oembedData, externalUrl, container);
                },
                error: settings.onError.call(container, externalUrl, embedProvider)
            }, settings.ajaxOptions || {});
            $.ajax(ajaxopts);
        } else if (embedProvider.templateRegex) {
            if (embedProvider.embedtag.tag !== '') {
                var flashvars = embedProvider.embedtag.flashvars || '';
                var tag = embedProvider.embedtag.tag || 'embed';
                var width = embedProvider.embedtag.width || 'auto';
                var height = embedProvider.embedtag.height || 'auto';
                var src = externalUrl.replace(embedProvider.templateRegex, embedProvider.apiendpoint);

                if (!embedProvider.nocache) {
                    src += '&jqoemcache=' + rand(5);
                }

                if (embedProvider.apikey) {
                    src = src.replace('_APIKEY_', settings.apikeys[embedProvider.name]);
                }

                var code = $('<' + tag + '/>').attr('src', src).attr('width', width)
                    .attr('height', height)
                    .attr('allowfullscreen', embedProvider.embedtag.allowfullscreen || 'true')
                    .attr('allowscriptaccess', embedProvider.embedtag.allowfullscreen || 'always')
                    .css('max-height', settings.maxHeight || 'auto')
                    .css('max-width', settings.maxWidth || 'auto');

                if (tag === 'embed') {
                    code.attr('type', embedProvider.embedtag.type || 'application/x-shockwave-flash')
                        .attr('flashvars', externalUrl.replace(embedProvider.templateRegex, flashvars));
                }

                if (tag === 'iframe') {
                    code.attr('scrolling', embedProvider.embedtag.scrolling || 'no')
                        .attr('frameborder', embedProvider.embedtag.frameborder || '0');

                }

                success({code: code}, externalUrl, container);
            } else if (embedProvider.apiendpoint) {
                //Add APIkey if true
                if (embedProvider.apikey) {
                    embedProvider.apiendpoint = embedProvider.apiendpoint.replace('_APIKEY_', settings.apikeys[embedProvider.name]);
                }

                ajaxopts = $.extend({
                    url: externalUrl.replace(embedProvider.templateRegex, embedProvider.apiendpoint),
                    dataType: 'jsonp',
                    success: function (data) {
                        var oembedData = $.extend({}, data);
                        oembedData.code = embedProvider.templateData(data);
                        success(oembedData, externalUrl, container);
                    },
                    error: settings.onError.call(container, externalUrl, embedProvider)
                }, settings.ajaxOptions || {});
                $.ajax(ajaxopts);
            } else {
                success({code: externalUrl.replace(embedProvider.templateRegex, embedProvider.template)}, externalUrl, container);
            }
        } else {

            var requestUrl = getRequestUrl(embedProvider, externalUrl);
            ajaxopts = $.extend({
                url: requestUrl,
                dataType: embedProvider.dataType || 'jsonp',
                success: function (data) {
                    var oembedData = $.extend({}, data);
                    switch (oembedData.type) {
                        case 'file': //Deviant Art has this
                        case 'photo':
                            oembedData.code = $.fn.oembed.getPhotoCode(externalUrl, oembedData);
                            break;
                        case 'video':
                        case 'rich':
                            oembedData.code = $.fn.oembed.getRichCode(externalUrl, oembedData);
                            break;
                        default:
                            oembedData.code = $.fn.oembed.getGenericCode(externalUrl, oembedData);
                            break;
                    }
                    success(oembedData, externalUrl, container);
                },
                error: settings.onError.call(container, externalUrl, embedProvider)
            }, settings.ajaxOptions || {});
            $.ajax(ajaxopts);
        }
    }

    function getNormalizedParams(params) {
        if (params === null) {
            return null;
        }
        var key, normalizedParams = {};
        for (key in params) {
            if (key !== null) {
                normalizedParams[key.toLowerCase()] = params[key];
            }
        }
        return normalizedParams;
    }

    /* Public functions */
    $.fn.oembed.insertCode = function (container, embedMethod, oembedData) {
        if (oembedData === null) {
            return;
        }

        if (embedMethod === 'auto' && container.attr('href') !== null) {
            embedMethod = 'append';
        } else if (embedMethod === 'auto') {
            embedMethod = 'replace';
        }

        switch (embedMethod) {
            case 'replace':
                container.replaceWith(oembedData.code);
                break;
            case 'fill':
                container.html(oembedData.code);
                break;
            case 'append':
                container.wrap('<div class="oembedall-container"></div>');
                var oembedContainer = container.parent();
                if (settings.includeHandle) {
                    $('<span class="oembedall-closehide">&darr;</span>').insertBefore(container).click(function () {
                        var encodedString = encodeURIComponent($(this).text());
                        $(this).html((encodedString === '%E2%86%91') ? '&darr;' : '&uarr;');
                        $(this).parent().children().last().toggle();
                    });
                }
                oembedContainer.append('<br/>');
                if (typeof oembedData.code.clone === 'function') {
                    oembedData.code.clone().appendTo(oembedContainer);
                } else {
                    oembedContainer.append(oembedData.code);
                }

                /* Make videos semi-responsive
                 * If parent div width less than embeded iframe video then iframe gets shrunk to fit smaller width
                 * If parent div width greater thans embed iframe use the max widht
                 * - works on youtubes and vimeo
                 */
                if (settings.maxWidth) {
                    var post_width = oembedContainer.parent().width();
                    if (post_width < settings.maxWidth) {
                        var iframe_width_orig = $('iframe', oembedContainer).width();
                        var iframe_height_orig = $('iframe', oembedContainer).height();
                        var ratio = iframe_width_orig / post_width;
                        $('iframe', oembedContainer).width(iframe_width_orig / ratio);
                        $('iframe', oembedContainer).height(iframe_height_orig / ratio);
                    } else {
                        if (settings.maxWidth) {
                            $('iframe', oembedContainer).width(settings.maxWidth);
                        }
                        if (settings.maxHeight) {
                            $('iframe', oembedContainer).height(settings.maxHeight);
                        }
                    }
                }
                break;
        }
    };

    $.fn.oembed.getPhotoCode = function (url, oembedData) {
        var code;
        var alt = oembedData.title ? oembedData.title : '';
        alt += oembedData.author_name ? ' - ' + oembedData.author_name : '';
        alt += oembedData.provider_name ? ' - ' + oembedData.provider_name : '';

        if (oembedData.url) {
            code = '<div><a href="' + url + '" target="_blank"><img src="' + oembedData.url + '" alt="' + alt + '"/></a></div>';
        } else if (oembedData.thumbnail_url) {
            var newURL = oembedData.thumbnail_url.replace('_s', '_b');
            code = '<div><a href="' + url + '" target="_blank"><img src="' + newURL + '" alt="' + alt + '"/></a></div>';
        } else {
            code = '<div>Error loading this picture</div>';
        }

        if (oembedData.html) {
            code += '<div>' + oembedData.html + '</div>';
        }

        return code;
    };

    $.fn.oembed.getRichCode = function (url, oembedData) {
        return oembedData.html;
    };

    $.fn.oembed.getGenericCode = function (url, oembedData) {
        var title = ((oembedData.title) && (oembedData.title !== null)) ? oembedData.title : url;
        var code = '<a href="' + url + '">' + title + '</a>';

        if (oembedData.html) {
            code += '<div>' + oembedData.html + '</div>';
        }

        return code;
    };

    $.fn.oembed.getOEmbedProvider = function (url) {
        for (var i = 0; i < $.fn.oembed.providers.length; i++) {
            for (var j = 0, l = $.fn.oembed.providers[i].urlschemes.length; j < l; j++) {
                var regExp = new RegExp($.fn.oembed.providers[i].urlschemes[j], 'i');

                if (url.match(regExp) !== null) {
                    return $.fn.oembed.providers[i];
                }
            }
        }
        return null;
    };

    // Constructor Function for OEmbedProvider Class.
    $.fn.oembed.OEmbedProvider = function (name, type, urlschemesarray, apiendpoint, extraSettings) {
        this.name = name;
        this.type = type; // 'photo', 'video', 'link', 'rich', null
        this.urlschemes = urlschemesarray;
        this.apiendpoint = apiendpoint;
        this.maxWidth = 500;
        this.maxHeight = 400;
        extraSettings = extraSettings || {};

        if (extraSettings.useYQL) {

            if (extraSettings.useYQL === 'xml') {
                extraSettings.yql = {
                    xpath: '//oembed/html',
                    from: 'xml',
                    apiendpoint: this.apiendpoint,
                    url: function (externalurl) {
                        return this.apiendpoint + '?format=xml&url=' + externalurl;
                    },
                    datareturn: function (results) {
                        return results.html.replace(/.*\[CDATA\[(.*)\]\]>$/, '$1') || '';
                    }
                };
            } else {
                extraSettings.yql = {
                    from: 'json',
                    apiendpoint: this.apiendpoint,
                    url: function (externalurl) {
                        return this.apiendpoint + '?format=json&url=' + externalurl;
                    },
                    datareturn: function (results) {
                        if (results.json.type !== 'video' && (results.json.url || results.json.thumbnail_url)) {
                            return '<img src="' + (results.json.url || results.json.thumbnail_url) + '" />';
                        }
                        return results.json.html || '';
                    }
                };
            }
            this.apiendpoint = null;
        }


        for (var property in extraSettings) {
            if (extraSettings.hasOwnProperty(property)) {
                this[property] = extraSettings[property];
            }
        }

        this.format = this.format || 'json';
        this.callbackparameter = this.callbackparameter || 'callback';
        this.embedtag = this.embedtag || {tag: ''};


    };

    $.fn.oembed.providers = [];

    $.fn.oembed.addProvider = function (name, type, urlschemesarray, apiendpoint, extraSettings) {
        $.fn.oembed.providers.push(new $.fn.oembed.OEmbedProvider(name, type, urlschemesarray, apiendpoint, extraSettings));
    };

    /*
     * Function to update existing providers
     *
     * @param  {String}    name             The name of the provider
     * @param  {String}    type             The type of the provider can be 'file', 'photo', 'video', 'rich'
     * @param  {String}    urlshemesarray   Array of url of the provider
     * @param  {String}    apiendpoint      The endpoint of the provider
     * @param  {String}    extraSettings    Extra settings of the provider
     */
    $.fn.oembed.updateProvider = function (name, type, urlschemesarray, apiendpoint, extraSettings) {
        for (var i = 0; i < $.fn.oembed.providers.length; i++) {
            if ($.fn.oembed.providers[i].name === name) {
                if (type !== null) {
                    $.fn.oembed.providers[i].type = type;
                }
                if (urlschemesarray !== null) {
                    $.fn.oembed.providers[i].urlschemes = urlschemesarray;
                }
                if (apiendpoint !== null) {
                    $.fn.oembed.providers[i].apiendpoint = apiendpoint;
                }
                if (extraSettings !== null) {
                    $.fn.oembed.providers[i].extraSettings = extraSettings;
                    for (var property in extraSettings) {
                        if (property !== null && extraSettings[property] !== null) {
                            $.fn.oembed.providers[i][property] = extraSettings[property];
                        }
                    }
                }
            }
        }
    };

})(jQuery);
