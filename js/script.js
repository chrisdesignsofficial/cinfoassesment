// Syntax $ is to define, ("#.") the next thing is the selecctor 
/*(#el).click(function(){
    action goes here
    =>Other events are dblclick, hover, hide, show, fadein, fadeout.
    text() is for textContent
    html()is for InnerHtml
})
*/
let count = 0  
let para =  $("#para");
let input = $("#text")
let test = $("#test")
let list = $(".list")
let btn =  $("button")

    input.focus(() =>{
        // input.css("background-color", "lightblue");
        input.toggleClass("border border-danger")
    });

   btn.click(function(){
        console.log(input.val())
        para.text(input.val())
        list.empty()
        btn.toggleClass("bg-success")
    });

