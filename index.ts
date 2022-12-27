import _ from "lodash";
import { LayerImage, LAYERS } from "./constants";

function cartesian(args: any[][]) {
  // Helper function to generate permutations from array of array
  //
  // cartesion([[0,1,3,4], [0,1], [0], [0,1]])
  //
  // out: [[0,0,0,0], [0,0,0,1], [0,1,0,0], [0,1,0,1], [1,0,0,0], [1,0,0,1], [1,1,0,0], [1,1,0,1], ...]
  //
  var r: any[] = [],
    max = args.length - 1;

  function helper(arr: any[], i: number) {
    for (var j = 0, l = args[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  }

  helper([], 0);
  return r;
}

async function getCombinationForOverallScore(
  listOfLayers: LayerImage[][],
  combinationAmount: number,
  targetScoreMin: number,
  targetScoreMax: number
) {
  async function getCombinations(candidates: number[][]) {
    // given a list of potential scores per layer, return the combination of scores that would lead to the target score
    //
    // For 2 layers:
    //   target = 4
    //   res = [ [ 1, 3 ], [ 3, 1 ], [ 2, 2 ] ]
    //
    const res: number[][] = [];

    async function fn(array: number[], start: number) {
      const sum = array.reduce((partialSum, num) => partialSum + num, 0);

      if (
        targetScoreMin <= sum &&
        sum <= targetScoreMax &&
        array.length === candidates.length // make sure there are the right amount of layer
      ) {
        res.push([...array]);
        return;
      }

      if (sum > targetScoreMax) {
        return;
      }

      if (start >= candidates.length) {
        return;
      }

      for (let i = 0; i < candidates[start].length; i++) {
        array.push(candidates[start][i]);
        await fn(array, start + 1);
        array.pop();
      }
    }

    await fn([], 0);
    return res;
  }

  // throw error if misconfigured in the call
  if (targetScoreMin > targetScoreMax) {
    throw Error("targetScoreMin > targetScoreMax");
  }

  // get a list of potential score per layer
  //
  // scoreListPlayer = [ [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ], [ 0, 1, 2, 3 ] ]
  //
  const scoreListPerLayer = listOfLayers.map((layer) =>
    _.uniqWith(
      layer.map((element) => element.score),
      _.isEqual
    )
  );

  const allCombinations = await getCombinations(scoreListPerLayer);
  console.log(allCombinations);

  // check if it is possible to find enough combination
  const possibilities: number[][] = [];
  for (let combination of allCombinations) {
    // get all the possibilities for the combination and add them to the lsit of possibilities (flat array)
    const temp = [];

    for (let layerIndex = 0; layerIndex < combination.length; layerIndex++) {
      // find all possibilities of images corresponding to the score
      const layerIdPossibilities = listOfLayers[layerIndex]
        .filter((value) => value.score === combination[layerIndex])
        .map((element) => element.id);

      temp.push([...layerIdPossibilities]);
    }

    possibilities.push(...cartesian(temp)); //
  }

  if (possibilities.length < combinationAmount) {
    throw Error("cannot create enough combination");
  }

  const result: number[][] = [];
  for (let i = 0; i < combinationAmount; i++) {
    const combinationChosen =
      possibilities[Math.floor(Math.random() * possibilities.length)];

    possibilities.splice(_.indexOf(possibilities, combinationChosen), 1);
    result.push([...combinationChosen]);
  }

  return result;
}

const combinationAmount = 5;
const minOverallScore = 3;
const maxOverallScore = 5;

getCombinationForOverallScore(
  LAYERS,
  combinationAmount,
  minOverallScore,
  maxOverallScore
)
  .then((result) => {
    console.log(
      `Chosing ${combinationAmount} combination of score between ${minOverallScore} and ${maxOverallScore}`
    );
    console.log(result);
  })
  .catch((error) => console.error(error));
