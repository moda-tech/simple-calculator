const sum = document.getElementById("sum")
const clear = document.getElementById("clear")
const del = document.getElementById("del")
const waru = document.getElementById("waru")
const n7 = document.getElementById("n7")
const n8 = document.getElementById("n8")
const n9 = document.getElementById("n9")
const kakeru = document.getElementById("kakeru")
const n4 = document.getElementById("n4")
const n5 = document.getElementById("n5")
const n6 = document.getElementById("n6")
const hiku = document.getElementById("hiku")
const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")
const tasu = document.getElementById("tasu")
const n00 = document.getElementById("n00")
const n0 = document.getElementById("n0")
const equal = document.getElementById("equal")

let num1 = "";
let num2 = "";
let state = a;
let cal = "";
sum.textContent = num1

n1.addEventListener("click", () => {
    if(state == "a"){
        num1.push("1")
    }
    if(state == "b"){
        num2.push("1")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("1")
    }
    if(state == "d"){
        num1 = ""
        num1.push("1")
    }
    
});
n2.addEventListener("click", () => {
    if(state == "a"){
        num1.push("2")
    }
    if(state == "b"){
        num2.push("2")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("2")
    }
    if(state == "d"){
        num1 = ""
        num1.push("2")
    }
});
n3.addEventListener("click", () => {
    if(state == "a"){
        num1.push("3")
    }
    if(state == "b"){
        num2.push("3")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("3")
    }
    if(state == "d"){
        num1 = ""
        num1.push("3")
    }
});
n4.addEventListener("click", () => {
    if(state == "a"){
        num1.push("4")
    }
    if(state == "b"){
        num2.push("4")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("4")
    }
    if(state == "d"){
        num1 = ""
        num1.push("4")
    }
});
n5.addEventListener("click", () => {
    if(state == "a"){
        num1.push("5")
    }
    if(state == "b"){
        num2.push("5")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("5")
    }
    if(state == "d"){
        num1 = ""
        num1.push("5")
    }
});
n6.addEventListener("click", () => {
    if(state == "a"){
        num1.push("6")
    }
    if(state == "b"){
        num2.push("6")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("6")
    }
    if(state == "d"){
        num1 = ""
        num1.push("6")
    }
});
n7.addEventListener("click", () => {
    if(state == "a"){
        num1.push("7")
    }
    if(state == "b"){
        num2.push("7")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("7")
    }
    if(state == "d"){
        num1 = ""
        num1.push("7")
    }
});
n8.addEventListener("click", () => {
    if(state == "a"){
        num1.push("8")
    }
    if(state == "b"){
        num2.push("8")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("8")
    }
    if(state == "d"){
        num1 = ""
        num1.push("8")
    }
});
n9.addEventListener("click", () => {
    if(state == "a"){
        num1.push("9")
    }
    if(state == "b"){
        num2.push("9")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("9")
    }
    if(state == "d"){
        num1 = ""
        num1.push("9")
    }
});
n0.addEventListener("click", () => {
    if(state == "a"){
        num1.push("0")
    }
    if(state == "b"){
        num2.push("0")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("0")
    }
    if(state == "d"){
        num1 = ""
        num1.push("0")
    }
});
n00.addEventListener("click", () => {
    if(state == "a"){
        num1.push("00")
    }
    if(state == "b"){
        num2.push("00")
        state = "c"
        sum.textContent = num2
    }
    if(state == "c"){
        num2.push("00")
    }
    if(state == "d"){
        num1 = ""
        num1.push("00")
    }
});

clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    state = "a"
    sum.textContent = num1
});

del.addEventListener("click", () => {
    if(state == "a"){
        num1 = num1.slice(0, -1);
    }
    if(state == "c"){
        num2 = num1.slice(0, -1);
    }
});

waru.addEventListener("click", () => {
    if(state == "a"){
        cal = "waru"
        state = "b"
    }else if(state == "b"){
        cal = "waru";
    }else if(state == "c"){
        if(cal == "tasu"){
            num1 = Number(num1) + Number(num2)
        }else if(cal == "hiku"){
            num1 = Number(num1) - Number(num2)
        }else if(cal == "kakeru"){
            num1 = Number(num1) * Number(num2)
        }else if(cal == "waru"){
            num1 = Number(num2) / Number(num1)
        };
        num2 = 0
        state = "b"
        cal = "waru"
        sum.textContent = num1;
    }else if(state == "d"){
        cal = "waru";
        state = "b"
    }
});
kakeru.addEventListener("click", () => {
    if(state == "a"){
        cal = "kakeru"
        state = "b"
    }else if(state == "b"){
        cal = "kakeru";
    }else if(state == "c"){
        if(cal == "tasu"){
            num1 = Number(num1) + Number(num2)
        }else if(cal == "hiku"){
            num1 = Number(num1) - Number(num2)
        }else if(cal == "kakeru"){
            num1 = Number(num1) * Number(num2)
        }else if(cal == "waru"){
            num1 = Number(num2) / Number(num1)
        };
        num2 = 0
        state = "b"
        cal = "kakeru"
        sum.textContent = num1;
    }else if(state == "d"){
        cal = "kakeru";
        state = "b"
    }
});
hiku.addEventListener("click", () => {
    if(state == "a"){
        cal = "hiku"
        state = "b"
    }else if(state == "b"){
        cal = "hiku";
    }else if(state == "c"){
         if(cal == "tasu"){
            num1 = Number(num1) + Number(num2)
        }else if(cal == "hiku"){
            num1 = Number(num1) - Number(num2)
        }else if(cal == "kakeru"){
            num1 = Number(num1) * Number(num2)
        }else if(cal == "waru"){
            num1 = Number(num2) / Number(num1)
        };
        num2 = 0
        state = "b"
        cal = "hiku"
        sum.textContent = num1;
    }else if(state == "d"){
        cal = "hiku";
        state = "b"
    }
});
tasu.addEventListener("click", () => {
    if(state == "a"){
        cal = "tasu"
        state = "b"
    }else if(state == "b"){
        cal = "tasu";
    }else if(state == "c"){
        if(cal == "tasu"){
            num1 = Number(num1) + Number(num2)
        }else if(cal == "hiku"){
            num1 = Number(num1) - Number(num2)
        }else if(cal == "kakeru"){
            num1 = Number(num1) * Number(num2)
        }else if(cal == "waru"){
            num1 = Number(num2) / Number(num1)
        };
        num2 = 0
        state = "b"
        cal = "tasu"
        sum.textContent = num1;
    }else if(state == "d"){
        cal = "tasu";
        state = "b"
    }
});

equal.addEventListener("click", () => {
    if(state == "c"){
         if(cal == "tasu"){
            num1 = Number(num1) + Number(num2)
        }else if(cal == "hiku"){
            num1 = Number(num1) - Number(num2)
        }else if(cal == "kakeru"){
            num1 = Number(num1) * Number(num2)
        }else if(cal == "waru"){
            num1 = Number(num2) / Number(num1)
        };
        num2 = 0
        state = "d"
        cal = ""
        sum.textContent = num1;
    }
});