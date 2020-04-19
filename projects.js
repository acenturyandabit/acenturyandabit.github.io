let projects = {
    "pepper": {
     "status": "unmaintained",
     "category": "productivity",
     "x": 0.07166568696939997,
     "y": 0.09479305740987984,
     "aim": "To design a better end-user feedback collection tool",
     "result": "People used it for its original purpose, but it didn't really grow from there.",
     "main_challenges": "I released the link too early before the user flow was mature.",
     "link": "pepper"
    },
    "thredr": {
     "status": "unmaintained",
     "category": "productivity",
     "x": 0.15501022663010958,
     "y": 0.13217623497997327,
     "aim": "To create a thread-focused messaging platform with infinite threads.",
     "result": "Works in concept, but even i dont use it.",
     "main_challenges": "Other messaging platforms are already too popular.",
     "link": "thredr"
    },
    "synergist": {
     "status": "usable",
     "category": "productivity",
     "x": 0.7251505807422249,
     "y": 0.3244325767690253,
     "aim": "To create a dynamic, multidimensional organisation and brainstorming tool.",
     "result": "Works. But I merged it into polymorph, so I don't maintain the original.",
     "link": "/synergist"
    },
    "genUI": {
     "status": "usable",
     "category": "other",
     "x": 0.27020618272166363,
     "y": 0.35380507343124173,
     "aim": "To keep snippets of my code for reuse.",
     "result": "Works. I should really use actual npm libraries.",
     "link": "https://github.com/acenturyandabit/genui"
    },
    "qrosstalk": {
     "status": "usable",
     "category": "other",
     "x": 0.2537496175657273,
     "y": 0.5273698264352469,
     "aim": "To create a communications framework based on cameras.",
     "result": "Works, but terribly slow.",
     "link": "https://github.com/acenturyandabit/qrosstalk"
    },
    "regexRoom": {
     "status": "unmaintained",
     "category": "other",
     "x": 0.8084951204029345,
     "y": 0.5554072096128171,
     "aim": "To create a tool for applying mutliple regexes to text.",
     "result": "Works, but not many use cases. The UI is also not great.",
     "link": "regexRoom"
    },
    "chromeTabNinja": {
     "status": "usable",
     "category": "productivity",
     "x": 0.10670224504332886,
     "y": 0.6688918558077437,
     "aim": "To create a tool for executing scripts on multiple tabs (e.g. downloading canvas course content without a download all button.).",
     "result": "Works, and I occasionally use it.",
     "link": "https://github.com/acenturyandabit/chrome-tab-ninja"
    },
    "polymorph": {
     "x": 0.07272740085042811,
     "y": 0.2990654205607477,
     "status": "maintained",
     "category": "productivity",
     "dirs": [
      "by_time/2019/01",
      "by_category/programming/management tools"
     ],
     "link": "acenturyandabit.github.io/polymorph/",
     "aim": "To create a framework for building user-reconfigurable interfaces quickly.",
     "result": "Moderate success. Polymorph framework works well as a layer for data.",
     "main_challenges": "Didn't have a clear singular purpose; so was difficult to focus my efforts.",
     "formerly": "todolist2, maido, quartermaster"
    },
    "wavelab": {
     "status": "usable",
     "category": "interactive",
     "link": "physics/wavelab",
     "aim": "To create an environment to describe the polarisation of waves.",
     "result": "I'm happy with it. It works.",
     "main_challenges": "Learning three.js.",
     "basically_a_copy_of": "https://emanim.szialab.org/",
     "x": 0.1767753611911866,
     "y": 0.5540720961281709
    },
    "thermosim": {
     "status": "unmaintained",
     "category": "interactive",
     "link": "physics/thermosim",
     "aim": "To create a heat engine simulator.",
     "result": "The mathematical modelling is too simplistic, leading to strange results.",
     "main_challenges": "Maths.",
     "x": 0.7309900070878798,
     "y": 0.17623497997329776
    },
    "qSheets2": {
     "status": "unmaintained",
     "category": "productivity",
     "link": "qSheets2",
     "aim": "To create a programmatic education platform.",
     "result": "It works as intended but never got off the ground, because humans dont need 32432 questions to learn things.",
     "main_challenges": "Selling it.",
     "x": 0.8307911119045256,
     "y": 0.16688918558077442
    },
    "downloadit": {
     "status": "usable",
     "category": "interactive",
     "link": "downlaodit",
     "aim": "To create a meme.",
     "result": "It works as intended.",
     "x": 0.8527935806844763,
     "y": 0.4334479230999777
    },
    "fliprect": {
     "status": "unmaintained",
     "category": "interactive",
     "link": "todo/fliprect",
     "aim": "To create a novel turn based game",
     "result": "It takes a really high ELO to play.",
     "main_challenges": "Creating a backend with websockets!",
     "x": 0.19217021246609475,
     "y": 0.3711615487316422
    },
    "acenturyandabit": {
     "status": "maintained",
     "category": "interactive",
     "link": ".",
     "aim": "To collate my online art and projects.",
     "result": "I hope you like it!",
     "main_challenges": "Managing design and functionality as a portfolio.",
     "formerly": "topkek, quotum",
     "x": 0.8661588683351469,
     "y": 0.78125
    },
    "ruigen": {
     "status": "usable",
     "category": "other",
     "link": "ruigen",
     "aim": "To create procedurally generated animations.",
     "result": "I think they're pretty.",
     "main_challenges": "I started in JQuery and now I'm happy with vanilla JS.",
     "x": 0.19172877489138693,
     "y": 0.7057100586378834
    },
    "myriad": {
     "status": "unmaintained",
     "category": "productivity",
     "link": "myriad",
     "aim": "To create a novel hierarchical data representation.",
     "result": "It worked, but wasn't as good as it was in my head. Concepts of it made their way into polymorph.",
     "main_challenges": "Dabbling in nodeJS!",
     "x": 0.8313219688450397,
     "y": 0.29238985313751675
    },
    "chicksquares": {
     "status": "usable",
     "category": "other",
     "link": "https://chrome.google.com/webstore/detail/chicksquares/nkjbdebcjapomgjbegialdfhkamedpkc",
     "aim": "To create a cute home screen for google chrome.",
     "result": "It worked, but I fell out of love with it.",
     "main_challenges": "Learning to make chrome extensions! And CPU cost management.",
     "x": 0.7639031373997524,
     "y": 0.451268357810414
    },
    "PEP_plus_plus": {
     "status": "usable",
     "category": "productivity",
     "link": "https://chrome.google.com/webstore/detail/pep-plus-plus/cnehfglpkbfehfkpngoimhemfeppejpl",
     "aim": "To create a better user experience for the USYD PEP program.",
     "result": "It worked, and I still use it! There are some minor bugs to be fixed tho.",
     "main_challenges": "Dealing with the legal shenanigans of extending others' software.",
     "x": 0.250272034820457,
     "y": 0.813858695652174
    },
    "USRC_site": {
     "status": "usable",
     "category": "other",
     "link": "http://usydrobotics.club",
     "aim": "To create a website for the USYD Robotics Club",
     "result": "It works.",
     "main_challenges": "I still don't like web frameworks (I find them too clunky to deploy on gh pages). But most people insist on web frameworks. *sigh*",
     "x": 0.7893842705444278,
     "y": 0.7863818424566089
    },
    "node_tcp_bot_controller": {
     "status": "usable",
     "category": "other",
     "link": "https://github.com/acenturyandabit/node-tcp-bot-controller",
     "aim": "To create a lighweight wifi robot controller that can be deployed on a mobile phone.",
     "result": "It works.",
     "main_challenges": "Using Termux and the nodeMCU!",
     "x": 0.8546796742276589,
     "y": 0.6194926568758344
    },
    "USRC_tutorials": {
     "status": "maintained",
     "category": "other",
     "link": "http://usydrobotics.club",
     "aim": "To create tutorials for python, openCV and machine learning",
     "result": "They're prety nice imo.",
     "main_challenges": "I had to learn about genetic algorithms!",
     "x": 0.720348204570185,
     "y": 0.08695652173913043
    },
    "Walking Genetic trainer": {
     "status": "usable",
     "category": "interactive",
     "link": "https://acenturyandabit.github.io/legs/",
     "aim": "To experiment with genetic programming to create a walking controller.",
     "result": "It evolves, but not very well.",
     "main_challenges": "Implementing a genetic learning algorithm.",
     "x": 0.6707795147415538,
     "y": 0.1682813996070589
    },
    "USYD LL RNN": {
     "status": "unmaintained",
     "category": "other",
     "link": "https://github.com/acenturyandabit/USYD-LL-RNN",
     "aim": "To create an text RNN.",
     "result": "It doesn't produce particularly comprehensible text. (But then again, neither are the USYD Love letters...",
     "main_challenges": "Implementing a RNN.",
     "x": 0.9085963003264418,
     "y": 0.125
    },
    "USRC Swarm Robotics Competition": {
     "status": "unmaintained",
     "category": "other",
     "link": "http://swarmcomp.usydrobotics.club",
     "aim": "To create a robotics competition accessible to other universities.",
     "result": "I didn't get much traction for it, and it was kinda a hobby anyway, so I passed it out.",
     "main_challenges": "Getting enough traction.",
     "x": 0.0957562568008705,
     "y": 0.5095108695652174
    },
    "Nanogram": {
     "status": "unmaintained",
     "category": "other",
     "link": "https://github.com/acenturyandabit/nanogram",
     "aim": "To create an auto-connection protocol.",
     "result": "It did what I could engineer it to do but didn't play well with the rest of my stack that I hoped it could complement.",
     "main_challenges": "UDP timing",
     "x": 0.9314472252448314,
     "y": 0.8831521739130435
    },
    "ChatTree": {
     "status": "usable",
     "category": "productivity",
     "link": "https://github.com/acenturyandabit/chattree",
     "aim": "To create a tool for visualising threads on messenger.",
     "result": "It works really well, we've got a message interceptor and a window management system.",
     "main_challenges": "Working with my (very supportive) friends on this project <3",
     "x": 0.07067758343709843,
     "y": 0.7605762541494415
    },
    "toucan": {
     "status": "unmaintained",
     "category": "interactive",
     "link": "https://github.com/acenturyandabit/toucan",
     "aim": "To create a platform for two player games on nodejs.",
     "result": "It works for one game but is easily hackable. hehe",
     "main_challenges": "Creating a backend for it.",
     "x": 0.9644464742066006,
     "y": 0.2902402216690141
    },
    "selfZoomingCar": {
     "status": "usable",
     "category": "other",
     "link": "https://github.com/cluccini/SelfZoomingCar",
     "aim": "To create a self-driving car for DRC.",
     "result": "It works.",
     "main_challenges": "Creating a chain-message passing framework. Also working with my highly intelligent friend on this project <3",
     "x": 0.3328148014824867,
     "y": 0.9408870842555254
    }
   }
    /*
    mycroft
    papercut
    relearn
    robotX
    min-miza
    yeetcode
    accenture-ethereum-test
    digichirps
    */