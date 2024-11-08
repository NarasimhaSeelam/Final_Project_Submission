document.addEventListener("DOMContentLoaded", () => {
    // Initialize Materialize components
    M.AutoInit();

    // Initialize ScrollSpy
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {
        scrollOffset: 50
    });

    // Workout form submission
    document.getElementById('workout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addWorkout();
    });

    // Diet form submission
    document.getElementById('diet-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addMeal();
    });

    // Metrics form submission
    document.getElementById('metrics-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addMetric();
    });

    // Goals form submission
    document.getElementById('goals-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addGoal();
    });
});

function addWorkout() {
    const type = document.getElementById('workout-type').value;
    const duration = document.getElementById('duration').value;
    const workoutList = document.getElementById('workout-list');

    const workoutItem = document.createElement('div');
    workoutItem.textContent = `${type}: ${duration} minutes`;
    workoutList.appendChild(workoutItem);

    document.getElementById('workout-form').reset();
    M.updateTextFields();
}

function addMeal() {
    const meal = document.getElementById('meal').value;
    const calories = document.getElementById('calories').value;
    const dietList = document.getElementById('diet-list');

    const mealItem = document.createElement('div');
    mealItem.textContent = `${meal}: ${calories} calories`;
    dietList.appendChild(mealItem);

    document.getElementById('diet-form').reset();
    M.updateTextFields();
}

function addMetric() {
    const weight = document.getElementById('weight').value;
    const heartRate = document.getElementById('heart-rate').value;
    const metricsList = document.getElementById('metrics-list');

    const metricItem = document.createElement('div');
    metricItem.textContent = `Weight: ${weight} kg, Heart Rate: ${heartRate} bpm`;
    metricsList.appendChild(metricItem);

    document.getElementById('metrics-form').reset();
    M.updateTextFields();
}

function addGoal() {
    const goal = document.getElementById('goal').value;
    const goalsList = document.getElementById('goals-list');

    const goalItem = document.createElement('div');
    goalItem.textContent = goal;
    goalsList.appendChild(goalItem);

    document.getElementById('goals-form').reset();
    M.updateTextFields();
}
