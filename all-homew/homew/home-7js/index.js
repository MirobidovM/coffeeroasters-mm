$(function ( ) {
     $ ("td").click (function (event) { 
         
        if ($ (this).children ("input"). length>0) 
        return false; 
        
    var tdobj = $(this);
    var preText = tdobj.html () ; 
    var inputobj = $("<input type = 'text'  />");
    tdobj.html (""); 
     
    inputobj.width (tdobj.width ()) 
            .height (tdobj.height ( )) 
            .css ( {border: "Opx", fontsize:"15px"}) 
            .val (preText) .appendTo (tdobj) 
            .trigger ("focus") 
            .trigger ("select") 
    inputobj.keyup (function (event ) {
         if (13==event.which) { // if u press enter u gonna get saved 
            
            var text = $(this).val ();
            tdobj.html (text);
          }
         else if (27==event.which ) {// if u esc enter u gonna cancel 
            tdobj.html (preText);
         }
        }) ; 
        inputobj.click (function () { 
            return false 
        }) ; 
    }) ; 
});
function ExportToExcel (type, fn, dl){
    var elt=document.getElementById('tbl_exporttable_to_xls');
    var wb = XLSX.utils.table_to_book(elt, { sheet:"sheet1"});
    return dl ?
    XLSX.write(wb,{bookType: type,bookSST: true, type:'base64'}):
    XLSX.writeFile(wb, fn ||('My feedback:.'+(type ||'xlsx')));
}