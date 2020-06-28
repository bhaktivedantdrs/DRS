$(document).ready(function () {
    autosize($('textarea'));
});


$("#projectname").change(function() {
    if(document.getElementById("projectname").value != ""){
        $('#task').show();
        if(document.getElementById("taskname").value != ""){
            $('#activity').show();
        }
        else{
            $('#activity').hide();
        }
    }
    else{
        $('#task').hide();
        $('#activity').hide();

    }
    
});
$("#taskname").change(function() {
    console.log(document.getElementById("taskname").value);
    if(document.getElementById("taskname").value != ""){
        $('#activity').show();
    }
    else{
        $('#activity').hide();
    }
});
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#data3 li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



