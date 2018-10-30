
var initBody;
function beforePrint()
{
    initBody = document.body.innerHTML;
    document.body.innerHTML = div_page.innerHTML;
}
function afterPrint()
{
    document.body.innerHTML = initBody;
}
function pageprint()
{
    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
    window.print();
}

/*
$().ready(function () {
$('.modal.printable').on('shown.bs.modal', function () {
    $('.modal-dialog', this).addClass('focused');
    $('body').addClass('modalprinter');

}).on('hidden.bs.modal', function () {
    $('.modal-dialog', this).removeClass('focused');
    $('body').removeClass('modalprinter');
});
});
*/