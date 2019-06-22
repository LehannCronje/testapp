// var randomScalingFactor = function() {
//     return Math.round(Math.random() * 100);
// };

// var config3 = {
//     type: 'pie',
//     data: {
//         datasets: [{
//             data: [
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//                 randomScalingFactor(),
//             ],
//             backgroundColor: [
//                 window.chartColors.red,
//                 window.chartColors.orange,
//                 window.chartColors.yellow,
//                 window.chartColors.green,
//                 window.chartColors.blue,
//             ],
//             label: 'Dataset 1'
//         }],
//         labels: [
//             'Red',
//             'Orange',
//             'Yellow',
//             'Green',
//             'Blue'
//         ]
//     },
//     options: {
//         responsive: true
//     }
// };


// document.getElementById('randomizeData3').addEventListener('click', function() {
//     config3.data.datasets.forEach(function(dataset) {
//         dataset.data = dataset.data.map(function() {
//             return randomScalingFactor();
//         });
//     });

//     window.myPie.update();
// });

// var colorNames = Object.keys(window.chartColors);
// document.getElementById('addDataset3').addEventListener('click', function() {
//     var newDataset = {
//         backgroundColor: [],
//         data: [],
//         label: 'New dataset ' + config3.data.datasets.length,
//     };

//     for (var index = 0; index < config3.data.labels.length; ++index) {
//         newDataset.data.push(randomScalingFactor());

//         var colorName = colorNames[index % colorNames.length];
//         var newColor = window.chartColors[colorName];
//         newDataset.backgroundColor.push(newColor);
//     }

//     config3.data.datasets.push(newDataset);
//     window.myPie.update();
// });

// document.getElementById('removeDataset3').addEventListener('click', function() {
//     config3.data.datasets.splice(0, 1);
//     window.myPie.update();
// });

// function loadPieChart(){
//     var ctx = document.getElementById('chart-area').getContext('2d');
//     window.myPie = new Chart(ctx, config3);
// }