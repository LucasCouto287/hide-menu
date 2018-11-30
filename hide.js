  $(document).on('click', function(event) {
        if (!$(event.target).closest('button').length) {
            // Hide the menus.
            $('.menu').fadeOut();
        }
    });
