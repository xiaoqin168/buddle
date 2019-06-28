$(function(){
$.ajax({
    // url:"<%=request.getContextPath()%>/storage/tableList",//接口路径
    type: "GET",
    url:"data.json",
    dataType: "json",
    cache: false,
    success: function (data) {
        for(i in data.data) //data.data指的是数组，数组里是8个对象，i为数组的索引
        {
            var tr;
            tr='<td>'+data.data[i].startTime+'</td>'+'<td>'+data.data[i].endDate+'</td>'+'<td>'+data.data[i].currCode+'</td>'+'<td>'+data.data[i].rate+'</td>'+'<td>'+data.data[i].unitrate+'</td>'+'<td>'+data.data[i].ctryname+'</td>'+'<td>'+data.data[i].remarks+'</td>'
            $(".table").append('<tr>'+tr+'</tr>')
        }
    },
    error: function (data) {
        console.log("获取失败")
    }
    })
})
