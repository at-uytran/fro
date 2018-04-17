$(document).ready(function(){
  // $('#form-filter-destination').text("sjhn jkn");
  $('#form-filter-destination').on('change', function(){
    console.log("search");
    submitSearchForm();
  })


  submitSearchForm = function() {
    var text = $('#form-filter-destination').val();
    console.log(text);


  }

  function submit_form() {
    var category_ids = [];
    $('#searching input:checked').each(function() {
      category_ids.push($(this).attr('id'));
    });
    var title_params = $('#ecom-search').val();
    var workspace_params = $('#q_workspace_id_eq').val();
    var status_params = $('#q_status_eq').val();

    $.ajax({
      url: '/courses',
      type: 'GET',
      data: {category_ids: JSON.stringify(category_ids) , "q[title_cont]": title_params, "q[workspace_id_eq]": workspace_params, "q[status_eq]": status_params},
      success: function(result) {
        $('#results').html($('#results', result).html());
        history.pushState({}, null, this.url);
        App.init();
        console.log(category_ids);
      }
    });

  };
});
