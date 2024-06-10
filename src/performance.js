"use strict";

// Check if performance exists on global
// Otherwise, in node (or potentially older browsers), we decide to fall back to Date.now()
const performance = window.performance ? window.performance : {
    now() {
        return Date.now();
    }
};

export default performance;