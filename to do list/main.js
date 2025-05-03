$(document).ready(function() {
            
    function addTask(text) {
        const taskItem = $(`<li>${text}<button class="delete-btn">X</button></li>`);
        
      
        taskItem.click(function() {//marks task as completed when clicking on it
            $(this).toggleClass("completed");
        });
        
        $("#todo-list").append(taskItem.hide().fadeIn(300));

        taskItem.find(".delete-btn").click(function() {
            $(this).parent().fadeOut(300, function() {
                $(this).remove();
            });
        });
        
    }

    $("#add-btn").click(function() {
        const taskText = $("#todo-input").val().trim();
            addTask(taskText);
            $("#todo-input").val("").focus();
    });




});