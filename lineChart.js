var chartBench

$(document).ready(function () {
    var slackEmojiActivity = [
        { label: ':partyparrot:', image: './images/partyparrot.png' },
        { label: ':michelleobama:', image: './images/obama-face.png' },
        { label: ':beermug:', image: './images/beer-mug.png' },
        { label: ':shibamaru:', image: './images/sticker.png' },
        { label: ':beep:', image: './images/curse.png' }
    ];
    var container = document.getElementById("slack-Emojies");
    for (var i = 0; i < slackEmojiActivity.length; i++) {
        container.innerHTML += '<div class="d-flex tab412"><div class="pl-3 pt-4">' + (i + 1) + '.</div><img class="ml-3 mt-3 slackEmojies" src="./' + slackEmojiActivity[i].image + '"><div class="div-text pl-3 pt-4">' + slackEmojiActivity[i].label + '</div></div>';
    };


    var slackEmojiContributer = [
        { label: ':Inaya Hamid:', image: './images/Inaya.png' },
        { label: ':Clara Lee:', image: './images/Clara.png' },
        { label: ':Oliver Chen:', image: './images/Oliver.png' },
        { label: ':Dan Norris:', image: './images/Dan.png' },
        { label: ':Rob Seifert:', image: './images/Rob.png' }
    ];
    var container = document.getElementById("emojies-activites");
    for (var i = 0; i < slackEmojiContributer.length; i++) {
        container.innerHTML += '<div class="d-flex tab412"><div class="pl-3 pt-4">' + (i + 1) + '.</div><img class="ml-3 my-2 slackEmojiesContri" src="./' + slackEmojiContributer[i].image + '"><div class="div-text pl-3 pt-4">' + slackEmojiContributer[i].label + '</div></div>';
    };


    var mostEmojiActivity = [
        { label: 'Veitnam', image: './images/vietnam.png' },
        { label: 'Malaysia', image: './images/malaysia.png' },
        { label: 'Singapore', image: './images/singapore.png' },
        { label: 'Indonesia', image: './images/indonesia.png' },
        { label: 'Thailand', image: './images/thailand.png' }
    ];
    var container = document.getElementById("most-emojies");
    for (var i = 0; i < mostEmojiActivity.length; i++) {
        container.innerHTML += '<div class="d-flex tab412"><div class="pl-3 pt-4">' + (i + 1) + '.</div><img class="ml-3 mt-4 slackEmojies" src="./' + mostEmojiActivity[i].image + '"><div class="div-text pl-3 pt-4">' + mostEmojiActivity[i].label + '</div></div>';
    };


    var channelEmojiActivity = [
        { label: '#generalchat:', image: '' },
        { label: 'Strategy:', image: '' },
        { label: 'Creative:', image: './images/lock.png' },
        { label: '#teamvietnam:', image: './images/lock.png' },
        { label: '#crazycatpeople:', image: '' }
    ];
    var container = document.getElementById("channel-emojies");
    for (var i = 0; i < channelEmojiActivity.length; i++) {
        container.innerHTML += '<div class="d-flex tab412"><div class="pl-3 pt-4">' + (i + 1) + '.</div><div class="div-text pl-3 pt-4"> ' + channelEmojiActivity[i].label + '</div></div>';
    };


    var comparisonPreset = [
        { val: 'Number of meetings x Project Profitability' },
        { val: 'Use of Slack emojis x Revenue' },
        { val: 'Slack messages sent x Staff utilisation' },
        { val: 'Calendar meetings x Cost' },
        { val: 'Email open rate x Revenue' }
    ];
    var container = document.getElementById("presets");
    for (var i = 0; i < comparisonPreset.length; i++) {
        container.innerHTML += `
        <div class="tab411 div-text">
            <div>${comparisonPreset[i].val}</div>
        </div>`;
    };


    var slackDropDown = [
        { name: 'Use of Slack emojis', value: 'Use of Slack emojis', id: 's0' },
        { name: 'Slack chat volumes', value: 'Slack chat volumes', id: 's1' },
        { name: 'Number of Slack channels', value: 'Number of Slack channels', id: 's2' },
        { name: 'Time taken to read a new Slack messages', value: 'Time taken to read a new Slack messages', id: 's3' },
        { name: 'Total numbers of Calendar invites', value: 'Total numbers of Calendar invites', id: 's4' },
        { name: 'Total hours spent on meetings', value: 'Total hours spent on meetings', id: 's5' }
    ];
    $.each(slackDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#list");
    });


    var activityDropDown = [
        { name: '+ Add commercial activities for comparison', value: '[insert comparison]', id: 'year' },
        { name: 'Project Profitability', value: 'Project Profitability', id: 'year0' },
        { name: 'Market Profitability', value: 'Market Profitability', id: 'year1' },
        { name: 'Revenue', value: 'Revenue', id: 'year2' },
        { name: 'Cost', value: 'Cost', id: 'year3' },
        { name: 'Staff Utilisation', value: 'Staff Utilisation', id: 'year4' }
    ];
    $.each(activityDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#list2");
    });


    var departmentDropDown = [
        { name: 'Department', value: 'Department1', id: 'd1' },
        { name: 'Department2', value: 'Department2', id: 'd2' },
        { name: 'Department3', value: 'Department3', id: 'd3' },
        { name: 'Department4', value: 'Department4', id: 'd4' },
    ];
    $.each(departmentDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#department");
    });
    $.each(departmentDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#department1");
    });


    var marketDropDown = [
        { name: 'Market', value: 'Market1', id: 'm1' },
        { name: 'Market2', value: 'Market2', id: 'm2' },
        { name: 'Market3', value: 'Market3', id: 'm3' },
        { name: 'Market4', value: 'Market4', id: 'm4' },
    ];
    $.each(marketDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#market");
    });
    $.each(marketDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#market1");
    });


    var countryDropDown = [
        { name: 'Country', value: 'Country1', id: 'c1' },
        { name: 'Country2', value: 'Country2', id: 'c2' },
        { name: 'Country3', value: 'Country3', id: 'c3' },
        { name: 'Country4', value: 'Country4', id: 'c4' },
    ];
    $.each(countryDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#country");
    });
    $.each(countryDropDown, function () {
        $("<option />").attr({ "value": this.value, "id": this.id }).html(this.name).appendTo("#country1");
    });


    var calender = {
        id: "table1",
        values: [
            {
                rows: 'tHead',
                day: [{ value: " ", color: '' }, { value: "1am", color: '' }, { value: "3am", color: '' }, { value: "5am", color: '' }, { value: "7am", color: '' }, { value: "9am", color: '' }, { value: "11am", color: '' }, { value: "1am", color: '' }, { value: "3am", color: '' }, { value: "5am", color: '' }, { value: "7am", color: 'orange' }, { value: "9am", color: '' }, { value: "11am", color: '' }],
            }, {
                rows: 'trM',
                day: [{ value: "M", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trT',
                day: [{ value: "T", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trW',
                day: [{ value: "W", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'mustard' }, { value: "dot", color: 'mustard' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trThurs',
                day: [{ value: "T", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trF',
                day: [{ value: "F", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'pink' }, { value: "dot", color: 'orange' }, { value: "dot", color: 'pink' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trS',
                day: [{ value: "S", color: 'mustard' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trSun',
                day: [{ value: "S", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }
        ]
    };

    for (var i = 0; i < calender.values.length; i++) {
        var container = document.getElementById(calender.values[i].rows);
        for (var j = 0; j < calender.values[i].day.length; j++) {
            if (i == 0) {
                container.innerHTML += '<th class="px-1 tHeader">' + calender.values[i].day[j].value + '</th>';
            } else if (j == 0) {
                container.innerHTML += '<td class="firstColHead">' + calender.values[i].day[j].value + '</td>';
            } else {
                container.innerHTML += `
                <td class="bodyDots px-1">
                    <div class="d-flex justify-content-between">
                        <span class="${calender.values[i].day[j].value} ${calender.values[i].day[j].color}"></span>
                        <span class="${calender.values[i].day[j].value} ${calender.values[i].day[j].color}"></span>
                    </div>
                </td>`;
            }
        }
    };


    var calender2 = {
        id: "table2",
        values: [
            {
                rows: 'tHead1',
                day: [{ value: " ", color: '' }, { value: "1am", color: '' }, { value: "3am", color: '' }, { value: "5am", color: '' }, { value: "7am", color: '' }, { value: "9am", color: '' }, { value: "11am", color: '' }, { value: "1am", color: '' }, { value: "3am", color: '' }, { value: "5am", color: '' }, { value: "7am", color: 'orange' }, { value: "9am", color: '' }, { value: "11am", color: '' }],
            }, {
                rows: 'trM1',
                day: [{ value: "M", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trT1',
                day: [{ value: "T", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trW1',
                day: [{ value: "W", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trThurs1',
                day: [{ value: "T", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trF1',
                day: [{ value: "F", color: '' }, { value: "dot", color: 'pink' }, { value: "dot", color: 'pink' }, { value: "dot", color: 'mustard' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'mustard' }, { value: "dot", color: 'mustard' }],
            }, {
                rows: 'trS1',
                day: [{ value: "S", color: 'mustard' }, { value: "dot", color: 'mustard' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trSun1',
                day: [{ value: "S", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }
        ]
    };

    for (var i = 0; i < calender2.values.length; i++) {
        var container = document.getElementById(calender2.values[i].rows);
        for (var j = 0; j < calender2.values[i].day.length; j++) {
            if (i == 0) {
                container.innerHTML += '<th class="px-1 tHeader">' + calender2.values[i].day[j].value + '</th>';
            } else if (j == 0) {
                container.innerHTML += '<td class="firstColHead">' + calender2.values[i].day[j].value + '</td>';
            } else {
                container.innerHTML += `
                <td class="bodyDots px-1">
                    <div class="d-flex justify-content-between">
                        <span class="${calender2.values[i].day[j].value} ${calender2.values[i].day[j].color}"></span>
                        <span class="${calender2.values[i].day[j].value} ${calender2.values[i].day[j].color}"></span>
                    </div>
                </td>`;
            }
        }
    };


    var calender3 = {
        id: "table2",
        values: [
            {
                rows: 'tHead2',
                day: [{ value: " ", color: '' }, { value: "1am", color: '' }, { value: "3am", color: '' }, { value: "5am", color: '' }, { value: "7am", color: '' }, { value: "9am", color: '' }, { value: "11am", color: '' }, { value: "1am", color: '' }, { value: "3am", color: '' }, { value: "5am", color: '' }, { value: "7am", color: 'orange' }, { value: "9am", color: '' }, { value: "11am", color: '' }],
            }, {
                rows: 'trM2',
                day: [{ value: "M", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'blue' }, { value: "dot", color: 'pink' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trT2',
                day: [{ value: "T", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'blue' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trW2',
                day: [{ value: "W", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'mustard' }, { value: "dot", color: 'mustard' }, { value: "dot", color: '' }, { value: "dot", color: 'blue' }, { value: "dot", color: 'mustard' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trThurs2',
                day: [{ value: "T", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'blue' }, { value: "dot", color: 'blue' }, { value: "dot", color: '' }],
            }, {
                rows: 'trF2',
                day: [{ value: "F", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'blue' }, { value: "dot", color: 'blue' }, { value: "dot", color: 'blue' }, { value: "dot", color: 'blue' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }, {
                rows: 'trS2',
                day: [{ value: "S", color: 'mustard' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: 'orange' }, { value: "dot", color: 'orange' }],
            }, {
                rows: 'trSun2',
                day: [{ value: "S", color: '' }, { value: "dot", color: 'blue' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: 'orange' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }, { value: "dot", color: '' }],
            }
        ]
    };

    for (var i = 0; i < calender3.values.length; i++) {
        var container = document.getElementById(calender3.values[i].rows);
        for (var j = 0; j < calender3.values[i].day.length; j++) {
            if (i == 0) {
                container.innerHTML += '<th class="px-1 tHeader">' + calender3.values[i].day[j].value + '</th>';
            } else if (j == 0) {
                container.innerHTML += '<td class="firstColHead">' + calender3.values[i].day[j].value + '</td>';
            } else {
                container.innerHTML += `
                <td class="bodyDots px-1">
                    <div class="d-flex justify-content-between">
                        <span class="${calender3.values[i].day[j].value} ${calender3.values[i].day[j].color}"></span>
                        <span class="${calender3.values[i].day[j].value} ${calender3.values[i].day[j].color}"></span>
                    </div>
                </td>`;
            }
        }
    };


    var platform = {
        percentage: [
            {
                logoImage: 'gmailLogo',
                rows: [
                    { heading: '6,524', label: 'Emails sent', image: '' },
                    { heading: '500', label: 'Unread emails', image: '' },
                    { heading: '60%', label: 'Email open rate', image: '' },
                    { heading: 'Dan Norris', label: 'Replies fastest', image: 'Dan' },
                    { heading: 'Rob Seifert', label: 'Inbox overloaded', image: 'Rob' },
                ],
            }, {
                logoImage: 'slackLogo',
                rows: [
                    { heading: '25,002', label: 'Slack chats', image: '' },
                    { heading: '2,020', label: 'Emojis', image: '' },
                    { heading: '643', label: 'Direct messages', image: '' },
                    { heading: 'Clara Lee', label: 'Top Chatter', image: 'Clara' },
                    { heading: 'Vernon Khan', label: 'Has most DMs', image: 'Vernon' },
                ]
            }, {
                logoImage: 'driveLogo',
                rows: [
                    { heading: '258', label: 'Decks created', image: '' },
                    { heading: '30', label: 'Decks are not private', image: '' },
                    { heading: '15', label: 'Avg. collaborators /deck', image: '' },
                    { heading: 'Inaya Hamid', label: 'Created most decks', image: 'Inaya' },
                    { heading: 'Annie Yap', label: 'Left most comments', image: 'Annie' },
                ]
            }, {
                logoImage: 'calendarLogo',
                rows: [
                    { heading: '1,234', label: 'Hours of meetings', image: '' },
                    { heading: '5', label: 'Average meeting participant', image: '' },
                    { heading: '1hr', label: 'Average meeting duration', image: '' },
                    { heading: 'Oliver Chen', label: 'The ulimate organizer', image: 'Oliver' },
                    { heading: 'Annie Yap', label: 'Has the most meetings', image: 'Annie' },
                ]
            }
        ]
    };


    var firstRow = document.getElementById("FirstRow");
    for (var i = 0; i < platform.percentage.length; i++) {
        firstRow.innerHTML += `
        <div class="tab3x col-12 d-flex p-3">
            <div class="col-1 d-flex v-c ml-2 mt-2">
                <img class="logoImage" src="./images/${platform.percentage[i].logoImage}.png" alt="${platform.percentage[i].logoImage} logo">
            </div>
            <div class="col-2 d-block v-c">
                <h2>${platform.percentage[i].rows[0].heading}</h2>
                <h6>${platform.percentage[i].rows[0].label}</h6>
            </div>
            <div class="col-2 d-block v-c">
                <h2>${platform.percentage[i].rows[1].heading}</h2>
                <h6>${platform.percentage[i].rows[1].label}</h6>
            </div>
            <div class="col-2 d-block v-c">
                <h2>${platform.percentage[i].rows[2].heading}</h2>
                <h6>${platform.percentage[i].rows[2].label}</h6>
            </div>
            <div class="col-2 d-flex v-c">
                <div>
                    <img src="./images/${platform.percentage[i].rows[3].image}.png" alt="${platform.percentage[i].rows[3].image}" class="avatar">
                </div>
                <div class="d-block pl-4 body1">
                    <h5>${platform.percentage[i].rows[3].heading}</h5>
                    <h6 class="f-s">${platform.percentage[i].rows[3].label}</h6>
                </div>
            </div>
            <div class="col-3 d-flex v-c">
                <div>
                    <img src="./images/${platform.percentage[i].rows[4].image}.png" alt="${platform.percentage[i].rows[3].image}" class="avatar">
                </div>
                <div class="d-block pl-4 body1">
                    <h5>${platform.percentage[i].rows[3].heading}</h5>
                    <h6 class="f-s">${platform.percentage[i].rows[3].label}</h6>
                </div>
            </div>
        </div> `;
    }


    $("#list").change(function () {
        var status = this.value;
        $("#slack_dropdown").text(status);
    }),

        $("#list2").change(function () {
            if (this.value == '[insert comparison]') {
                $("#commercial_activites").css({ "background-color": "#bebdbb", "color": "#ffffff" });
                $('#list2').css({ "font-style": "italic", "font-weight": "normal" })
            } else {
                $("#commercial_activites").css({ "background-color": "#00a1e4", "color": "#ffffff" });
                $('#list2').css({ "font-style": "normal", "font-weight": "bold" })
            }
            var status = this.value;
            $("#commercial_activites").text(status);
        }),

        chartBench = new Highcharts.Chart({
            chart: {
                renderTo: 'containerYo',
                type: 'line',
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            legend: {},
            plotOptions: {
                series: {
                    shadow: false,
                    borderWidth: 0
                }
            },
            xAxis: {
                lineColor: '#999',
                lineWidth: 0,
                tickColor: '#666',
                tickLength: 3,
                gridLineWidth: 1,
                gridLineColor: '#ddd',
                categories: ['SEP 2019', 'OCT 2019', 'NOV 2019', 'DEC 2019'],
                title: {
                    text: 'Years'
                }
            },
            yAxis: {
                lineColor: '#999',
                lineWidth: 0,
                visible: false,
                tickColor: '#666',
                tickWidth: 0,
                tickLength: 0,
                gridLineWidth: 0,
                title: {
                    text: ''
                }
            },
            series: [{
                "name": "",
                "data": [110, 100, 120, 130]
            }, {
                "name": "",
                "data": [100, 90, 110, 120],
                color: '#E91E63'
            }]
        });
});

var option_a_data = [{
    "name": "",
    "data": [10, 20, 30, 40]
}, {
    "name": "",
    "data": [50, 60, 70, 80]
}];

var option_b_data = [{
    "name": "",
    "data": [110, 100, 90, 80]
}, {
    "name": "",
    "data": [110, 100, 90, 80]
}];

$("#list").on('change', function () {

    var selVal = $("#list").val();

    if (selVal == "Slack chat volumes") {

        for (i = 0; i < chartBench.series.length; i++) {

            chartBench.series[i].update({
                name: option_a_data[i].name,
                data: option_a_data[i].data
            });
        }

        chartBench.redraw();
    }
    else if (selVal == "Number of Slack channels") {
        for (i = 0; i < chartBench.series.length; i++) {

            chartBench.series[i].update({
                name: option_b_data[i].name,
                data: option_b_data[i].data
            });
        }
        chartBench.redraw();
    }
    else {
    }
});


var option_1_data = [{
    "name": "",
    "data": [10, 20, 30, 40]
}, {
    "name": "",
    "data": [50, 60, 70, 80]
}];

var option_2_data = [{
    "name": "",
    "data": [110, 100, 90, 100]
}, {
    "name": "",
    "data": [20, 100, 90, 120]
}];

$("#list2").on('change', function () {
    var selVal = $("#list2").val();
    if (selVal == "Project Profitability") {
        for (i = 0; i < chartBench.series.length; i++) {
            chartBench.series[i].update({
                name: option_1_data[i].name,
                data: option_1_data[i].data
            });
        }
        chartBench.redraw();
    }
    else if (selVal == "Market Profitability") {
        for (i = 0; i < chartBench.series.length; i++) {

            chartBench.series[i].update({
                name: option_2_data[i].name,
                data: option_2_data[i].data
            });
        }
        chartBench.redraw();
    }
    else {
    }
});