        // Google Analytics
        E.script.props({src: `https://www.googletagmanager.com/gtag/js?id=G-X4G865942D`}),
        E.script.chi(`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-X4G865942D');`),
        // Yandex Metric
        E.script.props({type: `text/javascript`}).chi(
        `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
        ym(95129239, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true
        });`
        ),
        E.noscript.chi(E.div.chi(E.img.props({src: `https://mc.yandex.ru/watch/95129239`, style: `position:absolute; left:-9999px;`, alt: ``}))),