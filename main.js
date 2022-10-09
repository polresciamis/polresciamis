var count = 0;

function kitmove(element) {
    count += 1;
    xx = count + "%"
    document.getElementById("kitten").style.left = xx;
    if (xx == "85%") {
        document.getElementById("paw").style.display = "block";
        document.getElementById("click").style.color = "#545041";
        setTimeout(function() {
            document.getElementById("paw").style.display = "none";
            document.getElementById("click").style.color = "#C6BE9E";

            count = 0;
        }, 3000);
    }
    else {

    }
}
