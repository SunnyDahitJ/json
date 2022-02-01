angular.module("roaster", [])
.controller("roaster_ctrl",function($scope)
{
    var roaster_list=[
        {emp_id:201102,dept_name:"frontdesk" ,emp_name:"Panda Panda" ,assign_date:new Date("January 13,2022"), age:32, salary:32000},
        {emp_id:201103,dept_name:"wards" ,emp_name:"Sony TV" ,assign_date:new Date("January 15,2022"), age:25, salary:25000},
        {emp_id:201104,dept_name:"Laboratory" ,emp_name:"Rohit" ,assign_date:new Date("December 13,2021"), age:21, salary:41000},
        {emp_id:201105,dept_name:"Operation theater" ,emp_name:"Iron man" ,assign_date:new Date("January 11,2022"), age:27, salary:25000},
        {emp_id:201106,dept_name:"Rehabilitation" ,emp_name:"Rakul" ,assign_date:new Date("April 08,2021"), age:25, salary:35000},
        {emp_id:201107,dept_name:"Medical record" ,emp_name:"Sean" ,assign_date:new Date("January 24,2022"), age:21, salary:34000},
        {emp_id:201108,dept_name:"Administration" ,emp_name:"Brad pit" ,assign_date:new Date("January 30,2022"), age:54, salary:50000},
        {emp_id:201109,dept_name:"Accounts" ,emp_name:"DJ Snake" ,assign_date:new Date("January 13,2022"), age:22, salary:32000}
    ];
    $scope.roaster_list=roaster_list;  
});
