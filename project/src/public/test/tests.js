const { test: qtest } = QUnit;

QUnit.module( "Group A" );

qtest('App', assert => {
    assert.false(App == undefined, 'App undefined');
}
);

qtest('ImageOfDay', assert => {
    const output = ImageOfTheDay(apod);
});
