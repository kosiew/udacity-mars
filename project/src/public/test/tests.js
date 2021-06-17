const { test: qtest } = QUnit;

QUnit.module( "Group A" );

qtest('App', assert => {
    assert.false(App == undefined, 'App undefined');
}
);

qtest('test api', assert => {
    function getApiData() {
        const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-6-1&api_key=eRafRpcw5LGMust4pIe03eg1sRZMfi1eTw9kAIC1';
        const image = fetch(url)
            .then(res => res.json());
        return image
    }

    const expectedKeys = ['photos'];

    return getApiData().then( result => {
        const keys = Object.keys(result);
        assert.deepEqual(keys, expectedKeys, 'retrieved image');

        const photoKeys = Object.keys(result.photos);
        assert.true(photoKeys.length > 0, 'retrieved photokeys');

        const firstPhoto = result.photos[0];
        const firstPhotoKeys = Object.keys(firstPhoto);
        const expectedPhotoKeys = [
            "id",
            "sol",
            "camera",
            "img_src",
            "earth_date",
            "rover"
          ];
        assert.deepEqual(firstPhotoKeys, expectedPhotoKeys, 'retrieved firstPhotokeys');

    }
    );
}
);
