$(() => {
    $(":button").on('click', function() {

        if ($(this).parent().children("input").length === 0) {
            var parent = $(this).parent();
            var cText = parent.children("span").text();
            var detail = parent.children("b").text();
            var dataType = parent.data("type");
            parent.children("b, span").hide();
            var inputEle = $("<input></input>", {
                type: dataType,
                value: cText,
                name: detail,
                class: 'col-md-8'
            });
            parent.prepend(inputEle);
            $(this).text("Update");


        } else {
            var parent = $(this).parent();
            var val = parent.children("input").val();
            parent.children("span").text(val);
            parent.children("b, span").show();
            parent.children("input").remove();
            $(this).text("Edit");
        }


    });
});