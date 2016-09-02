'use strict';


app.controller('uplCtrl', ['$scope', 'FileUploader', '$routeParams', function($scope, FileUploader, $routeParams, $location) {
    var uploader = $scope.uploader = new FileUploader({
        url: 'upload.php'
    });

    // my FORM
    $scope.imgAdd = [];
    $scope.imgAddReset = $routeParams.imgAddReset;
    $routeParams.imgAddReset = function() {
        $routeParams.imgAdd = $scope.imgAdd = [];
    }


    $routeParams.resetAllimg = function() {
        $scope.uploader.progress = 0;
        $scope.uploader.queue = []
    }

    // FILTERS

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/ , options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    // CALLBACKS

    // uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/ , filter, options) {
    //     console.info('onWhenAddingFileFailed', item, filter, options);
    // };
    // uploader.onAfterAddingFile = function(fileItem) {
    //     console.info('onAfterAddingFile', fileItem);
    // };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
        // alert(addedFileItems[0].file.name); 
        for (var i = 0; i < addedFileItems.length; i++) {
            $scope.imgAdd.push(addedFileItems[i].file.name)
        };
        $routeParams.imgAdd = $scope.imgAdd;
    };
    // uploader.onBeforeUploadItem = function(item) {
    //     console.info('onBeforeUploadItem', item);
    // };
    // uploader.onProgressItem = function(fileItem, progress) {
    //     console.info('onProgressItem', fileItem, progress);
    // };
    // uploader.onProgressAll = function(progress) {
    //     console.info('onProgressAll', progress);
    // };
    // uploader.onSuccessItem = function(fileItem, response, status, headers) {
    //     console.info('onSuccessItem', fileItem, response, status, headers);
    // };
    // uploader.onErrorItem = function(fileItem, response, status, headers) {
    //     console.info('onErrorItem', fileItem, response, status, headers);
    // };
    // uploader.onCancelItem = function(fileItem, response, status, headers) {
    //     console.info('onCancelItem', fileItem, response, status, headers);
    // };
    // uploader.onCompleteItem = function(fileItem, response, status, headers) {
    //     console.info('onCompleteItem', fileItem, response, status, headers);
    // };
    // uploader.onCompleteAll = function() {
    //     console.info('onCompleteAll');
    // };

    console.info('uploader', uploader);

}]);
