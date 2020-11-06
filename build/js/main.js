"use strict";

window.onload = function () {
  var headings = document.querySelectorAll('.heading-bd');
  var style = '';

  for (var i = 0; i < headings.length; i++) {
    headings[i].classList.add('heading-bd--' + i);
    style += ".heading-bd--".concat(i, "::before{background-color: rgb(").concat(Math.round(randomInteger(190, 220)), ",").concat(Math.round(randomInteger(220, 250)), ",").concat(Math.round(randomInteger(190, 220)), ");transform: rotate(").concat(randomInteger(-2, 2), "deg)}");
  }

  var styleTag = document.createElement('style');
  styleTag.innerHTML = style;
  document.head.appendChild(styleTag);

  function randomInteger(min, max) {
    return min - 0.5 + Math.random() * (max - min + 1); // return Math.round(rand);
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiaGVhZGluZ3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImkiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJNYXRoIiwicm91bmQiLCJyYW5kb21JbnRlZ2VyIiwic3R5bGVUYWciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaGVhZCIsImFwcGVuZENoaWxkIiwibWluIiwibWF4IiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFBLENBQUFDLE1BQUEsR0FBQSxZQUFBO0FBQ0EsTUFBQUMsUUFBQSxHQUFBQyxRQUFBLENBQUFDLGdCQUFBLENBQUEsYUFBQSxDQUFBO0FBQ0EsTUFBQUMsS0FBQSxHQUFBLEVBQUE7O0FBRUEsT0FBQSxJQUFBQyxDQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBLEdBQUFKLFFBQUEsQ0FBQUssTUFBQSxFQUFBRCxDQUFBLEVBQUEsRUFBQTtBQUNBSixJQUFBQSxRQUFBLENBQUFJLENBQUEsQ0FBQSxDQUFBRSxTQUFBLENBQUFDLEdBQUEsQ0FBQSxpQkFBQUgsQ0FBQTtBQUVBRCxJQUFBQSxLQUFBLDJCQUFBQyxDQUFBLDRDQUFBSSxJQUFBLENBQUFDLEtBQUEsQ0FBQUMsYUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQSxjQUFBRixJQUFBLENBQUFDLEtBQUEsQ0FBQUMsYUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQSxjQUFBRixJQUFBLENBQUFDLEtBQUEsQ0FBQUMsYUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQSxpQ0FBQUEsYUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxVQUFBO0FBQ0E7O0FBRUEsTUFBQUMsUUFBQSxHQUFBVixRQUFBLENBQUFXLGFBQUEsQ0FBQSxPQUFBLENBQUE7QUFDQUQsRUFBQUEsUUFBQSxDQUFBRSxTQUFBLEdBQUFWLEtBQUE7QUFDQUYsRUFBQUEsUUFBQSxDQUFBYSxJQUFBLENBQUFDLFdBQUEsQ0FBQUosUUFBQTs7QUFFQSxXQUFBRCxhQUFBLENBQUFNLEdBQUEsRUFBQUMsR0FBQSxFQUFBO0FBQ0EsV0FBQUQsR0FBQSxHQUFBLEdBQUEsR0FBQVIsSUFBQSxDQUFBVSxNQUFBLE1BQUFELEdBQUEsR0FBQUQsR0FBQSxHQUFBLENBQUEsQ0FBQSxDQURBLENBRUE7QUFDQTtBQUNBLENBbEJBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRpbmctYmQnKTtcclxuICAgIGxldCBzdHlsZSA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBoZWFkaW5nc1tpXS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nLWJkLS0nICsgaSk7XHJcblxyXG4gICAgICAgIHN0eWxlICs9IGAuaGVhZGluZy1iZC0tJHtpfTo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6IHJnYigke01hdGgucm91bmQocmFuZG9tSW50ZWdlcigxOTAsIDIyMCkpfSwke01hdGgucm91bmQocmFuZG9tSW50ZWdlcigyMjAsIDI1MCkpfSwke01hdGgucm91bmQocmFuZG9tSW50ZWdlcigxOTAsIDIyMCkpfSk7dHJhbnNmb3JtOiByb3RhdGUoJHtyYW5kb21JbnRlZ2VyKC0yLCAyKX1kZWcpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgIHN0eWxlVGFnLmlubmVySFRNTCA9IHN0eWxlO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBtaW4gLSAwLjUgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xyXG4gICAgICAgIC8vIHJldHVybiBNYXRoLnJvdW5kKHJhbmQpO1xyXG4gICAgICB9XHJcbn07Il19
