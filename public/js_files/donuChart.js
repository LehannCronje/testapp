var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var config1 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};


// document.getElementById('randomizeData2').addEventListener('click', function() {
//     config1.data.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });
//     });

//     window.myDoughnut.update();
// });

// var colorNames = Object.keys(window.chartColors);
// document.getElementById('addDataset2').addEventListener('click', function() {
//     var newDataset = {
//         backgroundColor: [],
//         data: [],
//         label: 'New dataset ' + config1.data.datasets.length,
//     };

//     for (var index = 0; index < config1.data.labels.length; ++index) {
//         newDataset.data.push(randomScalingFactor());

//         var colorName = colorNames[index % colorNames.length];
//         var newColor = window.chartColors[colorName];
//         newDataset.backgroundColor.push(newColor);
//     }

//     config1.data.datasets.push(newDataset);
//     window.myDoughnut.update();
// });

// document.getElementById('addData2').addEventListener('click', function() {
//     if (config1.data.datasets.length > 0) {
//         config1.data.labels.push('data #' + config1.data.labels.length);

//         var colorName = colorNames[config1.data.datasets[0].data.length % colorNames.length];
//         var newColor = window.chartColors[colorName];

//         config1.data.datasets.forEach(function(dataset) {
//             dataset.data.push(randomScalingFactor());
//             dataset.backgroundColor.push(newColor);
//         });

//         window.myDoughnut.update();
//     }
// });

// document.getElementById('removeDataset2').addEventListener('click', function() {
//     config1.data.datasets.splice(0, 1);
//     window.myDoughnut.update();
// });

// document.getElementById('removeData2').addEventListener('click', function() {
//     config1.data.labels.splice(-1, 1); // remove the label first

//     config1.data.datasets.forEach(function(dataset) {
//         dataset.data.pop();
//         dataset.backgroundColor.pop();
//     });

//     window.myDoughnut.update();
// });

// document.getElementById('changeCircleSize2').addEventListener('click', function() {
//     if (window.myDoughnut.options.circumference === Math.PI) {
//         window.myDoughnut.options.circumference = 2 * Math.PI;
//         window.myDoughnut.options.rotation = -Math.PI / 2;
//     } else {
//         window.myDoughnut.options.circumference = Math.PI;
//         window.myDoughnut.options.rotation = -Math.PI;
//     }

//     window.myDoughnut.update();
// });

function loadDonutChart(){
    var ctx = document.getElementById('canvas2').getContext('2d');
    window.myDoughnut = new Chart(ctx, config1);
}