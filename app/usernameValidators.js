"use strict";
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "mosh") {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    };
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') > 0) {
            return { cannotContainSpace: true }; //can return object
        }
        return null; //passes validation
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=usernameValidators.js.map