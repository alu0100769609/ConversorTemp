var assert = chai.assert;

suite('Temperatura', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0C");
    });
    test('45C = 113F', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0F");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /Try something like '-4.2C'/);
    });
});
