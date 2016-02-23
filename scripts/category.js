$(document).on('click','.big-list',function () {
    var productsContainer = $('#products-panel');
    productsContainer.removeClass();
    productsContainer.addClass('display-rows');
});

$(document).on('click', '.tiles', function () {
    var productsContainer = $('#products-panel');
    productsContainer.removeClass();
    productsContainer.addClass('display-tiles');
});
$(document).on('click', '.small-list', function () {
    var productsContainer = $('#products-panel');
    productsContainer.removeClass();
    productsContainer.addClass('display-small-list');
});
$(document).on('click', '.table', function () {
    var productsContainer = $('#products-panel');
    productsContainer.removeClass();
    productsContainer.addClass('display-table');
});