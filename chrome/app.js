console.log('app.js');

angular.module('yahooTest', [])

.controller('yahooTestController', function($scope) {
  $scope.text = 'hello from angular';
})

.directive('yahoo', function() {
  var url = chrome.extension.getURL('app.html');
  return {
    templateUrl: url
    //template: '{{text}}'
  };
});
