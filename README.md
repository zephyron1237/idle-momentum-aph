# Idle Momentum AP/h Tracker
## Description
A mod for Idle Momentum that tracks AP/h and displays how relatively far you are from the most recent peak.
## Usage
### Option 1: Bookmarklet
🛈 This is a bookmark that you must load each time you run the game.

🔨 To install, create a new bookmark, and copy this into the URL box:
```
javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://zephyron1237.github.io/idle-momentum-aph/aph.user.js';})();
```

### Option 2: TamperMonkey
🛈 [TamperMonkey](https://www.tampermonkey.net/) is a popular plugin on most browsers that allows you to install scripts.

🛈 Using this will **automatically run** the script whenever you start the game, instead of having to manually open the bookmarklet.

🔨 Follow the browser-specific instructions at [TamperMonkey.net](https://www.tampermonkey.net/) to download/install the plugin.

🔨 After installing the plugin, open the script [here](https://github.com/zephyron1237/idle-momentum-aph/raw/master/aph.user.js) (or [view the code](https://github.com/zephyron1237/idle-momentum-aph/blob/master/aph.user.js) and click "Raw").  Then on the TamperMonkey confirmation screen, click "Install."

### Advanced Option: Run it yourself
🛈 If you want to modify the script, you can just copy-paste your version into the Javascript console, create a non-dynamic bookmarklet/TamperMonkey, or set up a fork to mimic the other options.  If you have any good ideas, they might be useful enough to send a pull request. :)

## Alternate Versions
🛈 There is an alternate version of the mod that does not display the Speed (only Time and AP/h).

🔨 You can use this in any method above by replacing any "aph.user.js" URL with "[aph-nospeed.user.js](https://zephyron1237.github.io/idle-momentum-aph/aph-nospeed.user.js)"

## Contributing
I welcome any feedback, bug reports, or pull requests.  I am reachable on Discord as Zephyron#2300.

## Thanks
Major thanks to LazyBanana, who wrote the original version.  Thanks to Zarthos01 who wrote his own version and contributed improvements.  And thanks to Type-Ten for developing the game!