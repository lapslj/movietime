// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.



$("button").on("click",function(){
    let title = $("input").eq(0).val()
    let rating = $("input").eq(1).val()
    let bags = "&#x1f37f".repeat(rating)
    $("#movielist").append(`<li>${title}: ${bags}  <button class="remover">remove</button></li>`)
    $(".remover").on("click",function(e){
        $(e.target).parent().remove();
    })
    $("form")[0].reset()
})