var UserSetterAndGetter = /** @class */ (function () {
    function UserSetterAndGetter() {
        this._login = '';
        this.password = '';
    }
    Object.defineProperty(UserSetterAndGetter.prototype, "login", {
        set: function (l) {
            this._login = "user-".concat(l);
        },
        enumerable: false,
        configurable: true
    });
    return UserSetterAndGetter;
}());
var userSetter = new UserSetterAndGetter();
userSetter._login = 'new login';
console.log(userSetter._login);
