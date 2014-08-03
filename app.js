var app = angular.module('ngMacro', []);
app.controller('macroCtrl', function ($scope){
	$scope.gym = "Pro Fitness"
    $scope.user = { };

    $scope.goals = {
	   /* current: {
	        title:"Mainteance"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
	    }
	    ,
	    */loss: {
	        title:"Fat Loss"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
	    }
	   /* ,gain:{
	        title:"Muscle Gain"
	        ,calories: 0
	        ,protein: 0




	        if you have a relatively active job (think postman, bin/garbage man, etc.) or 
	        you have a sedentary job but train in ProFitness Gym Fat Ladies Loss Groups 2 to 3 times per week
	        ,fats: 0
	        ,carbs:0
	    }*/
	};

	$scope.activityLevels = [{
	        title: "1"
	        ,description: ""
	        ,value: 11
	    }
	    ,{
	        title: "2"
	        ,description: ""
	        ,value: 12
	    }
	    ,{
	        title: "3"
	        ,description: ""
	        ,value: 13
	    }
	    ,{
	        title: "4"
	        ,description: ""
	        ,value: 14
	    }
	    ,{
	        title: "5"
	        ,description: ""
	        ,value: 15
	    }
	];


	$scope.updateNutrition=function(){
		console.log('updateNutrition')
	    if( $scope.user.weight>0 && $scope.user.activityLevel>0 ){


	    	console.log('weight', $scope.user.weight);
	    	console.log('activityLevel', $scope.user.activityLevel);
	        $scope.goals.loss.calories = parseFloat($scope.user.weight * parseFloat($scope.user.activityLevel)) || 0;

	        $scope.goals.loss.protein = parseFloat($scope.user.weight*0.9 )|| 0;
 
	        $scope.goals.loss.fats = parseFloat($scope.user.weight*0.4) || 0;

	        $scope.goals.loss.carbs = ($scope.goals.loss.calories -( ($scope.goals.loss.protein * 4) + ($scope.goals.loss.fats * 9) ) )|| 0;

	    }
	}

	$scope.getName = function(){
            if($scope.user.name===undefined || $scope.user.name==="")
                return "";

            return $scope.user.name+"'s";
        }

});
