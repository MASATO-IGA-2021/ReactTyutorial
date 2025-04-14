import ('./app.js').then(app => {
    console.log(app.getRectango(5,5));

    const a = new app.Article();
    console.log(a.getAppTitle());
})