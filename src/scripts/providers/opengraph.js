//Use Open Graph Where applicable
$.fn.oembed.addProvider('opengraph', 'rich', ['.*'], null,
{
    yql: {
        xpath: '//meta|//title|//link',
        from: 'html',
        datareturn: function (results) {
            if (!results['og:title'] && results.title && results.description) {
                results['og:title'] = results.title;
            }

            if (!results['og:title'] && !results.title) {
                return false;
            }

            var code = $('<p/>');
            if (results['og:video']) {
                var embed = $('<embed src="' + results['og:video'] + '"/>');
                embed
                .attr('type', results['og:video:type'] || 'application/x-shockwave-flash')
                .css('max-height', $.fn.oembed.settings.maxHeight || 'auto')
                .css('max-width', $.fn.oembed.settings.maxWidth || 'auto');

                if (results['og:video:width']) {
                    embed.attr('width', results['og:video:width']);
                }
                if (results['og:video:height']) {
                    embed.attr('height', results['og:video:height']);
                }
                code.append(embed);
            } else if (results['og:image']) {
                var img = $('<img src="' + results['og:image'] + '">');
                img.css('max-height', $.fn.oembed.settings.maxHeight || 'auto').css('max-width', $.fn.oembed.settings.maxWidth || 'auto');
                if (results['og:image:width']) {
                    img.attr('width', results['og:image:width']);
                }
                if (results['og:image:height']) {
                    img.attr('height', results['og:image:height']);
                }
                code.append(img);
            }

            if (results['og:title']) {
                code.append('<b>' + results['og:title'] + '</b><br/>');
            }

            if (results['og:description']) {
                code.append(results['og:description'] + '<br/>');
            }
            else if (results.description){
                code.append(results.description + '<br/>');
            }

            return code;
        }
    }
});
