EmpApp.controller('emp.Controller',  ['$scope', '$http', 'record', function($scope, $http) {
	$scope.register = function () {
		$scope.datas = {};
		$scope.datas.id = $scope.id;
			$scope.datas.name = $scope.name;
			$scope.datas.salary = $scope.salary;
			$scope.datas.address = $scope.address;
			$scope.insertEmp($scope.datas);
		}
		$scope.register = function () {
		$scope.update = {};
		$scope.update.id = $scope.id;
			$scope.updateEmp($scope.datas);
		}
		$scope.register = function () {
		$scope.delete = {};
		$scope.delete.id = $scope.id;
			$scope.deleteEmp($scope.delete);
		}
	}