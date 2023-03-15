

function exportCSVFile(items, fileTitle) {
    var csv = items;
    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


function download(){
  console.log("********");
    var ele = document.getElementsByTagName("td");
 var str = '';
            for(var i=0;i<ele.length;i++){
            //    console.log(isAlphabet(ele[i].textContent));
             
               if(!ele[i].textContent.includes("Match") && isAlphabet(ele[i].textContent))
              {    
              
              str+='\n'+ele[i].textContent;
                
              }}
      var fileTitle = 'regexdata';
     exportCSVFile(str, fileTitle);
 }



if (window.confirm('Confirm To Download Data'))
{
    download();
}
else
{
    console.log("Not Confirmed");
}
