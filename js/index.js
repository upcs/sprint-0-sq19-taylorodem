function index() {

    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    var para = document.createElement("p");
    var node = document.createTextNode(addNums(x,y));
    var result = document.createTextNode(x + " + " + y + " = ");
    
    para.appendChild(result);
    para.appendChild(node);
    
    var element = document.getElementById("div1");
    element.appendChild(para);

}