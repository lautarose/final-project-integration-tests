Feature('login');

Scenario('test login',  ({ I }) => {
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/');
    I.click('LOGIN');
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/login');
        I.fillField('Username','lautarose');
        I.fillField('Password','hola12345');
    I.click('Login');
    I.amOnPage('https://project-frontend-ycwl2yaekq-rj.a.run.app/');
});
