(function() {

    'use strict';

    angular.module('MainCtrl', []).controller('MainCtrl', ['$rootScope', '$scope', '$log',
        function($rootScope, $scope, $log) {
            var ctrl = this;

            ctrl.speed = 700;
            ctrl.mainViewStyle = 'anim-fade';
            // ctrl.page1Style = 'anim-zoom-out';
            // ctrl.page2Style = 'anim-slide-below-fade';

            // $rootScope.$on('animStart', function() {
            //     $log.log('animStart');
            // });

            // $rootScope.$on('animEnd', function() {
            //     $log.log('animEnd');
            // });
        }
    ]);

    angular.module('ExampleApp', ['ngAnimate', 'ui.router', 'anim-in-out', 'MainCtrl'])
        .config(['$stateProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider',
            function($stateProvider, $locationProvider, $urlMatcherFactoryProvider, $urlRouterProvider) {

                // $locationProvider.html5Mode(true);

                // Allow trailing slashes
                $urlMatcherFactoryProvider.strictMode(false);

                $urlRouterProvider.otherwise('home');

                $stateProvider.state('login', {

                    url: '/login',
                    views: {
                        main: {
                            templateUrl: './app/views/auth/login.view.html'
                        }
                    }
                });

                $stateProvider.state('register', {
                    url: '/register',
                    views: {
                        main: {

                            templateUrl: './app/views/auth/register.view.html'
                        }
                    }
                });

                $stateProvider.state('home', {
                    url: '/home',
                    views: {
                        main: {
                            templateUrl: './app/views/dashboard/dashboard.view.html'
                        }
                    }
                });

            }
        ]);

})();