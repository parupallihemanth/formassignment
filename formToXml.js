function downloadFormData(contentType,data,fileName){
	 
    var link=document.createElement("A");
    link.setAttribute("href",encodeURI("data:"+contentType+","+data));
    link.setAttribute("style","display:none");
    link.setAttribute("download",fileName);
    document.body.appendChild(link); 
    link.click();
    setTimeout(function(){
        document.body.removeChild(link);
    },1000);
 }
 
 function fromDataToXml(form){
    let xmldata=['<?xml version="1.0"?>'];
       xmldata.push("<form>");
    let inputValues=form.elements;
    for(let inputValues in inputValues){
         let el=document.createElement("ELEMENT");
       if (inputs[i].name){
           el.setAttribute("name",inputs[inputValues].name);
           el.setAttribute("value",inputs[inputValues].value);
         xmldata.push(el.outerHTML);
       }
       
     }
     xmldata.push("</form>");
     return xmldata.join("\n");
 }
 
 
 function download(frm){
 
    let data=fromDataToXml(frm);
    downloadFormData("text/xml",data,"output.xml");
 }