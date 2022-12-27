# Random NFT Generation

For a given overall score interval, generate a specific amount of combination, with no duplicates.

## Requirements
- lodash
- ts-node
- typescript

Run the following comand to install all dpeendencies:

```console
yarn install
```
## Example
```console
yarn start
``` 
This command will run the algorithm with an example.

For example, if running the algorithm to get 5 combination with an overall score between 3 and 5 may return something as follow:
```javascript
getCombinationForOverallScore( LAYERS, 5, 3, 5 );

// output example:
//  [
//      [ 1, 1, 8, 9 ],
//      [ 3, 5, 5, 8 ],
//      [ 9, 6, 7, 5 ],
//      [ 7, 5, 8, 1 ],
//      [ 8, 6, 3, 5 ]
//  ]
```

## Generate combination

```javascript
const combination = await getCombinationForOverallScore(
    LAYERS, // the list of layers
    100,    // number of combination wanted
    0,      // minimal score for the combination
    2,      // maximal score for the combination
)
```

## The Algorithm

## Input parameters
The function requires 4 inputs: the list of layers, numer of comination requested, the minimal score and maximal score.

Here is how the list of layer may look like:
```javascript
const LAYERS = [
    [
        {
            id: 1,
            name: `image-name`,
            image: `https://link-to-image`,
            score: 2,
            scoreLabel: "epic",
        },
        ...
    ], // one list per layer
    ...
]
```

## Flow details

1. The algorithm will first generate all the possible score combination on each layer that may lead to an overall score in the scope defined with the input parameters.

2. From this list of possibilities, we will establish all the possibilities of image comination on each layer

3. Then the algorithm randomly chose among these possibilities

> Note that the algorithm will throw an error if it cannot find enough combination or if the minimal and maximal score are not set-up correctly.

