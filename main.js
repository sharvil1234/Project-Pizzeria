menu_list_array = ["Farm House", "Margherita", "Peppy Paneer", "Veganza"];

function add_item()
{
    var added_flavour = document.getElementById("add_item").value;
    menu_list_array.push(added_flavour);
    document.getElementById("ol").innerHTML += "<li>"+added_flavour+"</li>" 
}