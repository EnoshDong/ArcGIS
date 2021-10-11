define(["require", "exports", "tslib", "esri/core/accessorSupport/decorators", "esri/widgets/support/widget", "esri/widgets/Widget"], function (require, exports, tslib_1, decorators_1, widget_1, Widget) {
    "use strict";
    var CSS = {
        base: "esri-hello-world",
        emphasis: "esri-hello-world--emphasis"
    };
    var HelloWorld = /** @class */ (function (_super) {
        tslib_1.__extends(HelloWorld, _super);
        function HelloWorld(params) {
            var _this = _super.call(this, params) || this;
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  firstName
            //----------------------------------
            _this.firstName = "John";
            //----------------------------------
            //  lastName
            //----------------------------------
            _this.lastName = "Smith";
            //----------------------------------
            //  emphasized
            //----------------------------------
            _this.emphasized = false;
            //----------------------------------
            //  messages
            //----------------------------------
            _this.messages = null;
            return _this;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        HelloWorld.prototype.render = function () {
            var _a;
            var greeting = this._getGreeting();
            var classes = (_a = {},
                _a[CSS.emphasis] = this.emphasized,
                _a);
            return (widget_1.tsx("div", { class: this.classes(CSS.base, classes) }, greeting));
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        HelloWorld.prototype._getGreeting = function () {
            return this.messages.greeting + " " + this.firstName + " " + this.lastName + "!";
        };
        tslib_1.__decorate([
            decorators_1.property()
        ], HelloWorld.prototype, "firstName", void 0);
        tslib_1.__decorate([
            decorators_1.property()
        ], HelloWorld.prototype, "lastName", void 0);
        tslib_1.__decorate([
            decorators_1.property()
        ], HelloWorld.prototype, "emphasized", void 0);
        tslib_1.__decorate([
            decorators_1.property(),
            widget_1.messageBundle("widgets-custom-widget/assets/t9n/widget")
        ], HelloWorld.prototype, "messages", void 0);
        HelloWorld = tslib_1.__decorate([
            decorators_1.subclass("esri.widgets.HelloWorld")
        ], HelloWorld);
        return HelloWorld;
    }(Widget));
    return HelloWorld;
});