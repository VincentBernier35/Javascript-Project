let data = [
    {
        name: 'Sylvia',
        age: '39'
    },
    {
        name: 'Vince',
        age: '40'
    },
    {
        name: 'John',
        age: '45'
    },
    {
        name: 'Hub',
        age: '42'
    },  {
        name: 'Olive',
        age: '33'
    },  {
        name: 'Seb',
        age: '43'
    }

];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name +' '+ 'is ' + item.age + ' years old'+ '</div>';
});

info.innerHTML = details.join('\n');