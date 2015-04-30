/**
 * Created by Lily on 30.04.2015.
 */
function writeCookie(name, value, days){
    //Срок хранения записывается в виде числа дней, которые должны существовать куки.
    //По умолчанию куки являются временными, не имея срока хранения.
    var expires = "";

    //Указав число дней, вы сделаете куки постоянными.
    if (days){
        var date = new Date ();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        //Срок хранения вычисляется преобразованием числа дней в миллисекунды и добавлением полученного числа к текущему времени.

        expires="; expires=" +date.toGMTString();
    }
    //Присвоим куки имя, значение и срок хранения
    document.cookie=name + "=" + value + expires +"; path=/";
}

function readCookie(name){
    //Найдем конкретный куки и вернем его значение

    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    //Разделитель точки с запятой делит список куки на отдельные экземпляры

    for (var i=0; i<cookie.length; i++){
        var c = cookies[i];
        while (c.charAt(0) == '')
            c= c.subString(1, c.length);
        if (c.indexOf(searchName==0))
            return c.subString(searchName.length, c.length);


    }
    return null;
}

function eraseCookie(name){
    //Удалим выбранные куки
    writeCookie (name, "", -1)
    //Для удаления куки достаточно записать его с отсутствующим значением и истекшим сроком хранения -1 день.
}