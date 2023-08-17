function applyCoupon() {
    const totalField = document.getElementById('total-price');
    const discountField = document.getElementById('discount-price');
    const grandTotalField = document.getElementById('grand-total');

    const totalValue = parseFloat(totalField.innerText);
    const discount = Math.floor(totalValue * 0.20);
    const grandTotal = Math.ceil(totalValue - discount);

    totalField.innerText = totalValue;
    discountField.innerText = discount;
    grandTotalField.innerText = grandTotal;


    const couponMessage = document.getElementById('coupon-message');
    couponMessage.innerText = 'HAPPYSHOPPING20 is Applied for you!'

    couponMessage.classList.add('p-2')
    couponMessage.classList.add('rounded')
    couponMessage.classList.add('text-black')
    couponMessage.classList.add('font-medium')
    couponMessage.classList.add('mb-2')
}