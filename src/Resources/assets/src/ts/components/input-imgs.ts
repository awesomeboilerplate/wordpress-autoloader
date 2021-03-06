declare const jQuery;
declare const wp;
declare const Sortable;

export class InputImgs {
  bindEventlisteners() {
    jQuery('.input-imgs__btn').on('click', function(e) {
      e.preventDefault();

      var btn = jQuery(this);
      var wrap = jQuery(this).parents('.input-imgs');
      var input = wrap.find('.input-imgs__val');
      var thumbs = wrap.find('.input-imgs__thumbs');

      var frame = wp.media({
        title: 'Select image',
        button: {
            text: 'Select'
        },
        multiple: 'add'
      });

      // open
      frame.on('open', function(){
          var selection = frame.state().get('selection');
          var imgIds = input.val(); // the id of the image
          if (imgIds) {
            var imgIds = imgIds.split(',');

            imgIds.forEach(imgId => {
              selection.add(wp.media.attachment(imgId));
            });
          }
      });

      // select
      frame.on('select', function() {
        var selection = frame.state().get('selection');
        var imgIds = [];

        // add thumbs
        thumbs.html('');
        selection.map(function(attachment) {
          attachment = attachment.toJSON();

          // append img
          thumbs.append(jQuery('<div data-id="'+attachment.id+'" class="input-imgs__thumb"><img class="input-imgs__thumb-img" src="' + attachment.url + '" /><div class="input-imgs__thumb-remove">X</div></div>'));

          // save id
          imgIds.push(attachment.id);
        });

        // set value
        input.val(imgIds.join(','));
      });

      // remove

      frame.open();
    });

    jQuery('body').delegate('.input-imgs__thumb-remove', 'click', function (e) {
      var wrap = jQuery(this).parents('.input-imgs');
      var input = wrap.find('.input-imgs__val');
      var img = jQuery(this).parents('.input-imgs__thumb');
      var id = img.data('id').toString();

      var ids = input.val().split(',');
      ids.splice(ids.indexOf(id), 1);

      input.val(ids.join(','));
      img.remove();
    });

    // sorting
    const el = document.getElementById('input-imgs__thumbs');
    if (el) {
      Sortable.create(el, {
        onEnd: (e) => {
          this.refreshList(jQuery(e.target));
        },
        animation: 100
      });
    }
  }

  private refreshList(target) {
    const ids = [];
    target.find('.input-imgs__thumb').each((i, item) => {
      ids.push(jQuery(item).data('id'));
    });

    target.parents('.input-imgs').find('.input-imgs__val').val(ids.join(','));
  }
}
