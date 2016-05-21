

var tabs = document.getElementsByClassName("tabs")[0].getElementsByTagName("li"),
    tabsContent = document.getElementsByClassName("tabs-content")[0].getElementsByTagName("div"),
    n = tabs.length;

for (var i = 0; i < n; i++) {
    tabs[i].onclick = function(event) {handleTabs(event)};
}

function handleTabs(event) {
    var order = event.target.getAttribute("data-tab");
    console.log(order);
    for (var i = 0; i < n; i++) {
        removeClass(tabs[i], "active");
        removeClass(tabsContent[i], "active");
    }
    addClass(tabs[order-1], "active");
    addClass(tabsContent[order-1], "active");
}


/*
* Helper functions
*/
function addClass(el, cls) {
    var classes = el.className;
    el.className = classes + " " + cls;
}

function removeClass(el, cls) {
    var classes = el.className;
    var arrClasses = classes.split(" ");
    arrClasses.forEach( function(item, i, arr) {
        if (item == cls) {
            arr.splice(i, 1);
        }
    });
    classes = arrClasses.join(" ");
    el.className = classes;
}

function toggleClass(el, cls) {
    if (hasClass(el, cls)) {
        removeClass(el, cls);
    } else {
        addClass(el, cls)
    }
}

function hasClass(el, cls) {
    var result = false;
    var classes = el.className;
    var arrClasses = classes.split(" ");
    arrClasses.forEach( function(item, i, arr) {
        if (item == cls) {
            result = true;
        }
    });
    return result;
}
