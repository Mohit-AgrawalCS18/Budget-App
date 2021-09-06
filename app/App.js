/*Budget App*/
var app=angular.module('myapp',[]);
app.controller('controller',["$scope",function($scope){
    $scope.data={
        Bill:''
    };
    $scope.Add=function(){
        if(!$scope.data.Bill){
            $scope.messageerror="Fill out of this filled *";
        }
        else{
        $scope.Budget=angular.copy($scope.data);
        }
    };
    $scope.Expenses=[];
    $scope.VALUE=[]
    $scope.text=''
    $scope.Addamount=function(Expenses){
        if(!$scope.Expenses.ExpenseTitle || !$scope.Expenses.ExpenseValue){
            $scope.message="Fill out of this filled *";
        }
        else{
            $scope.Expenses.push(
                {'ExpenseTitle':Expenses.ExpenseTitle,'ExpenseValue':Expenses.ExpenseValue});
            $scope.VALUE.push(this.Expenses.ExpenseValue);

        }
    }
    $scope.remove=function(x){
        $scope.Expenses.splice(x,1);
        $scope.total=$scope.total-$scope.VALUE.splice(x,1);
    }
}]);