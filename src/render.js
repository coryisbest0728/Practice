define(function() {
    var bs = document.body.style;

    bs.padding = '2px';
    bs.border = '1px solid red';

    bs.color = 'blue';
    bs.backgroundColor = '#CCC';

    bs.fontSize = '14px';
    document.body.appendChild(document.createTextNode('abc!'));

    bs.color = 'green';
    bs.backgroundColor = '#FFF000';
});




// timeShim([
//     function () {
//         bs.padding = '2px';
//         bs.border = '1px solid red';
//     },
//     function () {
//         bs.color = 'blue';
//         bs.backgroundColor = '#CCC';
//     },
//     function () {
//         bs.fontSize = '14px';
//         document.body.appendChild(document.createTextNode('abc!'));
//     },
//     function () {
//         bs.color = 'green';
//         bs.backgroundColor = '#FFF000';
//     }
// ]);
