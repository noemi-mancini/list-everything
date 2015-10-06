(function(){
  var app = angular.module('listEverything', []);
  
  app.controller('ListController', function(){
    this.callToAction = "Add an item to the list";
    
    this.list = listItems;

    this.addItem = function(index){
        this.list.push(this.item);
        this.item = "";
    }
  });

  var listItems = [];
    
  })();