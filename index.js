var flatten = require('geojson-flatten');
var featurecollection = require('turf-featurecollection');

/**
 * flattens any {@link GeoJSON} to a {@link FeatureCollection} using [geojson-flatten](https://github.com/mapbox/geojson-flatten).
 *
 * @module turf/flatten
 * @category misc
 * @param {geojson} input any valid {@link GeoJSON} with multi-geometry {@link Feature}s
 * @return {flattened} a flattened {@link FeatureCollection}
 * @example
 * var geometry = {
 *   "type": "MultiPolygon",
 *   "coordinates": [
 *     [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
 *      [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
 *      [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
 *    ]
 *  };
 *
 * var flattened = turf.flatten(geometry);
 *
 * {
 *    "type": "FeatureCollection",
 *    "features": [{
 *        "type": "Polygon",
 *        "coordinates": [
 *            [
 *                [102, 2],
 *                [103, 2],
 *                [103, 3],
 *                [102, 3],
 *                [102, 2]
 *            ]
 *        ]
 *    }, {
 *        "type": "Polygon",
 *        "coordinates": [
 *            [
 *                [100, 0],
 *                [101, 0],
 *                [101, 1],
 *                [100, 1],
 *                [100, 0]
 *            ],
 *            [
 *                [100.2, 0.2],
 *                [100.8, 0.2],
 *                [100.8, 0.8],
 *                [100.2, 0.8],
 *                [100.2, 0.2]
 *            ]
 *        ]
 *    }]
 * };
 */

module.exports = function(geojson) {
    var flattened = flatten(geojson);
    if (flattened.type === 'FeatureCollection') return flattened;
    else return featurecollection(flatten(geojson));
};