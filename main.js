/**
 * A brief explanation for "project.json":
 * Here is the content of project.json file, this is the global configuration for your game, you can modify it to customize some behavior.
 * The detail of each field is under it.
 {
    "project_type": "javascript",
    // "project_type" indicate the program language of your project, you can ignore this field

    "debugMode"     : 1,
    // "debugMode" possible values :
    //      0 - No message will be printed.
    //      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
    //      2 - cc.error, cc.assert, cc.warn will print in console.
    //      3 - cc.error, cc.assert will print in console.
    //      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
    //      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
    //      6 - cc.error, cc.assert will print on canvas, available only on web.

    "showFPS"       : true,
    // Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.

    "frameRate"     : 60,
    // "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.

    "noCache"       : false,
    // "noCache" set whether your resources will be loaded with a timestamp suffix in the url.
    // In this way, your resources will be force updated even if the browser holds a cache of it.
    // It's very useful for mobile browser debuging.

    "id"            : "gameCanvas",
    // "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.

    "renderMode"    : 0,
    // "renderMode" sets the renderer type, only useful on web :
    //      0 - Automatically chosen by engine
    //      1 - Forced to use canvas renderer
    //      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers

    "engineDir"     : "frameworks/cocos2d-html5/",
    // In debug mode, if you use the whole engine to develop your game, you should specify its relative path with "engineDir",
    // but if you are using a single engine file, you can ignore it.

    "modules"       : ["cocos2d"],
    // "modules" defines which modules you will need in your game, it's useful only on web,
    // using this can greatly reduce your game's resource size, and the cocos console tool can package your game with only the modules you set.
    // For details about modules definitions, you can refer to "../../frameworks/cocos2d-html5/modulesConfig.json".

    "jsList"        : [
    ]
    // "jsList" sets the list of js files in your game.
 }
 *
 */

cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);

    // Adjust viewport meta
    cc.view.adjustViewPort(true);

    // Uncomment the following line to set a fixed orientation for your game
    // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(1280,800, cc.ResolutionPolicy.SHOW_ALL);

    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);

    /*var AssetsManagerLoaderScene = cc.Scene.extend({
        _am: null,
        _progress: null,
        _percent: 0,
        run: function () {
            if (!cc.sys.isNative) {
                var that = this;

                //that.loadGame();

                //return;
            }

            var layer = new cc.Layer();
            this.addChild(layer);
            this._progress = new cc.LabelTTF("update 0%", "Arial", 12);
            this._progress.x = cc.winSize.width / 2;
            this._progress.y = cc.winSize.height / 2 + 50;
            layer.addChild(this._progress);

            var storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "./");

            this._am = new jsb.AssetsManager("res/project.manifest", storagePath);
            this._am.retain();

            if (!this._am.getLocalManifest().isLoaded())
            {
                cc.log("Fail to update assets, step skipped.");
                this.loadGame();
            }
            else
            {
                var that = this;
                var listener = new cc.EventListenerAssetsManager(this._am, function(event) {
                    switch (event.getEventCode()){
                        case cc.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                            that.loadGame();
                            break;
                        case cc.EventAssetsManager.UPDATE_PROGRESSION:
                            that._percent = event.getPercent();
                            break;
                        case cc.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                        case cc.EventAssetsManager.ERROR_PARSE_MANIFEST:
                            that.loadGame();
                            break;
                        case cc.EventAssetsManager.ALREADY_UP_TO_DATE:
                            that.loadGame();
                            break;
                        case cc.EventAssetsManager.UPDATE_FINISHED:
                            that.loadGame();
                            break;
                        case cc.EventAssetsManager.UPDATE_FAILED:
                            failCount++;
                            if (failCount < maxFailCount){
                                that._am.downloadFailedAssets();
                            } else{
                                failCount = 0;
                                that.loadGame();
                            }
                            break;
                        case cc.EventAssetsManager.ERROR_UPDATING:
                            that.loadGame();
                            break;
                        case cc.EventAssetsManager.ERROR_DECOMPRESS:
                            that.loadGame();
                            break;
                        default:
                            break;
                    }
                });

                cc.eventManager.addListener(listener, 1);
                this._am.update();
                cc.director.runScene(this);
            }

            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyReleased: function(keyCode, event) {
                    if (keyCode == cc.KEY.back) {
                        cc.director.end();
                    }
                }}, this);

            this.schedule(this.updateProgress, 0.5);
        },

        loadGame:function(){
            cc.loader.loadJs(["src/jsList.js"], function(){
                cc.loader.loadJs(jsList, function(){
                    cc.director.runScene(new GameScene());
                });
            });
        },

        updateProgress:function(dt){
            this._progress.string = "update " + this._percent + "%";
        },

        onExit:function(){
            cc.log("AssetsManager::onExit");

            this._am.release();
            this._super();
        }
    });

    var scene = new AssetsManagerLoaderScene();
    scene.run();*/

    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.loader.loadJs(["src/jsList.js"], function(){
            cc.loader.loadJs(jsList, function(){
                cc.director.runScene(new MenuScene());
            });
        });

    }, this);
};
cc.game.run();