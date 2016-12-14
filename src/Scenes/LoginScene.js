/**
 * Created by Black3rry on 11/23/16.
 */

var LoginSceneLayer = cc.Layer.extend({
    ctor:function () {
        // 1. super init first
        this._super();

        var size = cc.winSize;

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

        var bkg = new cc.Sprite(res.im_login_bkg);
        bkg.setAnchorPoint(cc.p(0,0));
        bkg.setScaleX(size.width/bkg.getContentSize().width);
        bkg.setScaleY(size.height/bkg.getContentSize().height);
        bkg.setPosition(cc.p(0,0));
        this.addChild(bkg);

        var sprite_card = new cc.Sprite(res.im_spritecard_login);
        sprite_card.setAnchorPoint(cc.p(0,0));
        sprite_card.setPosition(cc.p(0, 0));
        this.addChild(sprite_card);

        var pageView = new ccui.PageView();
        pageView.setTouchEnabled(true);
        pageView.setContentSize(cc.size(400, 800));
        pageView.setAnchorPoint(cc.p(0.5, 0.5));
        pageView.x = pageView.getContentSize().width - 70;
        pageView.y = size.width - pageView.getContentSize().height - 135;
        pageView.setIndicatorPosition(cc.p(pageView.getPosition().x, pageView.getPosition().y));
        pageView.setIndicatorEnabled(true);
        pageView.setIndicatorIndexNodesColor(cc.color(0,0,0));
        for (var i = 0; i < 5; i++)
        {
            var layout = new ccui.Layout();

            var imageView = new ccui.ImageView();
            imageView.loadTexture(res.im_cogai_login);
            imageView.x = pageView.width / 2;
            imageView.y = pageView.height / 2;
            layout.addChild(imageView);

            var  text = new ccui.Text();
            text.String = "Page" + (i+1);
            text.font = "30px 'Marker Felt'";
            text.color = cc.color(0, 110, 0);
            text.x = pageView.width / 2;
            text.y = pageView.height / 2 + 100;
            layout.addChild(text, 1110);

            pageView.addPage(layout, 0);
        }
        pageView.addEventListener(this.pageViewEvent, this);
        this.addChild(pageView);

        var btn_login_facebook = new ccui.Button(res.btn_fb);
        btn_login_facebook.setAnchorPoint(cc.p(0,0));
        btn_login_facebook.setPosition(cc.p(size.width-btn_login_facebook.getContentSize().width*5/4,
            size.height/2-btn_login_facebook.getContentSize().height*3-20*3
             +btn_login_facebook.getContentSize().height+15));
        btn_login_facebook.setZoomScale(0.01);
        btn_login_facebook.setTitleText("Login facebook");
        btn_login_facebook.setTitleFontSize(btn_login_facebook.getContentSize().height*0.4);
        btn_login_facebook.addTouchEventListener(this.touchEvent, this);
        this.addChild(btn_login_facebook);

        //choi ngay
        var btn_playnow = new ccui.Button(res.btn_choingay);
        btn_playnow.setAnchorPoint(cc.p(0,0));
        btn_playnow.setPosition(cc.p(btn_login_facebook.getPosition().x,
            size.height/2-btn_login_facebook.getContentSize().height*3-20*3));
        btn_playnow.setTitleText("Play Now");
        btn_playnow.setTitleFontSize(btn_login_facebook.getContentSize().height*0.4);
        btn_playnow.addTouchEventListener(this.touchEvent, this);
        this.addChild(btn_playnow);

        //đăng nhập
        var btn_login = new ccui.Button(res.btn_dangnhap);
        btn_login.setAnchorPoint(cc.p(0,0));
        btn_login.setTitleText("Đăng nhập");
        btn_login.setTitleFontSize(btn_login_facebook.getContentSize().height*0.4);
        btn_login.setPosition(cc.p(btn_login_facebook.getPosition().x,
            btn_login_facebook.getPosition().y+btn_login_facebook.getContentSize().height+15));
        btn_login.addTouchEventListener(this.touchEvent1, this);
        this.addChild(btn_login);

        //đăng ký
        var btn_register = new ccui.Button(res.btn_dangky);
        btn_register.setAnchorPoint(cc.p(0,0));
        btn_register.setTitleText("Đăng Ký");
        btn_register.setTitleFontSize(btn_login_facebook.getContentSize().height*0.4);
        btn_register.setPosition(cc.p(btn_login_facebook.getPosition().x+btn_playnow.getContentSize().width
            -btn_register.getContentSize().width,
            btn_login.getPosition().y));
        btn_register.addTouchEventListener(this.touchEvent, this);
        this.addChild(btn_register);

        var editBackgroundMatKhau = new cc.Sprite(res.editBackgruond);
        editBackgroundMatKhau.setPosition(cc.p(btn_register.getPosition().x,
            btn_register.getPosition().y + btn_register.getContentSize().height + 100));
        this.addChild(editBackgroundMatKhau);

        var fontSize = editBackgroundMatKhau.getContentSize().height / 3;

        var eboxNhapMK = cc.EditBox.create(cc.size(350, 100), cc.Scale9Sprite.create(res.editBox), cc.Scale9Sprite.create(res.editBox));
        eboxNhapMK.setPlaceHolder("Nhập Mật Khẩu");
        eboxNhapMK.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
        eboxNhapMK.setPosition(cc.p(editBackgroundMatKhau.getPosition().x + editBackgroundMatKhau.getContentSize().width - btn_register.getContentSize().width * 2,
            editBackgroundMatKhau.getPosition().y));
        eboxNhapMK.setPlaceholderFontSize(fontSize);
        eboxNhapMK.setFontSize(fontSize);
        eboxNhapMK.setMaxLength(12);
        eboxNhapMK.setFontColor({"r": 50, "g": 50, "b": 50});
        eboxNhapMK.setDelegate(this);
        this.addChild(eboxNhapMK,1);

        var editBackgroundTaiKhoan = new cc.Sprite(res.editBackgruond);
        editBackgroundTaiKhoan.setPosition(cc.p(btn_register.getPosition().x,
            btn_register.getPosition().y + btn_register.getContentSize().height + 200));
        this.addChild(editBackgroundTaiKhoan);

        var eboxNhapTK = cc.EditBox.create(cc.size(350, 100), cc.Scale9Sprite.create(res.editBox), cc.Scale9Sprite.create(res.editBox));
        eboxNhapTK.setPlaceHolder("Nhập Tài Khoản");
        eboxNhapTK.setPlaceholderFontSize(fontSize);
        eboxNhapTK.setFontSize(fontSize);
        eboxNhapTK.setInputFlag(cc.EDITBOX_INPUT_FLAG_INITIAL_CAPS_ALL_CHARACTERS);
        eboxNhapTK.setPosition(cc.p(editBackgroundTaiKhoan.getPosition().x + editBackgroundTaiKhoan.getContentSize().width - btn_register.getContentSize().width * 2,
            editBackgroundTaiKhoan.getPosition().y));
        eboxNhapTK.setMaxLength(12);
        eboxNhapTK.setFontColor({"r": 50, "g": 50, "b": 50});
        eboxNhapTK.setDelegate(this);
        this.addChild(eboxNhapTK,1);

        return true;
    },
    
    pageViewEvent: function (sender, type) {
        switch (type)
        {
            case ccui.PageView.EVENT_TURNING:
                break;
        }
    },

    touchEvent1: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");

                break;

            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch Moved1");

                break;

            case ccui.Widget.TOUCH_ENDED:
                var PlaySceneLayer = new PhongChoScene();
                cc.director.runScene(PlaySceneLayer);
                break;

            case ccui.Widget.TOUCH_CANCELLED:
                cc.log("Touch Cancelled");

                break;
        }
    },

    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");

                break;

            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch Moved");

                break;

            case ccui.Widget.TOUCH_ENDED:
                cc.log("Touch Ended");

                break;

            case ccui.Widget.TOUCH_CANCELLED:
                cc.log("Touch Cancelled");

                break;
        }
    }
});



