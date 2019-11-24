var more = document.getElementsByClassName("morestrategy")[0];
$("#morearrow").on("click", function() {
    if (more.className === "morestrategy") {
        more.className += (" active");
        $("#morearrow").html("▲");
    } else {
        more.className = "morestrategy";
        $("#morearrow").html("▼");
    }
    setTimeout(function() {
        more.className = "morestrategy";
        $("#morearrow").html("▼");
    }, 30000);
})

// <!-- 控制strategy detail -->

let detailnum = 0;

function closeall() {
    const Y = Array.from(document.getElementsByClassName("btn btn-outline-secondary btn-square btn-strategy-1 active"))
    const X = Array.from(document.getElementsByClassName("strategydetail active"));
    if (X.length !== 0) {
        X[0].className = "strategydetail";
    }
    if (Y.length !== 0) {
        Y[0].className = "btn btn-outline-secondary btn-square btn-strategy-1";
        Y[0].setAttribute("onclick", "opendetail( 'detail" + detailnum + "')");
        detailnum = 0;
    }
}

// <!-- end of strategy detail -->

function opendetail(detail) {
    if (detailnum !== 0) {
        closeall(detailnum);
    }

    const X = document.getElementById(detail);
    detailnum = detail.slice(6)
    const s = "s" + detailnum;
    const Y = document.getElementsByClassName(s)[0].getElementsByClassName("btn-strategy-1")[0];
    Y.setAttribute("onclick", "closeall()");
    Y.className += " active";
    X.className = "strategydetail active";
    // document.documentElement.scrollTop += 30;
}


const detailgraph = Array.from(document.getElementsByClassName("detailgraph"));
const detailtag = Array.from(document.getElementsByClassName("detailtag"));

function show(detailtag) {
    detailtag.className += " active";
}

function showoff(detailtag) {
    detailtag.className = "detailtag"
}

detailgraph.forEach(function(t) {
    t.addEventListener('mouseover', (t) => {
        detailtag.forEach(function(f) {
            show(f);
        })
    })
    t.addEventListener('mouseout', () => {
        detailtag.forEach(function(f) {
            showoff(f);
        })
    })
})



//第一個軸 start
var strategylist1 = document.getElementById('lis1');
var strategyfilter = document.getElementsByClassName("strategyfilter")[0];
var prev1 = document.getElementById('prev1');
var next1 = document.getElementById('next1');



function animate1(offset) {
    var newLeft = parseInt(strategylist1.style.left) + offset;
    var filterwidth = parseInt(strategyfilter.clientWidth);
    strategylist1.style.left = newLeft + 'px';
    if (newLeft < (-2800 + filterwidth)) {
        strategylist1.style.left = 0 + 'px';
    }
    if (newLeft > 0) {
        strategylist1.style.left = (-2800 + filterwidth) + 'px';
    }
}

prev1.onclick = function() {
    closeall();
    var newLeft = parseInt(strategylist1.style.left);
    var filterwidth = parseInt(strategyfilter.clientWidth);
    if (newLeft < 0) {
        animate1(350);
    }
}
next1.onclick = function() {
    closeall();
    var newLeft = parseInt(strategylist1.style.left);
    var filterwidth = parseInt(strategyfilter.clientWidth);
    if (newLeft > (-2800 + filterwidth)) {
        animate1(-350);
    }
}

function play() {
    timer = setInterval(function() { //內建定時器多次執行
        next1.onclick(); //每1.5秒執行下一張事件！！
    }, 1500)
}

//第一個軸 end
//第二個list start
var strategylist2 = document.getElementById('lis2');
var prev2 = document.getElementById('prev2');
var next2 = document.getElementById('next2');

function animate2(offset) {
    var newLeft = parseInt(strategylist2.style.left) + offset;
    var filterwidth = parseInt(strategyfilter.clientWidth);
    strategylist2.style.left = newLeft + 'px';
    if (newLeft < (-2800 + filterwidth)) {
        strategylist2.style.left = 0 + 'px';
    }
    if (newLeft > 0) {
        strategylist2.style.left = (-2800 + filterwidth) + 'px';
    }
}

prev2.onclick = function() {
    closeall();
    var newLeft = parseInt(strategylist2.style.left);
    var filterwidth = parseInt(strategyfilter.clientWidth);
    if (newLeft < 0) {
        animate2(350);
    }
}
next2.onclick = function() {
    closeall();
    var newLeft = parseInt(strategylist2.style.left);
    var filterwidth = parseInt(strategyfilter.clientWidth);
    if (newLeft > (-2800 + filterwidth)) {
        animate2(-350);
    }
}

function play() {
    timer = setInterval(function() { //內建定時器多次執行
        next2.onclick(); //每1.5秒執行下一張事件！！
    }, 1500)
}
//第二個list end