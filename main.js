let game_head = document.getElementById("game-head");



function end(num1, num2, num3) {
    game_head.innerHTML = `${boxes[num1]} winner`;
    
    document.getElementById("box" + num1).style.background = '#64c108';
    document.getElementById("box" + num2).style.background = '#64c108';
    document.getElementById("box" + num3).style.background = '#64c108';

    setInterval(function() {
        game_head.innerHTML += '.';
    }, 1000);

    setTimeout(function() {
        location.reload();
    }, 4000);
}

let boxes = [];
function winner() {

    for(let i = 1; i < 10; i++) {
        boxes[i] = document.getElementById("box" + i).innerHTML;
    }


    if(boxes[1] === boxes[2] && boxes[2] === boxes[3] && boxes[3] != '') {
        end(1, 2, 3);

    } else if(boxes[4] === boxes[5] && boxes[5] === boxes[6] && boxes[6] != '') {
        end(4, 5, 6);

    } else if(boxes[7] === boxes[8] && boxes[8] === boxes[9] && boxes[9] != '') {
        end(7, 8, 9);

    } else if(boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[7] != '') {
        end(1, 4, 7);

    } else if(boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[8] != '') {
        end(2, 5, 8);

    } else if(boxes[3] === boxes[6] && boxes[6] === boxes[9] && boxes[9] != '') {
        end(3, 6, 9);

    } else if(boxes[1] === boxes[5] && boxes[5] === boxes[9] && boxes[9] != '') {
        end(1, 5, 9);

    } else if(boxes[3] === boxes[5] && boxes[5] === boxes[7] && boxes[7] != '') {
        end(3, 5, 7);

    }
}




let turn = 'X';

function play(id) {

    let box = document.getElementById(id);
    if(turn === 'X' && box.innerHTML === '') {
        box.innerHTML = 'X';
        turn = 'O';
        game_head.innerHTML = "O turn";
    } else if(turn === 'O' && box.innerHTML === '') {
        box.innerHTML = 'O';
        turn = 'X';
        game_head.innerHTML = "X turn";
    }

    winner();
}



