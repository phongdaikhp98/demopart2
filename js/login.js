function checklog() {
    reg = /[^a-z.@_0-9]/i;
    mEmail = document.frm1.email.value;
    n = mEmail.length;
    pass1 = document.frm1.pwd.value;
    if (mEmail == "" || reg.test(mEmail) == true || mEmail.indexOf("@") <= 0 || mEmail.charAt(n - 1) == '@') {
        alert("Invalid email. example:abc@gmail.com");
    } else if (pass1 == "") {
        alert("Please enter your password");
    } else {
        alert("Login Succsecfull");
    }
}
    
function checkContact() {
    reg = /[^a-z.@_0-9]/i;
    checkname = /[^a-zA-Z ]/i;
    xname = document.frm3.name.value;
    mEmail = document.frm3.email.value;
    n = mEmail.length;
    if (mEmail == "" || reg.test(mEmail) == true || mEmail.indexOf("@") <= 0 || mEmail.charAt(n - 1) == '@') {
        alert("Invalid email. example:abc@gmail.com");
    } else if (xname == "" || checkname.test(xname) == true)  {
        alert("Please enter your name");
    } else {
        alert("Thank you for your responsive");
    }
}

function checksu() {
    checkname = /[^a-zA-Z ]/i;
    reg = /[^a-z.@_0-9]/i;
    checkphone = /[^0-9]/i;
    xfname = document.frm2.fname.value;
    xlname = document.frm2.lname.value;
    xphone = document.frm2.phone.value;
    mEmail = document.frm2.email.value;
    checkbox = document.frm2.agreed.value;
    n = mEmail.length;
    if (xfname == "" || checkname.test(xfname) == true) {
        alert("Invalid first name");    
    } else if (xlname == "" || checkname.test(xlname) == true) {
        alert("Invalid last name");
    } else if (xphone == "" || checkphone.test(xphone) == true) {
        alert("Invalid phone");
    } else if (mEmail == "" || reg.test(mEmail) == true || mEmail.indexOf("@") <= 0 || mEmail.charAt(n - 1) == '@') {
        alert("Invalid email. example:abc@gmail.com");
    } else if (document.frm2.pwd2.value == "") {
        alert("Please enter your password");
    } else {
        alert("Register Successful");
    }

}

//back-to-top
$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > 100) $('#back-to-top').fadeIn();
else $('#back-to-top').fadeOut();
});
$('#back-to-top').click(function () {
$('body,html').animate({scrollTop: 0}, 'slow');
});
});

//findproduct

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");
    if (filter === '') {
        for (i = 0; i < li.length; i++) {
            li[i].visibility = "hidden";
        }
    }
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        li[i].style.display = "none";
        if (filter !== "" && a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            ul.style.display ='';
            li[i].style.display = "";
        }
    }
}



var img = ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var str = "";
for (var i = 0; i < img.length; i++) {
    str += "<img src = 'img/img1/"+img[i]+"'/>";
}
document.getElementById("loadimage").innerHTML = str;
