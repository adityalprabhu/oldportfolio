/**
 * Created by prabhadi on 04-May-15.
 */
app.directive('triggerFocusOn', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $timeout(function() {
                    var otherElement = document.querySelector('#' + attrs.triggerFocusOn);

                    if (otherElement) {
                        otherElement.focus();
                    }
                    else {
                        console.log("Can't find element: " + attrs.triggerFocusOn);
                    }
                });
            });
        }
    };
});