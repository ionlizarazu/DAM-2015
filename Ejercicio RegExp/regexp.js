var date = /\w*\d{2}\/\d{2}\/\d{2,4}\w*/;
console.log("Nací el 05/04/1982 en Donostia. Contiene una fecha? ",date.test("Nací el 05/04/1982 en Donostia."));

var email = /[a-zA-Z_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
console.log("ion_liza.razu@gmail.com Contiene un email? ",email.test("ion_liza.razu@gmail.com"));

var escapeHTML = /[<>&"]/g;
function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                        ["<", "&lt;"], [">", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}


var namesurname = /([a-zA-Z]+)\s([a-zA-Z]+)/;
var resultname = namesurname.exec("Ion Lizarazu");
console.log(resultname[2],", ",resultname[1]);



var script = /(.*?)(<script>.*?<\/script>)(.*?)/;
var resultscript = script.exec("<izquierda>  <script>interno</script>  <derecha>");
console.log(resultscript[0]);

