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
                            rect: ['164', '258', '113', '171', 'auto', 'auto'],
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
                            id: 'bottom-bread',
                            type: 'image',
                            rect: ['676', '460', '125', '83', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/bottom-bread.png','0px','0px']
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
                            id: 'mouse',
                            type: 'image',
                            rect: ['706', '276', '79', '59', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/mouse.svg','0px','0px']
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['415', '415', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "After start the game, foods contain random JAVA code will fall... ",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['418', '373', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Use your",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text7Copy',
                            type: 'text',
                            rect: ['617', '375', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "to move the bottom burger bread...",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['524', '372', 'auto', '20', 'auto', 'auto'],
                            opacity: '0',
                            text: "mouse",
                            align: "left",
                            font: ['comfortaa, sans-serif', [26, "px"], "rgba(252,0,0,0.99)", "400", "none", "normal", "break-word", ""]
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
                            id: 'lettuce3',
                            type: 'image',
                            rect: ['625', '-92', '120', '50', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/lettuce.png','0px','0px']
                        },
                        {
                            id: 'onion',
                            type: 'image',
                            rect: ['864', '-73', '117', '40', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/onion.png','0px','0px']
                        },
                        {
                            id: 'beef',
                            type: 'image',
                            rect: ['424', '-121', '149', '107', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'source/beef.png','0px','0px']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['452', '-106', 'auto', '19', 'auto', 'auto'],
                            opacity: '1',
                            text: "str = \"Hello Kitty!\";",
                            align: "left",
                            font: ['courier-prime, monospace', [15, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['641', '-115', 'auto', 'auto', 'auto', 'auto'],
                            text: "String str;",
                            align: "left",
                            font: ['courier-prime, monospace', [15, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['871', '-102', 'auto', 'auto', 'auto', 'auto'],
                            text: "System.out.print(str);",
                            align: "left",
                            font: ['courier-prime, monospace', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'beefCopy2',
                            type: 'image',
                            rect: ['617', '-124', '149', '107', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/beef.png','0px','0px']
                        },
                        {
                            id: 'Text4Copy2',
                            type: 'text',
                            rect: ['642', '-103', 'auto', 'auto', 'auto', 'auto'],
                            text: "str = \"Hello World!\";",
                            align: "left",
                            font: ['courier-prime, monospace', [15, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
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
                            id: 'Text9',
                            type: 'text',
                            rect: ['351', '68', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "String str;",
                            align: "left",
                            font: ['comfortaa, sans-serif', [16, ""], "rgba(188,28,44,0.99)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text9Copy',
                            type: 'text',
                            rect: ['351', '90', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "str = \"Hello World!\";",
                            align: "left",
                            font: ['comfortaa, sans-serif', [16, ""], "rgba(188,28,44,0.9922)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text9Copy2',
                            type: 'text',
                            rect: ['351', '112', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "System.out.print (str);",
                            align: "left",
                            font: ['comfortaa, sans-serif', [16, ""], "rgba(188,28,44,0.9961)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text9Copy3',
                            type: 'text',
                            rect: ['484', '253', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Congratulations! You win!",
                            align: "left",
                            font: ['comfortaa, sans-serif', [44, "px"], "rgba(227,68,84,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            transform: [[],[],[],['0.26','0.26']]
                        },
                        {
                            id: 'flowers',
                            symbolName: 'flowers',
                            type: 'rect',
                            rect: ['474', '-108', '541', '100', 'auto', 'auto']
                        },
                        {
                            id: 'starCopy',
                            type: 'image',
                            rect: ['667px', '380px', '41', '45', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/star.svg','0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'starCopy3',
                            type: 'image',
                            rect: ['569', '476', '41', '45', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/star.svg','0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'starCopy2',
                            type: 'image',
                            rect: ['737', '414', '41', '45', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/star.svg','0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'starCopy4',
                            type: 'image',
                            rect: ['767', '477', '41', '45', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",'source/star.svg','0px','0px'],
                            transform: [[],['90']]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['397', '300', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<br>You are required to collect codes in correct order <br>which put together will generate this output. ",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['630px', '387px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Cool!!<br>",
                            align: "left",
                            font: ['comfortaa, sans-serif', [45, "px"], "rgba(188,28,44,0.99)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'pointer',
                            type: 'image',
                            rect: ['431', '2', '71', '268', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/pointer.png','0px','0px'],
                            transform: [[],['-129']]
                        },
                        {
                            id: 'pointerCopy',
                            type: 'image',
                            rect: ['319', '181', '71', '268', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/pointer.png','0px','0px'],
                            transform: [[],['-219']]
                        },
                        {
                            id: 'Text13',
                            type: 'text',
                            rect: ['397', '193', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "If you catch the food with the correct code, its code appear here",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'cha',
                            type: 'image',
                            rect: ['442', '413', '119', '117', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/cha.svg','0px','0px']
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
                            rect: ['378', '294', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Be careful! You have three lives, so<br>if you catch 3 wrong code, you lose! ",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text14Copy2',
                            type: 'text',
                            rect: ['425', '-28', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Also, you have 3 minutes to get all the right codes.<br>If the timer become 00:00:00, you lose too!",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'onionCopy2',
                            type: 'image',
                            rect: ['517', '-79', '117', '40', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/onion.png','0px','0px']
                        },
                        {
                            id: 'Text5Copy2',
                            type: 'text',
                            rect: ['524', '-100', 'auto', 'auto', 'auto', 'auto'],
                            text: "System.out.print(str);",
                            align: "left",
                            font: ['courier-prime, monospace', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text16',
                            type: 'text',
                            rect: ['403', '211', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Wow we almost win! The last step is to catch <br>                      a top bread!",
                            align: "left",
                            font: ['comfortaa, sans-serif', [30, ""], "rgba(0,0,0,0.99)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'topbread',
                            type: 'image',
                            rect: ['839', '-130', '145', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'source/topbread.png','0px','0px']
                        },
                        {
                            id: 'Ellipse4',
                            type: 'ellipse',
                            rect: ['857px', '343', '122px', '56px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [4,"rgb(241, 14, 70)","solid"],
                            transform: [[],[],[],['1.35','1.35']]
                        },
                        {
                            id: 'Text17',
                            type: 'text',
                            rect: ['484', '329', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "Click ",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text17Copy',
                            type: 'text',
                            rect: ['613', '329', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "to watch again or click \"Go Back\" buttom",
                            align: "left",
                            font: ['comfortaa, sans-serif', [23, ""], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'play2',
                            type: 'image',
                            rect: ['536', '306', '77', '78', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'source/play.svg','0px','0px']
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
                            id: 'Group2',
                            type: 'group',
                            rect: ['1068', '70', '21', '28', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle6',
                                type: 'rect',
                                rect: ['0', '0', '0px', '20px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [4,"rgba(40,196,236,0.99)","solid"]
                            },
                            {
                                id: 'Rectangle6Copy',
                                type: 'rect',
                                rect: ['13', '0', '0px', '20px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [4,"rgba(40,196,236,0.99)","solid"]
                            }]
                        },
                        {
                            id: 'Rectangle7',
                            type: 'rect',
                            rect: ['1110', '72', '16', '16', 'auto', 'auto'],
                            fill: ["rgba(252,184,16,0.99)"],
                            stroke: [4,"rgba(252,184,16,0.99)","solid"]
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
                    duration: 50500,
                    autoPlay: true,
                    data: [
                        [
                            "eid235",
                            "left",
                            20830,
                            282,
                            "linear",
                            "${pointerCopy}",
                            '319px',
                            '302px'
                        ],
                        [
                            "eid237",
                            "left",
                            21111,
                            228,
                            "linear",
                            "${pointerCopy}",
                            '302px',
                            '319px'
                        ],
                        [
                            "eid240",
                            "left",
                            21339,
                            245,
                            "linear",
                            "${pointerCopy}",
                            '319px',
                            '297px'
                        ],
                        [
                            "eid130",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${Text3}",
                            '641px',
                            '641px'
                        ],
                        [
                            "eid268",
                            "left",
                            27000,
                            702,
                            "linear",
                            "${Text3}",
                            '641px',
                            '455px'
                        ],
                        [
                            "eid403",
                            "left",
                            40000,
                            2000,
                            "linear",
                            "${Text3}",
                            '452px',
                            '639px'
                        ],
                        [
                            "eid417",
                            "left",
                            43000,
                            2000,
                            "linear",
                            "${Text3}",
                            '639px',
                            '540px'
                        ],
                        [
                            "eid471",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${Text3}",
                            '540px',
                            '880px'
                        ],
                        [
                            "eid294",
                            "opacity",
                            28579,
                            1071,
                            "linear",
                            "${beef}",
                            '1',
                            '0'
                        ],
                        [
                            "eid444",
                            "scaleY",
                            45750,
                            416,
                            "linear",
                            "${Ellipse4}",
                            '1.35',
                            '1'
                        ],
                        [
                            "eid448",
                            "scaleY",
                            46166,
                            250,
                            "linear",
                            "${Ellipse4}",
                            '1.35',
                            '1'
                        ],
                        [
                            "eid429",
                            "opacity",
                            45186,
                            564,
                            "linear",
                            "${Text16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid479",
                            "opacity",
                            47500,
                            750,
                            "linear",
                            "${Text16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid206",
                            "top",
                            23179,
                            221,
                            "linear",
                            "${pointer}",
                            '2px',
                            '-22px'
                        ],
                        [
                            "eid208",
                            "top",
                            23400,
                            218,
                            "linear",
                            "${pointer}",
                            '-22px',
                            '2px'
                        ],
                        [
                            "eid210",
                            "top",
                            23618,
                            195,
                            "linear",
                            "${pointer}",
                            '2px',
                            '-22px'
                        ],
                        [
                            "eid171",
                            "opacity",
                            19000,
                            21,
                            "linear",
                            "${starCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid178",
                            "left",
                            19033,
                            403,
                            "linear",
                            "${starCopy2}",
                            '737px',
                            '1388px'
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
                            "eid226",
                            "opacity",
                            19000,
                            194,
                            "linear",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid227",
                            "opacity",
                            19194,
                            520,
                            "linear",
                            "${Text11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid230",
                            "top",
                            20208,
                            586,
                            "linear",
                            "${Text10}",
                            '300px',
                            '231px'
                        ],
                        [
                            "eid194",
                            "opacity",
                            19000,
                            431,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            1000,
                            "easeOutSine",
                            "${mouse}",
                            '276px',
                            '465px'
                        ],
                        [
                            "eid79",
                            "top",
                            11351,
                            899,
                            "linear",
                            "${mouse}",
                            '465px',
                            '484px'
                        ],
                        [
                            "eid501",
                            "opacity",
                            50000,
                            500,
                            "linear",
                            "${play2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid499",
                            "opacity",
                            50000,
                            500,
                            "linear",
                            "${Text17Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid67",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${Text3}",
                            '-115px',
                            '248px'
                        ],
                        [
                            "eid131",
                            "top",
                            17000,
                            2000,
                            "linear",
                            "${Text3}",
                            '248px',
                            '448px'
                        ],
                        [
                            "eid179",
                            "left",
                            19053,
                            382,
                            "linear",
                            "${starCopy4}",
                            '767px',
                            '1455px'
                        ],
                        [
                            "eid99",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${Text8}",
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
                            "eid453",
                            "top",
                            46750,
                            1250,
                            "linear",
                            "${Ellipse4}",
                            '343px',
                            '396px'
                        ],
                        [
                            "eid368",
                            "left",
                            19000,
                            23000,
                            "linear",
                            "${onion}",
                            '864px',
                            '854px'
                        ],
                        [
                            "eid134",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${Text4}",
                            '452px',
                            '452px'
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
                            "eid167",
                            "opacity",
                            19000,
                            21,
                            "linear",
                            "${starCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid257",
                            "top",
                            26306,
                            1396,
                            "linear",
                            "${beefCopy2}",
                            '-124px',
                            '184px'
                        ],
                        [
                            "eid371",
                            "top",
                            37500,
                            4500,
                            "linear",
                            "${beefCopy2}",
                            '184px',
                            '415px'
                        ],
                        [
                            "eid481",
                            "scaleX",
                            48370,
                            380,
                            "linear",
                            "${Text9Copy3}",
                            '0.26',
                            '1.02'
                        ],
                        [
                            "eid98",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid83",
                            "opacity",
                            9000,
                            1000,
                            "linear",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid485",
                            "opacity",
                            48370,
                            380,
                            "linear",
                            "${Text9Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "location",
                            19013,
                            422,
                            "linear",
                            "${starCopy}",
                            [[687.5, 402.5, 0, 0, 0, 0,0],[656.5, -169.5, 0, 0, 0, 0,572.84]]
                        ],
                        [
                            "eid180",
                            "top",
                            19053,
                            382,
                            "linear",
                            "${starCopy4}",
                            '477px',
                            '205px'
                        ],
                        [
                            "eid365",
                            "top",
                            37500,
                            4608,
                            "linear",
                            "${onionCopy2}",
                            '-79px',
                            '242px'
                        ],
                        [
                            "eid415",
                            "top",
                            42108,
                            2892,
                            "linear",
                            "${onionCopy2}",
                            '242px',
                            '438px'
                        ],
                        [
                            "eid427",
                            "scaleY",
                            45186,
                            564,
                            "linear",
                            "${Text16}",
                            '0.25',
                            '1'
                        ],
                        [
                            "eid66",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${lettuce3}",
                            '-92px',
                            '261px'
                        ],
                        [
                            "eid129",
                            "top",
                            17000,
                            2000,
                            "linear",
                            "${lettuce3}",
                            '261px',
                            '461px'
                        ],
                        [
                            "eid117",
                            "left",
                            14500,
                            1000,
                            "linear",
                            "${bottom-bread}",
                            '676px',
                            '493px'
                        ],
                        [
                            "eid119",
                            "left",
                            15500,
                            750,
                            "linear",
                            "${bottom-bread}",
                            '493px',
                            '757px'
                        ],
                        [
                            "eid121",
                            "left",
                            16250,
                            750,
                            "linear",
                            "${bottom-bread}",
                            '757px',
                            '672px'
                        ],
                        [
                            "eid141",
                            "left",
                            17250,
                            1750,
                            "linear",
                            "${bottom-bread}",
                            '672px',
                            '625px'
                        ],
                        [
                            "eid267",
                            "left",
                            27000,
                            702,
                            "linear",
                            "${bottom-bread}",
                            '625px',
                            '439px'
                        ],
                        [
                            "eid399",
                            "left",
                            40000,
                            2000,
                            "linear",
                            "${bottom-bread}",
                            '439px',
                            '613px'
                        ],
                        [
                            "eid418",
                            "left",
                            43000,
                            2000,
                            "linear",
                            "${bottom-bread}",
                            '613px',
                            '514px'
                        ],
                        [
                            "eid472",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${bottom-bread}",
                            '514px',
                            '854px'
                        ],
                        [
                            "eid259",
                            "top",
                            26306,
                            1396,
                            "linear",
                            "${Text4Copy2}",
                            '-103px',
                            '205px'
                        ],
                        [
                            "eid367",
                            "top",
                            37500,
                            4500,
                            "linear",
                            "${Text4Copy2}",
                            '205px',
                            '436px'
                        ],
                        [
                            "eid474",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${onionCopy2}",
                            '517px',
                            '857px'
                        ],
                        [
                            "eid359",
                            "top",
                            37500,
                            4500,
                            "linear",
                            "${topbread}",
                            '-130px',
                            '157px'
                        ],
                        [
                            "eid411",
                            "top",
                            42000,
                            3000,
                            "linear",
                            "${topbread}",
                            '157px',
                            '346px'
                        ],
                        [
                            "eid452",
                            "top",
                            46750,
                            1250,
                            "linear",
                            "${topbread}",
                            '346px',
                            '414px'
                        ],
                        [
                            "eid242",
                            "opacity",
                            20794,
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
                            "eid236",
                            "top",
                            20830,
                            282,
                            "linear",
                            "${pointerCopy}",
                            '181px',
                            '201px'
                        ],
                        [
                            "eid238",
                            "top",
                            21111,
                            228,
                            "linear",
                            "${pointerCopy}",
                            '201px',
                            '181px'
                        ],
                        [
                            "eid239",
                            "top",
                            21339,
                            245,
                            "linear",
                            "${pointerCopy}",
                            '181px',
                            '199px'
                        ],
                        [
                            "eid503",
                            "opacity",
                            50000,
                            500,
                            "linear",
                            "${Text17}",
                            '0',
                            '1'
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
                            "eid128",
                            "left",
                            19000,
                            0,
                            "linear",
                            "${lettuce3}",
                            '625px',
                            '625px'
                        ],
                        [
                            "eid266",
                            "left",
                            27000,
                            702,
                            "linear",
                            "${lettuce3}",
                            '625px',
                            '439px'
                        ],
                        [
                            "eid402",
                            "left",
                            40000,
                            2000,
                            "linear",
                            "${lettuce3}",
                            '439px',
                            '613px'
                        ],
                        [
                            "eid416",
                            "left",
                            43000,
                            2000,
                            "linear",
                            "${lettuce3}",
                            '613px',
                            '514px'
                        ],
                        [
                            "eid470",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${lettuce3}",
                            '514px',
                            '854px'
                        ],
                        [
                            "eid258",
                            "left",
                            26306,
                            1396,
                            "linear",
                            "${beefCopy2}",
                            '617px',
                            '602px'
                        ],
                        [
                            "eid370",
                            "left",
                            27702,
                            14298,
                            "linear",
                            "${beefCopy2}",
                            '602px',
                            '600px'
                        ],
                        [
                            "eid419",
                            "left",
                            43000,
                            2000,
                            "linear",
                            "${beefCopy2}",
                            '600px',
                            '501px'
                        ],
                        [
                            "eid477",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${beefCopy2}",
                            '501px',
                            '841px'
                        ],
                        [
                            "eid138",
                            "left",
                            7000,
                            12000,
                            "linear",
                            "${beef}",
                            '424px',
                            '425px'
                        ],
                        [
                            "eid249",
                            "opacity",
                            23750,
                            455,
                            "linear",
                            "${Text13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid250",
                            "opacity",
                            25750,
                            454,
                            "linear",
                            "${Text13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid295",
                            "opacity",
                            28579,
                            1071,
                            "linear",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid217",
                            "opacity",
                            23160,
                            19,
                            "linear",
                            "${pointer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid251",
                            "opacity",
                            25750,
                            454,
                            "linear",
                            "${pointer}",
                            '1',
                            '0'
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
                            "eid303",
                            "opacity",
                            30250,
                            382,
                            "linear",
                            "${Text14Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "opacity",
                            32955,
                            1925,
                            "linear",
                            "${Text14Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid247",
                            "top",
                            23750,
                            455,
                            "linear",
                            "${Text13}",
                            '193px',
                            '140px'
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
                            "eid85",
                            "top",
                            9000,
                            1000,
                            "linear",
                            "${Text6}",
                            '415px',
                            '332px'
                        ],
                        [
                            "eid270",
                            "opacity",
                            27702,
                            135,
                            "linear",
                            "${cha}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "opacity",
                            27837,
                            1413,
                            "linear",
                            "${cha}",
                            '1',
                            '0'
                        ],
                        [
                            "eid168",
                            "opacity",
                            19000,
                            33,
                            "linear",
                            "${starCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid224",
                            "location",
                            19001,
                            517,
                            "linear",
                            "${Text11}",
                            [[689, 415.5, 0, 0, 0, 0,0],[689, 294.5, 0, 0, 0, 0,121]]
                        ],
                        [
                            "eid228",
                            "location",
                            19517,
                            197,
                            "easeInQuad",
                            "${Text11}",
                            [[689, 294.5, 0, 0, 0, 0,0],[689, -136.48, 0, 0, 0, 0,430.98]]
                        ],
                        [
                            "eid360",
                            "left",
                            19000,
                            23000,
                            "linear",
                            "${Text5}",
                            '871px',
                            '861px'
                        ],
                        [
                            "eid232",
                            "opacity",
                            20208,
                            586,
                            "linear",
                            "${Text10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "opacity",
                            25750,
                            500,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid420",
                            "left",
                            43000,
                            2000,
                            "linear",
                            "${Text4Copy2}",
                            '642px',
                            '543px'
                        ],
                        [
                            "eid475",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${Text4Copy2}",
                            '543px',
                            '883px'
                        ],
                        [
                            "eid423",
                            "opacity",
                            44750,
                            436,
                            "linear",
                            "${Text9Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid363",
                            "top",
                            37500,
                            4608,
                            "linear",
                            "${Text5Copy2}",
                            '-100px',
                            '221px'
                        ],
                        [
                            "eid413",
                            "top",
                            42108,
                            2892,
                            "linear",
                            "${Text5Copy2}",
                            '221px',
                            '417px'
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
                            "eid97",
                            "opacity",
                            10000,
                            1000,
                            "linear",
                            "${Text7Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            13000,
                            1000,
                            "linear",
                            "${Text7Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid483",
                            "scaleY",
                            48370,
                            380,
                            "linear",
                            "${Text9Copy3}",
                            '0.26',
                            '1.02'
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
                            "eid184",
                            "top",
                            19021,
                            415,
                            "linear",
                            "${starCopy3}",
                            '476px',
                            '477px'
                        ],
                        [
                            "eid308",
                            "opacity",
                            30632,
                            88,
                            "linear",
                            "${pointerCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            32373,
                            2507,
                            "linear",
                            "${pointerCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${Text5}",
                            '-102px',
                            '144px'
                        ],
                        [
                            "eid133",
                            "top",
                            17000,
                            2000,
                            "linear",
                            "${Text5}",
                            '144px',
                            '344px'
                        ],
                        [
                            "eid264",
                            "top",
                            27000,
                            702,
                            "linear",
                            "${Text5}",
                            '344px',
                            '392px'
                        ],
                        [
                            "eid361",
                            "top",
                            37500,
                            4500,
                            "linear",
                            "${Text5}",
                            '392px',
                            '694px'
                        ],
                        [
                            "eid445",
                            "scaleX",
                            45750,
                            416,
                            "linear",
                            "${Ellipse4}",
                            '1.35',
                            '1'
                        ],
                        [
                            "eid449",
                            "scaleX",
                            46166,
                            250,
                            "linear",
                            "${Ellipse4}",
                            '1.35',
                            '1'
                        ],
                        [
                            "eid271",
                            "scaleX",
                            27837,
                            1413,
                            "linear",
                            "${cha}",
                            '1',
                            '7.2'
                        ],
                        [
                            "eid177",
                            "top",
                            19033,
                            403,
                            "linear",
                            "${starCopy2}",
                            '414px',
                            '-62px'
                        ],
                        [
                            "eid447",
                            "opacity",
                            45750,
                            416,
                            "linear",
                            "${Ellipse4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid478",
                            "opacity",
                            46750,
                            500,
                            "linear",
                            "${Ellipse4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid77",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${beef}",
                            '-121px',
                            '154px'
                        ],
                        [
                            "eid139",
                            "top",
                            17000,
                            2000,
                            "linear",
                            "${beef}",
                            '154px',
                            '354px'
                        ],
                        [
                            "eid261",
                            "top",
                            27000,
                            702,
                            "linear",
                            "${beef}",
                            '354px',
                            '413px'
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
                            "eid70",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${onion}",
                            '-73px',
                            '165px'
                        ],
                        [
                            "eid137",
                            "top",
                            17000,
                            2000,
                            "linear",
                            "${onion}",
                            '165px',
                            '365px'
                        ],
                        [
                            "eid262",
                            "top",
                            27000,
                            702,
                            "linear",
                            "${onion}",
                            '365px',
                            '413px'
                        ],
                        [
                            "eid369",
                            "top",
                            37500,
                            4500,
                            "linear",
                            "${onion}",
                            '413px',
                            '715px'
                        ],
                        [
                            "eid183",
                            "left",
                            19021,
                            415,
                            "linear",
                            "${starCopy3}",
                            '569px',
                            '-130px'
                        ],
                        [
                            "eid473",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${Text5Copy2}",
                            '524px',
                            '864px'
                        ],
                        [
                            "eid170",
                            "opacity",
                            19000,
                            53,
                            "linear",
                            "${starCopy4}",
                            '0.000000',
                            '1'
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
                            "eid310",
                            "left",
                            30720,
                            256,
                            "linear",
                            "${pointerCopy3}",
                            '303px',
                            '314px'
                        ],
                        [
                            "eid311",
                            "left",
                            30976,
                            275,
                            "linear",
                            "${pointerCopy3}",
                            '314px',
                            '289px'
                        ],
                        [
                            "eid312",
                            "left",
                            31251,
                            295,
                            "linear",
                            "${pointerCopy3}",
                            '289px',
                            '314px'
                        ],
                        [
                            "eid296",
                            "opacity",
                            28140,
                            1110,
                            "linear",
                            "${heart_redCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid333",
                            "opacity",
                            33046,
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
                            "eid331",
                            "left",
                            33046,
                            274,
                            "linear",
                            "${pointerCopy4}",
                            '353px',
                            '337px'
                        ],
                        [
                            "eid334",
                            "left",
                            33320,
                            327,
                            "linear",
                            "${pointerCopy4}",
                            '337px',
                            '324px'
                        ],
                        [
                            "eid336",
                            "left",
                            33647,
                            292,
                            "linear",
                            "${pointerCopy4}",
                            '324px',
                            '343px'
                        ],
                        [
                            "eid338",
                            "left",
                            33939,
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
                            "eid1",
                            "left",
                            0,
                            1000,
                            "easeOutSine",
                            "${mouse}",
                            '706px',
                            '250px'
                        ],
                        [
                            "eid78",
                            "left",
                            11351,
                            899,
                            "linear",
                            "${mouse}",
                            '250px',
                            '750px'
                        ],
                        [
                            "eid116",
                            "left",
                            14500,
                            1000,
                            "linear",
                            "${mouse}",
                            '750px',
                            '567px'
                        ],
                        [
                            "eid118",
                            "left",
                            15500,
                            750,
                            "linear",
                            "${mouse}",
                            '567px',
                            '831px'
                        ],
                        [
                            "eid120",
                            "left",
                            16250,
                            750,
                            "linear",
                            "${mouse}",
                            '831px',
                            '746px'
                        ],
                        [
                            "eid140",
                            "left",
                            17250,
                            1750,
                            "linear",
                            "${mouse}",
                            '746px',
                            '699px'
                        ],
                        [
                            "eid265",
                            "left",
                            27000,
                            702,
                            "linear",
                            "${mouse}",
                            '699px',
                            '513px'
                        ],
                        [
                            "eid398",
                            "left",
                            40000,
                            2000,
                            "linear",
                            "${mouse}",
                            '513px',
                            '687px'
                        ],
                        [
                            "eid421",
                            "left",
                            43000,
                            2000,
                            "linear",
                            "${mouse}",
                            '687px',
                            '588px'
                        ],
                        [
                            "eid476",
                            "left",
                            46750,
                            1250,
                            "linear",
                            "${mouse}",
                            '588px',
                            '928px'
                        ],
                        [
                            "eid409",
                            "opacity",
                            42000,
                            250,
                            "linear",
                            "${Text9Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid272",
                            "scaleY",
                            27837,
                            1413,
                            "linear",
                            "${cha}",
                            '1',
                            '7.2'
                        ],
                        [
                            "eid425",
                            "scaleX",
                            45186,
                            564,
                            "linear",
                            "${Text16}",
                            '0.25',
                            '1'
                        ],
                        [
                            "eid205",
                            "left",
                            23179,
                            221,
                            "linear",
                            "${pointer}",
                            '431px',
                            '405px'
                        ],
                        [
                            "eid207",
                            "left",
                            23400,
                            218,
                            "linear",
                            "${pointer}",
                            '405px',
                            '431px'
                        ],
                        [
                            "eid209",
                            "left",
                            23618,
                            195,
                            "linear",
                            "${pointer}",
                            '431px',
                            '412px'
                        ],
                        [
                            "eid305",
                            "top",
                            30720,
                            256,
                            "linear",
                            "${pointerCopy3}",
                            '130px',
                            '152px'
                        ],
                        [
                            "eid306",
                            "top",
                            30976,
                            275,
                            "linear",
                            "${pointerCopy3}",
                            '152px',
                            '120px'
                        ],
                        [
                            "eid307",
                            "top",
                            31251,
                            295,
                            "linear",
                            "${pointerCopy3}",
                            '120px',
                            '145px'
                        ],
                        [
                            "eid68",
                            "top",
                            7000,
                            2000,
                            "linear",
                            "${Text4}",
                            '-106px',
                            '175px'
                        ],
                        [
                            "eid135",
                            "top",
                            17000,
                            2000,
                            "linear",
                            "${Text4}",
                            '175px',
                            '375px'
                        ],
                        [
                            "eid263",
                            "top",
                            27000,
                            702,
                            "linear",
                            "${Text4}",
                            '375px',
                            '434px'
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
                            type: 'image',
                            id: 'flower',
                            rect: [0, 23, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flowerCopy',
                            rect: [93, 44, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flowerCopy2',
                            rect: [204, 0, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flowerCopy3',
                            rect: [384, 7, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flowerCopy4',
                            rect: [491, 50, '50px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'source/flower.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flowerCopy5',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("panini_instruction_edgeActions.js");
})("EDGE-345301125");
