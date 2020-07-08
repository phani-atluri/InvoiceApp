            
            var bt = document.getElementById("add")
            var rm = document.getElementById("remove")
            var pr = document.getElementById("print")
            var tab = document.getElementById("tab")
            var inpt = document.getElementsByTagName("textarea")
            var total = document.getElementById("tot")
            var th = document.getElementsByTagName("th")

            function bind() {
                $('.rate').blur(update_price);
                $('.qty').blur(update_price);
            }
            function update_price() {
                var row = $(this).parents('.item-row');
                var cost = row.find('.rate').val();
                var qty = row.find('.qty').val();
                console.log(row.find('.price'))
                row.find('.price').val(Number(qty) * Number(cost));
                total.textContent = "Total: " + summing();
            }
            //add  table input rows
            var addRow = () => {
                var tr = document.createElement("tr");
                tr.setAttribute("class", "item-row")
                var tbody = document.createElement("tbody")
                var td1, inp

                for (var i = 0; i < th.length; i++) {
                    td1 = document.createElement("td");
                    inp = document.createElement("textarea");
                    td1.appendChild(inp);
                    tr.appendChild(td1)
                }


                tab.appendChild(tr)
                //inpt[inpt.length-2].oninput=inptchange
                inpt[inpt.length - 3].setAttribute("class", "qty")
                // inpt[inpt.length-3].oninput=inptchange
                inpt[inpt.length - 2].setAttribute("class", "rate")
                inpt[inpt.length - 1].setAttribute("class", "price")


            }
            //   print [page]
            var printIt = () => {
                console.log(inpt)
                bt.style.visibility = 'hidden'
                rm.style.visibility = 'hidden'
                pr.style.visibility = 'hidden'
                window.print();
                bt.style.visibility = 'visible'
                rm.style.visibility = 'visible'
                pr.style.visibility = 'visible'

            }
            async function adding() {
                await addRow();
                bind();
            }

            //summing the price column
            function summing() {
                sum = 0
                for (i = 5; i < inpt.length; i = i + 4) {
                    console.log(inpt[i].value)
                    if (inpt[i].value == "") {
                        inpt[i].value = 0;
                    }
                    sum = sum + parseFloat(inpt[i].value)
                }
                return sum;
            }
            //remove table rows
            rm.addEventListener("click",
                function() {
                    if (tab.childNodes.length > 2) {
                        console.log(inpt[inpt.length - 1].value)
                        if (inpt[inpt.length - 1].value != "") {
                            tab.removeChild(tab.lastChild);
                            total.textContent = "Sub Total: " + summing();
                        }
                        else {
                            tab.removeChild(tab.lastChild);
                        }
                    }
                }
            )