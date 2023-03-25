function saveData() {
    var name = document.getElementById("name").value;
    var detail1 = document.getElementById("bio").value;
    var detail2 = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var sel = document.getElementById("optionlist");
    var age = sel.options[sel.selectedIndex].text


    var credit = [];
    var checkboxes = document.querySelectorAll('input[name="credit"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
        credit.push(checkboxes[i].value);
    }

    var data = {
        Name: name,
        Email: detail1,
        Bio: detail2,
        gender: gender,
        Credit: credit,
        Age: age
    };

    sessionStorage.setItem("data", JSON.stringify(data));
    alert("Data berhasil disimpan");
    window.location.href = "/html/after.html";
}