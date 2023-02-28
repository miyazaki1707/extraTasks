export function sum(...nums) {
    let result = BigInt(0);
    for(let item of nums) {
        result += BigInt(item);
    }
    return result.toString().slice(0, result.length);
}

export function subtraction(...nums) {
    let result = BigInt (nums[0]);
    for(let i = 1; i < nums.length; i++) {
        result -= BigInt(nums[i]);
    }

    return result.toString().slice(0, result.length);
}

export function multiply(...nums) {
    let result = BigInt(1);
    for(let item of nums) {
        result *= BigInt(item);
    }
    return result.toString().slice(0, result.length);
}

export function division(...nums) {
    let result = BigInt (nums[0]);
    for(let i = 1; i < nums.length; i++) {
        result /= BigInt(nums[i]);
    }
    return result.toString().slice(0, result.length);
}
