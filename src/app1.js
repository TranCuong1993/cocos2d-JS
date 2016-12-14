var  INITILIZED1 = false;

var PhongChoLayer = cc.Layer.extend({
    ctor:function () {
        // 1. super init first
        this._super();

        var size = cc.winSize;

        var sprite = new cc.Sprite(res.background);
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite);

        var scrollView = new ccui.ScrollView();
        scrollView.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
        scrollView.setContentSize(cc.size(1280, 720));
        scrollView.setInnerContainerSize(cc.size(2560, 720));
        scrollView.setBackGroundColorOpacity(0);
        scrollView.setBounceEnabled(true);
        scrollView.setTouchEnabled(true);
        scrollView.setAnchorPoint(cc.p(0.5, 0.5));
        scrollView.setPosition(cc.p(size.width / 2, size.height/ 2));
        for (var i = 0; i < 12; i++){
            var gamephom = new ccui.Button(res.btn_phom)
            gamephom.setPosition(cc.p(gamephom.getContentSize().width *1.7,
                size.height - gamephom.getContentSize().height * 1.3));
            gamephom.addTouchEventListener(this.touchEvent, this);
            scrollView.addChild(gamephom);

            var gameTLMN = new ccui.Button(res.btn_tlmn)
            gameTLMN.setPosition(cc.p(gamephom.getContentSize().width *1.7,
                size.height - gamephom.getContentSize().height*2.3));
            gameTLMN.addTouchEventListener(this.touchEvent, this);
            scrollView.addChild(gameTLMN);

            var gamexocdia = new ccui.Button(res.btn_xocdia);
            gamexocdia.setPosition(cc.p(gamephom.getContentSize().width * 4,
                size.height - gamephom.getContentSize().height*2.3));
            gamexocdia.addTouchEventListener(this.touchEvent, this);
            scrollView.addChild(gamexocdia);

            var gamesam = new ccui.Button(res.btn_sam);
            gamesam.setPosition(cc.p(gamephom.getContentSize().width *2.9,
               size.height - gamephom.getContentSize().height*2.3));
            gamesam.addTouchEventListener(this.touchEvent, this);
            scrollView.addChild(gamesam);

            var gametala = new ccui.Button(res.btn_tala);
            gametala.setPosition(cc.p( gamephom.getContentSize().width * 4,
                size.height - gamephom.getContentSize().height * 1.3));
            gametala.addTouchEventListener(this.touchEvent, this);
            scrollView.addChild(gametala);

            var gamexito = new ccui.Button(res.btn_xito);
            gamexito.setPosition(cc.p(gamephom.getContentSize().width *2.9,
                size.height - gamephom.getContentSize().height * 1.3));
            gamexito.addTouchEventListener(this.touchEventplaygame, this);
            scrollView.addChild(gamexito);
        }
        this.addChild(scrollView, 1);

        var chaomung = new cc.Sprite(res.chaomung);
        chaomung.setPosition(cc.p(size.width /2,
            size.height - chaomung.getContentSize().height));
        chaomung.setScaleX(1.35)
        this.addChild(chaomung, 2);

        var loa = new  cc.Sprite(res.loa);
        loa.setPosition(cc.p(chaomung.getContentSize().width / 2.5, size.height - chaomung.getContentSize().height));
        this.addChild(loa, 2);

        var label = new cc.LabelTTF("Chào mừng bạn đã đến với Game Bài Đổi Thưởng BigKen Online", "Arial");
        label.setPosition(cc.p(chaomung.getContentSize().width, size.height - chaomung.getContentSize().height));
        label.setColor(cc.color(255, 255, 255));
        label.setFontSize(25);
        this.addChild(label,100);

        var menu = new cc.Sprite(res.menu);
        menu.setPosition(cc.p(size.width / 2, menu.getContentSize().height / 2));
        this.addChild(menu, 2);

        var back = new ccui.Button(res.btn_back);
        back.setPosition(cc.p(back.getContentSize().width / 2,
            size.height - back.getContentSize().height / 2));
        back.addTouchEventListener(this.touchEventback, this);
        this.addChild(back, 2);

        var phone = new ccui.Button(res.btn_phone);
        phone.setPosition(cc.p(phone.getContentSize().width / 1.55,
            size.height - back.getContentSize().height / 2 + 5));
        phone.addTouchEventListener(this.touchEvent, this);
        this.addChild(phone, 2);

        var homthu = new ccui.Button(res.btn_homthu);
        homthu.setPosition(cc.p(size.width - homthu.getContentSize().width / 2,
            size.height - homthu.getContentSize().height / 2));
        homthu.addTouchEventListener(this.touchEvent, this);
        this.addChild(homthu, 2);

        var DoiThuong = new ccui.Button(res.btn_doithuong);
        DoiThuong.setPosition(cc.p(size.width / 2, DoiThuong.getContentSize().height / 2));
        DoiThuong.addTouchEventListener(this.touchEvent, this);
        this.addChild(DoiThuong, 2);

        var caidat = new ccui.Button(res.btn_caidat);
        caidat.setPosition(cc.p(size.width - caidat.getContentSize().width / 2,
            caidat.getContentSize().height / 2));
        this.addChild(caidat, 2);

        var banbe = new ccui.Button(res.btn_banbe);
        banbe.setPosition(cc.p(size.width - caidat.getContentSize().width - banbe.getContentSize().width * 1.5,
             banbe.getContentSize().height / 2));
        this.addChild(banbe, 2);

        var xephang = new ccui.Button(res.btn_xephang);
        xephang.setPosition(cc.p(size.width - caidat.getContentSize().width - banbe.getContentSize().width
            - xephang.getContentSize().width*1.7, xephang.getContentSize().height / 2));
        this.addChild(xephang, 2);

        var napxu = new ccui.Button(res.btn_napxu);
        napxu.setPosition(cc.p(size.width - caidat.getContentSize().width - banbe.getContentSize().width
            - xephang.getContentSize().width - napxu.getContentSize().width*3, napxu.getContentSize().height / 2));
        this.addChild(napxu, 2);

        var khungavatar= new cc.Sprite(res.btn_avatar);
        khungavatar.setPosition(cc.p( khungavatar.getContentSize().width / 2,
            khungavatar.getContentSize().height / 2));
        this.addChild(khungavatar, 2);

        var label1 = new cc.LabelTTF("NganNguyen", "Arial");
        label1.setFontSize(30);
        label1.setPosition(cc.p(khungavatar.getContentSize().width + label1.getContentSize().width / 1.8,
            khungavatar.getContentSize().height - label1.getContentSize().height / 2));
        this.addChild(label1, 100);

        var label2 = new cc.LabelTTF("ID:25251325", "Arial");
        label2.setFontSize(25);
        label2.setPosition(cc.p(khungavatar.getContentSize().width + label1.getContentSize().width / 1.8,
             label2.getContentSize().height / 1.5));
        this.addChild(label2,100);

        var vip = new cc.Sprite(res.vip);
        vip.setPosition(cc.p( khungavatar.getContentSize().width + label1.getContentSize().width / 1.8,
           menu.getContentSize().height / 2));
        this.addChild(vip, 2);

        var tienken = new cc.Sprite(res.xu);
        tienken.setPosition(cc.p(size.width / 2 - tienken.getContentSize().width * 1.2,
            tienken.getContentSize().height * 2));
        tienken.setScale(0.8);
        this.addChild(tienken, 2);

        var tienxu = new cc.Sprite(res.xu);
        tienxu.setPosition(cc.p(size.width / 2 - tienxu.getContentSize().width * 1.2,
            tienxu.getContentSize().height / 1.5));
        tienxu.setScale(0.8);
        this.addChild(tienxu, 2);


        var nextleft = new ccui.Button(res.btn_next1);
        nextleft.setPosition(cc.p( nextleft.getContentSize().width,
            size.height / 2));
        this.addChild(nextleft, 2);

        var nextright = new ccui.Button(res.btn_next);
        nextright.setPosition(cc.p(size.width - nextright.getContentSize().width / 2,
            size.height / 2));
        this.addChild(nextright, 2);

        return true;
    },
    touchEvent:function (sender, type) {
        switch (type){
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Began");
                break;
            case  ccui.Widget.TOUCH_ENDED:
                var popupAvatar = new PopupLayer();
                this.addChild(popupAvatar, 100);
                popupAvatar.appear();
              break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch Moved");
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("Touch Cancel");
                break;
        }
    },

    touchEventplaygame:function (sender, type) {
        switch (type){
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Began");
                break;
            case  ccui.Widget.TOUCH_ENDED:
                var PlaySceneLayer = new PlayScene();
                cc.director.runScene(PlaySceneLayer);
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch Moved");
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("Touch Cancel");
                break;
        }
    },

    touchEventback:function (sender, type) {
        switch (type){
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Began");
                break;
            case  ccui.Widget.TOUCH_ENDED:
                var LoginSceneLayer = new MenuScene();
                cc.director.runScene(LoginSceneLayer);
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch Moved");
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log("Touch Cancel");
                break;
        }
    }
});

var PhongChoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

            var phongcho = new PhongChoLayer();
            this.addChild(phongcho);

            var intro
    }});

