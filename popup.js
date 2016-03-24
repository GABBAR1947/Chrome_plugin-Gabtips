/*
 * popup.js
 * Copyright (C) 2016 gabbar1947 <gabbar1947@Rathore1947>
 *
 * Distributed under terms of the MIT license.
 */

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'https://www.facebook.com/Gabbar-Tips-1409841689309366/';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);
