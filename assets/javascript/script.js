$(document).ready(function() {

// an array made up of the 4 playable characters--each of whom are objects containing their stats.
// double checked these stats. They all should be able to win or lose in the right circumstances (although some have better chances than others)
var Characters = [

    Rey = {
        HP: 100,
        AP: 7,
        CP: 10
    },

    Yoda = {
        HP: 170,
        AP: 2,
        CP: 8
    },

    Kylo = {
        HP: 80,
        AP: 8,
        CP: 14
    },

    Boba = {
        HP: 130,
        AP: 4,
        CP: 5
    }

]

// your chosen character
var yourChar

// have you selected a character?
var selected = false;

// have you selected an enemy?/are they still alive?
var enemy = false;

// chosen enemy character
var enemyChar;

// name of your fighter
var name;

// name of your opponent
var badguy;

var baseAttack;

var enemiesDefeated = 0;

// how we represent our chosen fighter
function placeFighter() {

    $("#yourName").text(name);

    $("#Fighter").attr("src", "assets/images/" + name + ".jpg");
    
    $("#yourHP").text("HP: " + yourChar.HP);

    baseAttack = yourChar.AP;

    console.log("Base Attack: " + baseAttack);

    console.log("Name is: " + name);

    $("#instructions").text("Choose an Opponent.")

    $("#initialInstructions").hide();

};

function placeOpponent() {

    $("#enemyName").text(badguy)

    console.log("badguy is: " + badguy);

    $("#Opponent").attr("src", "assets/images/" + badguy + ".jpg");
    
    $("#enemyHP").text("HP: " + enemyChar.HP)

    attackInstructions();

};
 
// selecting your character:


$("#Rey").on("click", function() {


    // if no one is selected
    if (selected === false) {

        // who have now selected a character
        selected = true;

        // (confirming you have a character for debugging purposes)
        console.log("Selected Rey:" + selected);

        // you're playing as Rey
        yourChar = Characters[0];

        // (confirming that you're playing as Rey)
        console.log(yourChar);

        name = "Rey";

        placeFighter();

        $("#char-list-1").css("display", "none");

        $("#YodaChar").show();

        $("#KyloChar").show();

        $("#BobaChar").show();

        // $("#reyCard").attr("src", "assets/images/cardback.jpg");


    }

});


// the following 3 run on the same code as above.
$("#Yoda").on("click", function() {

    if (selected === false) {

        selected = true;

        console.log("Selected Yoda:" + selected);

        yourChar = Characters[1];

        console.log(yourChar);

        name = "Yoda";

        placeFighter()

        $("#char-list-1").css("display", "none");

        $("#ReyChar").show();

        $("#KyloChar").show();

        $("#BobaChar").show();

        $("#yodaCard").attr("src", "assets/images/cardback.jpg");


    }

});

$("#Kylo").on("click", function() {

    if (selected === false) {

        selected = true;

        console.log("Selected Kylo:" + selected);

        yourChar = Characters[2];

        console.log(yourChar);

        name = "Kylo";

        placeFighter();

        $("#char-list-1").css("display", "none");

        $("#kyloCard").attr("src", "assets/images/cardback.jpg");

        $("#ReyChar").show();

        $("#YodaChar").show();

        $("#BobaChar").show();


    }

});

$("#Boba").on("click", function() {

    if (selected === false) {

        selected = true;

        console.log("Selected Boba:" + selected);

        yourChar = Characters[3];

        console.log(yourChar);

        name = "Boba";

        placeFighter();

        $("#char-list-1").css("display", "none");

        $("#bobaCard").attr("src", "assets/images/cardback.jpg");

        $("#ReyChar").show();

        $("#YodaChar").show();

        $("#KyloChar").show();


    }

});



// selecting your enemy:

$("#BadRey").on("click", function() {

    // if you already have selected a character
    if(yourChar !== Characters[0] ) {

        // and you also don't have a selected/living opponent
        if (enemy === false) {

            // you have selected an opponent (var enemy)
            enemy = true;

            // your opponent is Rey
            enemyChar = Characters[0];

            badguy = "Rey";

            placeOpponent();

            $("#reyCard2").attr("src", "assets/images/cardback.jpg");


            // (comfirming you have a selected enemy and who it is)
            console.log("Enemy Rey:" + enemy);
            console.log(enemyChar);

        };

    };

});

// };

// the following 3 run on the same code as above.
$("#BadYoda").on("click", function() {
    
    if(yourChar !== Characters[1]) {

        if (enemy === false) {

            enemy = true;

            enemyChar = Characters[1];

            badguy = "Yoda";

            placeOpponent();

            $("#yodaCard2").attr("src", "assets/images/cardback.jpg");

            console.log("Enemy Yoda:" + enemy);
            console.log(enemyChar);

        };

    };

});

$("#BadKylo").on("click", function() {

    if(yourChar !== Characters[2]) {

        if (enemy === false) {

            enemy = true;

            enemyChar = Characters[2];

            badguy = "Kylo";

            placeOpponent();

            console.log("Enemy Kylo:" + enemy);
            console.log(enemyChar);

            $("#kyloCard").attr("src", "assets/images/cardback.jpg");


        };

    };

});

$("#BadBoba").on("click", function() {

    if(yourChar!== Characters[3]) {

        if (enemy === false) {

            enemy = true;

            enemyChar = Characters[3];

            badguy = "Boba";

            placeOpponent();

            $("#bobaCard2").attr("src", "assets/images/cardback.jpg");

            console.log("Enemy Boba:" + enemy);
            console.log(enemyChar);

        };

    };

});



$("#attackButton").on("click", function() {
    if (selected === true) {

        if (enemy === true) {
            enemyChar.HP = enemyChar.HP -= yourChar.AP;
            yourChar.AP = yourChar.AP + baseAttack;
            console.log(enemyChar.HP);
            console.log(yourChar.AP)
            placeOpponent();
            yourChar.HP = yourChar.HP -= enemyChar.CP;
            $("#yourHP").text("HP: " + yourChar.HP);
            if (enemyChar.HP <= 0) {
                $("#enemyName").text("Enemy defeated!")
                $("#instructions").text("Choose a new opponent.")
                enemiesDefeated++;
                enemy = false;
                console.log("Enemies defeated: " + enemiesDefeated)
                
            }
        }

        winCondition();

        loseCondition();
        
    }



});

var attackInstructions = function() {
    if (enemy === true) {
        $("#instructions").text("Attack your opponent!!") 
    }
}

var winCondition = function() {
    if (enemiesDefeated === 3) {
        $("#instructions").text("YOU WIN!!")

    }

}

var loseCondition = function() {
    if (yourChar.HP <= 0) {
        $("#instructions").text("YOU LOSE!!")

        selected = false;

    } 
}





// end of ready function. keep this.
})