/*//loginfacebook Button



 // Textfield mat khau
 auto background_matkhau = MSprite::create(LOGIN_EDIT_PASSWORD);
 background_matkhau->setPosition(Vec2(btn_playnow->getPosition().x,
 fogotPassword->getPosition().y + fogotPassword->getHeight() + 10));

 auto bg_edit_text = MSprite::create("edit_login_null.png");
 edit_matkhau = MEditBox::create(background_matkhau->getContentSize(), "edit_login_null.png",
 background_matkhau->getHeight()/3);
 edit_matkhau->setPosition(Vec2(background_matkhau->getPosition().x + background_matkhau->getWidth() - bg_edit_text->getWidth(),
 fogotPassword->getPosition().y+fogotPassword->getHeight()+10));
 edit_matkhau->setPlaceHolder("Nhập mật khẩu");
 edit_matkhau->setPlaceholderFontColor(Color3B::BLACK);
 edit_matkhau->setMaxLength(12);
 edit_matkhau->setTag(TAG_LOGIN_EDITBOX_MATKHAU);
 edit_matkhau->setInputFlag(ui::EditBox::InputFlag::PASSWORD);
 edit_matkhau->setDelegate(this);
 edit_matkhau->setText(getPrefString(USER_PASSWORD).c_str());

 // Textfield tai khoan
 auto background_user = MSprite::create(LOGIN_EDIT_PASSWORD);
 background_user->setPosition(Vec2(btn_playnow->getPosition().x,
 edit_matkhau->getPosition().y + background_matkhau->getHeight() + 10));

 auto icon_user = MSprite::create("icon_user.png");
 icon_user->setPosition(Vec2(background_user->getPosition().x + 10, background_user->getPosition().y
 + background_user->getHeight() / 2 - icon_user->getHeight() / 2));

 auto icon_matkhau = MSprite::create("icon_pass.png");
 icon_matkhau->setPosition(Vec2(background_matkhau->getPosition().x + icon_user->getWidth() / 2 - icon_matkhau->getWidth() / 2 + 10
 , background_matkhau->getPosition().y + background_matkhau->getHeight() / 2 - icon_matkhau->getHeight() / 2));

 edit_user = MEditBox::create(background_matkhau->getContentSize(), "edit_login_null.png", background_matkhau->getHeight() / 3);
 edit_user->setPosition(Vec2(background_user->getPosition().x + background_user->getWidth() - bg_edit_text->getWidth(),
 edit_matkhau->getPosition().y+background_matkhau->getHeight()+10));
 edit_user->setPlaceHolder("Nhập tên");
 edit_user->setPlaceholderFontColor(Color3B::BLACK);
 edit_user->setTag(TAG_LOGIN_EDITBOX_TAIKHOAN);
 edit_user->setMaxLength(12);
 edit_user->setDelegate(this);
 edit_user->setText(getPrefString(USER_NAME).c_str());

 auto bigken = MSprite::create(LOGIN_SPRITE_BIGKEN);
 bigken->setPosition(btn_playnow->getPosition().x+btn_playnow->getWidth()/2-bigken->getWidth()/2,
 edit_user->getPosition().y+edit_user->getContentSize().height+25);

 //version
 auto version_txt = MLabel::create("version "+Common::getInstance()->getAppVersion(),background_matkhau->getHeight()/3);
 version_txt->setPosition(MVec2(width-version_txt->getWidth()-15,
 height-15-version_txt->getHeight()));

 //hotline
 vector<string> hotlines = Common::getInstance()->getHotLines();
 auto hotline = MButton::create("hotline_login.png","Hotline : " + (hotlines.size() > 0 ? hotlines[0] : ""),
 background_matkhau->getHeight() / 2, TAG_LOGIN_HOTLINE);
 //auto hotline_txt = MLabel::create("Hotline : " + (hotlines.size() > 0 ? hotlines[0] : ""), background_matkhau->getHeight() / 3);
 hotline->setPosition(MVec2(5,height-hotline->getHeight()));
 hotline->setTitleFontName(FONT_THIN);
 hotline->setTitleFontSize(background_matkhau->getHeight()/3);
 hotline->addTouchEventListener( CC_CALLBACK_2(LoginScene::menuCallBack,this));

 this->addChild(bkg);
 this->addChild(hotline);
 this->addChild(version_txt);
 this->addChild(sprite_card);
 this->addChild(girl);

 this->addChild(btn_login_facebook);
 this->addChild(btn_login);
 this->addChild(btn_register);
 this->addChild(btn_playnow);
 this->addChild(fogotPassword);
 this->addChild(under_line);

 this->addChild(background_matkhau);
 this->addChild(icon_matkhau);
 this->addChild(background_user);
 this->addChild(icon_user);
 this->addChild(edit_matkhau);
 this->addChild(edit_user);
 this->addChild(bigken);*/