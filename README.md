<img src="https://user-images.githubusercontent.com/30614068/35501411-de6818cc-04ea-11e8-8a1e-5a594e4be443.png">

> Одностраничное приложение для создания переговорок

https://yandex-rooms.firebaseapp.com

[![Build status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/webistomin/yandex-test/status.svg)](https://david-dm.org/webistomin/yandex-test) [![Dependency status][dependency-image]][dependency-url] 

При открытии приложения отображается таблица переговорок. Предполагается, что офис начинает работать с 7 часов, и закрывается в 23:59. Каждый блок таблицы равен одному часу. При клике на свободный блок, открывается форма создания нового события. Дата события, комната и этаж подставляются автоматически, остается лишь правильно заполнить оставшиеся поля.

После создания, появляется попап, который дублирует информацию о событии. Блок с событием окрашивается в серый цвет. При клике на него появляется попап с описанием и кнопка редактирования. Нажав на нее открывается окно редактирования, также появляется возможность удаления события.

<img src='https://github.com/webistomin/yandex-test/raw/master/example.gif'>

## Установка

<table>
  <thead>
    <tr>
      <th>Команда</th>
      <th>Результат</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="30%"><code>npm install</code></td>
      <td>Установить зависимости</td>
    </tr>
    <tr>
      <td><code>npm run dev</code></td>
      <td>Запустить сборку, сервер и слежение за файлами</td>
    </tr>
     <tr>
      <td><code>npm run build</code></td>
      <td>Собрать проект для продакшена</td>
    </tr>
    <tr>
      <td><code>npm start ЗАДАЧА</code></td>
      <td>Запустить задачу с названием ЗАДАЧА (список задач в <code>package.json</code>)</td>
    </tr>
  </tbody>
</table>

Предполагается, что все команды вы выполняете в bash (для OSX и Linux это самый обычный встроенный терминал, для Windows это, к примеру, Git Bash). В Windows установку пакетов (npm i) нужно выполять в терминале, запущенном от имени администратора.

## Техническое задание 
<a href="https://github.com/deilan-shri-msk-2018/entrance-task-2" target="_blank">Открыть репозиторий</a>

## Поддержка браузерами

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Yandex |
| --------- | --------- | --------- | --------- |--------- | --------- |
| IE11, Edge|Последние 2 версии|Последние 2 версии| 9+ |Последние 2 версии| Последние 2 версии |

## Таски на будущее
- [ ] Покрыть тестами
- [ ] Добавить сохранение переговорок в localStorage или любое другое хранилище
- [ ] Разработать алгоритм выдачи свободных переговорок

[travis-image]: https://travis-ci.org/webistomin/yandex-test.svg?branch=master
[travis-url]: https://travis-ci.org/webistomin/yandex-test
[dependency-image]: https://david-dm.org/webistomin/yandex-test/dev-status.svg
[dependency-url]: https://david-dm.org/webistomin/yandex-test

