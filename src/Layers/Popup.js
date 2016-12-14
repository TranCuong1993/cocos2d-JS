
var PopupLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
        cc.associateWithNative(this, cc.Layer);
    },
    init:function(){
        this._super();

        var size = cc.winSize;

        var background = new cc.LayerColor(cc.color(0,0,0,160));
        background.setContentSize(size);
        background.setOpacity(0);
        this.addChild(background);

        var touchListener = cc.EventListener.create({event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true, onTouchBegan: function (touch, event) {
                return true;
            }});
        cc.eventManager.addListener(touchListener, background);

        this.popupLayer = new cc.Layer();
        this.popupLayer.setPosition(cc.p(0, 0 - size.height * 1.5));
        this.addChild(this.popupLayer);

        this.backgroundPopup = new cc.Sprite(res.backgroungPopup);
        this.backgroundPopup.setPosition(cc.p(size.width / 2, size.height / 2));
        this.backgroundPopup.setScale(0.8);
        this.popupLayer.addChild(this.backgroundPopup);

          this.disablePopup = true;
        return true;
    },

    appear: function () {
        var touchListener = cc.EventListener.create({event: cc.EventListener.TOUCH_ONE_BY_ONE,
        swallowTouches: true, onTouchBegan: function (touch, event) {
            var target = event.getCurrentTarget();
            var locationInNode = target.convertToNodeSpace(touch.getLocation());
            var s = target.getContentSize();
            var rect = cc.rect(0, 0, s.width, s.height);

            if(cc.rectContainsPoint(rect, locationInNode)){
                var callDisappear = new cc.CallFunc(function () {
                    background.runAction(new cc.FadeTo(0.15, 0));
                    this.disablePopup = true;
                    this.removeAllProtectedChildrenWithCleanup(true);
                }, this);
                this.popupLayer.runAction(new cc.Sequence(new cc.MoveTo(0.15, cc.p(0, 0 - cc.winSize.height)), callDisappear));
                return true;
            }
            return false;
        }});
        cc.eventManager.addListener(touchListener, this.backgroundPopup);

        var callAppear = new cc.CallFunc(function () {
            background.runAction(new cc.FadeTo(0.15, 200));
            this.disablePopup = false;
        }, this);
        this.popupLayer.runAction(new cc.Sequence(new cc.MoveTo(0.15, cc.p(0, 0 + cc.winSize.height / 7)), callAppear));
    }
});
