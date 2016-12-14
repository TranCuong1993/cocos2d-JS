var INITIALIZED = false;
var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var popup = new PopupLayer();
        this.addChild(popup);

        var login = new LoginSceneLayer();
        this.addChild(login);

        var intro

}});

