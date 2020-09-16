// ==UserScript==
// @name         Idle Momentum APH Tracker (No Speed)
// @author       Zephyron (originally LazyBanana)
// @version      1.0.0
// @description  Tracks current and max APH info in Idle Momentum.
// @include      https://idlemomentum.com*
// @run-at       document-end
// ==/UserScript==

// Set up the config, then add the main script to the page.
(function() {
  aphConfig = {
    hideSpeed: true
  };
  
  document.body.appendChild(document.createElement('script')).src = 'https://zephyron1237.github.io/idle-momentum-aph/aph.user.js';
})();
