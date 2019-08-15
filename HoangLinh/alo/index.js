var cart = [];
$(document).ready(function(){
	var wrapper = document.getElementById("wrapper");
	var body = document.getElementById("body");
	var more = document.getElementById("model");
	$('.more').on('click', function(){
		more.classList.add('supModel');
		more.style.display = "block";
		body.classList.add('supBody');
		wrapper.style.zIndex = "-1";
		var proId = $(this).attr('productId');
		console.log(proId);
		var pName = $('#stt-'+proId).children('#name').children('#productName').text();
		console.log(pName);
		var imgUrl = $('#stt-'+proId).children('#name').find('img').attr('src')
		console.log(imgUrl);
		var money = $('#stt-'+proId).children('#name').children('#money').text();
		console.log(money);
		var obj = {
			id : proId,
			productName : pName,
			imageUrl: imgUrl,
			money: money, 
		};
		//check sanpham cos trong gio hang chua
		var flag = false //mat dinh la khong co trong gio hang
		for (var i = 0; i < cart.length; i++) {
			if(cart[i].id == obj.id){
				flag = true;
				break;
			}
		}
		//neu sp chua co trong gio hang
		if(flag === false){
			obj.quantity = 1;
			cart.push(obj);
		}
		else{
			cart[i].quantity +=1;
		}
		drawVart();
	});
});

function drawVart() {
	$('tbody').empty();
	var goods = "";
	var totalMoney = 0;
	for (var i = 0; i < cart.length ; i++) {
		totalMoney += cart[i].money * cart[i].quantity;
		goods += `
			<tr>
				<td>
					<img src="${cart[i].imageUrl}" alt="" class="imgCart">
					${cart[i].productName}
				</td>
				<td>
					${cart[i].money}
				</td>
				<td> 
					<input type = "number" name="" value="${cart[i].quantity}" min="0" step = "1">
				</td>
				<td>
					${cart[i].money*cart[i].quantity} <span>VNĐ<span>
				</td>
			<tr>
		`;
	}
	goods += `
		<tr>
			<td colspan = "3">Tổng tiền</td>
			<td>${totalMoney}<span>VNĐ</span>
			</td>
		</tr>
	`;
	$('tbody').append(goods);
}
linh.onclick = function(){
	var model = document.getElementById("model");
	var wrapper = document.getElementById("wrapper");
	var body = document.getElementById("body");
	model.style.display = "none";
	wrapper.style.zIndex = "0";
	body.classList.remove("supBody");
}