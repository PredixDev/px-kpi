/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This is the wrapper for custom tests, called upon web components ready state

suite('Testing of the main kpi component', done => {
  let kpi;
  setup(done => {
    kpi = fixture('px_kpi_1');
    flush(() => done());
  });

  test('KPI is created', function() {
    assert.isTrue(kpi !== undefined);
  });
  test('KPI key is displayed', function() {
    let key = Polymer.dom(kpi.root).querySelector('span').textContent;
    assert.equal(key, 'Test');
  });
  test('Status icon is displayed correctly', function() {
    let icon = Polymer.dom(kpi.root).querySelector('#statusIcon');
    assert.isTrue(icon !== undefined);
    assert.equal(icon.style.color, 'green');
  });
});

suite('Testing of the spark component', function() {
  let kpi;
  setup(done => {
    kpi = fixture('px_kpi_1');
    flush(() => done());
  });

  test('Spark is created', function() {
    let spark = Polymer.dom(kpi.root).querySelector('px-vis-spark');
    assert.isTrue(spark !== undefined);
  });

  test('Spark chart is proper size', done => {
    let spark = Polymer.dom(kpi.root).querySelector('px-vis-spark'),
        width = window.getComputedStyle(spark).width;

    flush(function(){
      assert.equal(width, 'auto');
      done();
    });
  });
});
