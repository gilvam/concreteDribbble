'use strict';

/**
 * @ngdoc function
 * @name concreteDribbbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concreteDribbbleApp
 */
angular.module('concreteDribbbleApp').controller('MainCtrl',['$scope', '$routeParams', 'Dribbble', function ($scope, $routeParams, Dribbble) {

  //detalhe de um shot ativo
  $scope.isDetails = false;
  //ultimo detalhe de um shot ativo
  var isDetailsOld = null;

  $scope.page = 0;
  $scope.per_page = 4;

  Dribbble.shots({page: $scope.page ,per_page: $scope.per_page, access_token: $scope.auth.clientAccessToken}, function(data){
    $scope.shots = data;
    $scope.shots.map(function(shot){
      //adiciona booleano de visualizacao dos detalhes de um shot
      shot.isDetails = false;
      //adiciona imagem de avatar pequeno
      shot.user.avatar_url_mini = angular.copy(shot.user.avatar_url).toString().replace(/\/normal/gi, '/mini');
      return shot;
    });
  });

  //ativar desativar detalhes de um shot
  $scope.seeDetails = function(index){
    //ativa ou desativa novo shot
    $scope.shots[index].isDetails = !$scope.shots[index].isDetails;

    //desativa shot anterior se o mesmo shot nao receber um segundo clique
    if(isDetailsOld !== null && isDetailsOld !== index){
      $scope.shots[isDetailsOld].isDetails = false;
    }
    //guarda shot recente
    isDetailsOld = index;
  };



}]);
