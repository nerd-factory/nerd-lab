/* NERD LAB — three small things. No framework, no tracking, no dependencies. */

(function () {
  'use strict';

  var calm = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* 1. Autoplay the title sequence, muted — but never for people who asked for calm.
        Controls stay available either way, so this only ever adds motion, never removes
        the ability to start it. */
  var video = document.getElementById('brandvideo');
  if (video && !calm.matches) {
    var play = function () {
      var attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(function () { /* browser said no; the poster and controls are enough */ });
      }
    };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { play(); io.disconnect(); }
        });
      }, { threshold: 0.35 });
      io.observe(video);
    } else {
      play();
    }
  }

  /* 2. Pause it when the tab is not being looked at. Nobody needs a video looping
        into an empty room. */
  if (video) {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && !video.paused) { video.pause(); }
    });
  }

  /* 3. The console. */
  var mark = [
    '',
    '   ██████',
    '      ██████',
    '   ██████',
    ''
  ].join('\n');

  var volt = 'color:#C8F531;font-family:ui-monospace,Menlo,monospace;line-height:1.15';
  var plain = 'color:#9A9996;font-family:ui-monospace,Menlo,monospace';

  console.log('%c' + mark, volt);
  console.log('%cNERD LAB — unnecessarily clever. occasionally useful.', volt);
  console.log(
    '%cYou opened the console on a landing page. That is the whole entrance exam.\n' +
    'Everything here is open source: https://github.com/nerd-factory',
    plain
  );
}());
