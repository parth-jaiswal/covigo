const covidURL = "https://api.covid19api.com/summary";
const blogURL = "./blogAPI";

let app = angular.module("MyApp",[]);

app.controller('MyCtrl',($scope , $http)=>{
    // this is controller
    $scope.countries = [];
    $http.get(covidURL)
    .then((response)=>{
      console.log(response);
      $scope.countries = response.data.Countries;
      $scope.all_data = response.data;
    },  (error)=>{
        console.log(error);
    })
});

app.controller('MyBlog', ($scope, $http) => {
  $http.get(blogURL).then((response)=>{
    console.log(response);
    $scope.blogs = response.data;
  })
})








