(function(){

    angular.module('app').controller('MainController', MainController);

    MainController.$inject = ['$http'];

    function MainController($http) {
        var vm = this;

        vm.planetas = [];
        vm.pesquisar = pesquisar;
        

        function pesquisar(){
            $http({
                url: `https://swapi.co/api/planets/?search=${vm.planeta}`,
                method: 'GET'
            }).then(response =>{
                vm.planetas = response.data.results
            })
        }
    }
})();