/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'comfortaa, sans-serif': '<script src=\"http://use.edgefonts.net/comfortaa:n4,n3,n7:all.js\"></script>',
            'aubrey, sans-serif': '<script src=\"http://use.edgefonts.net/aubrey:n4:all.js\"></script>',
            'courier-prime, monospace': '<script src=\"http://use.edgefonts.net/courier-prime:i7,n7,i4,n4:all.js\"></script>'        },
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
                            id: 'background',
                            type: 'image',
                            rect: ['0', '-165', '1300', '976', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/background.svg','0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['96', '9', '1115', '596px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgba(72,164,168,0.99)","solid"]
                        },
                        {
                            id: 'panini_question',
                            type: 'image',
                            rect: ['52', '253', '339', '186', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/panini_question.svg','0px','0px'],
                            transform: [[],[],[],['1.99','1.99']]
                        },
                        {
                            id: 'timer',
                            type: 'image',
                            rect: ['162px', '123px', '114', '72', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/timer.svg','0px','0px'],
                            transform: [[],[],[],['1.99','1.99']]
                        },
                        {
                            id: 'title2',
                            type: 'image',
                            rect: ['104', '34', '244', '96', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/title.svg','0px','0px'],
                            transform: [[],[],[],['1.99','1.99']]
                        },
                        {
                            id: 'how_to_play2',
                            type: 'image',
                            rect: ['164', '509', '110', '57', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/how%20to%20play.svg','0px','0px'],
                            transform: [[],[],[],['1.99','1.99']]
                        },
                        {
                            id: 'new_game',
                            type: 'image',
                            rect: ['174', '447', '91', '64', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/new%20game.svg','0px','0px'],
                            transform: [[],[],[],['1.99','1.99']]
                        },
                        {
                            id: 'heart_black',
                            type: 'image',
                            rect: ['129', '184', '64px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/heart_black.png','0px','0px']
                        },
                        {
                            id: 'heart_blackCopy',
                            type: 'image',
                            rect: ['188', '184', '64px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/heart_black.png','0px','0px']
                        },
                        {
                            id: 'heart_blackCopy2',
                            type: 'image',
                            rect: ['250', '184', '64px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/heart_black.png','0px','0px']
                        },
                        {
                            id: 'heart_red',
                            type: 'image',
                            rect: ['129', '184', '64px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/heart_red.png','0px','0px']
                        },
                        {
                            id: 'heart_redCopy3',
                            type: 'image',
                            rect: ['250', '184', '64px', '64px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'source/heart_red.png','0px','0px']
                        },
                        {
                            id: 'heart_redCopy',
                            type: 'image',
                            rect: ['189', '184', '64px', '64px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/heart_red.png','0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['332', '52', '824', '500', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [4,"rgba(191,192,194,1.00)","solid"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['129', '455', '181', '44', 'auto', 'auto'],
                            opacity: '0.34',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [4,"rgb(191, 192, 194)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['435', '140', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "To start the game, you can click",
                            font: ['comfortaa, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['910', '140', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "New Game",
                            align: "left",
                            font: ['comfortaa, sans-serif', [30, ""], "rgba(252,0,0,0.99)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['545', '216', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Or press the",
                            font: ['comfortaa, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['744', '214', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0.000000',
                            text: "Space bar<br>",
                            align: "left",
                            font: ['comfortaa, sans-serif', [30, ""], "rgba(252,0,0,0.9922)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['340', '144', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "This waffle cake<br> represents <br>",
                            align: "left",
                            font: ['comfortaa, sans-serif', [25, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['342', '216', '181', '141', 'auto', 'auto'],
                            opacity: '0',
                            text: "a 2D array",
                            align: "left",
                            font: ['comfortaa, sans-serif', [32, "px"], "rgba(252,0,0,0.99)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'computer',
                            type: 'image',
                            rect: ['830', '180', '317', '333', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/computer.svg','0px','0px']
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['934', '375px', '92', '17', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(252,97,97,0.99)"],
                            stroke: [4,"rgb(191, 192, 194)","none"]
                        },
                        {
                            id: 'star',
                            type: 'image',
                            rect: ['600', '415', '41', '45', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/star.svg','0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'pointerCopy',
                            type: 'image',
                            rect: ['319', '181', '71', '268', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/pointer.png','0px','0px'],
                            transform: [[],['-212']]
                        },
                        {
                            id: 'question',
                            type: 'text',
                            rect: ['345', '239', '200', '188', 'auto', 'auto'],
                            opacity: '0',
                            text: "Put bluberry at this position",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'questionCopy',
                            type: 'text',
                            rect: ['968', '375', '200', '188', 'auto', 'auto'],
                            opacity: '0',
                            text: "Use your mouse to move the blueberry",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'pointerCopy3',
                            type: 'image',
                            rect: ['303', '130', '71', '268', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/pointer.png','0px','0px'],
                            transform: [[],['-125']]
                        },
                        {
                            id: 'pointerCopy4',
                            type: 'image',
                            rect: ['353', '23', '71', '268', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/pointer.png','0px','0px'],
                            transform: [[],['-186']]
                        },
                        {
                            id: 'Text14Copy',
                            type: 'text',
                            rect: ['397', '292', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Be careful! You have three lives, so<br>if you put blueberry at a wrong position<br>for 3 times, you lose! ",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text14Copy2',
                            type: 'text',
                            rect: ['425', '-28', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Also, you have 30 seconds to put blue berry <br>at the correct place!",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text16',
                            type: 'text',
                            rect: ['379', '170', '1697', '356', 'auto', 'auto'],
                            opacity: '0',
                            text: "You can click \"New Game\" again to start another new game",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,0.99)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Text17',
                            type: 'text',
                            rect: ['484', '291', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Click ",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text17Copy',
                            type: 'text',
                            rect: ['613', '291', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "to watch again or click \"Go Back\" buttom",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'goback',
                            type: 'image',
                            rect: ['1031', '565', '127', '38', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'source/goback.svg','0px','0px']
                        },
                        {
                            id: 'pause',
                            type: 'group',
                            rect: ['1068', '70', '21', '28', 'auto', 'auto'],
                            cursor: 'pointer',
                            c: [
                            {
                                id: 'pause_2',
                                type: 'rect',
                                rect: ['0', '0', '0px', '20px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [4,"rgba(40,196,236,0.99)","solid"]
                            },
                            {
                                id: 'pause_1',
                                type: 'rect',
                                rect: ['13', '0', '0px', '20px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [4,"rgba(40,196,236,0.99)","solid"]
                            }]
                        },
                        {
                            id: 'stop',
                            type: 'rect',
                            rect: ['1110', '72', '16', '16', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(252,184,16,0.99)"],
                            stroke: [4,"rgba(252,184,16,0.99)","solid"]
                        },
                        {
                            id: 'row',
                            symbolName: 'row',
                            type: 'rect',
                            rect: ['629', '84', '248', '28', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['523', '164', '32', '32', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgba(252,0,62,0.99)","solid"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['616', '78', '32', '32', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgba(252, 0, 62, 0.992157)","solid"]
                        },
                        {
                            id: 'Waffle',
                            type: 'image',
                            rect: ['543', '95', '421', '440', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/Waffle.png','0px','0px']
                        },
                        {
                            id: 'blueberry',
                            type: 'image',
                            rect: ['1015', '476', '60', '58', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/blueberry.png','0px','0px']
                        },
                        {
                            id: 'mouse',
                            type: 'image',
                            rect: ['253', '458', '79', '59', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'source/mouse.svg','0px','0px']
                        },
                        {
                            id: 'mouseCopy',
                            type: 'image',
                            rect: ['266', '451', '79', '59', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/mouse.svg','0px','0px']
                        },
                        {
                            id: 'column',
                            symbolName: 'column',
                            type: 'rect',
                            rect: ['536', '172', '23', '283', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'star2',
                            symbolName: 'star',
                            type: 'rect',
                            rect: ['689', '195', '243', '138', 'auto', 'auto']
                        },
                        {
                            id: 'win',
                            type: 'text',
                            rect: ['759', '235', 'auto', '46', 'auto', 'auto'],
                            opacity: '0',
                            text: "Win!!<br>",
                            align: "left",
                            font: ['comfortaa, sans-serif', [31, "px"], "rgba(188,28,44,0.99)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'play2',
                            type: 'image',
                            rect: ['536', '268', '77', '78', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/play.svg','0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1300', '645', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 40369,
                    autoPlay: true,
                    data: [
                        [
                            "eid235",
                            "left",
                            20036,
                            282,
                            "linear",
                            "${pointerCopy}",
                            '319px',
                            '302px'
                        ],
                        [
                            "eid237",
                            "left",
                            20317,
                            228,
                            "linear",
                            "${pointerCopy}",
                            '302px',
                            '319px'
                        ],
                        [
                            "eid240",
                            "left",
                            20545,
                            245,
                            "linear",
                            "${pointerCopy}",
                            '319px',
                            '297px'
                        ],
                        [
                            "eid590",
                            "opacity",
                            22500,
                            250,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid656",
                            "opacity",
                            29250,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid619",
                            "left",
                            23000,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '523px',
                            '521px'
                        ],
                        [
                            "eid516",
                            "left",
                            7000,
                            1000,
                            "linear",
                            "${Waffle}",
                            '543px',
                            '643px'
                        ],
                        [
                            "eid531",
                            "left",
                            10500,
                            1000,
                            "linear",
                            "${Waffle}",
                            '643px',
                            '537px'
                        ],
                        [
                            "eid429",
                            "opacity",
                            37000,
                            563,
                            "linear",
                            "${Text16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid738",
                            "opacity",
                            38548,
                            702,
                            "linear",
                            "${Text16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid242",
                            "opacity",
                            20000,
                            36,
                            "linear",
                            "${pointerCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid244",
                            "opacity",
                            25750,
                            454,
                            "linear",
                            "${pointerCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid503",
                            "opacity",
                            39869,
                            500,
                            "linear",
                            "${Text17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1881,
                            619,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid622",
                            "left",
                            24000,
                            500,
                            "linear",
                            "${Rectangle3Copy}",
                            '616px',
                            '669px'
                        ],
                        [
                            "eid623",
                            "left",
                            24500,
                            555,
                            "linear",
                            "${Rectangle3Copy}",
                            '669px',
                            '724px'
                        ],
                        [
                            "eid624",
                            "left",
                            25055,
                            572,
                            "linear",
                            "${Rectangle3Copy}",
                            '724px',
                            '788px'
                        ],
                        [
                            "eid310",
                            "left",
                            30330,
                            234,
                            "linear",
                            "${pointerCopy3}",
                            '303px',
                            '314px'
                        ],
                        [
                            "eid311",
                            "left",
                            30564,
                            251,
                            "linear",
                            "${pointerCopy3}",
                            '314px',
                            '289px'
                        ],
                        [
                            "eid312",
                            "left",
                            30815,
                            269,
                            "linear",
                            "${pointerCopy3}",
                            '289px',
                            '314px'
                        ],
                        [
                            "eid584",
                            "top",
                            21767,
                            733,
                            "linear",
                            "${blueberry}",
                            '476px',
                            '157px'
                        ],
                        [
                            "eid606",
                            "top",
                            23000,
                            500,
                            "linear",
                            "${blueberry}",
                            '157px',
                            '214px'
                        ],
                        [
                            "eid608",
                            "top",
                            23500,
                            437,
                            "linear",
                            "${blueberry}",
                            '214px',
                            '282px'
                        ],
                        [
                            "eid611",
                            "top",
                            23937,
                            563,
                            "linear",
                            "${blueberry}",
                            '282px',
                            '281px'
                        ],
                        [
                            "eid236",
                            "top",
                            20036,
                            282,
                            "linear",
                            "${pointerCopy}",
                            '181px',
                            '201px'
                        ],
                        [
                            "eid238",
                            "top",
                            20317,
                            228,
                            "linear",
                            "${pointerCopy}",
                            '201px',
                            '181px'
                        ],
                        [
                            "eid239",
                            "top",
                            20545,
                            245,
                            "linear",
                            "${pointerCopy}",
                            '181px',
                            '199px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            874,
                            248,
                            "linear",
                            "${Rectangle2}",
                            '0.34',
                            '0.57291666666667'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1122,
                            225,
                            "linear",
                            "${Rectangle2}",
                            '0.57291666666667',
                            '0.34'
                        ],
                        [
                            "eid7",
                            "opacity",
                            1348,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0.34',
                            '0.57291666666667'
                        ],
                        [
                            "eid9",
                            "opacity",
                            1348,
                            265,
                            "linear",
                            "${Rectangle2}",
                            '0.34',
                            '0.57291666666667'
                        ],
                        [
                            "eid10",
                            "opacity",
                            1613,
                            310,
                            "linear",
                            "${Rectangle2}",
                            '0.57291666666667',
                            '0.34'
                        ],
                        [
                            "eid65",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${Rectangle2}",
                            '0.340000',
                            '0'
                        ],
                        [
                            "eid689",
                            "opacity",
                            37500,
                            248,
                            "linear",
                            "${Rectangle2}",
                            '0.34',
                            '0.57291666666667'
                        ],
                        [
                            "eid690",
                            "opacity",
                            37748,
                            225,
                            "linear",
                            "${Rectangle2}",
                            '0.57291666666667',
                            '0.34'
                        ],
                        [
                            "eid687",
                            "opacity",
                            37973,
                            265,
                            "linear",
                            "${Rectangle2}",
                            '0.34',
                            '0.57291666666667'
                        ],
                        [
                            "eid688",
                            "opacity",
                            38238,
                            310,
                            "linear",
                            "${Rectangle2}",
                            '0.57291666666667',
                            '0.34'
                        ],
                        [
                            "eid755",
                            "opacity",
                            38548,
                            202,
                            "linear",
                            "${Rectangle2}",
                            '0.340000',
                            '0'
                        ],
                        [
                            "eid640",
                            "scaleY",
                            26118,
                            1006,
                            "linear",
                            "${win}",
                            '1',
                            '6.26'
                        ],
                        [
                            "eid169",
                            "opacity",
                            19000,
                            21,
                            "linear",
                            "${star}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid329",
                            "opacity",
                            32546,
                            409,
                            "linear",
                            "${Text14Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid342",
                            "opacity",
                            36161,
                            469,
                            "linear",
                            "${Text14Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "opacity",
                            4882,
                            250,
                            "linear",
                            "${Rectangle4}",
                            '0.018451473577236',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            5132,
                            250,
                            "linear",
                            "${Rectangle4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            5382,
                            250,
                            "linear",
                            "${Rectangle4}",
                            '0.018451473577236',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${Rectangle4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid501",
                            "opacity",
                            39869,
                            500,
                            "linear",
                            "${play2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid659",
                            "opacity",
                            29250,
                            500,
                            "linear",
                            "${row}",
                            '1',
                            '0'
                        ],
                        [
                            "eid333",
                            "opacity",
                            31295,
                            64,
                            "linear",
                            "${pointerCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            36161,
                            469,
                            "linear",
                            "${pointerCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid327",
                            "top",
                            32546,
                            409,
                            "linear",
                            "${Text14Copy2}",
                            '-28px',
                            '111px'
                        ],
                        [
                            "eid583",
                            "left",
                            21767,
                            733,
                            "linear",
                            "${blueberry}",
                            '1015px',
                            '597px'
                        ],
                        [
                            "eid610",
                            "left",
                            23937,
                            563,
                            "linear",
                            "${blueberry}",
                            '597px',
                            '656px'
                        ],
                        [
                            "eid613",
                            "left",
                            24500,
                            555,
                            "linear",
                            "${blueberry}",
                            '656px',
                            '718px'
                        ],
                        [
                            "eid615",
                            "left",
                            25055,
                            572,
                            "linear",
                            "${blueberry}",
                            '718px',
                            '768px'
                        ],
                        [
                            "eid181",
                            "left",
                            19014,
                            422,
                            "linear",
                            "${star}",
                            '600px',
                            '-152px'
                        ],
                        [
                            "eid566",
                            "-webkit-transform-origin",
                            16000,
                            0,
                            "linear",
                            "${mouse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid826",
                            "-moz-transform-origin",
                            16000,
                            0,
                            "linear",
                            "${mouse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid827",
                            "-ms-transform-origin",
                            16000,
                            0,
                            "linear",
                            "${mouse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid828",
                            "msTransformOrigin",
                            16000,
                            0,
                            "linear",
                            "${mouse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid829",
                            "-o-transform-origin",
                            16000,
                            0,
                            "linear",
                            "${mouse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid830",
                            "transform-origin",
                            16000,
                            0,
                            "linear",
                            "${mouse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid657",
                            "opacity",
                            29250,
                            500,
                            "linear",
                            "${column}",
                            '1',
                            '0'
                        ],
                        [
                            "eid642",
                            "opacity",
                            25750,
                            132,
                            "linear",
                            "${win}",
                            '0',
                            '1'
                        ],
                        [
                            "eid641",
                            "opacity",
                            25882,
                            0,
                            "linear",
                            "${win}",
                            '1',
                            '1'
                        ],
                        [
                            "eid684",
                            "opacity",
                            26118,
                            1006,
                            "linear",
                            "${win}",
                            '1',
                            '0'
                        ],
                        [
                            "eid99",
                            "opacity",
                            8250,
                            1000,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid530",
                            "opacity",
                            10750,
                            750,
                            "linear",
                            "${Text8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid513",
                            "opacity",
                            6500,
                            500,
                            "linear",
                            "${blueberry}",
                            '0',
                            '1'
                        ],
                        [
                            "eid660",
                            "opacity",
                            29250,
                            500,
                            "linear",
                            "${blueberry}",
                            '1',
                            '0'
                        ],
                        [
                            "eid638",
                            "opacity",
                            25627,
                            123,
                            "linear",
                            "${mouse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            30250,
                            80,
                            "linear",
                            "${pointerCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            34833,
                            917,
                            "linear",
                            "${pointerCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid521",
                            "left",
                            8250,
                            1000,
                            "linear",
                            "${Text7}",
                            '340px',
                            '435px'
                        ],
                        [
                            "eid592",
                            "opacity",
                            22500,
                            250,
                            "linear",
                            "${Rectangle3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid655",
                            "opacity",
                            29250,
                            500,
                            "linear",
                            "${Rectangle3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid524",
                            "top",
                            10750,
                            750,
                            "linear",
                            "${Text7}",
                            '144px',
                            '-241px'
                        ],
                        [
                            "eid522",
                            "left",
                            8250,
                            1000,
                            "linear",
                            "${Text8}",
                            '342px',
                            '437px'
                        ],
                        [
                            "eid303",
                            "opacity",
                            29750,
                            882,
                            "linear",
                            "${Text14Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "opacity",
                            34833,
                            917,
                            "linear",
                            "${Text14Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid587",
                            "left",
                            22500,
                            0,
                            "linear",
                            "${column}",
                            '536px',
                            '536px'
                        ],
                        [
                            "eid182",
                            "top",
                            19009,
                            422,
                            "linear",
                            "${star}",
                            '415px',
                            '-167px'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1881,
                            619,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid325",
                            "left",
                            32546,
                            409,
                            "linear",
                            "${Text14Copy2}",
                            '425px',
                            '424px'
                        ],
                        [
                            "eid639",
                            "scaleX",
                            26118,
                            1006,
                            "linear",
                            "${win}",
                            '1',
                            '6.26'
                        ],
                        [
                            "eid515",
                            "opacity",
                            6500,
                            500,
                            "linear",
                            "${Waffle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid658",
                            "opacity",
                            29250,
                            500,
                            "linear",
                            "${Waffle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid568",
                            "location",
                            16000,
                            2000,
                            "linear",
                            "${mouse}",
                            [[292.5, 487.5, 0, 0, 0, 0,0],[1067.5, 513.5, 0, 0, 0, 0,775.44]]
                        ],
                        [
                            "eid582",
                            "location",
                            21767,
                            733,
                            "linear",
                            "${mouse}",
                            [[1067.5, 513.5, 0, 0, 0, 0,0],[649.5, 194.5, 0, 0, 0, 0,525.82]]
                        ],
                        [
                            "eid607",
                            "location",
                            23000,
                            500,
                            "linear",
                            "${mouse}",
                            [[649.5, 194.5, 0, 0, 0, 0,0],[649.5, 251.5, 0, 0, 0, 0,57]]
                        ],
                        [
                            "eid609",
                            "location",
                            23500,
                            437,
                            "linear",
                            "${mouse}",
                            [[649.5, 251.5, 0, 0, 0, 0,0],[649.52, 319.5, 0, 0, 0, 0,68]]
                        ],
                        [
                            "eid612",
                            "location",
                            23937,
                            563,
                            "linear",
                            "${mouse}",
                            [[649.52, 319.5, 0, 0, 0, 0,0],[708.5, 318.5, 0, 0, 0, 0,58.99]]
                        ],
                        [
                            "eid614",
                            "location",
                            24500,
                            555,
                            "linear",
                            "${mouse}",
                            [[708.5, 318.5, 0, 0, 0, 0,0],[770.52, 318.5, 0, 0, 0, 0,62.02]]
                        ],
                        [
                            "eid616",
                            "location",
                            25055,
                            572,
                            "linear",
                            "${mouse}",
                            [[770.52, 318.5, 0, 0, 0, 0,0],[820.5, 318.5, 0, 0, 0, 0,49.98]]
                        ],
                        [
                            "eid581",
                            "opacity",
                            19250,
                            750,
                            "linear",
                            "${question}",
                            '0',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            25750,
                            454,
                            "linear",
                            "${question}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "opacity",
                            3250,
                            1101,
                            "linear",
                            "${Text2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${Text2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid98",
                            "opacity",
                            8250,
                            1000,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid529",
                            "opacity",
                            10750,
                            750,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid331",
                            "left",
                            31295,
                            274,
                            "linear",
                            "${pointerCopy4}",
                            '353px',
                            '337px'
                        ],
                        [
                            "eid334",
                            "left",
                            31569,
                            327,
                            "linear",
                            "${pointerCopy4}",
                            '337px',
                            '324px'
                        ],
                        [
                            "eid336",
                            "left",
                            31896,
                            292,
                            "linear",
                            "${pointerCopy4}",
                            '324px',
                            '343px'
                        ],
                        [
                            "eid338",
                            "left",
                            32188,
                            358,
                            "linear",
                            "${pointerCopy4}",
                            '343px',
                            '343px'
                        ],
                        [
                            "eid24",
                            "opacity",
                            4250,
                            632,
                            "linear",
                            "${computer}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${computer}",
                            '1',
                            '0'
                        ],
                        [
                            "eid620",
                            "top",
                            23000,
                            500,
                            "linear",
                            "${Rectangle3}",
                            '164px',
                            '237px'
                        ],
                        [
                            "eid621",
                            "top",
                            23500,
                            437,
                            "linear",
                            "${Rectangle3}",
                            '237px',
                            '286px'
                        ],
                        [
                            "eid580",
                            "opacity",
                            18545,
                            455,
                            "linear",
                            "${questionCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid625",
                            "opacity",
                            25750,
                            454,
                            "linear",
                            "${questionCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid526",
                            "top",
                            10750,
                            750,
                            "linear",
                            "${Text8}",
                            '216px',
                            '-169px'
                        ],
                        [
                            "eid691",
                            "opacity",
                            37000,
                            500,
                            "linear",
                            "${mouseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid754",
                            "opacity",
                            39000,
                            500,
                            "linear",
                            "${mouseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            3250,
                            1101,
                            "linear",
                            "${TextCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            6250,
                            250,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid305",
                            "top",
                            30330,
                            234,
                            "linear",
                            "${pointerCopy3}",
                            '130px',
                            '152px'
                        ],
                        [
                            "eid306",
                            "top",
                            30564,
                            251,
                            "linear",
                            "${pointerCopy3}",
                            '152px',
                            '120px'
                        ],
                        [
                            "eid307",
                            "top",
                            30815,
                            269,
                            "linear",
                            "${pointerCopy3}",
                            '120px',
                            '145px'
                        ],
                        [
                            "eid499",
                            "opacity",
                            39869,
                            500,
                            "linear",
                            "${Text17Copy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "flowers": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'flower',
                            type: 'image',
                            rect: [0, 23, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            id: 'flowerCopy',
                            type: 'image',
                            rect: [93, 44, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            id: 'flowerCopy2',
                            type: 'image',
                            rect: [204, 0, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            id: 'flowerCopy3',
                            type: 'image',
                            rect: [384, 7, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            id: 'flowerCopy4',
                            type: 'image',
                            rect: [491, 50, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            id: 'flowerCopy5',
                            type: 'image',
                            rect: [300, 44, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 541, 100]
                        }
                    }
                },
                timeline: {
                    duration: 49648,
                    autoPlay: true,
                    data: [
                        [
                            "eid493",
                            "top",
                            48664,
                            836,
                            "linear",
                            "${flower}",
                            '23px',
                            '836px'
                        ],
                        [
                            "eid495",
                            "top",
                            48500,
                            901,
                            "linear",
                            "${flowerCopy5}",
                            '44px',
                            '857px'
                        ],
                        [
                            "eid488",
                            "left",
                            47907,
                            933,
                            "linear",
                            "${flowerCopy}",
                            '93px',
                            '92px'
                        ],
                        [
                            "eid489",
                            "top",
                            47907,
                            933,
                            "linear",
                            "${flowerCopy}",
                            '44px',
                            '857px'
                        ],
                        [
                            "eid494",
                            "left",
                            48500,
                            901,
                            "linear",
                            "${flowerCopy5}",
                            '300px',
                            '299px'
                        ],
                        [
                            "eid492",
                            "left",
                            48664,
                            836,
                            "linear",
                            "${flower}",
                            '0px',
                            '-1px'
                        ],
                        [
                            "eid491",
                            "top",
                            48250,
                            750,
                            "linear",
                            "${flowerCopy3}",
                            '7px',
                            '820px'
                        ],
                        [
                            "eid490",
                            "left",
                            48250,
                            750,
                            "linear",
                            "${flowerCopy3}",
                            '384px',
                            '383px'
                        ],
                        [
                            "eid497",
                            "top",
                            48500,
                            901,
                            "linear",
                            "${flowerCopy2}",
                            '0px',
                            '813px'
                        ],
                        [
                            "eid496",
                            "left",
                            48500,
                            901,
                            "linear",
                            "${flowerCopy2}",
                            '204px',
                            '203px'
                        ],
                        [
                            "eid487",
                            "top",
                            48841,
                            807,
                            "linear",
                            "${flowerCopy4}",
                            '50px',
                            '863px'
                        ],
                        [
                            "eid486",
                            "left",
                            48841,
                            807,
                            "linear",
                            "${flowerCopy4}",
                            '491px',
                            '490px'
                        ]
                    ]
                }
            },
            "row": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['comfortaa, sans-serif', [23, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_c_0',
                            text: '0  ',
                            opacity: '0',
                            rect: [0, 0, 21, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_c_1',
                            text: '1<br>',
                            opacity: '0',
                            rect: [56, 0, 21, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_c_3',
                            text: '3',
                            opacity: '0',
                            rect: [172, 0, 25, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_c_4',
                            text: '4',
                            opacity: '0',
                            rect: [227, 0, 21, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_c_2',
                            text: '2',
                            opacity: '0',
                            rect: [108, 0, 21, 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 248, 28]
                        }
                    }
                },
                timeline: {
                    duration: 13500,
                    autoPlay: true,
                    data: [
                        [
                            "eid537",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${waffle_c_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid535",
                            "opacity",
                            12750,
                            500,
                            "linear",
                            "${waffle_c_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid543",
                            "opacity",
                            13000,
                            500,
                            "linear",
                            "${waffle_c_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid539",
                            "opacity",
                            12000,
                            500,
                            "linear",
                            "${waffle_c_0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid541",
                            "opacity",
                            12500,
                            500,
                            "linear",
                            "${waffle_c_2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "column": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['comfortaa, sans-serif', [23, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_r_0',
                            text: '0',
                            opacity: '0',
                            rect: [0, 0, 23, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_r_1',
                            text: '1',
                            opacity: '0',
                            rect: [0, 62, 23, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_r_2',
                            text: '2',
                            opacity: '0',
                            rect: [0, 122, 23, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_r_3',
                            text: '3',
                            opacity: '0',
                            rect: [0, 185, 23, 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['comfortaa, sans-serif', [23, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', ''],
                            type: 'text',
                            align: 'left',
                            id: 'waffle_r_4',
                            text: '4',
                            opacity: '0',
                            rect: [0, 255, 23, 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 23, 283]
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    data: [
                        [
                            "eid561",
                            "opacity",
                            14250,
                            750,
                            "linear",
                            "${waffle_r_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid559",
                            "opacity",
                            13250,
                            750,
                            "linear",
                            "${waffle_r_0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "opacity",
                            14000,
                            750,
                            "linear",
                            "${waffle_r_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid563",
                            "opacity",
                            13750,
                            750,
                            "linear",
                            "${waffle_r_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "opacity",
                            13500,
                            750,
                            "linear",
                            "${waffle_r_1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "star": {
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
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'starCopy',
                            opacity: '0.000000',
                            rect: ['100px', '-2px', 41, 45, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/star.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'starCopy3',
                            opacity: '0.000000',
                            rect: [2, 94, 41, 45, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/star.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'starCopy2',
                            opacity: '0.000000',
                            rect: [170, 32, 41, 45, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/star.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            id: 'starCopy4',
                            opacity: '0.000000',
                            rect: [200, 95, 41, 45, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/star.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 243, 138]
                        }
                    }
                },
                timeline: {
                    duration: 26640,
                    autoPlay: true,
                    data: [
                        [
                            "eid179",
                            "left",
                            26257,
                            382,
                            "linear",
                            "${starCopy4}",
                            '200px',
                            '888px'
                        ],
                        [
                            "eid170",
                            "opacity",
                            26204,
                            53,
                            "linear",
                            "${starCopy4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            26204,
                            21,
                            "linear",
                            "${starCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid183",
                            "left",
                            26225,
                            415,
                            "linear",
                            "${starCopy3}",
                            '2px',
                            '-754px'
                        ],
                        [
                            "eid184",
                            "top",
                            26225,
                            415,
                            "linear",
                            "${starCopy3}",
                            '94px',
                            '89px'
                        ],
                        [
                            "eid176",
                            "location",
                            26217,
                            422,
                            "linear",
                            "${starCopy}",
                            [[120.5, 20.5, 0, 0, 0, 0,0],[89.5, -551.5, 0, 0, 0, 0,572.84]]
                        ],
                        [
                            "eid180",
                            "top",
                            26257,
                            382,
                            "linear",
                            "${starCopy4}",
                            '95px',
                            '-180px'
                        ],
                        [
                            "eid171",
                            "opacity",
                            26204,
                            21,
                            "linear",
                            "${starCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid178",
                            "left",
                            26237,
                            403,
                            "linear",
                            "${starCopy2}",
                            '170px',
                            '821px'
                        ],
                        [
                            "eid168",
                            "opacity",
                            26204,
                            33,
                            "linear",
                            "${starCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid177",
                            "top",
                            26237,
                            403,
                            "linear",
                            "${starCopy2}",
                            '32px',
                            '-444px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("array_game_instruction_edgeActions.js");
})("EDGE-345301125");
