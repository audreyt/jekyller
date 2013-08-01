        $(function(){
            var draw = function(){
                var pos = $(this).offset();
                $('#holder').fadeOut('fast');
                $('<div/>', {id: 'holder', css: { top: 90, left: 2, position: 'fixed' }})
                    .appendTo('#canvas')
                    .strokeWords('萌兆', { svg: false });
            };
            $('#canvas img').hover(draw);
            $('#canvas').on('click', 'canvas', draw);
        });
