/**
 * Created by prabhadi on 05-Aug-15.
 */


app.factory('httpRequestInterceptor',
    ['$localStorage', function($localStorage)
    {
        return {
            request: function($config) {
                if( $localStorage.accessToken )
                {
                    $config.headers['Authorization'] = 'bearer '+ $localStorage.accessToken;
                }
                return $config;
            }
        };
    }]);