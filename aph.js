// ==UserScript==
// @name         Idle Momentum APH Tracker
// @author       Zephyron
// @version      1.0.0
// @description  Tracks current and max APH info in Idle Momentum.
// @include      https://www.idlemomentum.com/*
// @run-at       document-end
// ==/UserScript==

/*
  The code in this file is intended to be run in the game's tab at
               http://www.idlemomentum.com/
    
  For additional details on use this as a bookmarklet or with tampermonkey,
  see: https://github.com/zephyron1237/idle-momentum-aph/blob/master/README.md
*/

(function() {

// Provide a default config if one is not defined before aph.js is loaded.
if (typeof aphConfig === 'undefined') {
  aphConfig = {
    hideSpeed: false,
  };
}

// Allow the script to be re-run (mostly for testing)
if (typeof aph !== 'undefined' && aph.interval) {
  clearInterval(aph.interval);
}

aph = {
  globalInfo: undefined,
  maxAph: { time: 0, value: 0 },

  interval: setInterval(function() {
    // Wait until #global-info exists, then set to a monospace font
    if (!aph.globalInfo) {
      if (aph.globalInfo = document.getElementById('global-info')) {
        aph.globalInfo.style.fontFamily = 'Consolas';
      } else {
        return;
      }
    }
    
    var htmlSegments = [];
    
    var time = Date.now() - game.history.prestiges.ascension[0];
    time = Math.round(time / 1000) * 1000; // Round to the nearest second
    var timeString = formattingUtils.duration(time);
    
    var ap = game.getUnclaimedAP().toNumber();
    var avgAph = (ap / time * 3600) || 0;
    
    if (time < aph.maxAph.time || avgAph >= aph.maxAph.value) {
      aph.maxAph.time = time;
      aph.maxAph.value = avgAph;
    }

    var percent = Math.round(100 * avgAph / aph.maxAph.value) || 0;
    percent = Math.min(percent, 99); // Cap at 99% to reduce width changes
    
    var timeDiff = time - aph.maxAph.time;
    var timeDiffString = (timeDiff === 0) ? '+0s' :
                                            `+${formattingUtils.duration(timeDiff, 0)}`;

    var timeColor = (timeDiff <= 15000) ? "green" :
                    (timeDiff <= 30000) ? "yellow" :
                                          "red";
    var percColor = (percent >= 85) ? "green" :
                    (percent >= 70) ? "yellow" :
                                      "red";
                                      
    htmlSegments.push(`Time: ${timeString} (<span style="color:${timeColor}">${timeDiffString}</span>)`);
    htmlSegments.push(`AP/h: ${avgAph.toFixed(2)}k (<span style="color:${percColor}">${percent}%</span>)`);

    if (!aphConfig.hideSpeed) {
      var speed = game.getSpeedMultiplier();
      var speedString = (speed < 10)  ? speed.toFixed(2) :
                        (speed < 100) ? speed.toFixed(1) :
                                        formattingUtils.number(speed, 0);
      htmlSegments.push(`Speed: x${speedString}`);
    }

    aph.globalInfo.innerHTML = htmlSegments.join(' | ');
  }, 100) // Repeat every 100ms
};

})();
