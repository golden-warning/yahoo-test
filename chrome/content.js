console.log('content.js');

// // insert directive
// var wrapper = document.createElement('div');
// wrapper.setAttribute('ng-app', 'yahooTest');
// wrapper.setAttribute('ng-controller', 'yahooTestController');
//
// var directive = document.createElement('div');
// directive.setAttribute('yahoo', '');
// wrapper.appendChild(directive);
// document.body.appendChild(wrapper);

// Insert iframe with content from popup.html
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL("popup.html");
iframe.align = 'right';
iframe.width = '300';
iframe.height = '100%';
iframe.style.position = "absolute";
iframe.style.top = '0px';
iframe.style.right = '0px';
iframe.style.zIndex = '10000000000';
iframe.style.backgroundColor = 'white';
document.body.appendChild(iframe);


// Find data from yahoo page
//var data = document.querySelector("em").innerText;



// Send data to app
setInterval(function() {
  var data = document.querySelector('input').value;
  console.log(data);
  var w = document.querySelector('iframe').contentWindow;
  w.postMessage({data: data}, '*');
}, 2000);

// chrome.runtime.sendMessage({data: data}, function(response) {
//   console.log(response.response);
// });
