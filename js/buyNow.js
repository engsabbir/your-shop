let total = 0;
const productArray = [];
function buyNow(event) {
    const productPrice = event.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const price = parseFloat(productPrice);

    total = parseFloat(total) + parseFloat(price);
    const discount = Math.floor(total * 0.10);
    const grand = Math.ceil(total - discount);

    const totalPrice = document.getElementById('total-price');
    const discountPrice = document.getElementById('discount-price');
    const grandTotal = document.getElementById('grand-total');

    const productList = document.getElementById('product-list');
    const productName = event.parentNode.parentNode.childNodes[1].childNodes[1].innerText


    if (productArray.includes(productName)) {
        alert('This is already added your cart');
        return;
    }
    else {
        productArray.push(productName)
    }

    totalPrice.innerText = total;
    discountPrice.innerText = discount;
    grandTotal.innerText = grand;

    const li = document.createElement('li');
    li.innerText = productName;
    productList.appendChild(li);
}