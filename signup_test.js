Feature('sign up');

Scenario('test sign up',  ({ I }) => {
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/');
    I.click('SIGNUP');
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/signup');
        I.fillField('Nombre','lautaro');
        I.fillField('Apellido','saenz');
        I.fillField('Email','lautarosaenz@hotmail.com');
        I.fillField('Nombre de usuario','lautarosaenz');
        I.fillField('Contraseña','hola123');
    I.click('Sign Up');
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/');
});