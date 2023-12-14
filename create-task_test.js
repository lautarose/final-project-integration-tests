Feature('create-task_test.js');

Scenario('test create task',  ({ I }) => {
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/');
    I.click('LOGIN');
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/login');
        I.fillField('Username','lautarose');
        I.fillField('Password','hola12345');
    I.click('Login');
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/');
    I.click('Nueva Tarea');
        I.fillField('Título','Creando tarea nueva');
        I.fillField('Descripción','Esta es una nueva tarea');
    I.click('Crear');
});
