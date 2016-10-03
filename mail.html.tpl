<div class="mail__item" ng-click="mail.fullView = !mail.fullView">
    <div class="mail__item__part1">{{mail.fullName}}</div>
    <div class="mail__item__part2">
        <span class="mail__item__header">{{mail.subject}} &nbsp;-&nbsp;</span>
        <span class="mail__item__body">{{mail.fullText | limitTo: 135}}...</span>
    </div>
    <div class="mail__item__part3">{{mail.date}}</div>
</div>


<div class="fullText" ng-if="mail.fullView">
    <div class="fullText__header">
        <table>
            <tr>
                <td>
                    <img ng-src="{{mail.avatarUrl}}" width="50">
                </td>
                <td class="fullText__header__info">
                    <span class="fullText__header__sender">{{mail.fullName}}</span>
                    <br>
                    <span class="fullText__header__mail"><{{mail.email}}></span>
                </td>
            </tr>
        </table>
    </div>

    <div ng-bind-html="mail.fullText"></div>
</div>