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
                            id: 'alien1',
                            type: 'image',
                            rect: ['195px', '137px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy',
                            type: 'image',
                            rect: ['320px', '137px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy3',
                            type: 'image',
                            rect: ['444px', '137px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy2',
                            type: 'image',
                            rect: ['569px', '137px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy4',
                            type: 'image',
                            rect: ['694px', '137px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy9',
                            type: 'image',
                            rect: ['203px', '339px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy8',
                            type: 'image',
                            rect: ['327px', '339px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy7',
                            type: 'image',
                            rect: ['452px', '339px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy6',
                            type: 'image',
                            rect: ['577px', '339px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy5',
                            type: 'image',
                            rect: ['701px', '339px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy14',
                            type: 'image',
                            rect: ['203px', '525px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy13',
                            type: 'image',
                            rect: ['328px', '525px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy12',
                            type: 'image',
                            rect: ['453px', '525px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy11',
                            type: 'image',
                            rect: ['577px', '525px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
                        },
                        {
                            id: 'alien1Copy10',
                            type: 'image',
                            rect: ['702px', '525px', '119', '89', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"alien1.png",'0px','0px']
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
                    duration: 0,
                    autoPlay: false,
                    data: [

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
                            type: 'text',
                            rect: ['-22px', '58px', '150px', '28px', 'auto', 'auto'],
                            id: 'hpTxt',
                            text: ' ',
                            align: 'center',
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(0,239,22,1.00)', 'normal', 'none', '', 'break-word', '']
                        },
                        {
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'img/alien1.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'img/alien2.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            id: 'a3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'img/alien3.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '105px', '72px', 'auto', 'auto'],
                            type: 'image',
                            id: 'a4',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'img/alien4.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '1px', '104px', '89px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'hitArea',
                            opacity: '0',
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
                            id: 'bg',
                            type: 'image',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)', 'img/Halloween.png', '0px', '0px']
                        },
                        {
                            rect: ['246px', '167px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['codystar, sans-serif', [50, 'px'], 'rgba(255,87,87,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'RPG',
                            text: '???How to play???',
                            cursor: 'pointer',
                            type: 'text'
                        },
                        {
                            rect: ['233', '91', '565', '47', 'auto', 'auto'],
                            font: ['codystar, sans-serif', [54, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', ''],
                            id: 'TITLE',
                            text: 'The Jack-O Strike<br>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            font: ['codystar, sans-serif', [29, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', ''],
                            rect: ['233', '551', '565', '47', 'auto', 'auto'],
                            align: 'center',
                            display: 'block',
                            id: 'TAP',
                            text: 'TAP HERE TO START',
                            cursor: 'pointer',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '780', '477']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid104",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TAP}",
                            '233px',
                            '233px'
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
                            "eid62",
                            "font-size",
                            2000,
                            0,
                            "linear",
                            "${TAP}",
                            '29px',
                            '29px'
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
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0', '1024', '768', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)', 'img/stage.png', '0px', '0px']
                        },
                        {
                            rect: ['24', '21', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'powerLabel',
                            text: 'Click the Jack-O with following data type:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            userClass: 'power',
                            font: ['geo, sanss-serif', [33, 'px'], 'rgba(255,0,0,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'powerTxt',
                            text: '0',
                            type: 'text',
                            rect: ['460', '16', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['46px', '55px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'hpLabel',
                            text: 'Health Points:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['24px', '92px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [26, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'pcLabel',
                            text: 'Power Charging:',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            userClass: 'hp',
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(232,255,0,1.00)', 'bold', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'hpTxt',
                            text: '0<br>',
                            type: 'text',
                            rect: ['460px', '52px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'waitBar',
                            symbolName: 'waitBar',
                            type: 'rect',
                            rect: ['195px', '98', '252', '18', 'auto', 'auto']
                        },
                        {
                            id: 'healthBar',
                            symbolName: 'healthBar',
                            type: 'rect',
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
                            userClass: 'potion',
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'potionTxt',
                            text: 'your data type to: double',
                            type: 'text',
                            rect: ['643px', '52px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['737px', '18px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'potionTxtCopy',
                            text: 'Click',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['864px', '18px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['geo, sans-serif', [33, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'potionTxtCopy2',
                            text: 'to change',
                            align: 'left',
                            type: 'text'
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
                            "eid88",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '1280px',
                            '1280px'
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
                            "eid190",
                            "left",
                            0,
                            0,
                            "linear",
                            "${hpTxt}",
                            '460px',
                            '460px'
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
                            font: ['codystar, sans-serif', [54, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal'],
                            type: 'text',
                            id: 'messageTxt',
                            text: 'YOU FAILED!',
                            align: 'center',
                            rect: [95, 125, 797, 47, 'auto', 'auto']
                        },
                        {
                            font: ['codystar, sans-serif', [36, 'px'], 'rgba(255,255,255,1)', 'bold', 'none', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'playAgain',
                            text: 'TAP TO PLAY AGAIN',
                            display: 'block',
                            rect: [215, 285, 565, 47, 'auto', 'auto']
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
                            rect: [0, 0, '303px', '88px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(242,14,239,1.00)']
                        },
                        {
                            type: 'text',
                            rect: [52, 24, 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text4',
                            text: 'Play Again',
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [0, 0, '303px', '88px', 'auto', 'auto'],
                            fill: ['rgba(242,14,239,1.00)']
                        },
                        {
                            rect: [45, 24, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [38, ''], 'rgba(255,255,255,1)', 'bold', 'none', 'normal', '', 'nowrap'],
                            id: 'Text4',
                            text: 'Attack Now!',
                            align: 'left',
                            type: 'text'
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle2',
                            opacity: '0.2611083984375',
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
                            id: 'bar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,252,252,1.00)', [270, [['rgba(149,95,233,1.00)', 0], ['rgba(16,15,180,1.00)', 100]]]]
                        },
                        {
                            rect: ['0', '0', '242', '12', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
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
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['7', '0', '16px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,255,42,1)']
                        },
                        {
                            rect: ['0px', '-7px', '46px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                            id: 'bar',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,252,252,1.00)', [270, [['rgba(56,200,85,1.00)', 100], ['rgba(16,15,180,1.00)', 100]]]]
                        },
                        {
                            rect: ['0', '0', '242', '12', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, 'rgba(0,0,0,0)', 0, 0, 0],
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
