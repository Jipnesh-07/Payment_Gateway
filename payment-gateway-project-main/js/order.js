
document.getElementById('rzp-button1').onclick = function(e){ 
    var orderId=document.getElementById('rzp-order-id').value  
            
    var options = { 
        "key": "rzp_test_2mj2dLsCitNDw1", 
        "image": "./../res/imgs/logo_pay.jpg",  
        "order_id": orderId,
        "handler": function (response){ 
                    // 
                    // alert(response.razorpay_payment_id);  
                    // alert(response.razorpay_order_id); 
                    // alert(response.razorpay_signature);
            },
        };
            
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response){
                // falire code handling     
    })

    rzp1.open();
    e.preventDefault();
}
