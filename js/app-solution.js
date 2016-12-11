
$(function () { 
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Medicaid Coverage'
        },
        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'People Covered by Medicaid'
            },
            tickInterval: 5000
        },
        series: [{
            name: 'Asian',
            data: [2022,2277, 2199 , 2509, 3134, 2869]
        }, {
            name: 'Black',
            data: [10929, 11033, 11078, 12241, 12688, 12511]

        },{ 
            name:'Hispanic',
            data: [13320,14437,14591,15791,17647,18779]

        },{ name: 'White',
            data: [32487,34302,34279,36141, 42034,42962]


       }]
    });
});



$(function () { 
    var myChart = Highcharts.chart('container2', {
        chart: {

            type: 'bar'
        },

        title: {
            text: 'Medicaid Coverage'
        },
        xAxis: {
            categories: ['Asian', 'Black', 'Hispanic', 'White']
        },
        yAxis: {
            title: {
                text: 'People Covered by Medicaid'
            },
            tickInterval: 5
        },
        series: [{
            name: 'Asian',
            data: [0, 41]
        }, {
            name: 'Black',
            data: [0, 14]

        },{ 
            name:'Hispanic',
            data: [0,41]

        },{ name: 'White',
            data: [0,32]


       }]
    });
});


