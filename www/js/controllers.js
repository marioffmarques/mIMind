angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $log, InicialImages) {
  $scope.mainImages = InicialImages.all();
  $log.debug($scope.mainImages);
})





.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('TestCtrl', function($scope, Test){
    $scope.test = 'Ola';
    $scope.Tests = Test.get(1);
  });
