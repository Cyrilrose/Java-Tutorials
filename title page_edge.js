/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'comfortaa, sans-serif': '<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
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
                            id: 'BACKGROUND2',
                            type: 'image',
                            rect: ['-380', '-121', '2641', '1292', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/BACKGROUND.svg','0px','0px']
                        },
                        {
                            id: 'bubbles2',
                            symbolName: 'bubbles',
                            type: 'rect',
                            rect: ['231', '1051', '214', '230', 'auto', 'auto']
                        },
                        {
                            id: 'hao',
                            type: 'image',
                            rect: ['857', '228', '213', '643', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/hao.svg','0px','0px']
                        },
                        {
                            id: 'ChengCheng',
                            type: 'image',
                            rect: ['1394', '176', '353', '658', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/ChengCheng.svg','0px','0px']
                        },
                        {
                            id: 'Alex',
                            type: 'image',
                            rect: ['1398', '292', '405', '528', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/Alex.svg','0px','0px']
                        },
                        {
                            id: 'randeep',
                            type: 'image',
                            rect: ['1747', '192', '199', '665', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/randeep.svg','0px','0px'],
                            transform: [[],[],[],['0.93','0.93']]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['239', '965', '285', '42', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(69,67,67,1.00)"],
                            stroke: [14,"rgba(69,67,67,1.00)","solid"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['265px', '835px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Click chapter number...",
                            align: "left",
                            font: ['comfortaa, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'bubbleCopy7',
                            type: 'ellipse',
                            rect: ['218', '1054', '45', '45', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(233,238,224,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'bubbleCopy9',
                            type: 'ellipse',
                            rect: ['301', '1046', '30', '30', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(233,238,224,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'bubbleCopy24',
                            type: 'ellipse',
                            rect: ['431', '654', '82', '82', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [14,"rgba(247,201,123,1.00)","solid"]
                        },
                        {
                            id: 'bubbleCopy23',
                            type: 'ellipse',
                            rect: ['216', '581', '104', '104', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [14,"rgba(254,253,226,1.00)","solid"]
                        },
                        {
                            id: 'bubbleCopy22',
                            type: 'ellipse',
                            rect: ['352', '501', '78', '78', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [14,"rgba(145,223,246,1.00)","solid"]
                        },
                        {
                            id: 'bubbleCopy21',
                            type: 'ellipse',
                            rect: ['448px', '402px', '112', '112', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [14,"rgba(150,243,250,1.00)","solid"]
                        },
                        {
                            id: 'bubbleCopy20',
                            type: 'ellipse',
                            rect: ['295', '323', '112', '112', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [14,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'bubbleCopy19',
                            type: 'ellipse',
                            rect: ['417', '215', '92', '92', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [14,"rgba(248,169,169,1.00)","solid"]
                        },
                        {
                            id: 'bubbleCopy8',
                            type: 'ellipse',
                            rect: ['446', '1019px', '80', '80', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: '_7',
                                type: 'image',
                                rect: ['9px', '14px', '60', '55', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(0,0,0,0)",'source/_7.png','0px','0px']
                            }]
                        },
                        {
                            id: 'bubbleCopy',
                            type: 'ellipse',
                            rect: ['230', '1055px', '104px', '104', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(244,219,9,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: '_5',
                                type: 'image',
                                rect: ['17px', '21px', '70', '65', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(0,0,0,0)",'source/_5.png','0px','0px']
                            }]
                        },
                        {
                            id: 'bubbleCopy6',
                            type: 'ellipse',
                            rect: ['364', '1078px', '82', '82', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: '_4',
                                type: 'image',
                                rect: ['4px', '10px', '70', '65', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(0,0,0,0)",'source/_4.png','0px','0px']
                            }]
                        },
                        {
                            id: 'bubbleCopy3',
                            type: 'ellipse',
                            rect: ['460px', '1009px', '117', '117', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,96,160,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: '_3',
                                type: 'image',
                                rect: ['21px', '23px', '75', '70', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(0,0,0,0)",'source/_3.png','0px','0px']
                            }]
                        },
                        {
                            id: 'bubble',
                            type: 'ellipse',
                            rect: ['307', '1027px', '115', '115', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(224,86,84,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: '_2',
                                type: 'image',
                                rect: ['19px', '23px', '75', '70', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(0,0,0,0)",'source/_2.png','0px','0px']
                            }]
                        },
                        {
                            id: 'bubbleCopy4',
                            type: 'ellipse',
                            rect: ['436', '1061px', '80', '80', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: '_12',
                                type: 'image',
                                rect: ['3px', '7px', '75', '60', 'auto', 'auto'],
                                opacity: '0.000000',
                                fill: ["rgba(0,0,0,0)",'source/_1.png','0px','0px']
                            }]
                        },
                        {
                            id: 'big_bubble_blown_into_glass_through_drinking_straw_version_1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['source/big_bubble_blown_into_glass_through_drinking_straw_version_1.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'welcome4',
                            type: 'image',
                            rect: ['561', '278', '1031', '225', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/welcome.png','0px','0px']
                        },
                        {
                            id: 'bubble_sound',
                            display: 'none',
                            volume: '0.19620536310332',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['source/bubble%20sound.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'java-logo',
                            type: 'image',
                            rect: ['326', '25', '183', '175', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/java-logo.png','0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1900', '880', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(72,164,168,0.99)"]
                        }
                    }
                },
                timeline: {
                    duration: 5163,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "opacity",
                            2103,
                            166,
                            "easeOutQuart",
                            "${_5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid6",
                            "top",
                            448,
                            1000,
                            "easeOutQuart",
                            "${bubble}",
                            '1027px',
                            '335px'
                        ],
                        [
                            "eid54",
                            "left",
                            448,
                            1488,
                            "easeOutQuart",
                            "${randeep}",
                            '1747px',
                            '1395px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            2048,
                            166,
                            "easeOutQuart",
                            "${_4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "top",
                            710,
                            1033,
                            "easeOutQuart",
                            "${bubbleCopy6}",
                            '1078px',
                            '513px'
                        ],
                        [
                            "eid10",
                            "top",
                            637,
                            750,
                            "easeOutQuart",
                            "${bubbleCopy3}",
                            '1009px',
                            '414px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            1882,
                            166,
                            "easeOutQuart",
                            "${_12}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1716,
                            166,
                            "easeOutQuart",
                            "${_7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid149",
                            "top",
                            2166,
                            834,
                            "easeOutQuart",
                            "${RoundRect}",
                            '965px',
                            '825px'
                        ],
                        [
                            "eid21",
                            "top",
                            559,
                            551,
                            "easeOutQuart",
                            "${bubbleCopy7}",
                            '1054px',
                            '255px'
                        ],
                        [
                            "eid19",
                            "top",
                            710,
                            1094,
                            "easeOutQuart",
                            "${bubbleCopy8}",
                            '1019px',
                            '669px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            2358,
                            229,
                            "easeInQuint",
                            "${welcome4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "top",
                            1387,
                            425,
                            "easeOutQuart",
                            "${bubbleCopy9}",
                            '1046px',
                            '777px'
                        ],
                        [
                            "eid52",
                            "left",
                            0,
                            1250,
                            "easeOutQuart",
                            "${hao}",
                            '857px',
                            '828px'
                        ],
                        [
                            "eid2",
                            "top",
                            448,
                            354,
                            "easeOutQuart",
                            "${bubbleCopy4}",
                            '1061px',
                            '1079px'
                        ],
                        [
                            "eid11",
                            "top",
                            802,
                            646,
                            "easeOutQuart",
                            "${bubbleCopy4}",
                            '1079px',
                            '237px'
                        ],
                        [
                            "eid124",
                            "top",
                            2358,
                            229,
                            "easeInQuint",
                            "${welcome4}",
                            '278px',
                            '49px'
                        ],
                        [
                            "eid56",
                            "left",
                            291,
                            1394,
                            "easeOutQuart",
                            "${Alex}",
                            '1398px',
                            '1119px'
                        ],
                        [
                            "eid47",
                            "opacity",
                            1937,
                            166,
                            "easeOutQuart",
                            "${_2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid50",
                            "left",
                            159,
                            1377,
                            "easeOutQuart",
                            "${ChengCheng}",
                            '1394px',
                            '941px'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2000,
                            166,
                            "easeOutQuart",
                            "${_3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17",
                            "top",
                            710,
                            881,
                            "easeOutQuart",
                            "${bubbleCopy}",
                            '1055px',
                            '595px'
                        ],
                        [
                            "eid147",
                            "top",
                            2166,
                            834,
                            "easeOutQuart",
                            "${Text4}",
                            '971px',
                            '835px'
                        ],
                            [ "eid141", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bubbles2}', [] ] ]
                    ]
                }
            },
            "bubbles": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '21px', '60px', '60px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(194,222,222,1)']
                        },
                        {
                            rect: [342, 1201, 80, 80, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(194,222,222,1)']
                        },
                        {
                            rect: [400, 1051, 45, 45, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(194,222,222,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 214, 230]
                        }
                    }
                },
                timeline: {
                    duration: 5163,
                    autoPlay: true,
                    labels: {
                        "start": 3000
                    },
                    data: [
                        [
                            "eid138",
                            "location",
                            3000,
                            1163,
                            "easeOutQuart",
                            "${Ellipse3}",
                            [[30, 51, 0, 0, 0, 0,0],[-38.91, -241.95, 2.35, -357.64, 3.33, -505.79,303.69],[103.15, -629.3, 68.23, -801.06, 34.53, -405.39,719.41],[37.89, -1147.44, 0, 0, 0, 0,1244.85]]
                        ],
                        [
                            "eid140",
                            "location",
                            4163,
                            1000,
                            "easeOutQuart",
                            "${Ellipse3Copy}",
                            [[151, 190, 0, 0, 0, 0,0],[204.42, -139.09, -162.57, -594.77, -130.86, -478.77,340.87],[131.01, -797.63, -350.01, -439.22, -604.91, -759.09,1025.53],[167, -1137, 0, 0, 0, 0,1392.97]]
                        ],
                        [
                            "eid139",
                            "location",
                            3413,
                            1250,
                            "easeOutQuart",
                            "${Ellipse3Copy2}",
                            [[191.5, 22.5, 0, 0, 0, 0,0],[149.97, -200.72, 222.16, -1191.35, 71.98, -386.02,232.13],[217.5, -1301.95, 0, 0, 0, 0,1336.7]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("title%20page_edgeActions.js");
})("EDGE-41125858");
