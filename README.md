# turf-flatten

[![build status](https://secure.travis-ci.org/Turfjs/turf-flatten.png)](http://travis-ci.org/Turfjs/turf-flatten)

[Turf](http://turfjs.org/) flatten module


### `turf.flatten(input)`

flattens any GeoJSON to a FeatureCollection using [geojson-flatten](https://github.com/mapbox/geojson-flatten).


### Parameters

| parameter | type    | description                                    |
| --------- | ------- | ---------------------------------------------- |
| `input`   | geojson | any valid GeoJSON with multi-geometry Features |


### Example

```js
var geometry = { 
  "type": "MultiPolygon",
  "coordinates": [
    [[[102.0, 2.0], [103.0, 2.0], [103.0, 3.0], [102.0, 3.0], [102.0, 2.0]]],
     [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0]],
     [[100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2]]]
   ]
 };

var flattened = turf.flatten(geometry);

//=flattened
```


**Returns** `flattened`, a flattened FeatureCollection

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-flatten
```

## Tests

```sh
$ npm test
```


