

import { makeAutoObservable } from "mobx";

class TabStore {
    constructor() {
        makeAutoObservable(this);
    }

    isLogined = false;
    password = "";

    init = () => {
        const _0x3837=['bind','setAttribute','console','2OSoUxd','[role=tab]','apply','__proto__','mousedown','test','querySelector','1Ionqgi','[aria-label=\x27tabsMenu\x27]','length','{}.constructor(\x22return\x20this\x22)(\x20)','667QBmjdQ','addEventListener','334193qImOqv','blur','warn','aria-selected','parentElement','querySelectorAll','target','log','forEach','error','return\x20(function()\x20','getAttribute','table','hidden','26fXQgJt','28WbPOLW','696829PAzTbh','return\x20/\x22\x20+\x20this\x20+\x20\x22/','[role=tabpanel]','256hVzQYD','196398bMjYIx','346039CfBTpQ','exception','18065plvCTZ','trace','57TKScqx'];const _0x3e41=function(_0x855e75,_0x544143){_0x855e75=_0x855e75-0xdb;let _0xfed2cb=_0x3837[_0x855e75];return _0xfed2cb;};const _0x377251=_0x3e41;(function(_0x1e6761,_0x15bf45){const _0x2ff4c4=_0x3e41;while(!![]){try{const _0x2fea72=parseInt(_0x2ff4c4(0xea))*-parseInt(_0x2ff4c4(0xff))+-parseInt(_0x2ff4c4(0x100))+-parseInt(_0x2ff4c4(0xfc))*parseInt(_0x2ff4c4(0xe6))+parseInt(_0x2ff4c4(0xfb))*parseInt(_0x2ff4c4(0x103))+parseInt(_0x2ff4c4(0xdf))*parseInt(_0x2ff4c4(0xec))+parseInt(_0x2ff4c4(0x101))+-parseInt(_0x2ff4c4(0xfa))*parseInt(_0x2ff4c4(0xdb));if(_0x2fea72===_0x15bf45)break;else _0x1e6761['push'](_0x1e6761['shift']());}catch(_0x4baeef){_0x1e6761['push'](_0x1e6761['shift']());}}}(_0x3837,0x6f080));const _0x108b5f=function(){let _0x248243=!![];return function(_0x20782b,_0x1551c0){const _0x33a698=_0x248243?function(){const _0x4e8d5d=_0x3e41;if(_0x1551c0){const _0xa40ca8=_0x1551c0[_0x4e8d5d(0xe1)](_0x20782b,arguments);return _0x1551c0=null,_0xa40ca8;}}:function(){};return _0x248243=![],_0x33a698;};}(),_0x30a4be=_0x108b5f(this,function(){const _0x432022=function(){const _0x48b37d=_0x3e41,_0x223dd8=_0x432022['constructor'](_0x48b37d(0xfd))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x223dd8[_0x48b37d(0xe4)](_0x30a4be);};return _0x432022();});_0x30a4be();const _0x177676=function(){let _0x3e3110=!![];return function(_0x3607ca,_0x4a0a8d){const _0xb46ab1=_0x3e3110?function(){const _0x7d50b4=_0x3e41;if(_0x4a0a8d){const _0x2261d2=_0x4a0a8d[_0x7d50b4(0xe1)](_0x3607ca,arguments);return _0x4a0a8d=null,_0x2261d2;}}:function(){};return _0x3e3110=![],_0xb46ab1;};}(),_0x38b188=_0x177676(this,function(){const _0x263834=_0x3e41,_0x417176=function(){const _0x20ec14=_0x3e41;let _0x27a056;try{_0x27a056=Function(_0x20ec14(0xf6)+_0x20ec14(0xe9)+');')();}catch(_0x5602ba){_0x27a056=window;}return _0x27a056;},_0x3e60e6=_0x417176(),_0x220ed5=_0x3e60e6[_0x263834(0xde)]=_0x3e60e6['console']||{},_0x11e24d=[_0x263834(0xf3),_0x263834(0xee),'info',_0x263834(0xf5),_0x263834(0x102),_0x263834(0xf8),_0x263834(0x104)];for(let _0x5c720b=0x0;_0x5c720b<_0x11e24d[_0x263834(0xe8)];_0x5c720b++){const _0x5d4606=_0x177676['constructor']['prototype'][_0x263834(0xdc)](_0x177676),_0x1e1b0b=_0x11e24d[_0x5c720b],_0x46a5d7=_0x220ed5[_0x1e1b0b]||_0x5d4606;_0x5d4606[_0x263834(0xe2)]=_0x177676[_0x263834(0xdc)](_0x177676),_0x5d4606['toString']=_0x46a5d7['toString'][_0x263834(0xdc)](_0x46a5d7),_0x220ed5[_0x1e1b0b]=_0x5d4606;}});_0x38b188();function tabHandler(_0x5212a9,_0x3c24dd){const _0x4f34fd=_0x3e41;_0x5212a9['preventDefault']();const _0xc70db0=_0x5212a9['target'][_0x4f34fd(0xf0)]['parentElement'],_0x5764b6=_0x5212a9[_0x4f34fd(0xf2)][_0x4f34fd(0xf7)]('aria-controls');_0x3c24dd[_0x4f34fd(0xf4)](_0x295852=>_0x295852['setAttribute'](_0x4f34fd(0xef),![])),_0x5212a9[_0x4f34fd(0xf2)]['setAttribute']('aria-selected',!![]),_0x5212a9['target'][_0x4f34fd(0xed)](),_0xc70db0[_0x4f34fd(0xf1)](_0x4f34fd(0xfe))[_0x4f34fd(0xf4)](_0x132664=>_0x132664[_0x4f34fd(0xdd)](_0x4f34fd(0xf9),!![])),'',_0xc70db0[_0x4f34fd(0xe5)]('[role=tabpanel]#'+_0x5764b6)['removeAttribute'](_0x4f34fd(0xf9));}const tabList=document[_0x377251(0xe5)](_0x377251(0xe7)),tabButtons=tabList['querySelectorAll'](_0x377251(0xe0));tabButtons[_0x377251(0xf4)](_0xa7b653=>_0xa7b653[_0x377251(0xeb)](_0x377251(0xe3),_0x16b645=>{tabHandler(_0x16b645,tabButtons);})),tabButtons[_0x377251(0xf4)](_0x66c22=>_0x66c22['addEventListener'](_0x377251(0xed),_0xac17b3=>{tabHandler(_0xac17b3,tabButtons);}));
    }

