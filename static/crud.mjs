function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
    document.getElementById('description').value = '';

    document.getElementById('nameError').style.display = 'none';
    document.getElementById('brandError').style.display = 'none';
    document.getElementById('modelError').style.display = 'none';
    document.getElementById('priceError').style.display = 'none';
    document.getElementById('descriptionError').style.display = 'none';
}

function searchData() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function validateForm() {
    var name = document.getElementById("name").value;
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var price = document.getElementById("price").value;
    var description = document.getElementById("description").value;

    document.getElementById("nameError").innerText = name ? "" : "Please fill in this field";
    document.getElementById("brandError").innerText = brand ? "" : "Please fill in this field";
    document.getElementById("modelError").innerText = model ? "" : "Please fill in this field";
    document.getElementById("priceError").innerText = price ? "" : "Please fill in this field";
    document.getElementById("descriptionError").innerText = description ? "" : "Please fill in this field";

    if (name == "" || brand == "" || model == "" || price == "" || description == "") {
        return false;
    }

    return true;
}