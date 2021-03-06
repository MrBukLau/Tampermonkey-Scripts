// ==UserScript==
// @name               Apple Music - English Translation
// @version            1.0
// @description        Translate the words on Apple Music to English (Credit to Brock Adams)
// @icon               https://music.apple.com/assets/favicon/favicon-180-c132a95549a91ae6983a4914da3e1c44.png
// @include            *music.apple.com*
// @homepage           https://stackoverflow.com/questions/16065937/changing-a-pages-url-parameters
// @author             MrBukLau
// @grant              none
// @run-at             document-start
// ==/UserScript==

var oldUrlSearch = window.location.search;

if ( ! /\?l=en$/.test (oldUrlSearch) ) {
    var newURL = window.location.protocol + "//"
               + window.location.host
               + window.location.pathname
               + oldUrlSearch + "?l=en"
               + window.location.hash;
    window.location.replace (newURL);
}
