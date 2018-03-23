var urlPhotoSplash = 'https://source.unsplash.com/600x300/?';
var urlPhotoProfile = 'https://randomuser.me/api/';
var categories = ['office','workspace','laptop','coffee','nature','texture'];

$.ajax({
    url: urlPhotoProfile,
    dataType: 'json',
    success: function(data) {
        //console.log(data);
        $("#image-profile").attr('src',data.results[0].picture.large);
        $("#name-profile").text(data.results[0].name.first.capitalize() + ' ' + data.results[0].name.last.capitalize());
    }
});

/*
$.each($(".image-article"), function (index, value) {
    $.ajax({
        url: urlPhotoSplash + categories[index],
        //dataType: 'json',
        success: function(data) {
            $(value).attr('src',data);
        }
    });
});
*/


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
