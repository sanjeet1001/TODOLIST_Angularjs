
var app = angular.module('todoapp', ['ngMaterial','ngTable']);

app.controller('todoController',function($scope,NgTableParams,$filter){


var self = this;
$scope.data = [{tname: "Moroni", tassign: "Rahul", ldate:"26/10/2016", status:"incomplite"},
{tname: "Submit Assignment", tassign: "Hitesh", ldate:"04/10/2016", status:"complite"}
];
$scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
$scope.tenddate='';
$scope.df = "";

$scope.addEvent = function(){
	if($scope.name!="" && $scope.tassignee!="" && $scope.tenddate !=""){
		var df = $filter('date')($scope.tenddate, "dd/MM/yyyy"); 
	  	$scope.data.push({tname:$scope.name,tassign:$scope.tassignee,ldate:df,status:"incomplite"});
	  	$scope.name='';
		$scope.tassignee='';
		$scope.tenddate='';
		$scope.tableParams = new NgTableParams({}, { dataset: $scope.data});
	}
	else{
		alert("Enter Date");
	}
};

});