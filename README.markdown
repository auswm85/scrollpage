Scrollpage
===================

Tired of straining your wrist manually scrolling back to the top of a long page? Well scrollpage.js is a
simple javascript bookmarklet that when injected into a page creates a "scroll to top" button. 
Save your wrist inject this!

Usage
=====

To create a bookmarklet that injects this script into a page add the following into the href attribute of an anchor tag:

```javascript
javascript:(function()_s=document.createElement('script');_s.type='text/javascript';_s.src='[url to script]';document.getElementsByTagName('head')[0].appendChild(_s);})();
```

Then drag into your bookmarks on your favorite browser, click and enjoy.