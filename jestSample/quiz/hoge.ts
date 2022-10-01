const slice = (array: number[], start: number = 0, end: number = Array.length): number[] => {
    const slicedArray = [];
    for(let i = start; i < end; i++){
        slicedArray.push(array[i]);
    }

    return slicedArray;
};

