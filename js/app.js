$(document).on('ready', function(){
    let videoIndex = 0;
    const videos = ['https://www.youtube.com/embed/TSFOjksaviU',
        'https://www.youtube.com/embed/_D9OJ0RpB_I',
        'https://www.youtube.com/embed/5J1WY0TBaeM',
        'https://www.youtube.com/embed/spIQEwze0yw'];

    $('.thumb').each(function(i, obj) {
        let videoThumbnail = videos[i].match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        videoThumbnail = 'http://img.youtube.com/vi/' + videoThumbnail + '/0.jpg';
        obj.style.backgroundImage = 'url("' + videoThumbnail + '")';
    });

    $('#portfolio-open').on('click', function (){
        $('.video-' + videoIndex).attr('src', videos[videoIndex]);
        $('#myNav').css('height', '100%');
        $('#modal_container').fadeIn(1500);
    });
    $('#portfolio-close').on('click', function (){
        $('#myNav').css('height', '0%');
        $('.youtube-video').attr('src', '');
        $('#modal_container').fadeOut(1000);
    });

    $('.thumbnails .thumb').on('click', function (e) {
        videoIndex = $(this).data('image-id');
        $('.youtube-video').attr('src', '');
        $('.video-' + videoIndex).attr('src', videos[videoIndex]);
    });
});