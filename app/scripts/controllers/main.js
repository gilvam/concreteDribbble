'use strict';

/**
 * @ngdoc function
 * @name concreteDribbbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concreteDribbbleApp
 */
angular.module('concreteDribbbleApp').controller('MainCtrl',['$scope','$rootScope', 'Dribbble',
  function ($scope, $rootScope, Dribbble) {

    $scope.isDetails = false;   //detalhe de um shot ativo
    $scope.isDetailsOld = null; //ultimo detalhe de um shot ativo
    $scope.loadingMore = true;  //desativa botao carregar mais quando nao existe mais shots a serem carregados
    $scope.page = null;
    $scope.per_page = 12;

    /**
     * funcao que desativa shot anterior se o mesmo shot nao receber um segundo clique
     * @param index
     */
    $scope.disableShot = function(index){
      if($scope.isDetailsOld !== null && $scope.isDetailsOld !== index){
        $scope.shots[$scope.isDetailsOld].isDetails = false;
      }
    };

    /**
     * fucao que ativa ou desativar detalhes de um shot
     * @param index
     */
    $scope.seeDetails = function(index){
      //ativa ou desativa novo shot
      $scope.shots[index].isDetails = !$scope.shots[index].isDetails;
      $scope.disableShot(index);
      //guarda shot recente
      $scope.isDetailsOld = index;
    };

    /**
     * carrega os dados da API
     */
    $scope.loadingShots = function(){
      //desativa detalhes de um shot se existe um aberto
      $scope.disableShot(null);
      $rootScope.isloaded = false;
      $scope.page = $scope.page !== null ? $scope.page + 1 : 0;
      $scope.shots = $scope.shots || [];

      //service
      Dribbble.shots({page: $scope.page ,per_page: $scope.per_page, access_token: $scope.auth.clientAccessToken}, function(data){
        if(data && data.length){
          angular.forEach(data, function(shot){
            //adiciona booleano de visualizacao dos detalhes de um shot
            shot.isDetails = false;
            //adiciona imagem de avatar pequeno
            shot.user.avatar_url_mini = angular.copy(shot.user.avatar_url).toString().replace(/\/normal/gi, '/mini');
            //adiciona os shot por shot
            $scope.shots.push(shot);
          });
        }
        else{
          $scope.loadingMore = false;
        }
        $rootScope.isloaded = true;
      });
    };
    $scope.loadingShots();

  }]);
