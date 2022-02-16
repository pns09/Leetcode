// Implement the HitCounter class:

// HitCounter() Initializes the object of the hit counter system.
// void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
// int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., the past 300 seconds).

class HitCounter {
    constructor() {
        this.counter = [];
        this.index = 0;
    }
    /**
     * @param {number} timestamp
     * @return {void}
     */
    hit(timestamp) {
        // use array to push timestamps cause array push has time complexity - O(1)
        this.counter.push(timestamp);
        this.index++;
    }
    /**
     * @param {number} timestamp
     * @return {number}
     */
    getHits(timestamp) {
        // Binary search - O(logN)
        let target = timestamp - 300 + 1;
        let start = 0;
        let end = this.index - 1;

        if (this.index > 0 && this.counter[0] >= target) {
            return this.index;
        }

        if (this.index > 0 && this.counter[this.index - 1] < target) {
            return 0;
        }

        while (start < end) {
            let mid = start + Math.floor(end - start) / 2;
            let midVal = this.counter[mid];
            if (target < midVal) {
                end = mid;
            } else if (target > midVal) {
                start = mid + 1;
            } else {
                start = mid;
                break;
            }
        }
        return this.index - start;
    }
}



/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
