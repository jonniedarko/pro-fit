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
	        title: "I train once a week"
	        ,description: "(1)"
	        ,value: 11
	    }
	    ,{
	        title: "I train twice a week"
	        ,description: "(2)"
	        ,value: 12
	    }
	    ,{
	        title: "I train three a week"
	        ,description: "(3)"
	        ,value: 13
	    }
	    ,{
	        title: "I train four times a week"
	        ,description: "(4)"
	        ,value: 14
	    }
	    ,{
	        title: "I train five or more times a week"
	        ,description: " (5+)"
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
