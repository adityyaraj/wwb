var xhttp = new XMLHttpRequest();

        var headerPath = "header.html"; 
    
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.body.insertAdjacentHTML("afterbegin", this.responseText);
            }
        };
    
        xhttp.open("GET", headerPath, true);
        xhttp.send();

    var footerXhr = new XMLHttpRequest();
    
    var footerPath = "footer.html"; 
    
    footerXhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.body.insertAdjacentHTML("beforeend", this.responseText);
        }
    };
    
    footerXhr.open("GET", footerPath, true);
    footerXhr.send();