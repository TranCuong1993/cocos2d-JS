/**
 * Created by Black3rry on 11/23/16.
 */

var BackgroundLayer = cc.Layer.extend({
    //sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;

        /*var visiableSize = cc.Director._getInstance().getVisibleSize();

        var all_bkg = new cc.Sprite(res.im_all_bkg);
        all_bkg.setScaleX(visiableSize.width / all_bkg.getContentSize().width);
        all_bkg.setScaleY(visiableSize.height / all_bkg.getContentSize().height);
        all_bkg.setPosition(cc.p(visiableSize.width/2 , visiableSize.height/2));
        this.addChild(all_bkg);*/

        var sprite = new cc.Sprite(res.im_item_bkg);

        var rows = parseInt(size.width / sprite.getContentSize().width) +2;
        var cols = parseInt(size.height / sprite.getContentSize().height) +2;
        cc.log("rows " + rows + "colums " + cols);
        for (var i = 0; i<rows; i++) {
            for (var j = 0; j < cols; j++) {
                var itemBackground = new cc.Sprite(res.im_item_bkg);
                itemBackground.setPosition(cc.p(i*itemBackground.getContentSize().width,
                    j*itemBackground.getContentSize().height));
                this.addChild(itemBackground);
            }
        }

        /*var layer1 = new cc.LayerColor(cc.color(1,1,1,255));
         layer1.setContentSize(cc.size(100,100));
         layer1.setPosition(cc.p(size.width - layer1.getContentSize().width,
         size.height - layer1.getContentSize().height));
         this.addChild(layer1);*/

        return true;
    }
});