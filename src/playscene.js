var INITIALIZED = false;
var PlayScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var play = new PlaySceneLayer();
        this.addChild(play);

        var intro

}});

var PlaySceneLayer = cc.Layer.extend({
    ctor: function () {
        // 1. super init first
        this._super();

        var size = cc.winSize;

        var txt_game_name = new cc.Sprite(res.img_title_room_play);
        txt_game_name.setPosition(cc.p(size.width / 2 - txt_game_name.getContentSize().width / 2,
            size.height - txt_game_name.getContentSize().height - 12));
        this.addChild(txt_game_name);

        var sprite_sao_trai = new cc.Sprite(res.TABLE_IC_SAO);
        sprite_sao_trai.setAnchorPoint(cc.p(0, 0))
        sprite_sao_trai.setPosition(cc.p(size.width /2 - txt_game_name.getContentSize().width / 2 - 12,
            size.height / 2 - txt_game_name.getContentSize().height / 2 - 12));
        this.addChild(sprite_sao_trai);

        var sprite_sao_phai = new cc.Sprite(res.TABLE_IC_SAO);
        sprite_sao_phai.setFlippedX(true);
        sprite_sao_phai.setAnchorPoint(cc.p(0, 0));
        sprite_sao_phai.setPosition(cc.p(size.width / 2 + txt_game_name.getContentSize().width / 2 + 12 + sprite_sao_phai.getContentSize().width,
            size.height - txt_game_name.getContentSize().height / 2 - 12));
        this.addChild(sprite_sao_phai);

        //ban choi
        var scrollBkg = new cc.Sprite(res.TABLE_BG_PHONGCHO);
        scrollBkg.setContentSize(cc.size(1080, 720));
        scrollBkg.setPosition(cc.p(15, size.height /2));
        this.addChild(scrollBkg);

        var bg_lst_table = new cc.Sprite(res.TABLE_BG_LST_TABLE);
        bg_lst_table.setContentSize(cc.size(1050, 700));
        bg_lst_table.setPosition(cc.p(15 + (size.width - bg_lst_table.getContentSize().width) / 2, 700));
        this.addChild(bg_lst_table);

        var hightTable = bg_lst_table.getContentSize().height - 0.76 * bg_lst_table.getContentSize().height / 6;

        var tableView = new cc.TableView(this, cc.size(bg_lst_table.getContentSize().width, hightTable));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
        tableView.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN);
        tableVie.setDelegate(this);
        tableView.setBounceable(true);
        tableView.setPosition(cc.p(15 + (size.width - bg_lst_table.getContentSize().width) / 2, 700));

        this.addChild(tableView);
    }
});

