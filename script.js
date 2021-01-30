// Increment, decrement
function handleProductChange(product, isIncrease) {
   const productCount = getInputValue(product);
   let productNewCount = productCount;
   if (isIncrease == true) productNewCount = productCount + 1;
   if (isIncrease == false && productCount > 0) productNewCount = productCount - 1;
   document.getElementById(product + "Count").value = productNewCount;
   calculateTotal();
}

// Subtotal, VAT, Total
function calculateTotal() {
   const firstClassCount = getInputValue('firstClass');
   const economyClassCount = getInputValue('economyClass');

   const totalPrice = (firstClassCount * 150) + (economyClassCount * 100);
   document.getElementById("subtotal").innerText = totalPrice;

   const vat = Math.round(totalPrice * 0.1);
   document.getElementById("vatAmount").innerText = vat;

   const grandTotal = totalPrice + vat;
   document.getElementById("total").innerText = grandTotal;
}

// Reading value from an id
function getInputValue(product) {
   const productInput = document.getElementById(product + 'Count');
   const productCount = parseInt(productInput.value);
   return productCount;
}

function buyNow() {
   var txt;
   const firstClassCount = getInputValue('firstClass');
   const economyClassCount = getInputValue('economyClass');
   const cost = document.getElementById("total").innerText;
   const confirmText = "Dear customer,\n" + "                         " + "You have selected " + firstClassCount + " First Class Tickets &\n" + "                                                       " + economyClassCount + " Economy Class Tickets which costs" + "\n                                                                                " + "you $ " + cost + "\n\n Want to continue?";
   const emptyText = "You can't buy 0 ticket from us";

   // Number of tickets is greater than 0
   if (cost > 0) {
      if (confirm(confirmText)) {
         txt = "You bought tickets successfully!";
      }

      else {
         txt = "You pressed Cancel!";
      }
   }

   // Number of ticket is 0
   else if (cost == 0) {
      if (confirm(emptyText)) {
         txt = "Please select number of ticket you want to buy";
      }
      else {
         txt = "Sorry! we can't process your order";
      }
   }
   document.getElementById("finalMessage").innerHTML = txt;
}





