//check of specific items by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); 
    
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var newTodo = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + newTodo + "</li>");
    }
});

$(".fa-edit").click(function(){
    $("input[type ='text']").fadeToggle();
})