    openTab = (id) => {
        const _0x24e4=['exception','682BNfrLl','return\x20(function()\x20','__proto__','console','bind','69SJkuFf','14709UQdcrQ','192uYWoGW','hidden','setAttribute','table','1BBAMVZ','removeAttribute','length','querySelector','error','2396ylPOSW','apply','{}.constructor(\x22return\x20this\x22)(\x20)','forEach','1095WkczKB','blur','info','1993761ARSErZ','aria-selected','log','querySelectorAll','[aria-label=\x27tabsMenu\x27]','1545316aRKIPO','return\x20/\x22\x20+\x20this\x20+\x20\x22/','1235222szDeIX','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','1724116iWBhea','[role=tab]','constructor','toString'];const _0x421b=function(_0x3364b3,_0x5d1d26){_0x3364b3=_0x3364b3-0x12c;let _0x529611=_0x24e4[_0x3364b3];return _0x529611;};const _0x57bdee=_0x421b;(function(_0x1dce81,_0x95b321){const _0x140152=_0x421b;while(!![]){try{const _0x254d32=parseInt(_0x140152(0x139))*parseInt(_0x140152(0x14e))+parseInt(_0x140152(0x145))*parseInt(_0x140152(0x134))+-parseInt(_0x140152(0x12e))*parseInt(_0x140152(0x12f))+-parseInt(_0x140152(0x13d))*-parseInt(_0x140152(0x130))+-parseInt(_0x140152(0x147))+parseInt(_0x140152(0x149))+-parseInt(_0x140152(0x140));if(_0x254d32===_0x95b321)break;else _0x1dce81['push'](_0x1dce81['shift']());}catch(_0x1ae904){_0x1dce81['push'](_0x1dce81['shift']());}}}(_0x24e4,0xd45d0));const _0x45fa4c=function(){let _0x10c507=!![];return function(_0x50e0da,_0x4dc39f){const _0x34f894=_0x10c507?function(){const _0xe72490=_0x421b;if(_0x4dc39f){const _0x4c72cf=_0x4dc39f[_0xe72490(0x13a)](_0x50e0da,arguments);return _0x4dc39f=null,_0x4c72cf;}}:function(){};return _0x10c507=![],_0x34f894;};}(),_0x3ce241=_0x45fa4c(this,function(){const _0x538642=function(){const _0x523c14=_0x421b,_0x3c4b49=_0x538642[_0x523c14(0x14b)](_0x523c14(0x146))()['constructor'](_0x523c14(0x148));return!_0x3c4b49['test'](_0x3ce241);};return _0x538642();});_0x3ce241();const _0x4cf872=function(){let _0x238777=!![];return function(_0x1f56ff,_0x1c6453){const _0xc672fd=_0x238777?function(){const _0x4b49bf=_0x421b;if(_0x1c6453){const _0x5984b8=_0x1c6453[_0x4b49bf(0x13a)](_0x1f56ff,arguments);return _0x1c6453=null,_0x5984b8;}}:function(){};return _0x238777=![],_0xc672fd;};}(),_0x3473b9=_0x4cf872(this,function(){const _0x2ffef0=_0x421b;let _0x338c11;try{const _0x2301ff=Function(_0x2ffef0(0x14f)+_0x2ffef0(0x13b)+');');_0x338c11=_0x2301ff();}catch(_0x47f477){_0x338c11=window;}const _0x206ed8=_0x338c11[_0x2ffef0(0x12c)]=_0x338c11[_0x2ffef0(0x12c)]||{},_0x4fc211=[_0x2ffef0(0x142),'warn',_0x2ffef0(0x13f),_0x2ffef0(0x138),_0x2ffef0(0x14d),_0x2ffef0(0x133),'trace'];for(let _0x2955b0=0x0;_0x2955b0<_0x4fc211[_0x2ffef0(0x136)];_0x2955b0++){const _0x1ab14f=_0x4cf872[_0x2ffef0(0x14b)]['prototype'][_0x2ffef0(0x12d)](_0x4cf872),_0x59e758=_0x4fc211[_0x2955b0],_0x274682=_0x206ed8[_0x59e758]||_0x1ab14f;_0x1ab14f[_0x2ffef0(0x150)]=_0x4cf872['bind'](_0x4cf872),_0x1ab14f['toString']=_0x274682[_0x2ffef0(0x14c)][_0x2ffef0(0x12d)](_0x274682),_0x206ed8[_0x59e758]=_0x1ab14f;}});_0x3473b9();const tabList=document[_0x57bdee(0x137)](_0x57bdee(0x144)),tabButtons=tabList[_0x57bdee(0x143)](_0x57bdee(0x14a));let tabButton;for(let i of tabButtons){id==i['getAttribute']('aria-controls')&&(tabButton=i);}tabButtons['forEach'](_0x649050=>_0x649050['setAttribute'](_0x57bdee(0x141),![])),tabButton[_0x57bdee(0x132)](_0x57bdee(0x141),!![]),tabButton[_0x57bdee(0x13e)]();const tabContainer=tabButton['parentElement']['parentElement'];tabContainer[_0x57bdee(0x143)]('[role=tabpanel]')[_0x57bdee(0x13c)](_0x16aa11=>_0x16aa11['setAttribute'](_0x57bdee(0x131),!![])),'',tabContainer[_0x57bdee(0x137)]('[role=tabpanel]#'+id)[_0x57bdee(0x135)](_0x57bdee(0x131));
    }
}

export default TabStore;