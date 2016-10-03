/**
 * Created by denis on 03.10.2016.
 */


angular.module('mailBox',['ngSanitize']);



angular.module('mailBox').directive('mailData', function(){
    return {
        restrict: 'AE',
        link: function(scope) {
            scope.mails = [{
                "id": 1,
                fullView : false,
                "fullName": "Иванов Иван",
                "avatarUrl": "http://randomuser.me/api/portraits/thumb/men/57.jpg",
                "date": "2016-10-10",
                "email": "ivanov@mail.ru",
                'subject': 'Система безопасности',
                "fullText" : 'Вы получили это сообщение, потому что адрес denis.tarankov@gmail.com указан в качестве резервного для восстановления доступа к аккаунту ***@gmail.com. Если ***@gmail.com – не Ваш аккаунт Google, нажмите сюда. После этого он больше не будет связан с Вашим адресом, и Вы перестанете получать подобные письма'
            }, {
                "id": 2,
                fullView : true,
                "fullName": "Петров Петр",
                "avatarUrl": "http://randomuser.me/api/portraits/thumb/men/7.jpg",
                "date": "2016-01-14",
                "email": "petrov@mail.ru",
                'subject': 'Обращение в службу поддержки',
                "fullText" : `Уважаемый клиент!<br><br>
                Спасибо за Ваше обращение!<br>
                Служба поддержки клиентов Ростелеком приняла его к рассмотрению.<br>
                Вы получите ответ в ближайшее время на указанный Вами электронный адрес.
                <br><br>
                Данное письмо отправлено с адреса, предназначенного только для рассылок. Пожалуйста, не отвечайте на него. Любые Ваши вопросы и пожелания Вы можете отправить через «Обратную связь» c сайта www.rt.ru или Единого личного кабинета lk.rt.ru
                <br><br>
                С уважением,
                Ростелеком, www.rt.ru`
            }, {
                "id": 3,
                fullView : false,
                "fullName": "Сидорова Наталья",
                "avatarUrl": "http://randomuser.me/api/portraits/thumb/women/7.jpg",
                "date": "2016-07-03",
                "email": "sidorova@mail.ru",
                'subject': 'Уведомление',
                "fullText" : `Здравствуйте!<br><br>
                Мы хотели бы сообщить, что Dropbox больше не поддерживает ОС Windows XP. ОС Windows Vista теперь является самой старой из поддерживаемых версий Windows, с которой работает программа Dropbox. Поскольку как минимум на одном из Ваших компьютеров, работающих с программой Dropbox, установлена устаревшая ОС, Ваш аккаунт был отключен от Dropbox на этих компьютерах. С этих компьютеров больше нельзя получить доступ к программе Dropbox и/или скачать и загрузить файлы Dropbox.
                `
            }];
        }
    }
});


angular.module('mailBox').directive('mail', function(){
    return {
        restrict: 'E',
        templateUrl: 'mail.html.tpl' 
    }
});



