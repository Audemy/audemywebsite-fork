const basedPath = "/assets/gameImages/buttons/gameButtons/";
export const getLanguageGames = () => {
    return [
        {
            icon: basedPath + "spellingBee.svg",
            title: "Spelling Bee",
            //url: "/game/spelling-bee",
            url: "/game/spellingbee",
            textColor: "#323232",
            bgColor: "#F7DA21",
            bgDecoration: true,
            bgImage: "/assets/gameImages/bg-decoration.svg",
            description:
                "You will be given a word and spell the word correctly.",
        },
        {
            icon: basedPath + "oddOneOut.svg",
            title: "Odd One Out",
            url: "/game/oddoneout",
            textColor: "#323232",
            bgColor: "#FF82E0",
            description: "Figure out which one is the odd one out.",
        },
        {
            icon: basedPath + "strawberry.svg",
            title: "Polar Pairing",
            url: "/game/polarpairing",
            textColor: "#323232",
            bgColor: "#FF9A22",
            description: "Choose the antonym from the four options.",
        },
        {
            icon: basedPath + "book.svg",
            title: "Vocabulary Vortex",
            url: "/game/vocabVortex",
            textColor: "#323232",
            bgColor: "#F56A6C",
            description:
                "You will be given a word and spell the word correctly.",
        },
        {
            icon: basedPath + "book.svg",
            title: "Syllable Sorting",
            url: "/game/syllableSorting",
            textColor: "#323232",
            bgColor: "#6B7FFF",
            description: "< To be added >",
        },
        {
            icon: basedPath + "definition.svg",
            title: "Definition Detective",
            url: "/game/definitionDetective",
            textColor: "#323232",
            bgColor: "#28B8CA",
            description: "< To be added >",
        },
        {
            icon: basedPath + "pos.svg",
            title: "Part of Speech",
            url: "/game/partofspeech",
            textColor: "#323232",
            bgColor: "#00C275",
            description: "< To be added >",
        },
        {
            icon: basedPath + "color-game.svg",
            title: "Color Game",
            url: "/game/colorgame",
            textColor: "#323232",
            bgColor: "#0EA1EA",
            description: "< To be added >",
        },
    ];
};

export const getMathGames = () => {
    return [
        {
            icon: basedPath + "subtraction.svg",
            title: "Subtraction Safari",
            url: "/game/subtraction",
            textColor: "#323232",
            bgColor: "#28B8CA",
            bgDecoration: true,
            bgImage: "/assets/gameImages/bg-sub.svg",
            description: "Subtract animals in safari scenarios!",
        },
        {
            icon: basedPath + "div.svg",
            title: "Division Duel",
            url: "game/DivisionDuel",
            textColor: "#323232",
            bgColor: "#00C275",
            description: "Divide the given numers!",
        },
        {
            icon: basedPath + "addition.svg",
            title: "Animal Addition",
            url: "/game/addition",
            textColor: "#323232",
            bgColor: "#FF82E0",
            description: "Add up the animals!",
        },
        {
            icon: basedPath + "mul.svg",
            title: "Multiplication Madness",
            url: "/game/multiplicationmadness",
            textColor: "#323232",
            bgColor: "#6B7FFF",
            bgDecoration: true,
            bgImage: "/assets/gameImages/bg-mul.svg",
            description: "Can you multiply numbers?",
        },
        {
            icon: basedPath + "mm.svg",
            title: "Monkey Madness",
            url: "/game/monkeymadness",
            textColor: "#323232",
            bgColor: "#F56A6C",
            bgDecoration: true,
            bgImage: "/assets/gameImages/bg-mm.svg",
            description: "Help the monkeys split their bananas!",
        },
        {
            icon: basedPath + "ss.svg",
            title: "Shape Shark",
            url: "/game/shapeshark",
            textColor: "#323232",
            bgColor: "#0EA1EA",
            description: "Identify the shape based on its sides.",
        },
        {
            icon: basedPath + "ff.svg",
            title: "Fruit Frenzy",
            url: "/game/fruitfrenzy",
            textColor: "#323232",
            bgColor: "#FF9A22",
            description: "How many total fruits are there?",
        },  
        {
            icon: basedPath + "cc.svg",
            title: "Car Counting",
            url: "/game/carcounting",
            textColor: "#323232",
            bgColor: "#F7DA21",
            bgDecoration: true,
            bgImage: "/assets/gameImages/bg-cc.svg",
            description: "How many cars are passing by?",
        },
        
        
    ];
};
