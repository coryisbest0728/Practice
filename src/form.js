define(function() {
    var formNode = document.querySelector('.form');
    formNode.addEventListener('submit', function (evt) {
        evt.preventDefault();
        console.debug(getFormData());
        formNode.reset();
        formNode.querySelector('input[name]').focus();
    });
    function getFormData() {
        var formData = {};
        var inputs = document.querySelectorAll('input[name]');
        for (var i = 0, j = inputs.length; i < j; ++i) {
            var input = inputs[i];
            formData[input.name] = input.value;
        }
        return formData;
    }
});
