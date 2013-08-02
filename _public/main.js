        $(function(){
            var draw = function(){
                var pos = $(this).offset();
                $('#holder').remove();
                $('<div/>', {id: 'holder', css: { top: 90, left: 2, position: 'fixed' }})
                    .appendTo('#canvas')
                    .strokeWords('萌兆', { svg: false });
            };
            $('#canvas img').hover(draw);
            $('#canvas').on('click', 'canvas', draw);
            $('#xml- div, #3du div').hover(function(){ $('#holder').hide() });
        });
