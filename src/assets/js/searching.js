$(document).ready(function(){
  $('#form-filter').on('change', function(){
    console.log("search");
    submitSearchForm();
  });

  submitSearchForm = function() {
    var name_params = $('#form-filter-destination').val();
    var category_ids = [];
    $('#searching input:checked').each(function() {
      category_ids.push($(this).attr('id'));
    });
    var workspace_params = $('#q_workspace_id_eq').val();
    var status_params = $('#q_status_eq').val();

    var place_params =

    $.ajax({
      url: 'http://localhost:3000/api/v1/places',
      type: 'GET',
      data: {category_ids: JSON.stringify(category_ids) , "q[name_cont]": name_params},
      success: function(result) {
        console.log(this.url);
      }
    });
  }
});
