// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {

  suite('Testing of the main kpi component', function() {
    test('KPI is created', function() {
      var kpi = document.querySelector('px-kpi');
      assert.isTrue(kpi !== undefined);
    });
    test('KPI title is displayed', function() {
      var kpi = document.querySelector('px-kpi'),
          title = kpi.querySelector('h3').textContent;
      assert.equal(title, 'Test');
    });
    test('Status icon is displayed correctly', function() {
      var kpi = document.querySelector('px-kpi'),
          icon = kpi.querySelector('#statusIcon');
      assert.isTrue(icon !== undefined);
      assert.equal(icon.style.color, 'green');
    });
  });

  suite('Testing of the spark component', function() {
    test('Spark is created', function() {
      var spark = document.querySelector('px-vis-spark');
      assert.isTrue(spark !== undefined);
    });
    test('Spark chart is proper size', function() {
      var chart = document.querySelector('px-simple-win-loss-chart'),
          width = window.getComputedStyle(chart).width;
      assert.equal(width, '300px');
    });
  });
};
