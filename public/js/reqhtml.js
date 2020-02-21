function reqHTML() {
            let tagname = document.getElementsByTagName("*");
            for (var loop = 0; loop < tagname.length; loop++) {
                elem = tagname[loop];
                file = elem.getAttribute("include-html");
                if (file) {
                    /*make an HTTP request using the attribute value as the file name:*/
                    xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4) {
                            if (this.status == 200) { elem.innerHTML = this.responseText; }
                            if (this.status == 404) { elem.innerHTML = "Page not found."; }
                            /*remove the attribute, and call this function once more:*/
                            elem.removeAttribute("include-html");
                            reqHTML();
                        }
                    }
                    xhttp.open("GET", file, true);
                    xhttp.send();
                    /*exit the function:*/
                    return;
                }
            }
        }