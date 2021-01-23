"use strict";

let performance;

// Check if performance exists on global
// Otherwise, in node (or potentially older browsers), we decide to fall back to Date.now()
if (global.performance) {
    performance = window.performance;
} else {
    performance = {
        now() {
            return Date.now();
        }
    };
}

export default performance;