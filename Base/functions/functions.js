


exports.getTimeNow =()=>{

    return Math.floor(Date.now() / 1000);
}

exports.convertTime = (time) =>{
    // Tạo một đối tượng Date từ timestamp, nhân với 1000 để chuyển đổi thành mili giây
    var date = new Date(timestamp * 1000);

    // Lấy thông tin về ngày, tháng, năm, giờ, phút và giây
    var day = date.getDate();
    var month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes(); // Để đảm bảo luôn có hai chữ số ở phút
    var seconds = "0" + date.getSeconds(); // Để đảm bảo luôn có hai chữ số ở giây

    // Định dạng ngày và thời gian
    var formattedDateTime =hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' ' + day + '/' + month + '/' + year  ;

    return formattedDateTime;
}