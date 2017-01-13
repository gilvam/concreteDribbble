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

  $scope.page = null;
  $scope.per_page = 12;
  $scope.loadingMore = true;
  $scope.isloaded = false;

  $scope.loadingShots = function(){
    console.log('loading');
    $scope.page = $scope.page !== null ? $scope.page + 1 : 0;
    $scope.shots = $scope.shots || [];

    Dribbble.shots({page: $scope.page ,per_page: $scope.per_page, access_token: $scope.auth.clientAccessToken}, function(data){
      if(data && data.length){
        angular.forEach(data, function(shot){
          //adiciona booleano de visualizacao dos detalhes de um shot
          shot.isDetails = false;
          //adiciona imagem de avatar pequeno
          shot.user.avatar_url_mini = angular.copy(shot.user.avatar_url).toString().replace(/\/normal/gi, '/mini');
          $scope.shots.push(shot);
        });
      }
      else{
        $scope.loadingMore = false;
      }
    });
  };
  $scope.loadingShots();


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
