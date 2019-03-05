$(document).ready(function(){
    $("#button_1").click(function(e) {
        e.preventDefault();
    $.ajax({
         url:"https://jsonplaceholder.typicode.com/posts", success: function(data){
          let arrObj=data;
    function createTable() {

        var table = document.createElement('table');
        table.setAttribute('id', 'tab');
        table.border=3;
        var header = Object.keys(arrObj[0]);
        var tr = document.createElement('tr');
        let myhead=header.map((myarr)=>{
            var th = document.createElement('th');
            th.innerHTML = myarr;
            tr.appendChild(th);
        })
        table.appendChild(tr);
        //for (var i = 0; i < arrObj.length; i++)
        let arr=arrObj.map((arr1)=> {
    
            var tr = document.createElement('tr');
            //for (var j = 0; j < header.length; j++) 
            var arr2=header.map((myarr3)=>{
                var td = document.createElement('td');
                td.innerHTML = arr1[myarr3];
                td.setAttribute('class', 'tableClass');
                tr.appendChild(td);
            })
            table.appendChild(tr);
        })
        document.body.appendChild(table);
        addEventsToColumns();
    }
    createTable();
    
    
    
    function addEventsToColumns() {
        var header = Object.keys(arrObj[0]);
        //for (var i = 0; i < header.length; i++)
        let head=head.map((myarr4)=> {
            document.getElementById(myarr4).addEventListener('click', function (event) {
               console.log(event);
                sortTable(event.target.innerText)
            })
        })
    }
    
    let flag = true;
    function sortTable(param) {
        arrObj.sort(compare);
        function compare(a, b) {
            if (a[param] > b[param] && flag)
                return 1;
            else
                return -1;
        }
        flag = !flag;
        createTable();
    }
        }
    });
    });
});