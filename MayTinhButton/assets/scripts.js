const LichSu =()=>{
    var _ListLichSu = ''
    if(_ListLichSu===null)
    {
        console.log('error')
        return
        
    }
    else if(window.localStorage.getItem('_ListLichSu')===null)
    {
        _ListLichSu += ' '  + calculator.display.value
        window.localStorage.setItem('_ListLichSu',_ListLichSu)
    }
    else{
        console.log(window.localStorage.getItem('_ListLichSu'))
        _ListLichSu += calculator.display.value +' ' + window.localStorage.getItem('_ListLichSu')
        console.log(_ListLichSu)
        window.localStorage.setItem('_ListLichSu',_ListLichSu)
    }
}
const Tong = ()=>{
    calculator.display.value = eval(calculator.display.value)
    LichSu()
}
var _danhsachhtml = ''
window.onload = function test(){
    const _ListLichSu = window.localStorage.getItem('_ListLichSu').split(' ')
    console.log(_ListLichSu)
    _ListLichSu.map(x=> x.length !== 0  ? _danhsachhtml+=`<li>
        ${x}
        </li>` : '')
    var tag_id = document.getElementById('LichSu');
    document.getElementById('LichSu').style.color = 'red'
    tag_id.innerHTML = _danhsachhtml;
}
const Reload=()=>{
    window.location.href = "/"
}

test()
