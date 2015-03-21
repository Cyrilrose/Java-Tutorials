/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'codystar, sans-serif': '<script src=\"http://use.edgefonts.net/codystar:n4,n3:all.js\"></script>',
            'geo, sans-serif': '<script src=\"http://use.edgefonts.net/geo:i4,n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'PlayState',
                            symbolName: 'PlayState',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['451px', '10px', '100px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [5,"rgba(248,0,0,1.00)","dotted"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['422px', '240px', '90px', '38px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [5,"rgba(248,0,0,1.00)","dotted"]
                        },
                        {
                            id: 'TitleState',
                            symbolName: 'TitleState',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['633px', '12px', '371px', '74px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [5,"rgb(248, 0, 0)","dotted"]
                        },
                        {
                            id: 'mouse',
                            type: 'image',
                            rect: ['981px', '723px', '44px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mouse.svg",'0px','0px']
                        },
                        {
                            id: 'goback',
                            type: 'image',
                            rect: ['422px', '405px', '101px', '41px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"goback.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '768', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 26000,
                    autoPlay: true,
                    data: [
                        [
                            "eid235",
                            "opacity",
                            2750,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid263",
                            "opacity",
                            8000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid264",
                            "opacity",
                            8500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid265",
                            "opacity",
                            9000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid266",
                            "opacity",
                            9500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid267",
                            "opacity",
                            16000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid268",
                            "opacity",
                            16500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid269",
                            "opacity",
                            17000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid270",
                            "opacity",
                            17500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            18000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid272",
                            "opacity",
                            18500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid275",
                            "opacity",
                            21000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid276",
                            "opacity",
                            21500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid277",
                            "opacity",
                            22000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid278",
                            "opacity",
                            22500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid279",
                            "opacity",
                            23000,
                            500,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid280",
                            "opacity",
                            23500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid282",
                            "top",
                            24000,
                            2000,
                            "linear",
                            "${goback}",
                            '723px',
                            '405px'
                        ],
                        [
                            "eid241",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${RectangleCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid257",
                            "opacity",
                            12250,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid225",
                            "top",
                            0,
                            1630,
                            "linear",
                            "${mouse}",
                            '723px',
                            '554px'
                        ],
                        [
                            "eid244",
                            "top",
                            5500,
                            1500,
                            "linear",
                            "${mouse}",
                            '554px',
                            '229px'
                        ],
                        [
                            "eid259",
                            "top",
                            13500,
                            2000,
                            "linear",
                            "${mouse}",
                            '229px',
                            '23px'
                        ],
                        [
                            "eid274",
                            "top",
                            18500,
                            1500,
                            "linear",
                            "${mouse}",
                            '23px',
                            '226px'
                        ],
                        [
                            "eid224",
                            "left",
                            0,
                            1630,
                            "linear",
                            "${mouse}",
                            '981px',
                            '490px'
                        ],
                        [
                            "eid243",
                            "left",
                            5500,
                            1500,
                            "linear",
                            "${mouse}",
                            '490px',
                            '110px'
                        ],
                        [
                            "eid258",
                            "left",
                            13500,
                            2000,
                            "linear",
                            "${mouse}",
                            '110px',
                            '816px'
                        ],
                        [
                            "eid273",
                            "left",
                            18500,
                            1500,
                            "linear",
                            "${mouse}",
                            '816px',
                            '450px'
                        ],
                        [
                            "eid284",
                            "scaleY",
                            24000,
                            2000,
                            "linear",
                            "${goback}",
                            '1',
                            '2'
                        ],
                        [
                            "eid283",
                            "scaleX",
                            24000,
                            2000,
                            "linear",
                            "${goback}",
                            '1',
                            '2'
                        ],
                        [
                            "eid255",
                            "left",
                            11000,
                            1000,
                            "linear",
                            "${RectangleCopy}",
                            '80px',
                            '422px'
                        ],
                        [
                            "eid281",
                            "left",
                            24000,
                            2000,
                            "linear",
                            "${goback}",
                            '880px',
                            '422px'
                        ],
                        [
                            "eid227",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${TitleState}",
                            '1',
                            '0'
                        ],
                            [ "eid232", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${PlayState}', [0] ] ],
                            [ "eid230", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${PlayState}', [0] ] ]
                    ]
                }
            },
            "Alien": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(0,239,22,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text',
                            id: 'hpTxt',
                            text: ' ',
                            align: 'center',
                            rect: ['-22px', '58px', '150px', '28px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a1',
                            fill: ['rgba(0,0,0,0)', 'img/alien1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a2',
                            fill: ['rgba(0,0,0,0)', 'img/alien2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a3',
                            fill: ['rgba(0,0,0,0)', 'img/alien3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a4',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'img/alien4.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['-1px', '1px', '104px', '89px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'hitArea',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(242,14,14,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104', '89']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    labels: {
                        "idle": 0,
                        "explode": 2000
                    },
                    data: [
                        [
                            "eid23",
                            "rotateZ",
                            2000,
                            500,
                            "linear",
                            "${a4}",
                            '0deg',
                            '672deg'
                        ],
                        [
                            "eid11",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            750,
                            0,
                            "linear",
                            "${a4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            250,
                            0,
                            "linear",
                            "${a1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            250,
                            0,
                            "linear",
                            "${a2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            500,
                            0,
                            "linear",
                            "${a2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${a4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            500,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            750,
                            0,
                            "linear",
                            "${a3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${a3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "TitleState": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bg',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)', 'img/Halloween.png', '0px', '0px']
                        },
                        {
                            font: ['codystar, sans-serif', [50, 'px'], 'rgba(255,87,87,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'RPG',
                            text: 'RPG',
                            align: 'center',
                            rect: ['464px', '173px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['codystar, sans-serif', [54, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            id: 'TITLE',
                            text: 'The Jack-O Strike<br>',
                            align: 'center',
                            rect: ['233', '91', '565', '47', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'TAP',
                            text: 'TAP TO START',
                            cursor: 'pointer',
                            rect: ['233', '551', '565', '47', 'auto', 'auto'],
                            display: 'block',
                            align: 'center',
                            font: ['codystar, sans-serif', [29, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '780', '477']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid62",
                            "font-size",
                            2000,
                            0,
                            "linear",
                            "${TAP}",
                            '29px',
                            '29px'
                        ],
                        [
                            "eid105",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TAP}",
                            '551px',
                            '551px'
                        ],
                        [
                            "eid60",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${TAP}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${TAP}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TAP}",
                            '233px',
                            '233px'
                        ]
                    ]
                }
            },
            "PlayState": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bg',
                            rect: ['0px', '0', '1024', '768', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)', 'img/stage.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['24', '21', 'auto', 'auto', 'auto', 'auto'],
                            id: 'powerLabel',
                            text: 'Click the Jack-O with following data type:',
                            align: 'left',
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['460', '16', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sanss-serif', [33, 'px'], 'rgba(255,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            userClass: 'power',
                            id: 'powerTxt',
                            text: '0',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            rect: ['46px', '55px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'hpLabel',
                            text: 'Health Points:',
                            align: 'left',
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['24px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'pcLabel',
                            text: 'Power Charging:',
                            align: 'left',
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['460px', '52px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(232,255,0,1.00)', 'bold', 'none', 'normal', 'break-word', 'nowrap'],
                            userClass: 'hp',
                            id: 'hpTxt',
                            text: '0<br>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            id: 'waitBar',
                            symbolName: 'waitBar',
                            rect: ['195px', '98', '252', '18', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'healthBar',
                            symbolName: 'healthBar',
                            rect: ['195px', '61px', null, null, 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'potion',
                            symbolName: 'potion',
                            cursor: 'pointer',
                            rect: ['820px', '17px', '30', '33', 'auto', 'auto']
                        },
                        {
                            rect: ['643px', '52px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', 'nowrap'],
                            userClass: 'potion',
                            id: 'potionTxt',
                            text: 'your data type to: double',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            rect: ['737px', '18px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'potionTxtCopy',
                            text: 'Click',
                            align: 'left',
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['864px', '18px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'potionTxtCopy2',
                            text: 'to change',
                            align: 'left',
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid87",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-192px',
                            '-192px'
                        ],
                        [
                            "eid193",
                            "top",
                            0,
                            0,
                            "linear",
                            "${potion}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid184",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pcLabel}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid191",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hpLabel}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid165",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hpTxt}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid86",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '960px',
                            '960px'
                        ],
                        [
                            "eid167",
                            "top",
                            0,
                            0,
                            "linear",
                            "${hpLabel}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid190",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hpTxt}",
                            '460px',
                            '460px'
                        ],
                        [
                            "eid183",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pcLabel}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid187",
                            "left",
                            0,
                            0,
                            "linear",
                            "${waitBar}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid198",
                            "left",
                            0,
                            0,
                            "linear",
                            "${healthBar}",
                            '195px',
                            '195px'
                        ],
                        [
                            "eid221",
                            "left",
                            0,
                            0,
                            "linear",
                            "${potion}",
                            '820px',
                            '820px'
                        ],
                        [
                            "eid88",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1280px',
                            '1280px'
                        ]
                    ]
                }
            },
            "GameOverState": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: [0, 0, 1024, 768, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)', 'img/Happyend.png', '0px', '0px']
                        },
                        {
                            rect: [95, 125, 797, 47, 'auto', 'auto'],
                            font: ['codystar, sans-serif', [54, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal'],
                            id: 'messageTxt',
                            text: 'YOU FAILED!',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: [215, 285, 565, 47, 'auto', 'auto'],
                            font: ['codystar, sans-serif', [36, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal'],
                            display: 'block',
                            id: 'playAgain',
                            text: 'TAP TO PLAY AGAIN',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 780, 477]
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${playAgain}",
                            'block',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${playAgain}",
                            'block',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${playAgain}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "playAgainBtn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '303px', '88px', 'auto', 'auto'],
                            fill: ['rgba(242,14,239,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [38, ''], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', '', 'nowrap'],
                            type: 'text',
                            id: 'Text4',
                            text: 'Play Again',
                            align: 'left',
                            rect: [52, 24, 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 303, 88]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "playBtn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '303px', '88px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(242,14,239,1.00)']
                        },
                        {
                            type: 'text',
                            rect: [45, 24, 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            text: 'Attack Now!',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [38, ''], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', '', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 303, 88]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Flash": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 1024, 768, 'auto', 'auto'],
                            opacity: '0.2611083984375',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(242,14,14,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 354,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.2611083984375',
                            '0.2611083984375'
                        ],
                        [
                            "eid31",
                            "opacity",
                            124,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.2611083984375',
                            '0.16934204101562'
                        ],
                        [
                            "eid32",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.31509399414062',
                            '0.39627075195312'
                        ],
                        [
                            "eid33",
                            "opacity",
                            354,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.50961303710938',
                            '1'
                        ]
                    ]
                }
            },
            "waitBar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '0', '18px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'bar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,252,252,1.00)', [270, [['rgba(149,95,233,1.00)', 0], ['rgba(16,15,180,1.00)', 100]]]]
                        },
                        {
                            rect: ['0', '0', '242', '12', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'outline',
                            stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,252,252,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '252', '18']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "ready": 2000
                    },
                    data: [
                        [
                            "eid41",
                            "width",
                            0,
                            2000,
                            "linear",
                            "${bar}",
                            '0px',
                            '250px'
                        ],
                        [
                            "eid44",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${outline}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "filter.blur",
                            2000,
                            0,
                            "linear",
                            "${outline}",
                            '0px',
                            '3px'
                        ]
                    ]
                }
            },
            "potion": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '9', '30', '24', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(57,255,0,1)']
                        },
                        {
                            rect: ['7', '0', '16px', '17px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,255,42,1)']
                        },
                        {
                            rect: ['0px', '-7px', '46px', '43px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle4',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(57,255,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30', '33']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid95",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid100",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid96",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid99",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Ellipse2}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "healthBar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '0', '18px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'bar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,252,252,1.00)', [270, [['rgba(56,200,85,1.00)', 100], ['rgba(16,15,180,1.00)', 100]]]]
                        },
                        {
                            rect: ['0', '0', '242', '12', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 3, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'outline',
                            stroke: [4, 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,252,252,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '252', '18']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "dead": 0
                    },
                    data: [
                        [
                            "eid199",
                            "width",
                            0,
                            2000,
                            "linear",
                            "${bar}",
                            '0px',
                            '250px'
                        ],
                        [
                            "eid205",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${outline}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid206",
                            "filter.blur",
                            8,
                            0,
                            "linear",
                            "${outline}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid204",
                            "filter.blur",
                            2000,
                            0,
                            "linear",
                            "${outline}",
                            '0.000000px',
                            '3px'
                        ],
                        [
                            "eid202",
                            "background-image",
                            0,
                            2000,
                            "linear",
                            "${bar}",
                            [270,[['rgba(200,56,56,1.00)',100],['rgba(16,15,180,1.00)',100]]],
                            [270,[['rgba(56,200,85,1.00)',100],['rgba(16,15,180,1.00)',100]]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("AlienAttack_edgeActions.js");
})("EDGE-228448376");
