(function() {

    var mainCtrl = function($scope, Items, Layouts, $routeParams, $location) {
        // $scope.animate = true;

        $scope.add_item_error = "";
        $scope.add_item = {};
        $scope.notes = [];
        $scope.now = new Date();
        $scope.categories = ['Разработка', 'Мини-авто', 'Спецтехника'];
        Items.get().then(function(data) {
            $scope.categories.items = data;
        });

        // layouts

        $scope.topnavbar = 'navbar-default';
        $scope.layout = 'united';
        $scope.setlayout = function(val) {
            $scope.layout = val
        };

        Layouts.get().then(function(data) {
            $scope.layouts = data;
        });

        //  menu-category

        $scope.currentCategory = $scope.categories[0];
        $scope.setCurrentCategory = function(category) {
            $scope.currentCategory = category;
        };
        $scope.isCurrentCategory = function(category) {
            return $scope.currentCategory === category;
        };
        $scope.addCategory = function(new_category) {
            $scope.categories.push(new_category);
            $scope.add_cat = [];
        };

        // push img path

        //$routeParams.imgAdd = [];
        $scope.imgArr = [];
        $scope.img = function(item) {
            $scope.imgArr.push(item);
            // $routeParams.imgAddReset()
            for (i = 0; i < $routeParams.imgAdd.length; i++) {
                if (item === $routeParams.imgAdd[i]) {
                    $routeParams.imgAdd.splice(i, 1);
                    break;
                }
            }
            // alert($scope.imgArr);
            //  alert("REST...." + $routeParams.imgAdd)
        };

        // push All img path

        $scope.imgAll = function() {
            for (var i = 0; i < $routeParams.imgAdd.length; i++) {
                $scope.imgArr.push($routeParams.imgAdd[i])
            };
            $routeParams.imgAddReset();
            // alert($scope.imgArr);
        };

        // rem img path

        $scope.remImg = function(progress, item) {
            if (progress === 100) {
                for (i = 0; i < $scope.imgArr.length; i++) {
                    if ($scope.imgArr[i] === item) {
                        $scope.imgArr.splice(i, 1);
                        break;
                    };
                };
            }
            for (i = 0; i < $routeParams.imgAdd.length; i++) {
                if (item === $routeParams.imgAdd[i]) {
                    $routeParams.imgAdd.splice(i, 1);
                    break;
                }
            };
            // alert($scope.imgArr);
            // alert("REST...." + $routeParams.imgAdd)
        };

        // reset all img path

        $scope.resetAllimg = function() { $scope.imgArr = [] };

        // reset img from dupl

        $scope.checkImg = function(imgLength) {
            if (imgLength < 1) {
                $routeParams.imgAddReset();
                $scope.resetAllimg();
            };
        };

        // reset form

        $scope.resetForm = function() {
            $routeParams.imgAdd = $scope.imgArr = [];
            $scope.add_item = {};
            $scope.add_item_error = "";
        };

        // add item 

        $scope.addItem = function(new_item) {
            if (!new_item.title)
                $scope.add_item_error = "Введите название";
            else if (!new_item.description)
                $scope.add_item_error = "Введите текст";
            else if ($scope.imgArr == "")
                $scope.add_item_error = "Добавьте изображение";
            else {
                $scope.add_item.id = $scope.categories.items.length + 1;
                $scope.add_item.img = $scope.imgArr;
                $scope.categories.items.push(new_item);
                $scope.resetForm();
                $routeParams.resetAllimg();
            };

            //show items

            // $scope.showMy = function() {
            //     alert(JSON.stringify($scope.categories.items));
            // };
        };

        // add note

        $scope.addNote = function(title, id) {
            var check = {};
            for (var i = 0; i < $scope.notes.length; i++) {
                if ($scope.notes[i].id == id) check = false;
            };
            if (check !== false) {
                $scope.notes.push({ 'title': title, 'id': id });
                alert("Заметка '" + title + "' добавлена");
            };
        };

    };



    app.controller('mainCtrl', mainCtrl);

    // get Date 

    app.filter('filterDate', function() {
        return function(date) {
            return moment(date).locale('ru').format('LLLL');
        };
    });

})();
