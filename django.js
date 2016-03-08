var app = angular.module('django', []);

app.controller('DjangoController', function (){

  this.ObjectArray=[{name:"Rob",sex:"M",year:1961},
                    {name:"Matthew",sex:"M",year:1988},
                    {name:"Madelaine",sex:"F",year:1991},
                    {name:"Eliza",sex:"F",year:1995}];
});
