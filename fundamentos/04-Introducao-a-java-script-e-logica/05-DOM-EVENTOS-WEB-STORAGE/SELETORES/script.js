const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const selection = document.getElementsByClassName("emergency-tasks")[0];
selection.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}
