var url1 = new URL(window.location.href);
var index = url1.searchParams.get("index");
var tab = url1.searchParams.get("tab");

function getData() {
    if (tab==1) {
        return arrayDataObject;
    }
    if (tab==2) {
        // $('.button-group').html(
        //     `<a href="index.html">
        //     <button type="button" class="btn btn-primary button-nav" style="width: 120px;">Học</button>
        // </a>
        // <button type="button" class="btn btn-secondary button-nav-active" style="width: 160px;">Luyện tập</button>
        // <a href="thongke.html">
        //     <button type="button" class="btn btn-primary button-nav">Thống kê</button>
        // </a>
        // <a href="kiemtra.html">
        //     <button type="button" class="btn btn-primary button-nav">Kiểm tra</button>
        // </a>`
        // );
        return arrayTrainningDataObject;
    }
}

var rsArray = [];
var arrayDataObject = getData();
for (var i = 0; i < arrayDataObject.length; i++) {
    for (var j = 0; j < arrayDataObject[i].items.length; j++) {
        rsArray.push(arrayDataObject[i].items[j]);
    }
}
console.log(rsArray);


$('#show-header').html(`<p style="white-space: pre-line;">${rsArray[index].header}</p>`);

$(".button-group").html(`
<a href="index.html">
<button type="button" class="btn btn-primary button-nav" style="width: 120px;">Học</button>
</a>
<button type="button" class="btn btn-secondary button-nav-active" style="width: 160px;">Luyện tập</button>
<a href="kiemtra.html">
<button type="button" class="btn btn-primary button-nav">Kiểm tra</button>
</a>
<a href="statistics.html" style="
">
<button type="button" class="btn btn-primary button-nav">Thống kê</button>
</a>
<a href="tudien.html" style="
">
<button type="button" class="btn btn-primary button-nav">Từ điển</button>
</a>
`);