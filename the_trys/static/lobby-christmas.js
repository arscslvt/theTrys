function muteAudio(){
    var audio = document.getElementById("audio");
    var symbol = document.getElementById("audioSym");
    if (audio.muted == false){
        audio.muted = true;
        symbol.innerHTML = "🔈";
    }
    else if(audio.muted == true){
        audio.muted = false;    
        symbol.innerHTML = "🔊";
    }   
}

function newMatch(){
    var selectPlayer = document.getElementById('newMatch').style;
    if (selectPlayer.display == 'block'){
        selectPlayer.display = 'none';
    }else{
        selectPlayer.display = 'block';
    }
}
function closeNewMatch(){
    document.getElementById('newMatch').style.display = 'none';
}

var players = 0;
var player1 = "";
var player2 = "";

function name(pp){
    if(pp==1){
        document.getElementById('onePlayerName').style.display = 'block';
    }
    if(pp==2){
        document.getElementById('twoPlayersName').style.display = 'block';
    }
}

function play(players){
    var youNametag = document.getElementById("yNametag");
    var oppNametag = document.getElementById("oNametag");
    var playerName2 = oppNametag.innerHTML;
    console.log('player  2: ' + playerName2);

    var game = document.getElementById("game").style;
    if(players==1){
        if(document.getElementById("nametag").value == ''){
            player1 = 'Player 1';
        }else{
            player1 = document.getElementById("nametag").value;
        }
        document.getElementById("onePlayerName").style.display = 'none';
        console.log('single player');
        game.display = 'flex';
        youNametag.innerHTML = player1 + '<br> points';
    }
    if(players==2){
        if(document.getElementById("nametagP").value == '' || document.getElementById("nametagO").value == ''){
            player1 = 'Elf 1';
            player2 = 'Elf 2';
        }else{
            player1 = document.getElementById("nametagP").value;
            player2 = document.getElementById("nametagO").value;
        }
        document.getElementById("twoPlayersName").style.display = 'none';
        console.log('multi player: ' + player1 + player2);
        game.display = 'flex';
        youNametag.innerHTML = player1 + '<br> points';
        oppNametag.innerHTML = player2 + '<br> points';
    }
    if(players==3){
        alert("We're sorry, this game mode is not available yet.");
        document.getElementById('onePlayerName').style.display = 'none';
    }
}

var turn=1;
var combo1 = [];
var combo2 = [];
var points1 = 0;
var points2 = 0;
var moves = 0;

function slotSelect(pad){
    var sPad = 'pad' + pad;
    console.log(sPad);
    moves++;
    if(turn==1){
        if(document.getElementById(sPad).classList == ''){
            document.getElementById(sPad).classList.add("pinkPad");
            document.getElementById('gamePage').style.boxShadow = '0px 0px 20px #15be3f';
            document.getElementById(sPad).innerHTML = '〇';
            combo1.push(pad);
            player1Check(1);
            turn=2;
        }
    }
    else if(turn==2){
        if(document.getElementById(sPad).classList == ''){
            document.getElementById(sPad).classList.add("greenPad");
            document.getElementById('gamePage').style.boxShadow = '0px 0px 20px #d81414';
            document.getElementById(sPad).innerHTML = '✕';
            combo2.push(pad);
            player2Check(2);
            turn=1;
        }
    }
}

function player1Check(turn){
    console.log(JSON.stringify(combo1));
    //  ORIZONTAL 
    if(combo1.includes('1') && combo1.includes('2') && combo1.includes('3')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }
    if(combo1.includes('4') && combo1.includes('5') && combo1.includes('6')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }
    if(combo1.includes('7') && combo1.includes('8') && combo1.includes('9')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }

    // VERTICAL
    if(combo1.includes('1') && combo1.includes('4') && combo1.includes('7')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }
    if(combo1.includes('2') && combo1.includes('5') && combo1.includes('8')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }
    if(combo1.includes('3') && combo1.includes('6') && combo1.includes('9')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }

    // OBLIQUE
    if(combo1.includes('1') && combo1.includes('5') && combo1.includes('9')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }
    if(combo1.includes('3') && combo1.includes('5') && combo1.includes('7')){
        resetBoard(turn);
        points1++;
        document.getElementById('yPoints').innerHTML = points1;
    }

    //   NONE
    if(moves==9){
        resetBoard(3);
    }
}

function player2Check(turn){
    console.log(JSON.stringify(combo2));
    //  ORIZONTAL 
    if(combo2.includes('1') && combo2.includes('2') && combo2.includes('3')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }
    if(combo2.includes('4') && combo2.includes('5') && combo2.includes('6')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }
    if(combo2.includes('7') && combo2.includes('8') && combo2.includes('9')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }

    // VERTICAL
    if(combo2.includes('1') && combo2.includes('4') && combo2.includes('7')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }
    if(combo2.includes('2') && combo2.includes('5') && combo2.includes('8')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }
    if(combo2.includes('3') && combo2.includes('6') && combo2.includes('9')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }

    // OBLIQUE
    if(combo2.includes('1') && combo2.includes('5') && combo2.includes('9')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }
    if(combo2.includes('3') && combo2.includes('5') && combo2.includes('7')){
        resetBoard(turn);
        points2++;
        document.getElementById('oPoints').innerHTML = points2;
    }

    //   NONE
    if(moves==9){
        resetBoard(3);
    }
}

function resetBoard(turn){
    document.getElementById('winner').style.display = 'block';
    if(turn==1){
        document.getElementById('winName').innerHTML = player1;
        moves=0;
    }
    else if(turn==2){
        document.getElementById('winName').innerHTML = player2;
        moves=0;
    }
    else if(turn==3){
        document.getElementById('winName').innerHTML = 'OPS, NO ONE';
        moves=0;
    }
    for(i=1;i<10;i++){
        document.getElementById('pad'+i).innerHTML = "";
        document.getElementById('pad'+i).classList = "";
    }
    combo1 = [];
    combo2 = [];
}

function hideWinner(){
    document.getElementById('winner').style.display = 'none';
}