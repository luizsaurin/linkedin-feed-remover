// ==UserScript==
// @name         LinkedIn Feed Remover
// @namespace    https://github.com/luizsaurin
// @version      0.0.1
// @description  Hide LinkedIn's social feed and use LinkedIn only for jobs, messaging, networking, and profile management
// @author       luizsaurin
// @homepageURL  https://github.com/luizsaurin/linkedin-feed-remover
// @supportURL   https://github.com/luizsaurin/linkedin-feed-remover/issues
// @match        https://www.linkedin.com/feed/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    function hideFeed() {
        document
            .querySelectorAll('[data-testid="mainFeed"]')
            .forEach(element => {
            element.style.display = 'none';
        });
    }

    hideFeed();

    new MutationObserver(hideFeed).observe(document.body, {
        childList: true,
        subtree: true
    });
})();