console.log('app.js');

angular.module('yahooTest', [])

.controller('yahooTestController', function($scope) {
  $scope.text = 'hello from angular';

  // Listen for messages from content.js
  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(event) {
    console.log("message received!");
    console.log(event.data);
    $scope.text = event.data.data;
    console.log($scope.text);
    $scope.$apply();
  }
})

.directive('yahoo', function() {
  var url = chrome.extension.getURL('app.html');
  return {
    //templateUrl: url
    template: '{{text}}'
  };
});
